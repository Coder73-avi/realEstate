import React from "react";
import room from "../images/service_room.jpg";
import house from "../images/service_house.jpg";
import land from "../images/service_land.jpg";
import css from "./style/service.module.css";
import Image from "next/image";

const Service = () => {
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
    <section className={"mt-20 " + css.service__page} id="service">
      <div className={"heading"}>service</div>

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
  );
};

export default Service;
