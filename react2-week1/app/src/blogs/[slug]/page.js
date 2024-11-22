
"use client";
import { usePathname } from "next/navigation";
const PageTitle = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <div>
      <h1>{title}</h1>
      <p>This is the content for the blog post titled "{title}".</p>
    </div>
  );
};
export default PageTitle;