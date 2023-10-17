import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import UserListItem from "./UserListItem";

function UsersList() {
  const { data } = useSelector((state) => {
    return state.users;
  });

  const [doLoadUsers, isLoadingUsers, loadingUserError] = useThunk(fetchUsers);
  const [doAddUser, isAddingUser, addingUserError] = useThunk(addUser);

  useEffect(() => {
    doLoadUsers();
  }, [doLoadUsers]);

  const handleUserAdd = () => {
    doAddUser();
  };

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUserError) {
    content = <div>Error while fetching</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl"> Users</h1>

        <Button loading={isAddingUser} onClick={handleUserAdd}>
          + Add User
        </Button>

        {addingUserError && "Error creating user"}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
