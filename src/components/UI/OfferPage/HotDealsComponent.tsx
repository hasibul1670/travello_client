import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import config from "../../../config/config";

interface IDeal {
  id?: number;
  image?: string;
  title?: string;
  couponCode?: string;
  link?: string;
  type?: string;
}
export interface IHotDealsComponentProps {
  selectedType?: string;
  hotDealsData?: IDeal[];
}

// Sample hot deals data
const hotDealsData = [
  {
    id: 1,
    title: "On Domestic Flight Booking",
    image: "f4a14e5b-4cb4-4200-9695-ee17f5a7bfe6.webp",
    couponCode: "SUMMER30",
    link: "/",
    type: "Flight",
  },
  {
    id: 2,
    title: "On Int’l  Flights Bookings",
    image: "d0c6fac4-e06e-4747-a2ec-f9e58660c780.webp",
    couponCode: "HOLIDAY26",
    link: "/",
    type: "Holiday",
  },
  {
    id: 3,
    title: "On National Flight Booking",

    image: "eacea77f-13f1-490f-96bf-3e1eae9d3227.webp",
    couponCode: "VISA66",
    link: "/",
    type: "Flight",
  },
  {
    id: 4,
    title: "Hotel Discounts offer",

    image: "45465700-1973-4d3d-8db0-b430d792e13c.webp",
    couponCode: "HOTEL16",
    link: "/",
    type: "Hotel",
  },
  {
    id: 5,
    title: "All-in-One Flight Deal Offer",
    image: "58fc7a0c-ab32-493c-8b96-6b8a63046e59.webp",

    couponCode: "ALLDEAL65",
    link: "/",
    type: "All",
  },
];

const HotDealsComponent: React.FC<IHotDealsComponentProps> = ({selectedType}) => {
  const filteredDeals = hotDealsData.filter(
    (deal) => selectedType === "All" || deal.type === selectedType,
  );

  return (
    <div className="p-2 w-full ">
      <Swiper
        spaceBetween={40}
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        pagination={{clickable: true}}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {filteredDeals.map((deal) => (
          <SwiperSlide key={deal.id}>
            <div className=" rounded-lg shadow-md overflow-hidden   ">
              <div className="flex  flex-col sm:flex-row justify-between items-center p-2 bg-white">
                <div className="w-full sm:w-full">
                  <Image
                    src={config?.blobUrl + deal?.image}
                    width={300}
                    height={200}
                    layout="responsive"
                    className="rounded"
                    alt={deal.title}
                  />
                </div>
                <div className="mt-4   ml-2 w-full ">
                  <h2 className="text-sm font-bold mb-2">{deal.title}</h2>
                  <p className="text-lg sm:text-sm font-semibold text-blue-800 mb-4">
                    Code: {deal.couponCode}
                  </p>
                  <a
                    href={deal.link}
                    className="block text-center text-white bg-blue-700  text-sm w-24 px- py-2 rounded hover:bg-blue-800 transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotDealsComponent;
