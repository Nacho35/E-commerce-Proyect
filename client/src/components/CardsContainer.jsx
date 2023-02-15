import React from "react";
import { Box } from "../styles/styedCards";
import chef1 from "../assets/chef-1.jpg";
import chef2 from "../assets/chef-2.jpg";
import chef3 from "../assets/chef-3.jpg";
import chef4 from "../assets/chef-4.jpg";

const Cards = [
  {
    image: `${chef1}`,
    alt: "chef",
    title: "Richard Nauz",
    subtitle: "food chef",
    links: ["", "", ""],
  },
  {
    image: `${chef2}`,
    alt: "chef",
    title: "Olivia Grosh",
    subtitle: "food chef",
    links: ["", "", ""],
  },
  {
    image: `${chef3}`,
    alt: "chef",
    title: "Jeremy White",
    subtitle: "food chef",
    links: ["", "", ""],
  },
  {
    image: `${chef4}`,
    alt: "chef",
    title: "Howard Holmes",
    subtitle: "food chef",
    links: ["", "", ""],
  },
];
const CardsContainer = () => {
  return (
    <Box>
      <div>
        <img src="" alt="" />
        <h2>Our best chef</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          temporibus quidem enim iste unde expedita laudantium pariatur vitae,
          recusandae ratione ea nisi. Dolorum reiciendis sint non ipsa quos
          neque nostrum?
        </p>
      </div>
      {Cards.map((card, index) => {
        const { image, alt, title, subtitle, links } = card;

        return (
          <figure key={index}>
            <img src={image} alt={alt} />
            <figcaption>
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              {links.map((link, linkIndex) => (
                <a href={link} key={linkIndex}>
                  Link {linkIndex + 1}
                </a>
              ))}
            </figcaption>
          </figure>
        );
      })}
    </Box>
  );
};

export default CardsContainer;
