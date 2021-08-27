import { SetUserActionTypes, SET_USER, SetRoleActionTypes, SET_ROLE } from "./types";

export function setUser(user: User): SetUserActionTypes {
    return {
        type: SET_USER,
        user
    }
}

export function setRole(role: Role): SetRoleActionTypes {
    return {
        type: SET_ROLE,
        role
    }
}