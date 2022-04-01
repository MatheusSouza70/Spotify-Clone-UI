import "./style.css";
import { images } from "../../config";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
function AlbumCard({ label, description, image }) {
  return (
    <div className="card__container">
      <div className="card__image--div mb-3">
        <img src={images[image]} alt="" className="" />
        <PlayCircleFilledIcon className="play--icon" />
      </div>
      <div className="card__content">
        <p className="card__content__title">{label}</p>
        <p className="card__content__text">{description}</p>
      </div>
    </div>
  );
}

export default AlbumCard;
