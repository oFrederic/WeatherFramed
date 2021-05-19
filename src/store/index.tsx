import { configureStore } from '@reduxjs/toolkit';

import localisationReducer from './localisation';

const store = configureStore({
  reducer: { localisation: localisationReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
