import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Form from "./Form";
import Recent from "./Recent";
export default function Landing() {
  return (
    <div>
      <Header />
      <Hero />
      <Form />
      <Recent/>
    </div>
  );
}
