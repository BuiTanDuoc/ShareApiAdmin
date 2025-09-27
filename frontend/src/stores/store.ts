import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './styleSlice';
import mainReducer from './mainSlice';
import authSlice from './authSlice';

import usersSlice from "./users/usersSlice";
import activitiesSlice from "./activities/activitiesSlice";
import categoriesSlice from "./categories/categoriesSlice";
import contactsSlice from "./contacts/contactsSlice";
import leadsSlice from "./leads/leadsSlice";
import notesSlice from "./notes/notesSlice";

export const store = configureStore({
  reducer: {
    style: styleReducer,
    main: mainReducer,
    auth: authSlice,

users: usersSlice,
activities: activitiesSlice,
categories: categoriesSlice,
contacts: contactsSlice,
leads: leadsSlice,
notes: notesSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
