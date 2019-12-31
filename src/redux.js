import {createStore} from 'redux';
import uuid from 'uuid/v4';

const images = {};
for (let i = 0; i < 30; i++) {
    const pictureNr = Math.floor(Math.random() * 100);
    const id = uuid();
	images[id] = {
        id,
		url: `https://picsum.photos/1920/1080/?image=${pictureNr}`
	}
}

const initialState = {
    images,
    selectedImage: null
}

function picsumReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_IMAGE':
            return {...state, images: {...state.images, [action.payload.id]: {...action.payload}}}
        case 'SELECTED_IMAGE_CHANGE':
            return {...state, selectedImage: action.payload};
        default:
            return state;
    }
}

export const store = createStore(picsumReducer, initialState)