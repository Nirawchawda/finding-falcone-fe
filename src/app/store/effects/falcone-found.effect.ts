import {Injectable} from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as falconeFoundActions from './../actions/falcone-found.action';
import { FalconeFoundService } from 'src/app/services/falcone-found.service';

@Injectable()
export class FalconeFoundEffects{
    // loadFalconeFoundToken$ = createEffect(() => this.actions$.pipe(
    //     ofType(falconeFoundActions.FalconeFoundActionTypes.Token),
    //     mergeMap(() => this.falconeFoundService.getPlanets()
    //       .pipe(
    //         map(token => ({ type: falconeFoundActions.FalconeFoundActionTypes.Token, payload: token })),
    //         // catchError(() => EMPTY)
    //         // catchError(error => of({ type: planetActions.PlanetsActionTypes.Failed, payload: error }))
    //         catchError(error => of({ type: falconeFoundActions.FalconeFoundActionTypes.Token, payload: error }))
    //       ))
    //     )
    //   );
    loadFalconeFoundToken$ = createEffect(() => this.actions$.pipe(
      ofType(falconeFoundActions.FalconeFoundActionTypes.Token),
      mergeMap((a) => this.falconeFoundService.getToken(a)
        .pipe(
          map(token => ({ type: falconeFoundActions.FalconeFoundActionTypes.TokenLoaded, payload: token })),
          catchError(() => EMPTY)
          // catchError(error => of({ type: planetActions.PlanetsActionTypes.Failed, payload: error }))
        ))
      )
    );

    loadFalconeFoundStatus$ = createEffect(() => this.actions$.pipe(
      ofType(falconeFoundActions.FalconeFoundActionTypes.GetStatus),
      mergeMap((arg) => this.falconeFoundService.findFalcone(arg)
        .pipe(
          map(status => ({ type: falconeFoundActions.FalconeFoundActionTypes.StatusLoaded, payload: status })),
          catchError(() => EMPTY)
          // catchError(error => of({ type: planetActions.PlanetsActionTypes.Failed, payload: error }))
        ))
      )
    );
    constructor(private actions$: Actions, private falconeFoundService:FalconeFoundService){ }
}