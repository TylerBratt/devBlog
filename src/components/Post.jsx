import React from 'react';
import '../styles/post_styles.css';
import WriteUp from './WriteUp';
import Gallery from './Gallery';
import PrimaryAsset from './PrimaryAsset';

export default function Post(props) {

  return (
    <div className="blog_post" id={`${encodeURIComponent(props.post.title.toLowerCase())}`}>
      <div className="section section1">
        <div className="post_title">
          <span>{props.post.title}</span>
        </div>
        <div className="post_subtitle">
          <span>{props.post.subtitle}</span>
        </div>
      </div>

      <div className="section section2">
        <WriteUp copywrite={props.post.copywrite[0]}/>
      </div>

      <div className="section section3">
        <Gallery images={props.post.images}/>
      </div>

      <div className="section section4">
      <WriteUp copywrite={props.post.copywrite[1]}/>

      </div>

      <div className="section section5">
        <PrimaryAsset primary_asset={props.post.primary_asset}/>
      </div> 
    </div>
  )
}