import React from 'react';
import '../styles/gallery_style.css'

export default function Gallery() {
  return (
    <div className="post_image_gallery">
      <div className="gallery_image">
        <img src="https://picsum.photos/1920/1080" alt="random"/>
      </div>
      <div className="gallery_image">
        <img src="https://picsum.photos/1920/1082" alt="random"/>
      </div>
      <div className="gallery_image">
        <img src="https://picsum.photos/1920/1084" alt="random"/>
      </div>
      <div className="gallery_image">
        <img src="https://picsum.photos/1920/1086" alt="random"/>
      </div>
      <div className="gallery_image">
        <img src="https://picsum.photos/1920/1088" alt="random"/>
      </div>
      <div className="gallery_image">
        <img src="https://picsum.photos/1920/1090" alt="random"/>
      </div>
    </div>
  )
}