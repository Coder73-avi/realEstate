import Image from "next/image";
import css from "./style/card.module.css";
const Card = ({ img, title, cost, location, contact, details }) => {
  return (
    <div className={"h-screen relative " + css.card}>
      <div className={css.cardImage}>
        <Image
          src={img}
          width={100}
          height={66.5}
          alt="background image"
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div className={css.cardLocation}>
        <div className={css.heading}>Location:</div>
        <div className={css.info}>{location}</div>
        <div className={css.heading}>Contact No:</div>
        <div className={css.info}>{contact}</div>
        <div className={css.heading}>Details:</div>
        <div className={css.info}>{details}</div>
      </div>
      <div className={css.text}>
        {title} for sale <br />$ {cost}
      </div>
    </div>
  );
};

export default Card;
