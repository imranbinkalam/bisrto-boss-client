import FoodCard from "../../../FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./OrderTab.css";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const itemsPerSlide = 6;

  const slides = [];
  for (let i = 0; i < items.length; i += itemsPerSlide) {
    const slideItems = items.slice(i, i + itemsPerSlide);
    slides.push(slideItems);
  }

  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      {slides.map((slideItems, index) => (
        <SwiperSlide key={index}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center p-5 mb-12">
            {slideItems.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OrderTab;
