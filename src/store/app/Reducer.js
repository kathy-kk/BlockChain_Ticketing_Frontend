import { getView } from './Actions';
import { TOGGLE_ALL } from './ActionTypes';

const initialState = {
    collapsed: window.innerWidth > 1220 ? false : true,
    view: getView(window.innerWidth),
    height: window.innerHeight,
};

export default function appReducer(state = initialState, action) {
    switch(action.type){
    case TOGGLE_ALL:
        if (state.view !== action.view || action.height !== state.height) {
            const height = action.height ? action.height : state.height;
            return {
                ...state,
                collapsed: action.collapsed,
                view: action.view,
                height
            };
        }else
            return state;
    default:
        return state;
    }
}