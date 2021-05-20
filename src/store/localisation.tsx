import { createSlice } from '@reduxjs/toolkit';

interface LocalisationState {
  city: string;
  country: string;
}

const initialState: LocalisationState = {
  city: '',
  country: '',
};

const localisationSlice = createSlice({
  name: 'localisation',
  initialState,
  reducers: {
    setLocation(state, action) {
      state.city = action.payload.city;
      state.country = action.payload.country;
    },
  },
});

export const localisationActions = localisationSlice.actions;
export default localisationSlice.reducer;
