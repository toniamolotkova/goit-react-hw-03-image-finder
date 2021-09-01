import React, { Component } from 'react';
import s from './ImageGallery.module.css';

import API from '../../services/imageApi';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';

class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.searchValue;
    const nextValue = this.props.searchValue;
    if (prevValue !== nextValue) {
      this.setState({ isLoading: true });

      API.fetchImagesWithQuery(nextValue, this.state.page)
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }

    if (prevState.page !== this.state.page) {
      API.fetchImagesWithQuery(nextValue, this.state.page)
        .then(images => {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
          }));

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }
  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <ul className={s.gallery}>
          {images &&
            images.map(image => (
              <ImageGalleryItem
                key={image.id}
                image={image.webformatURL}
                descr={image.tags}
              />
            ))}
        </ul>
        {images && <Button onClick={this.handleClick} />}
      </>
    );
  }
}

export default ImageGallery;
