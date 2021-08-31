import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, id, descr }) => {
  return (
    <li className={s.item} key={id}>
      <img src={image} alt={descr} className={s.image} />
    </li>
  );
};

export default ImageGalleryItem;
