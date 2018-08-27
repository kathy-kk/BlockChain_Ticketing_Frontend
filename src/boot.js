import { store } from './ConfigureStore';
import { checkAuthorization } from './store/auth/Actions';

export default () =>
    new Promise(() => {
        store.dispatch(checkAuthorization());
    });