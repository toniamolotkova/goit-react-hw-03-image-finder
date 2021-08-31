import React, { Component } from 'react';
import s from './ImageGallery.module.css';

import API from '../../services/imageApi';
import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.searchValue;
    const nextValue = this.props.searchValue;
    if (prevValue !== nextValue) {
      this.setState({ isLoading: true });

      API.fetchImagesWithQuery(nextValue)
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  render() {
    return (
      <ul className={s.gallery}>
        {this.state.images.map(image => (
          <ImageGalleryItem
            image={image.webformatURL}
            id={image.id}
            descr={image.tags}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
