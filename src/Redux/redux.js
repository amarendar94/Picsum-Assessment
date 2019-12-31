//import uuid from 'uuid/v4';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// const images = {};
// for (let i = 0; i < 30; i++) {
//     const pictureNr = Math.floor(Math.random() * 80);
//     const id = uuid();
// 	images[id] = {
//         id,
// 		url: `https://picsum.photos/1920/1080/?image=${pictureNr}`
// 	}
// }

const initialState = {
    images: {},
    selectedImage: null
}

function picsumReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_BULK_IMAGES':
            return {...state, images: {...action.payload.reduce((acc,cur) => {
                acc[cur.id] = {...cur}
                return acc
            },{})}};    
        case 'ADD_IMAGE':
            return {...state, images: {...state.images, [action.payload.id]: {...action.payload}}};
        case 'SELECTED_IMAGE_CHANGE':
            return {...state, selectedImage: action.payload};
        default:
            return state;
    }
}

export const store = createStore(picsumReducer, initialState, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);