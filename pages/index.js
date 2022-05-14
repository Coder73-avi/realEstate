import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";

import css from "../styles/Home.module.css";
// import images
import room from "../images/service_room.jpg";
import house from "../images/service_house.jpg";
import land from "../images/service_land.jpg";
import sideImage from "../images/about__side__image.jpg";
import contactImage from "../images/contact__us.jpg";
import Footer from "../components/Footer";

export default function Home() {
  const serviceImage = [
    {
      url: room,
      name: "Rooms",
    },
    {
      url: house,
      name: "House",
    },
    {
      url: land,
      name: "land",
    },
  ];
  return (
    <>
      <Head>
        <title>RealEstate Site</title>
        <meta name="description" content="Real Estate website" />
        <link rel="icon" href="/favicon.ico" />

        
      </Head>
      <main>
        <Navigation />
        <div className={css.home__page}>
          <h1 className="text-3xl font-bold p-5">Welcome in my Webpage</h1>
        </div>

        {/* service page */}
        <section className={"mt-20 " + css.service__page} id="service">
          <div className={css.heading}>service</div>

          {/* card */}
          <div className="grid grid-cols-3 ml-20 mr-20 gap-20 mb-20">
            {serviceImage.map(({ url, name }, indx) => {
              return (
                <div
                  className={"h-screen relative " + css.service__card}
                  key={indx}
                >
                  <div className="">
                    <Image
                      src={url}
                      alt="background image"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      className={css.service__image}
                    />
                  </div>

                  <div className={"absolute z-10 " + css.service__card__name}>
                    See More {name}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* about us page*/}
        <section className={"mt-20 " + css.about__us}>
          <div className={css.heading}>about us</div>
          <article className="pl-10 grid grid-cols-3 relative items-center">
            <article className="col-span-2">
              <div className={"mb-5 " + css.about__heading}>
                Looking for Real Estate Agent?
              </div>
              <p className={css.about__text}>
                Real Estate Team gets most of the business from REFERRALs. Why?
                Because we provide the most trustworthy service to our clients,
                and our clients love us. Email or call us today to find out more
                details. We offer free Buyer's Consultation and Listing
                Presentation to walk you through the home purchasing/listing
                process.
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

        {/* contact us page */}
        <section className={"mt-20 " + css.contact__us}>
          <div className={css.heading}>contact us</div>
          <article className="grid grid-cols-2 p-10 items-center">
            <article className="pl-10">
              <p className={css.contact__text}>
                If you have any questions, please contact us by telephone or
                email and we'll get back to you as soon as possible. We look
                forward to hearing from you.
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
              <div className="mt-6 font-bold text-xl">
                Cindy Lin Realty Team​v
              </div>
              <div className="mt-4">
                408-598-0858 <br /> aavishek60@gmail.com
              </div>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
