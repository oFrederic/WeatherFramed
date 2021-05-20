import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  notification: {
    status: string;
    title: string;
    message: string;
  };
}

const initialState: UiState = {
  notification: {
    status: '',
    title: '',
    message: '',
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
