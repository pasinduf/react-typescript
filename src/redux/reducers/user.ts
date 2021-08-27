import { SetUserActionTypes, SetRoleActionTypes } from "../actions/types";

const initialState: User = { id: 1, name: 'testuser' };
const initialRole: Role = { id: 1, role: 'no role' }

export function user(state = initialState, action: SetUserActionTypes): User {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                ...action.user,
            };
        default:
            return state;
    }
};


export function role(state = [], action: SetRoleActionTypes): any {
    switch (action.type) {
        case 'SET_ROLE':
            return {
                ...state,
                ...action.role,
            };
        default:
            return state;
    }
};

