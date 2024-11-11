import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    korisnickoime?: string;
    korisnikId: number;
    ulogaId: number;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
    korisnickoime: "",
    korisnikId: 0,
    ulogaId: 0
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ token: string; korisnickoime: string, korisnikId: number, ulogaId: number }>) {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.korisnickoime = action.payload.korisnickoime;
            state.korisnikId = action.payload.korisnikId;
            state.ulogaId = action.payload.ulogaId
        },
        logout() {
            return initialState;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
