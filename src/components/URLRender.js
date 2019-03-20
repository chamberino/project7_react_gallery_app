import React from 'react';
import Gallery from './Gallery';

const URLRender = (props) => {

  props.getPhotos(props.match.params.id);

  return (
    <Gallery photos={props.photos}/>
  )
}

export default URLRender;
