import React from 'react';
import '../styles/post_styles.css';
import WriteUp from './WriteUp';

export default function Post() {

  return (
    <div className="blog_post">
      <div className="section section1">
        <div className="post_title">
          <span>Title</span>
        </div>
        <div className="post_subtitle">
          <span>Subtitle</span>
        </div>
      </div>

      <div className="section section2">
        <WriteUp />
      </div>

      <div className="section section3">
        Lorem, ipsum dolor.
        {/* Gallery component */}
      </div>

      <div className="section section4">
        <WriteUp />
      </div>

      <div className="section section5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, tempora!
        {/* PrimaryAsset component */}
      </div> 
    </div>
  )
}