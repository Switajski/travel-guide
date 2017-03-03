import { REQUEST_PICTURE, RECEIVE_PICTURE, CHANGE_PLANET, CHANGE_TO_BE_KILLED, KILL } from './actions';
import { combineReducers } from 'redux';
import killings from './DarthVaderMovement';
import {
  INVALIDATE_SWAPI,
  REQUEST_SWAPI, RECEIVE_SWAPI, CLEAR_KILLINGS
} from './actions';
import { firebaseStateReducer } from 'react-redux-firebase'

export const pictures = (state = { pictures: []}, action) => {
    switch (action.type) {
        case REQUEST_PICTURE:
            const picturesWithoutTheRequested = state.pictures.filter(picture => {
                return picture.planetName !== action.planetName
            });
            return {
                ...state,
                pictures: [
                    ...picturesWithoutTheRequested,
                    {
                        isFetching: true,
                        planetName: action.planetName,
                    }
                ]
            };
        case RECEIVE_PICTURE:
            const newPictures = state.pictures.map(picture => {
                if (picture.planetName === action.planetName) {
                    return {
                        isFetching: false,
                        planetName: action.planetName,
                        lastUpdated: action.receivedAt,
                        image: action.image,
                    }
                }
                return picture;
            });
            return {
                ...state,
                pictures: newPictures
            };
        default:
            return state;
    }
};

function lordVader(state = {killings: killings, amountToBeKilled:1 }, action) {
    switch(action.type) {
        case CHANGE_TO_BE_KILLED:
            return { ...state, amountToBeKilled: action.amount }
        case KILL:
            const newKillings = [...state.killings, {
                planet: action.name,
                date: new Date().toISOString(),
                killed: action.amount
            }];
            return { ...state, killings: newKillings}
        case CLEAR_KILLINGS:
            return {killings: []};
            break;
        default:
            return state;
    }
}

function choosePlanet(state = {chosenPlanet: "Alderaan"}, action) {
   switch (action.type) {
       case 'CHANGE_PLANET':
           return {
               ...state,
               chosenPlanet: action.name,
           }
       default:
           return state;
   }
}


function postsBySwapi(state = {
    isFetching: false,
    didInvalidate: false,
    items: [] }, action) {
    switch (action.type) {
        case INVALIDATE_SWAPI:
            return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_SWAPI:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_SWAPI:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
    firebaseStateReducer,
  postsBySwapi,
  pictures,
    choosePlanet,
    lordVader
});

export default rootReducer;