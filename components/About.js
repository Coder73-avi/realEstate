import React from 'react'
import sideImage from "../images/about__side__image.jpg";
import css from "./style/about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <section className={"mt-20 " + css.about__us} id="about">
      <div className={"heading"}>about us</div>
      <article className="pl-10 grid grid-cols-3 relative items-center">
        <article className="col-span-2">
          <div className={"mb-5 " + css.about__heading}>
            Looking for Real Estate Agent?
          </div>
          <p className={css.about__text}>
            Real Estate Team gets most of the business from REFERRALs. Why?
            Because we provide the most trustworthy service to our clients, and
            our clients love us. Email or call us today to find out more
            details. We offer free Buyer's Consultation and Listing Presentation
            to walk you through the home purchasing/listing process.
          </p>
          <div className={"mt-10 mb-5 " + css.about__heading}>
            Why [COMPANY NAME]Real Estate Team?
          </div>
          <ul className={css.about__list}>
            <li>High quality service and fast response</li>
            <li>Honesty and Integrity</li>
            <li>Excellent negotiation skills</li>
            <li>Using Hi-Tech to help you find houses quickly</li>
            <li>Speaks English, Nepali</li>
          </ul>
        </article>
        <div className="col-span-1">
          <Image
            src={sideImage}
            alt="side__image"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </article>
    </section>
  );
}

export default About