import { combineReducers } from 'redux';
import { user, role } from './reducers/user';

const rootReducer = combineReducers({
    user,
    role
});

export type AppState = ReturnType<typeof rootReducer>;
