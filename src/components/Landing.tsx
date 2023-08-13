import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Form from "./Form";
import Recent from "./Recent";
import TrendingDestination from "./trendingDestination";
import Explore from "./explore";
import Type from "./type";
export default function Landing() {
  return (
    <div>
      <Header />
      <Hero />
      <Form />
      <Recent />
      <Explore />
      <TrendingDestination />
      <Type />
    </div>
  );
}
