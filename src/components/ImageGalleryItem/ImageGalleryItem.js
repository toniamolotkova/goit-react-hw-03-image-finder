import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

import Modal from 'components/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  render() {
    const { image, descr, largeImg } = this.props;
    return (
      <>
        <li className={s.item} onClick={this.toggleModal}>
          <img src={image} alt={descr} className={s.image} />
        </li>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} imageUrl={largeImg} descr={descr} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
