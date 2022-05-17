import React from "react";
import css from "./style/contact.module.css";
import Image from "next/image";
// images
import contactImage from "../images/contact__us.jpg";

const Contact = () => {
  return (
    <section className={"mt-20 " + css.contact__us} id="contact">
      <div className={"heading"}>contact us</div>
      <article className="grid grid-cols-2 p-10 items-center">
        <article className="pl-10">
          <p className={css.contact__text}>
            If you have any questions, please contact us by telephone or email
            and we'll get back to you as soon as possible. We look forward to
            hearing from you.
          </p>
          <form className={css.contactForm}>
            <div className={css.contactForm__heading}>Contact Form</div>
            <div className={css.conatctForm__details}>
              <div className={css.contactForm__info}>
                <label htmlFor="fullname">Full Name :</label>
                <input type="text" name="fullname" id="fullname" />
              </div>
              <div className={css.contactForm__info}>
                <label htmlFor="email">Email :</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className={css.contactForm__info}>
                <label htmlFor="subject">Subject :</label>
                <input type="text" name="subject" id="subject" />
              </div>
              <div className={css.contactForm__info}>
                <label htmlFor="message">message :</label>
                <input type="text" name="message" id="message" />
              </div>
            </div>
            <div className={css.contactForm__btns}>
              <button>Submit</button>
            </div>
          </form>
        </article>
        <div className="pl-24">
          <Image
            src={contactImage}
            alt="contact us image"
            height={400}
            width={400}
            objectFit="cover"
            className={css.contact__image}
          />
          <div className="mt-6 font-bold text-xl">Cindy Lin Realty Team​v</div>
          <div className="mt-4">
            408-598-0858 <br /> aavishek60@gmail.com
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
