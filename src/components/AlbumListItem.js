import Button from "./Button";
import { GoTrash } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

const AlbumListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveClick = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        loading={results.isLoading}
        className="mr-2"
        onClick={handleRemoveClick}
      >
        <GoTrash></GoTrash>
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album}></PhotosList>
    </ExpandablePanel>
  );
};

export default AlbumListItem;
