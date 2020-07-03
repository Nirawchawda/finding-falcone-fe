import {Actions} from './index';
import {Planet} from '../../../app/models/planet.model';

export enum PlanetsActionTypes {
  Loading = '[Planets Component] Loading',
  Loaded = '[Planets Component] Loaded',
  Set = '[Planets Component] Set',
  Reset = '[Planets Component] Reset'
}

export class PlanetsLoading implements Actions {
  readonly type = PlanetsActionTypes.Loading;
  constructor(public payload: Planet) {
  }
}

export class PlanetsLoaded implements Actions {
  readonly type = PlanetsActionTypes.Loaded;
  constructor(public payload: Planet) {
  }
}

export class PlanetsSet implements Actions {
  readonly type = PlanetsActionTypes.Set;
  constructor(public payload: any) {
  }
}

export class PlanetsReset implements Actions {
  readonly type = PlanetsActionTypes.Reset;
  constructor(public payload: any) {
  }
}