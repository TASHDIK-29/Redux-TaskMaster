import type { RootState } from "@/redux/store";
import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    users: [
        {
            id: '001',
            name: "Tas_hdi_k"
        },
        {
            id: '002',
            name: "Bit_hi"
        },
        {
            id: '003',
            name: "Ash_ik"
        },
    ]
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const userDoc = {
                id: nanoid(), ...action.payload
            };

            state.users.push(userDoc);
        },

        deleteUser: (state, action) => {
            state.users = state.users.filter(u => u.id != action.payload);
        }
    }
})


export const selectUsers = (state: RootState) => {
    return state.user.users;
}

export const selectSingleUsers = (state: RootState, id: string | null) => {
    if (id === null) {
        return { name: "NONE" };
    }
    
    return state.user.users.find(u => u.id === id);
}


export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;