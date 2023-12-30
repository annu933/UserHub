import { createSlice } from '@reduxjs/toolkit';
import { createData, getData } from '../api/api'


const initialState = {
    createDataAll: [],
    AllData: [],
}


const userData = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        getUserData(state, action) {
            state.AllData.push(action.payload);
        },
        createUserData(state, action) {
            state.createDataAll.push(action.payload);
        },
        removeUserData(state, action) {
            state.createDataAll = state.createDataAll.filter((item) => item.id !== action.payload);
            state.AllData = state.AllData.filter((item) => item.id !== action.payload);
        },
        updateUserData(state, action) {
            const { id, updatedName } = action.payload;
            const userToUpdate = state.AllData.find((user) => user.id === id);
            if (userToUpdate) {
                userToUpdate.first_name = updatedName;
            }
        }
    },
})


export const { createUserData, getUserData,removeUserData,updateUserData} = userData.actions;
export default userData.reducer;
