import Image from "next/image";
import { Swiper, SwiperSlide, Navigation, Thumbs } from "./slider";

const images = [
  { src: 'image1.jpg', alt: 'Image 1' },
  { src: 'image2.jpg', alt: 'Image 2' },
  { src: 'image3.jpg', alt: 'Image 3' },
];

export default function CarouselImage({ images, thumbsSwiper }) {
  return (
    <div className="relative w-screen h-96 md:h-[750px]">
      <Swiper
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        
      >
        {images?.map((item) => (
          <SwiperSlide
            key={`terre-img-${item.alt}`}
            className="flex justify-center items-center"
          >
            <Image
              src={item.src}
              alt={`Terre img ${item.alt}`}
              width={450}
              height={450}
              className="w-full h-96 md:h-[750px]"
              aspectRatio={1}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
