import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Advertisements = ({ loadedBrand }) => {
  // console.log(loadedBrand);
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {loadedBrand.Advertisement_Imgs.map((item, index) => (
          <SwiperSlide key={index} className="">
            <img
              className="w-full max-h-[650px] object-cover"
              src={item}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Advertisements.propTypes = {
  loadedBrand: PropTypes.object,
};

export default Advertisements;
