import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Comic } from "../../types/Comic";

type State = {
    items: Comic[];

}

export type Action = {
    type: string;
    payload: any;
}

export interface CartState {
    price: number;
    amount: number;
    items: Array<Comic>
}

export const initialStateCart: CartState = {
    price: 50.99,
    amount: 0,
    items: []
}

export const slice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        setItems: (state: State, action: Action) => {
            const items = state.items.map((items)=>
                items.id === action.payload.id 
                ? {...items, amount: items.amount }
                : items
            );
        },

        addItems: (state: State, action: Action) => {
            state.items.push(action.payload);
        },

        removeItems: (state: State, action: Action) => {
            const items = state.items.filter((items) => items.id !== action.payload.id);
            state.items = items;
        },




    }
});

export const {setItems, addItems, removeItems} = slice.actions;
export default slice.reducer