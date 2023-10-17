import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { fetchUsers } from "./thunk/fetchUsers";
import { addUser } from "./thunk/addUser";
import { deleteUser } from "./thunk/deleteUser";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export { store, fetchUsers, addUser, deleteUser };
