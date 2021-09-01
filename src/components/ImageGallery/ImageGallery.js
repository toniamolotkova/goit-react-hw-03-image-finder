import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './ImageGallery.module.css';

import API from '../../services/imageApi';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'react-loader-spinner';

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
      toast.info('Waiting...');

      API.fetchImagesWithQuery(nextValue, this.state.page)
        .then(images => {
          if (images.length === 0) {
            return toast.warn(`Can't find ${nextValue}. Sorry:(`, {
              position: toast.POSITION.TOP_LEFT,
            });
          }
          this.setState({ images });
        })
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
        .catch(error =>
          this.setState({
            error: toast.error(`Can't find ${nextValue}. Sorry:(`),
          }),
        )
        .finally(() => this.setState({ isLoading: false }));
    }
  }
  handleClickBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <ul className={s.gallery}>
          {isLoading && (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          )}
          {images &&
            images.map(image => (
              <ImageGalleryItem
                largeImg={image.largeImageURL}
                key={image.id}
                image={image.webformatURL}
                descr={image.tags}
              />
            ))}
        </ul>
        {images && <Button onClick={this.handleClickBtn} />}
      </>
    );
  }
}

export default ImageGallery;
