"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
     <h1 className="heading">
        Showcasing my{" "}
        <span className="text-purple">Achievements</span>
      </h1>
      <Carousel items={cards} />
    </div>
  );
}


const data = [
  {
    category: "",
    title: "Best Student Award",
    src: "/me4.jpg",
  },
  {
    category: "Academic Excellence Award",
    title: "",
    src: "/me2.jpeg",
  },
  {
    category: "Best Research Paper Award",
    title: "",
    src: "/me12.png",
  },

  {
    category: "11th Conference (ICAET)",
    title: "",
    src: "/prize.png",
  },
  {
    category: "Exploring Computer Vision",
    title: "",
    src: "/img2.png",
  },
  {
    category: "",
    title: "I am also an Enjoyable Person",
    src: "/me14.jpg",
  },
];
