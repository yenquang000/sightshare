import g1 from "@/assets/g1.PNG";
import g2 from "@/assets/g2.PNG";
import g3 from "@/assets/g3.PNG";
import g4 from "@/assets/g4.PNG";
import g5 from "@/assets/g5.JPG";
import g6 from "@/assets/g6.JPEG";
import g7 from "@/assets/g7.JPG";
import g8 from "@/assets/g8.PNG";
import g9 from "@/assets/g9.JPG";
import g10 from "@/assets/g10.JPG";
import g11 from "@/assets/g11.JPG";
import g12 from "@/assets/g12.JPG";
import g13 from "@/assets/g13.JPG";
import g14 from "@/assets/g14.PNG";
import g15 from "@/assets/g15.JPG";
import g16 from "@/assets/g16.PNG";
import g17 from "@/assets/g17.JPG";
import g18 from "@/assets/g18.JPG";
import g19 from "@/assets/g19.JPG";
import g20 from "@/assets/g20.JPG";

import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  { original: g1, thumbnail: g1 },
  { original: g2, thumbnail: g2 },
  { original: g3, thumbnail: g3 },
  { original: g4, thumbnail: g4 },
  { original: g5, thumbnail: g5 },
  { original: g6, thumbnail: g6 },
  { original: g7, thumbnail: g7 },
  { original: g8, thumbnail: g8 },
  { original: g9, thumbnail: g9 },
  { original: g10, thumbnail: g10 },
  { original: g11, thumbnail: g11 },
  { original: g12, thumbnail: g12 },
  { original: g13, thumbnail: g13 },
  { original: g14, thumbnail: g14 },
  { original: g15, thumbnail: g15 },
  { original: g16, thumbnail: g16 },
  { original: g17, thumbnail: g17 },
  { original: g18, thumbnail: g18 },
  { original: g19, thumbnail: g19 },
  { original: g20, thumbnail: g20 },
];

function Gallery() {
  return (
    <div id="gallery" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1 className="text-center text-4xl font-bold lg:text-5xl text-[#59769d] font-serif mb-4">
        Sightshare Gallery
      </h1>
      <ImageGallery items={images} />
    </div>
  );
}

export default Gallery;
