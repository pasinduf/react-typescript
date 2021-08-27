import { combineReducers } from "redux";
import { user, role } from './user'


const rootReducer = combineReducers({
    user,
    role
})
export default rootReducer