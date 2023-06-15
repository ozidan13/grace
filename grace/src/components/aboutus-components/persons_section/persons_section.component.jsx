// react
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./persons_section.styles.scss";
import SectionTitle from "../../section_title/section_title.component";
import { IMAGES } from "../../../assets/images";

function PersonsSection({ persons }) {
  return (
    <>
      <div className="persons_section_container">
        <SectionTitle title={persons.title} subTitle={persons.subTitle} />
        <section className="persons_section_content">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {IMAGES.PERSONS.map((person) => (
              <SwiperSlide>
                <img src={person} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
}

export default PersonsSection;
