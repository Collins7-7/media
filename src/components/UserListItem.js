import { GoTrash } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import Button from "./Button";
import { deleteUser } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

function UserListItem({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleDeleteClick = () => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleDeleteClick}>
        <GoTrash />
      </Button>
      {error && "Error deleting user"}
      {user.name}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user}></AlbumList>
    </ExpandablePanel>
  );
}

export default UserListItem;
