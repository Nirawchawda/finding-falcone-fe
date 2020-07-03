import {Actions} from './index';
import {FalconeFound} from '../../../app/models/falcone-found.model';

export enum FalconeFoundActionTypes {
    GetStatus = '[FalconeFound Component] Get Status',
    Set = '[FalconeFound Component] Set',
    Loading = '[FalconeFound Component] Loading',
    StatusLoaded = '[FalconeFound Component] Status Loaded',
    TokenLoaded = '[FalconeFound Component] Token Loaded',
    Token = '[FalconeFound Component] Token'
}

export class FalconeFoundSetToken implements Actions {
    readonly type = FalconeFoundActionTypes.Token;
    constructor(public payload: FalconeFound) {
    }
}

export class FalconeFoundLoading implements Actions {
    readonly type = FalconeFoundActionTypes.Loading;
    constructor(public payload: FalconeFound) {
    }
}

export class FalconeFoundStatusLoaded implements Actions {
    readonly type = FalconeFoundActionTypes.StatusLoaded;
    constructor(public payload: FalconeFound) {
    }
}
export class FalconeFoundGetStatus implements Actions {
  readonly type = FalconeFoundActionTypes.GetStatus;
  constructor(public payload: any) {
  }
}

export class FalconeFoundSet implements Actions {
  readonly type = FalconeFoundActionTypes.Set;
  constructor(public payload: any) {
  }
}

export class FalconeFoundTokenLoaded implements Actions {
  readonly type = FalconeFoundActionTypes.TokenLoaded;
  constructor(public payload: any) {
  }
}