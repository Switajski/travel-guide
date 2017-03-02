import { REQUEST_PICTURE, RECEIVE_PICTURE, CHANGE_PLANET, CHANGE_TO_BE_KILLED, KILL} from './actions';
import locations from './Data';
import killings from './DarthVaderMovement';

let indexedLocations = [];
    locations.forEach((location) => {
      indexedLocations[location.name] = location;
    }) 

const initialState = { 
    isFetching: false, 
    pictures: [], 
    chosenPlanet: "Alderaan", 
    amountToBeKilled:1,
    indexedLocations: indexedLocations,
    killings: killings
};

const pictures = (state = initialState, action) => {
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
        case CHANGE_TO_BE_KILLED:
            return { ...state, amountToBeKilled: action.amount }
        case KILL:
            const newKillings = [...killings, {
                    planet: action.name,
                    date: new Date().toISOString(),
                    killed: action.amount
                }];
                debugger;
            return { ...state, killings: newKillings}
        default:
            return state;
    }
};

export default pictures;