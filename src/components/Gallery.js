import React from 'react';
import GalleryItem from './GalleryItem'
import NoResults from './NoResults'

const Gallery = props => {
  const images = props.photos;
  let photos;
  if (images.length > 0) {
    photos = images.map(photo => <GalleryItem url= {`https:farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />)
  } else {
    photos = <NoResults />
  }
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default Gallery;
