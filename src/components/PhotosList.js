import PhotosListItem from "./PhotosListItem";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);

  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;

  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={5} />;
  } else if (error) {
    content = <div>Error fetching Photos...</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo}></PhotosListItem>;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg front-bold">Photos is {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;
