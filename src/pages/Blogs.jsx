import { useEffect, useState } from "react";
import axios from "axios";
import BlogBanner from "../components/BlogBanner";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 6;

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      // limit to 30 blogs
      setBlogs(res.data.slice(0, 30));
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const start = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(start, start + blogsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-10 py-10">
      <BlogBanner />
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Latest Blogs
        </h1>
        <p className="text-gray-800 dark:text-white mt-2">
          You scroll, we paginate. Civilization at its peak.
        </p>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
        </div>
      ) : (
        <>
          {/* Blog Grid */}
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <img
                  src={`https://picsum.photos/seed/${blog.id}/400/250`}
                  alt="blog"
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-sm text-gray-800 dark:text-white mt-2 line-clamp-3">
                    {blog.body}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-gray-400">
                      Author #{blog.userId}
                    </span>

                    <button className="text-sm font-medium text-gray-800 dark:text-white hover:underline">
                      5 minute read
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-2 flex-wrap">
            
            {/* Prev */}
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded-md disabled:opacity-40"
            >
              Prev
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md border ${
                  currentPage === i + 1
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded-md disabled:opacity-40"
            >
              Next
            </button>

          </div>
        </>
      )}
    </div>
  );
}