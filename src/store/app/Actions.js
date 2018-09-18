import { TOGGLE_ALL } from './ActionTypes';

export function getView(width) {
    let newView = 'MobileView';
    if (width > 1220) {
        newView = 'DesktopView';
    } else if (width > 767) {
        newView = 'TabView';
    }
    return newView;
}
export const toggleAll = (width, height) =>(dispatch, getState) => {
    const view = getView(width);
    const collapsed = view !== 'DesktopView';
    dispatch({
        type: TOGGLE_ALL,
        collapsed,
        view,
        height
    });
};