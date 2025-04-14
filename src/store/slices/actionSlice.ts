import { createSlice } from "@reduxjs/toolkit";
import { IActionType, initialState } from "../../utils/types";

export const actionSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {
    addActionListItem: (state, action: IActionType) => {
      state.push(action.payload);
    },

    removeActionListItem: (state, action: IActionType) => {
      return state.filter((item) => item.id !== action.payload.id);
    },

    updateActionListItem: (state, action: IActionType) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
    },

    addActionItem: (state, action: IActionType) => {
      state.map((list) => {
        if (list.id === action.payload.parentListId) {
          (list.actions ??= []).push(action.payload);
        }
        return list;
      });
    },

    removeActionItem: (state, action: IActionType) => {
      state.map((list) => {
        if (list.id === action.payload.parentListId) {
          list.actions = list.actions?.filter(
            (item) => item.id !== action.payload.id
          );
        }
        return list;
      });
    },

    updateActionItem: (state, action: IActionType) => {
      state.map((list) => {
        if (list.id === action.payload.parentListId) {
          list.actions = list.actions?.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, ...action.payload };
            }
            return item;
          });
        }
        return list;
      });
    },
  },
});

export const {
  addActionListItem,
  removeActionListItem,
  updateActionListItem,
  addActionItem,
  removeActionItem,
  updateActionItem,
} = actionSlice.actions;

export default actionSlice.reducer;
