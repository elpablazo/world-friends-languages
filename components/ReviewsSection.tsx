"use client";
import ReviewItem from "./ReviewItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ReviewsSection = () => {
  const reviews = [
    {
      author: {
        name: "Obed Vargas",
        image: "https://randomuser.me/api/portraits/med/men/73.jpg",
      },
      qualification: 5,
      text: "Quisiera agradecer por el rápido aprendizaje de calidad! recomiendo esta escuela como una buena opción para estudiar idiomas, principalmente por los profesores y la interacción con nativos del idioma!",
    },
    {
      author: {
        name: "Alfonso Carranza",
        image: "https://randomuser.me/api/portraits/med/men/69.jpg",
      },
      qualification: 5,
      text: "Excelente escuela de idiomas!! Muy recomendable",
    },
    {
      author: {
        name: "Marco Quiment",
        image: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
      qualification: 4,
      text: "La interacción personalizada y el enfoque práctico realmente mejoran el aprendizaje del inglés. Recomendado!! ✌️",
    },
    {
      author: {
        name: "Lorena Sánchez",
        image: `https://randomuser.me/api/portraits/med/women/75.jpg`,
      },
      qualification: 5,
      text: "Excelente escuela, muy recomendable, los profesores son muy buenos y el ambiente es muy agradable.",
    },
  ];
  return (
    <div className="bg-white w-full pt-12 lg:pt-24 pb-8 lg:pb-18">
      <div className="container flex flex-col gap-6 lg:gap-12">
        <Swiper
          className="w-full"
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          navigation={
            {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            } as any
          }
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="px-12 lg:px-4">
                  <ReviewItem content={review} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsSection;
