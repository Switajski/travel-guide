import googleClient from './googleClient';
export const REQUEST_PICTURE = 'REQUEST_PICTURE';
export const RECEIVE_PICTURE = 'RECEIVE_PICTURE';
export const CHANGE_TO_BE_KILLED = 'CHANGE_TO_BE_KILLED';
export const CHANGE_PLANET = 'CHANGE_PLANET';
export const KILL = 'KILL';




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function fetchPicture(planetName) {
    return dispatch => {
        dispatch(requestPicture(planetName))
        console.log("search", planetName + " planet")
        return googleClient.search("planet " + planetName).then(images => {
            if (images.length > 0) {
                return images[getRandomInt(0, images.length - 1)].url;
            } else {
                return "http://www.grescid.com/wp-content/uploads/2016/09/image-not-found.jpg";
            }
        }).then(image => dispatch(receivePicture(planetName, image)))
    }
}

export function changePlanet(planetName) {
    return dispatch => {
        dispatch({
            type: CHANGE_PLANET,
            name: planetName
        })
        dispatch(fetchPicture(planetName))
    }
}

export function changeToBeKilled(name, amount) {
    return {
        type: CHANGE_TO_BE_KILLED,
        amount: amount,
        planetName: name
    }
}

export function kill(name, amount){
    return {
        type: KILL,
        amount: amount,
        name: name
    }
}

function requestPicture(planetName) {
    return {
        type: REQUEST_PICTURE,
        planetName
    }
}

function receivePicture(planetName, image) {
    return {
        type: RECEIVE_PICTURE,
        planetName,
        image,
        receivedAt: Date.now()
    }
}