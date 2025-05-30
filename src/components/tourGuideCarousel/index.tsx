"use client"

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import CustomButton from "@/components/customButton";

interface IGuide {
  id: number;
  fullname?: string;
  imgUrl?: string;
  exp?: string;
  rating?: number;
  language?: string[];
}

type TProps = {
  guides: IGuide[];
  href?: string;
}

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300;
  let progress = 0;
  let animationFrameId: number;
  let isPaused = false;

  function rotate() {
    const deg = 360 * progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }

  function animate() {
    if (!isPaused) {
      progress += 0.001;
      if (progress > 1) progress -= 1;
      rotate();
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;

      element.addEventListener("mouseenter", () => {
        isPaused = true;
        element.style.transition = "transform 0.3s";
        element.style.transform += " scale(1.1)";
      });

      element.addEventListener("mouseleave", () => {
        isPaused = false;
        element.style.transition = "transform 0.3s";
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
      });
    });
    progress = slider.track.details.progress;
    rotate();
    animate();
  });

  slider.on("destroyed", () => {
    cancelAnimationFrame(animationFrameId);
  });
};

export default function TourGuideCarousel(props: TProps) {
  const { guides, href } = props;
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="wrapper w-full">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          {
            guides.map((guide) => {
              return (
                <div className="carousel__cell rounded-[10px] relative" key={guide.id}>
                  <Image src={guide.imgUrl ?? "/public/images/avt-default.jpg"} alt={guide.fullname ?? "avatar"} width={500} height={500} quality={100} />
                  <div className="mt-2">
                    <h3 className="text-center text-[#1d005a] font-bold text-[21px]">{guide.fullname}</h3>
                    <div>
                      <span>{guide.exp}</span>
                      <span> kinh nghiệm</span>
                    </div>
                    <div className="rating absolute top-[10px] left-[10px] flex flex-col gap-1 ">
                      {Array.from({ length: guide.rating ?? 0 }, (_, index) => (
                        <FaStar key={index} className="text-yellow-300 text-[1rem]" />
                      ))}
                    </div>
                    <div className="language">
                      {guide.language?.map((lang, index) => (
                        <span key={index} className="lang">{`${lang}, `}</span>
                      ))}
                    </div>
                  </div>
                  <CustomButton className="tour-learn-more">
                    <span className="tour-circle" aria-hidden="true">
                      <span className="tour-icon tour-arrow"></span>
                    </span>
                    <span className="tour-button-text">Xem chi tiết</span>
                  </CustomButton>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
