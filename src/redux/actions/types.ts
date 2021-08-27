
export const SET_USER = 'SET_USER';
export const SET_ROLE = 'SET_ROLE';

interface ISetUserAction {
    type: typeof SET_USER;
    user: User;
}

interface ISetRoleAction {
    type: typeof SET_ROLE;
    role: Role
}

export type SetUserActionTypes = ISetUserAction;
export type SetRoleActionTypes = ISetRoleAction

