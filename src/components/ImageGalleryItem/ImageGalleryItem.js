import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, descr, onOpenModal, largeImg }) => {
  console.log(onOpenModal);
  return (
    <li className={s.item} onClick={onOpenModal}>
      <img src={image} alt={descr} className={s.image} source={largeImg} />
    </li>
  );
};

export default ImageGalleryItem;