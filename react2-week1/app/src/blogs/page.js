
import Link from "next/link";

const Blog = () => {
  const blogs = [
    { slug: "my-new-post", title: "My New Post" },
    { slug: "another-post", title: "Another Post" },
  ];
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#fff", fontSize: "2rem", marginBottom: "20px" }}>
        Blog Posts
      </h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {blogs.map((blog) => (
          <Link href={`/src/blogs/${blog.slug}`} key={blog.title}>
            <li  style={{ marginBottom: "10px" }}>
              {blog.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Blog;