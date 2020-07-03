import { Vehicle } from 'src/app/models/vehicle.model';
import { Actions, VehiclesActionTypes } from '../actions';

export interface VehicleState{
    data : Vehicle[];
    loaded : boolean;
    loading : boolean;
}

export const initialState = {
    data : [],
    loaded : false,
    loading : false
}

export function VehiclesReducer(state = initialState, action: Actions) : VehicleState {
  let data = action.payload || null;
  switch (action.type) {
    case VehiclesActionTypes.Loading:
      return {...state,loading : true};
    case VehiclesActionTypes.Reset:
        return {...state,loading : true};
    case VehiclesActionTypes.Loaded:
      return {...state,loading:false,loaded : true,data};
    case VehiclesActionTypes.Set:
      let dupState = [...state.data];
      return {
        ...state,
        data: dupState.map(
                (elem,index) => {
                  //1. we need to see planet distance and vehicle distance 
                  //2. selected should not be disabled
                  //3. counter should not be zero

                  let disabled = data.planet.distance > elem.max_distance;
                  if(index == data.index){
                    let decrCount = {...elem};
                    decrCount.total_no--;
                    return { ...decrCount, 
                             [data.destination]: {
                               selected:true
                              }
                            }
                  }else if(elem[data.destination] && elem[data.destination].selected){
                    let incrCount = {...elem};
                    incrCount.total_no++;
                    return { ...incrCount, 
                              [data.destination]: {
                                selected:false,
                                disabled: disabled
                              }
                            };
                  }else{
                    return {
                      ...elem,
                      [data.destination]: {
                        disabled: disabled
                      }
                    }
                  }
                }
              )
      };;
    default:
      return state;
  }
}

export const getVehiclesLoading = (state : VehicleState) => state.loading 
export const getVehiclesLoaded = (state : VehicleState) => state.loaded 
export const getVehicles = (state : VehicleState) => state.data 