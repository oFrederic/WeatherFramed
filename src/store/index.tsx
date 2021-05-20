import { configureStore } from '@reduxjs/toolkit';

import localisationReducer from './localisation';
import weatherReducer from './weather';

const store = configureStore({
  reducer: { localisation: localisationReducer, weather: weatherReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
