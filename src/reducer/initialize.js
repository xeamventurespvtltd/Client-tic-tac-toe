import { INITIALIZE } from '../actions/types';

export default (state = null, action) => {
    switch(action.type){
        case INITIALIZE:
            return null;
        default:
            return state;
    }
}