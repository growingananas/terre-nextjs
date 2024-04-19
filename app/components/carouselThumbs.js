import Image from "next/image";
import { Swiper, SwiperSlide } from "./slider";

export default function CarouselThumbs({ images, setThumbsSwiper }) {
  return (
    <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={20}
      slidesPerView={3}
      watchSlidesProgress={true}
      freeMode={true}
      observer={true}
      observeParents={true}
      style={{ zIndex: 4, transform: 'translateY(-120%)', width: 300, height: 90, marginLeft: 'auto', marginRight: 20}}
    >
      {images?.map((item) => (
        <SwiperSlide
          key={`terre-thumb-img-${item.alt}`}
          className="cursor-pointer rounded overflow-hidden border border-border-200 border-opacity-75 hover:opacity-75 ml-auto"
        >
          <Image
            src={item.src}
            alt={`Terre thumb img ${item.alt}`}
            fill
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
