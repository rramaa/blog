import React from "react";
import HomePageLayout from "../components/layouts/HomePageLayout";

export const meta = {
  title: "Home | Rama's Space",
  tags: ["Next.js", "MDX"],
  layout: "page",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is an about page."
};

function Home({ router }) {
  return (
    <div>
     <HomePageLayout homePath={router.pathname} />
    </div>
  );
}

export default Home;
