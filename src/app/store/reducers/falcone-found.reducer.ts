import { FalconeFound } from 'src/app/models/falcone-found.model';
import { Actions, FalconeFoundActionTypes } from '../actions';

export interface FalconeFoundstate{
    data : FalconeFound;
    loaded : boolean;
    loading : boolean;
}

export const initialState = {
    data : <FalconeFound>{},
    loaded : false,
    loading : false
}

export function FalconeFoundReducer(state = initialState, action: Actions) : FalconeFoundstate {
  let data = action.payload || null;
  switch (action.type) {
    case FalconeFoundActionTypes.GetStatus:
        return {...state};
    case FalconeFoundActionTypes.StatusLoaded:
        data.res({...data,res:null});
        return {...state,data:{...state.data,status:data.status,planet_name:(data.planet_name || null)}};
    case FalconeFoundActionTypes.Token:
        return {...state,data:{...state.data,token:data}};
    case FalconeFoundActionTypes.TokenLoaded:
        return {...state,data:{...state.data,token:data.token}};
    case FalconeFoundActionTypes.Set:
        let dupState = {
            ...state,
            data : {
                ...state.data,
                destinations : {...data},
                time_taken : Object.values(data).reduce((total:any,a:any)=>{
                    if(a && a.planet && a.vehicle){
                     return total + (a.planet.distance/a.vehicle.speed);   
                    }else{
                     return total + 0;
                    }
                },0)
            }
        };
      return {...dupState,loading:false,loaded : true};
    default:
      return state;
  }
}

export const getFalconeFoundLoading = (state : FalconeFoundstate) => state.loading 
export const getFalconeFoundLoaded = (state : FalconeFoundstate) => state.loaded 
export const getFalconeFound = (state : FalconeFoundstate) => state.data 
export const getFalconeFoundTime = (state : FalconeFoundstate) => {
    return state.data.time_taken || 0;
}
export const getFalconeFoundPlanet = (state : FalconeFoundstate) => {
    return state.data.planet_name || 'unknow';
}
export const getFalconeFoundToken = (state : FalconeFoundstate) => {
    return state.data.token;
}
export const isAllDestinationsSelected = (state : FalconeFoundstate) => {
    if(state.data.destinations){
        var choosed = Object.entries(state.data.destinations).filter((a:any) =>{ return a[1].vehicle != null})
        if(choosed.length == 4){
            return true;
        }else{
            return false;
        }
    }
}