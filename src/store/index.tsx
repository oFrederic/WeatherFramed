import { configureStore } from '@reduxjs/toolkit';

import { localisationReducer } from './localisation';
import { weatherReducer } from './weather';
import { uiReducer } from './ui';

const store = configureStore({
  reducer: {
    localisation: localisationReducer,
    weather: weatherReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
