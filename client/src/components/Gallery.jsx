import React from "react";
import {
  Box,
  Box2,
  Title,
  Text,
  Icon,
  BoxG,
  Pic,
  TitlePic,
  BoxP,
} from "../styles/styledGallery";
import RestFood from "../assets/restaurant-food.svg";
import Slider from "react-slick";
import Food1 from "../assets/special-dishes-1.png";
import Food2 from "../assets/special-dishes-2.jpg";
import Food3 from "../assets/special-dishes-3.jpg";
import Food4 from "../assets/special-dishes-4.jpg";
import Food5 from "../assets/special-dishes-5.png";

const Gallery = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: false,
    afterChange: function (index) {
      return `Slider Changed to: ${
        index + 1
      }, background: #222; color: #bada55`;
    },
    cssEase: "linear",
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          padding: "0px",
        }}>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          color: "#ffcc33",
          width: "10%",
        }}>
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
          fade: true,
          dots: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
          fade: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <Box>
      <Box2>
        <Title>
          <Icon src={RestFood} alt="icon" /> Our Special Dishes
        </Title>
        <BoxP>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            in? Rerum velit voluptatibus ex ipsa et beatae praesentium
            consequuntur iste delectus voluptate voluptates iure quibusdam
            dolore, natus, aliquam, impedit perferendis.
          </Text>
        </BoxP>
      </Box2>
      <Slider {...settings}>
        <BoxG>
          <Pic src={Food1} alt="image1" />
          <TitlePic>BURGER</TitlePic>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in
            nemo aut inventore doloribus distinctio harum, itaque beatae alias
            et velit praesentium, placeat sed voluptate deserunt. Corrupti
            possimus quas repudiandae.
          </Text>
        </BoxG>
        <BoxG>
          <Pic src={Food2} alt="image2" />
          <TitlePic>PASTA</TitlePic>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            corporis fugiat ab nisi accusantium nihil ut. Distinctio, eveniet
            non cupiditate voluptas facere nesciunt nihil et amet culpa
            reprehenderit eius. Ullam?
          </Text>
        </BoxG>
        <BoxG>
          <Pic src={Food3} alt="image3" />
          <TitlePic>BEEF BURGER MEAL</TitlePic>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            dignissimos fuga facilis ducimus corporis impedit culpa, fugit, non
            voluptate ullam odio quis sunt veritatis odit exercitationem
            repellat quo illo amet.
          </Text>
        </BoxG>
        <BoxG>
          <Pic src={Food4} alt="image4" />
          <TitlePic>DOUBLE CHEESE PIZZA</TitlePic>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            pariatur ab, ratione inventore adipisci quae fugiat, nesciunt vero
            non aspernatur praesentium? Assumenda est, earum facere ipsa eius
            rem nisi atque.
          </Text>
        </BoxG>
        <BoxG>
          <Pic src={Food5} alt="image5" />
          <TitlePic>CEASER SALAD</TitlePic>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            earum necessitatibus velit? Labore nam corrupti, facilis unde
            recusandae eaque magni eos consequatur similique, culpa in facere
            voluptatem. Ipsum, minima voluptatum?
          </Text>
        </BoxG>
      </Slider>
    </Box>
  );
};

export default Gallery;
