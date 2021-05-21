import { configureStore } from '@reduxjs/toolkit';

import { localisationReducer } from 'store/localisation';
import { weatherReducer } from 'store/weather';
import { uiReducer } from 'store/ui';

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
