import React from "react";
import Header from "components/Header";
import Hero from "parts/LandingPage/Hero";
import FindTallent from "parts/LandingPage/FindTallent";
import SkillTallent from "parts/LandingPage/SkillTallent";
import Opinion from "parts/LandingPage/Opinion";
import Subscribe from "parts/LandingPage/Subscribe";
import SiteInfo from "components/SiteInfo";

export default function LandingPage(props) {
  return (
    <>
      <Header />
      <Hero />
      <FindTallent />
      <SkillTallent />
      <Opinion />
      <Subscribe />
      <SiteInfo />
    </>
  );
}
