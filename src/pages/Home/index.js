import Header from "components/Header";
import SearchTallent from "parts/Home/SearchTallent";
import TopJobs from "parts/Home/TopJobs";
import React from "react";

export default function Home() {
  return (
    <>
      <Header className="mb-0" />
      <TopJobs />
      <SearchTallent />
    </>
  );
}
