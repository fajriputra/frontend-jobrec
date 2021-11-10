import React, { useEffect } from "react";
import Header from "components/Header";
import SearchTallent from "parts/Home/SearchTallent";
import TopJobs from "parts/Home/TopJobs";
import useScrollTop from "hooks/useScrollTop";

export default function Home() {
  useScrollTop();

  useEffect(() => {
    document.title = "Peworld | Home";
  });

  return (
    <>
      <Header className="mb-0" />
      <TopJobs />
      <SearchTallent />
    </>
  );
}
