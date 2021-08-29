import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = (props) => {
  const { images } = props;

  const fetchedImages = images.map((image) => {
    return (
      <ImageCard key={image.id} image={image} />
    );
  })

  console.log(images)

  return (
    <div className="image-list">
      {fetchedImages}
    </div>
  );
}

export default ImageList;