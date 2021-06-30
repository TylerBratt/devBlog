import React, { useRef, useEffect } from 'react';
import '../styles/write_up_style.css'

export default function WriteUp(props) {
  const CopyWriteRef = useRef();
  const text_threshold = 500;

  function handle_read_more(event) {
    event.target.parentElement.children[0].style.height = 'fit-content';
    event.target.parentElement.children[1].style.display = 'none';
    event.target.parentElement.children[2].style.display = 'none';
  }

  useEffect(() => {
    const copywrite = CopyWriteRef.current

    if (copywrite.getBoundingClientRect().height > 500) {
      copywrite.style.height = `${text_threshold}px`;
      copywrite.nextSibling.style.display = 'block';
      copywrite.nextSibling.nextSibling.style.display = 'block';
    }
  });


  return (
    <div className="write_up">
      <div ref={CopyWriteRef} className="copywrite" dangerouslySetInnerHTML={{__html: props.copywrite}}>
      </div>
      <div className="blur"></div>
      <div onClick={handle_read_more}className="read_more">Read more...</div>
    </div>
  )
}