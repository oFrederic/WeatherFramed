import { createSlice } from '@reduxjs/toolkit';

interface LocalisationState {
  location: string;
}

const initialState: LocalisationState = {
  location: '',
};

const localisationSlice = createSlice({
  name: 'localisation',
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload.location;
    },
  },
});

export const localisationActions = localisationSlice.actions;
export default localisationSlice.reducer;
