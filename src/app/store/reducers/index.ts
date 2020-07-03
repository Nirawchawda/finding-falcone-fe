import * as fromPlanet from './planets.reducer';
import * as fromVehicle from './vehicles.reducer';
import * as fromFalconeFound from './falcone-found.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface FindFalconeState{
    planets : fromPlanet.PlanetState;
    vehicles : fromVehicle.VehicleState;
    falconeFound : fromFalconeFound.FalconeFoundstate
}

export const reducers : ActionReducerMap<FindFalconeState> = {
    planets : fromPlanet.PlanetsReducer,
    vehicles : fromVehicle.VehiclesReducer,
    falconeFound : fromFalconeFound.FalconeFoundReducer
}

export const getFindFalconeState = createFeatureSelector<FindFalconeState>('findFalcone');

/* Planet State */
    export const getPlanetState = createSelector(getFindFalconeState,(state : FindFalconeState) => state.planets)

    // operations
    export const getAllPlanets = createSelector(getPlanetState,fromPlanet.getPlanets);
    export const getPlanetsLoading = createSelector(getPlanetState,fromPlanet.getPlanetsLoading);
    export const getPlanetsLoaded = createSelector(getPlanetState,fromPlanet.getPlanetsLoaded);
/* End State */

/* Vehicle State */
    export const getVehicleState = createSelector(getFindFalconeState,(state : FindFalconeState) => state.vehicles)

    //operations
    export const getAllVehicles = createSelector(getVehicleState,fromVehicle.getVehicles);
    export const getVehiclesLoading = createSelector(getVehicleState,fromVehicle.getVehiclesLoading);
    export const getVehiclesLoaded = createSelector(getVehicleState,fromVehicle.getVehiclesLoaded);
/* End State */

/* FalconeFound State */
export const getFalconeFoundState = createSelector(getFindFalconeState,(state : FindFalconeState) => state.falconeFound)

// operations
export const getAllFalconeFounds = createSelector(getFalconeFoundState,fromFalconeFound.getFalconeFound);
export const getFalconeFoundsLoading = createSelector(getFalconeFoundState,fromFalconeFound.getFalconeFoundLoading);
export const getFalconeFoundsLoaded = createSelector(getFalconeFoundState,fromFalconeFound.getFalconeFoundLoaded);
export const getFalconeFoundTime = createSelector(getFalconeFoundState,fromFalconeFound.getFalconeFoundTime);
export const getFalconeFoundPlanet = createSelector(getFalconeFoundState,fromFalconeFound.getFalconeFoundPlanet);
export const getFalconeFoundToken = createSelector(getFalconeFoundState,fromFalconeFound.getFalconeFoundToken);
export const isAllDestinationsSelected = createSelector(getFalconeFoundState,fromFalconeFound.isAllDestinationsSelected);
/* End State */
