import {Injectable} from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as vehicleActions from './../actions/vehicles.action';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Injectable()
export class VehiclesEffects{
    loadVehicles$ = createEffect(() => this.actions$.pipe(
        ofType(vehicleActions.VehiclesActionTypes.Loading),
        mergeMap(() => this.VehicleService.getVehicles()
          .pipe(
            map(vehicles => ({ type: vehicleActions.VehiclesActionTypes.Loaded, payload: vehicles })),
            catchError(() => EMPTY)
            // catchError(error => of({ type: VehicleActions.VehiclesActionTypes.Failed, payload: error }))
          ))
        )
      );
    
    resetVehicles$ = createEffect(() => this.actions$.pipe(
        ofType(vehicleActions.VehiclesActionTypes.Reset),
        mergeMap(() => this.VehicleService.getVehicles()
          .pipe(
            map(vehicles => ({ type: vehicleActions.VehiclesActionTypes.Loaded, payload: vehicles })),
            catchError(() => EMPTY)
            // catchError(error => of({ type: VehicleActions.VehiclesActionTypes.Failed, payload: error }))
          ))
        )
      );
    constructor(private actions$: Actions, private VehicleService:VehiclesService){ }
}