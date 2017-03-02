import { REQUEST_PICTURE, RECEIVE_PICTURE, CHANGE_PLANET } from './actions';

const pictures = (state = { isFetching: false, pictures: [], chosenPlanet: "Alderaan" }, action) => {
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

export default pictures;