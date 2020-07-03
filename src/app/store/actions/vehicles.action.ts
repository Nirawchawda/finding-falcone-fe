import {Actions} from './index';
import {Vehicle} from '../../../app/models/vehicle.model';

export enum VehiclesActionTypes {
  Loading = '[Vehicles Component] Loading',
  Loaded = '[Vehicles Component] Loaded',
  Set = '[Vehicles Component] Set',
  Reset = '[Vehicles Component] Reset'
}

export class VehiclesLoading implements Actions {
  readonly type = VehiclesActionTypes.Loading;
  constructor(public payload: Vehicle) {
  }
}

export class VehiclesLoaded implements Actions {
  readonly type = VehiclesActionTypes.Loaded;
  constructor(public payload: Vehicle) {
  }
}

export class VehiclesSet implements Actions {
  readonly type = VehiclesActionTypes.Set;
  constructor(public payload: any) {
  }
}

export class VehiclesReset implements Actions {
  readonly type = VehiclesActionTypes.Reset;
  constructor(public payload: any) {
  }
}