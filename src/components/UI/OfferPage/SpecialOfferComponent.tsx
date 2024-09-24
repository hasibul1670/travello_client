import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import config from "../../../config/config";
import {IHotDealsComponentProps} from "./HotDealsComponent";

// Sample hot deals data
const hotDealsData = [
  {
    id: 1,
    title: "Summer Flight Sale",
    description: "Get up to 50% off on summer flights.",
    image: "1884afff-4bba-4f11-b3e6-75ddb781ba77.webp",
    link: "/",
    type: "Flight",
  },
  {
    id: 2,
    title: "Holiday Package",
    description: "Book holiday packages with great discounts.",
    image: "2025793e-787c-459f-b23e-2cf409a562d4.webp",
    link: "/",
    type: "Holiday",
  },
  {
    id: 3,
    title: "Visa Deals",
    description: "Get your travel visa easily.",
    image: "464b5784-e1d5-40bf-8c5d-80b29711ca02.webp",
    link: "/",
    type: "Visa",
  },
  {
    id: 4,
    title: "Hotel Discounts",
    description: "Enjoy luxury hotels at affordable prices.",
    image: "0603b44a-8d37-4b08-b4b4-529c9e647d68.webp",
    link: "/",
    type: "Hotel",
  },
  {
    id: 5,
    title: "All-in-One Deal",
    description: "Explore all our hot deals in one place.",
    image: "94ca20a6-f966-4208-99d7-3695b3da1e6e.webp",
    link: "/",
    type: "All",
  },
];

const SpecialOfferComponent: React.FC<Partial<IHotDealsComponentProps>> = ({selectedType}) => {
  const filteredDeals = hotDealsData.filter(
    (deal) => selectedType === "All" || deal.type === selectedType,
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <Swiper
        spaceBetween={20}
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        pagination={{clickable: true}}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {filteredDeals.map((deal) => (
          <SwiperSlide key={deal.id} className="p-2">
            <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
              <div className="w-full">
                <Image
                  src={config?.blobUrl + deal?.image}
                  width={500}
                  height={200}
                  layout="responsive"
                  className="rounded"
                  alt={deal.title}
                />
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-2 mt-4">{deal.title}</h2>
              <p className="text-sm sm:text-base mb-2">{deal.description}</p>
              <p className="text-sm sm:text-base mb-2 font-semibold">
                {/* Coupon Code: {deal.couponCode} */}
              </p>
              <div className="flex justify-end mt-4">
                <a
                  href={deal.link}
                  className="text-white w-36 bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialOfferComponent;
