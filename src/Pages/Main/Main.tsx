import { FC, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "swiper";
import * as s from "./styles";
import "swiper/css";
import { Button } from "../../Components/Ui/Button";
import SliderImg from "../../Assets/Images/slider_1.png";
import { ReactComponent as SliderImg2 } from "../../Assets/Images/slider_2.svg";
import SliderImg3 from "../../Assets/Images/slider_3.png";
import "swiper/css/autoplay";
import Ripple from "../../Components/Ui/Ripple/Ripple";

type Props = {};

const arr = [
  {
    title: (
      <>
        Импортонезависимая <span>комплексная</span> киберзащита
      </>
    ),
    desc: "Центр импортозамещения Тайга помогает бизнесу и госкомпаниям перейти на отечественные технологии",
    image: <img src={SliderImg} alt="..." />,
    btn: {
      title: "Посмотреть товры",
      fc: () => {},
    },
  },
  {
    title: "Профессилнальный IT-Аустсорсинг",
    desc: "Обслуживание компьютеров, серверов, сетей и 1С. Применяем  максимально практичные технологии, повышающие продуктивность вашего бизнеса",
    image: <SliderImg2 />,
    btn: {
      title: "Связаться с нами",
      fc: () => {},
    },
  },
  {
    title: "Профессилнальный IT-Аустсорсинг",
    desc: "Обслуживание компьютеров, серверов, сетей и 1С. Применяем  максимально практичные технологии, повышающие продуктивность вашего бизнеса",
    image: <img src={SliderImg3} alt="..." />,
    btn: {
      title: "Связаться с нами",
      fc: () => {},
    },
  },
];
export const Main: FC<Props> = () => {
  const sliderRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const sliderProps = {
    ref: sliderRef,
    onSlideChange: (e: any) => setActiveIndex(e.activeIndex),
    speed: 1000,
    parallax: true,
    modules: [Parallax],
  };

  return (
    <div className="container">
      <s.Slider>
        <Swiper {...sliderProps}>
          {arr.map((item, key) => (
            <SwiperSlide key={key}>
              <s.Slide>
                <div className="ripple">
                  <Ripple color={"rgb(63, 200, 134)"} duration={2000} />
                </div>
                <div className="col">
                  <div className="title" data-swiper-parallax="-100">
                    {item.title}
                  </div>
                  <div className="desc" data-swiper-parallax="-200">
                    {item.desc}
                  </div>
                  <div className="btn-inner" data-swiper-parallax="-300">
                    <Button onClick={item.btn.fc} rippleDuration={1000}>
                      {item.btn.title}
                    </Button>
                  </div>
                </div>
                <div data-swiper-parallax="-300">{item.image}</div>
              </s.Slide>
              <div className="paginations" data-swiper-parallax="-400">
                {arr.map((_, ind) => (
                  <div
                    key={ind}
                    onClick={() => sliderRef.current.swiper.slideTo(ind)}
                    className={`indicator ${
                      ind === activeIndex ? "active" : ""
                    }`}
                  >
                    <Ripple color={"rgb(63, 200, 134)"} duration={1000} />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </s.Slider>
    </div>
  );
};
