import React from 'react';

const Slides = props => {

  return (
    <div className="slides">
      <ul className="imgs">
      {props.photos.map((photo, i) => {
        return (
          <li key={photo.id} id={photo.id} className={props.number == i ? 'active' : ''}>
            <img src={photo.img_src} />
          </li>
        )
      })}
      </ul>
      <div className="control">
        <span className="arrow-left" onClick={props.left}>&lt;</span>
        <span className="arrow-right" onClick={props.right}>&gt;</span>
      </div>
    </div>
  )
}

export default Slides;
