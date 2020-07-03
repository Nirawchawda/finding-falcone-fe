import {Injectable} from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as planetActions from './../actions/planets.action';
import { PlanetsService } from 'src/app/services/planets.service';

@Injectable()
export class PlanetsEffects{
    loadPlanets$ = createEffect(() => this.actions$.pipe(
        ofType(planetActions.PlanetsActionTypes.Loading),
        mergeMap(() => this.planetService.getPlanets()
          .pipe(
            map(planets => ({ type: planetActions.PlanetsActionTypes.Loaded, payload: planets })),
            catchError(() => EMPTY)
            // catchError(error => of({ type: planetActions.PlanetsActionTypes.Failed, payload: error }))
          ))
        )
      );

    resetPlanets$ = createEffect(() => this.actions$.pipe(
        ofType(planetActions.PlanetsActionTypes.Reset),
        mergeMap(() => this.planetService.getPlanets()
          .pipe(
            map(planets => ({ type: planetActions.PlanetsActionTypes.Loaded, payload: planets })),
            catchError(() => EMPTY)
            // catchError(error => of({ type: planetActions.PlanetsActionTypes.Failed, payload: error }))
          ))
        )
      );
    constructor(private actions$: Actions, private planetService:PlanetsService){ }
}