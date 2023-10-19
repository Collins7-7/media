import React from "react";
import { useRemovePhotoMutation } from "../store";

import { GoTrash } from "react-icons/go";

function PhotosListItem({ photo }) {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div onClick={handleRemovePhoto} className="relative cursor-pointer mr-2">
      <img className="h-20 w-20" src={photo.url} alt="Random pic"></img>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:bg-gray-200 hover:opacity-80 ">
        <GoTrash className="text-3xl"></GoTrash>
      </div>
    </div>
  );
}

export default PhotosListItem;
