import AboutPageLayout from "../components/layouts/AboutPageLayout";

export const meta = {
  title: "About | Rama's Space",
  tags: ["Next.js", "MDX"],
  layout: "page",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is an about page."
};

function Home({ router }) {
  return (
    <div>
     <AboutPageLayout homePath={router.pathname} />
    </div>
  );
}

export default Home;
