import fetch from 'isomorphic-fetch'
import googleClient from './googleClient';
export const REQUEST_PICTURE = 'REQUEST_PICTURE';
export const RECEIVE_PICTURE = 'RECEIVE_PICTURE';
export const CHANGE_TO_BE_KILLED = 'CHANGE_TO_BE_KILLED';
export const CHANGE_PLANET = 'CHANGE_PLANET';
export const KILL = 'KILL';

// SWAPI
export const REQUEST_SWAPI = 'REQUEST_SWAPI';
export const RECEIVE_SWAPI = 'RECEIVE_SWAPI';
export const INVALIDATE_SWAPI= 'INVALIDATE_SWAPI';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function fetchPicture(planetName) {
    return dispatch => {
        dispatch(requestPicture(planetName))
        // console.log("search", planetName + " planet")
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

function changeToBeKilled(name, amount){
    return {
        type: CHANGE_TO_BE_KILLED,
        planetName: name,
        amount: amount
    }
}

// SWAPI

export function invalidateSwapi(swapi) {
  return {
    type: INVALIDATE_SWAPI,
    swapi
  }
}

function requestSwapi() {
  return {
    type: REQUEST_SWAPI,
  }
}

function receiveSwapi(json) {
  return {
    type: RECEIVE_SWAPI,
    posts: json.results,
    receivedAt: Date.now()
  }
}

export function fetchPosts() {
  return dispatch => {
    dispatch(requestSwapi());
    return fetch(`http://swapi.co/api/planets/?format=json`)
      .then(response => response.json())
      .then(json => dispatch(receiveSwapi(json)))
      .catch(e => console.log(e))
  }

}