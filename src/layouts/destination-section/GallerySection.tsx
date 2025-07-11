"use client";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = {
  images: string[];
};

export default function GallerySection({ images }: Props) {
  const photos = images.map((src) => ({
    src,
    width: 3,
    height: 2,
  }));

  const [index, setIndex] = useState(-1);

  return (
    <div>
      <PhotoAlbum
        layout="columns"
        columns={(containerWidth) => (containerWidth < 768 ? 2 : 3)}
        photos={photos}
        spacing={8}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
      />
    </div>
  );
}
