import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    name: string;
}

const defaultState: UserState = {
    name: '',
};

export const userLogin = (id: string) => {
    return {
        type: 'user/LOGIN',
        payload: { id },
    };
};

export const userLogout = () => {
    return {
        type: 'user/LOGOUT',
    };
};

const userSlice = createSlice({
    name: 'user',
    initialState: defaultState,
    reducers: {
        LOGIN: (state, action) => {
            const { id } = action.payload;
            state.name = id;
        },
        LOGOUT: (state) => {
            state.name = '';
        },
    },
    extraReducers: () => {},
});

export default userSlice.reducer;