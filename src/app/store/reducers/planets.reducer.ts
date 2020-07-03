import { Planet } from 'src/app/models/planet.model';
import { Actions, PlanetsActionTypes } from '../actions';

export interface PlanetState{
    data : Planet[];
    loaded : boolean;
    loading : boolean;
}

export const initialState = {
    data : [],
    loaded : false,
    loading : false
}

export function PlanetsReducer(state = initialState, action: Actions) : PlanetState {
  let data = action.payload || null;
  switch (action.type) {
    case PlanetsActionTypes.Loading:
      return {...state,loading : true};
    case PlanetsActionTypes.Reset:
      return {...state,loading : true};
    case PlanetsActionTypes.Loaded:
      return {...state,loading:false,loaded : true,data};
    case PlanetsActionTypes.Set:
      let dupState = {
        ...state,
        data : state.data.map(
                  (elem,index) => {
                    if(index == data.index){
                      return { ...elem, selected: data.destination, disabled: true}
                    }else if(data.destination == elem.selected){
                      return { ...elem, selected: null, disabled: false};
                    }else{
                      return {...elem}
                    }
                  }
                )
      };
      
      return {
        ...dupState 
      };
    default:
      return state;
  }
}

export const getPlanetsLoading = (state : PlanetState) => state.loading 
export const getPlanetsLoaded = (state : PlanetState) => state.loaded 
export const getPlanets = (state : PlanetState) => state.data 