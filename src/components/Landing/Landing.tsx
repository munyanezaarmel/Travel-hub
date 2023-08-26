import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero";
import Form from "../Form";
import Recent from "../Recent/Recent";
import TrendingDestination from "../Trending Destination/trendingDestination";
import Explore from "../Explore/explore";
import Type from "../Type/type";
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
