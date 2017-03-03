import { REQUEST_PICTURE, RECEIVE_PICTURE, CHANGE_PLANET, ACTIVE_FLAG } from './actions';
import { combineReducers } from 'redux';
import {
  INVALIDATE_SWAPI,
  REQUEST_SWAPI, RECEIVE_SWAPI
} from './actions';

export const pictures = (state = { isFetching: false, pictures: [], chosenPlanet: "Alderaan" }, action) => {
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
            return;
        case CHANGE_PLANET:
            return { ...state, chosenPlanet: action.name }
        default:
            return state;
    }
};

function postsBySwapi(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
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


function handleActiveStates(state = {
    changeActive: false
  }, action) {
  switch (action.type) {
    case ACTIVE_FLAG:
      return {
        ...state,
        changeActive: action.changeActive
      };
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySwapi,
  pictures,
  handleActiveStates,
});

export default rootReducer;