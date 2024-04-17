import Image from "next/image";
import { Swiper, SwiperSlide } from "./slider";

export default function CarouselThumbs({ images, setThumbsSwiper }) {
  return (
    <div className="max-w-md ml-auto relative pr-4 pb-8">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={3}
        watchSlidesProgress={true}
        freeMode={true}
        observer={true}
        observeParents={true}
        style={{ zIndex: '100', transform: 'translateY(-120%)'}}
      >
        {images?.map((item) => (
          <SwiperSlide
            key={`terre-thumb-img-${item.alt}`}
            className="cursor-pointer rounded overflow-hidden border border-border-200 border-opacity-75 hover:opacity-75 "
            style={{ width: '100px', height: '90px'}}
          >
            <Image
              src={item.src}
              alt={`Terre thumb img ${item.alt}`}
              // width={160}
              // height={90}
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
