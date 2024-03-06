// Import necessary functionalities from Redux Toolkit and Redux Persist
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import themeReducer from './theme/themeSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default storage for web

// Combine your application's reducers. This is where you can add more reducers as your app grows.
const rootReducer = combineReducers({
  user: userReducer, // Handles user-related state
  theme: themeReducer, // Handles UI theme-related state
});

// Configuration for Redux Persist to determine how and where to store the application's state
const persistConfig = {
  key: 'root', // The key for the persisted state
  storage, // The storage engine to use (local storage in this case)
  version: 1, // Version number for the reducer configuration
};

// Wrap the root reducer with `persistReducer` using the persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  // Custom middleware configuration
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable checks, adjust according to your needs
    }),
});

// Create a persistor for the store which will be used to control persist/rehydrate
export const persistor = persistStore(store);
