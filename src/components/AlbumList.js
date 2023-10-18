import React from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;

  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error, something went wrong.</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          The photos contained in the album.
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div className=" m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">{`Albums belonging to ${user.name}`}</h3>

        <Button loading={results.isLoading} primary onClick={handleAddAlbum}>
          +Add Album
        </Button>
      </div>

      <div>{content}</div>
    </div>
  );
}

export default AlbumList;
