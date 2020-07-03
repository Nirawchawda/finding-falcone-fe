import {Action} from '@ngrx/store';

export class Actions implements Action {
    readonly type;
    payload : any;
}

export * from './planets.action';
export * from './vehicles.action';
export * from './falcone-found.action';