import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { fetchUsers } from "./thunk/fetchUsers";
import { addUser } from "./thunk/addUser";
import { deleteUser } from "./thunk/deleteUser";
import { albumApi } from "./apis/albumApi";

const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumApi.reducerPath]: albumApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store, fetchUsers, addUser, deleteUser };
export { useFetchAlbumsQuery, useAddAlbumMutation } from "./apis/albumApi";
