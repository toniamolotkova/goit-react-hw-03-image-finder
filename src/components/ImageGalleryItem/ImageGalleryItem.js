import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, descr }) => {
  return (
    <li className={s.item}>
      <img src={image} alt={descr} className={s.image} />
    </li>
  );
};

export default ImageGalleryItem;
