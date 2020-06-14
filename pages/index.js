import PostListings from "../components/PostListings";
import UserSnippet from '../components/UserSnippet'

export const meta = {
  title: "Home | Rama's Space",
  tags: ["posts", "diary", "blog"],
  layout: "blog-post-list",
  publishDate: "2019-07-20",
  modifiedDate: false,
  seoDescription:
      "All my entries are listed here."
};

export default function Blog(props) {
  const blogPosts = props.allData.filter(content => content.type === "post");
  return (
      <div className="blog-post-list">
        <UserSnippet />
        <PostListings posts={blogPosts} />

        <style jsx>{`
            @media screen and (min-width: 769px) {
              .blog-post-list {
                width: 40vw;
                margin: 0 auto;
              }   
            }
            `}
        </style>
      </div>
  );
}
Blog.defaultProps = {
  allData: []
};
