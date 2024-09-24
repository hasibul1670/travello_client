import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {Swiper, SwiperSlide} from "swiper/react";

import config from "@/config/config";
import Image from "next/image";
import {Autoplay, Navigation, Scrollbar} from "swiper/modules";

export const DiscoverBangladeshCard: React.FC<any> = ({location}) => {
  return (
    <div className="w-1/4 px-1">
      <Swiper
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Autoplay, Scrollbar]}
        className="mySwiper relative"
      >
        {location.images.map((deal: any, index: any) => (
          <SwiperSlide key={deal.id}>
            <div className="relative">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation={false}
                modules={[Navigation]}
                className="innerSwiper"
              >
                <SwiperSlide key={index}>
                  <Image
                    src={config?.blobUrl + deal}
                    width={300}
                    height={150}
                    alt={deal.title}
                    className="h-[28rem]"
                  />
                </SwiperSlide>
              </Swiper>
              <h2 className="absolute bottom-0 left-0 right-0 z-10 text-xl font-bold text-white p-2 bg-gradient-to-t from-black to-transparent">
                {location.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
