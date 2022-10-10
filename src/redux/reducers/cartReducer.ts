import {createSlice} from "@reduxjs/toolkit";
import { Comic } from "../../types/Comic";

type State = {
    items: Comic[];

}

export type Action = {
    type: string;
    payload: any;
}

export const slice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        setItems: (state: State, action: Action) => {
            state.items = action.payload;
        },

        addItems: (state: State, action: Action) => {
            state.items.push(action.payload);
        },

        removeItems: (state: State, action: Action) => {
            const items = state.items.filter((items) => items.id !== action.payload);
            state.items = items;
        },




    }
});

export const {setItems, addItems, removeItems} = slice.actions;
export default slice.reducer