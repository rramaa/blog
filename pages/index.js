import PostListing from "../components/PostListing";
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
        {/*<h1 className={"test"}>{meta.title}</h1>*/}
        <UserSnippet />
        {blogPosts.map((post, index) => (
            <PostListing key={index} post={post} index={index} />
        ))}
        <style jsx>{`
          .blog-post-list {
            width: 40vw;
            margin: 0 auto;
          }
        `}
        </style>
      </div>
  );
}
Blog.defaultProps = {
  allData: []
};
