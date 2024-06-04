import { useState } from "react";
import ReactPaginate from "react-paginate";

const blogs = [
  {
    title: "Blog Post 1",
    description: "Description for blog post 1",
    active: true,
    publishedBy: "Author 1",
    publishedDate: "2023-01-01",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Blog Post 2",
    description: "Description for blog post 2",
    active: false,
    publishedBy: "Author 2",
    publishedDate: "2023-02-01",
    image: "https://via.placeholder.com/150",
  },
  // Add more blog objects here...
];

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 5;

  const offset = currentPage * blogsPerPage;
  const currentBlogs = blogs.slice(offset, offset + blogsPerPage);
  const pageCount = Math.ceil(blogs.length / blogsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Active
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Published By
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Published Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentBlogs.map((blog, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={blog.image} alt={blog.title} className="w-24 h-auto rounded" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{blog.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{blog.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {blog.active ? "Active" : "Inactive"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{blog.publishedBy}</td>
              <td className="px-6 py-4 whitespace-nowrap">{blog.publishedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLinkClassName="page-link"
        />
      </div>
    </div>
  );
};

export default BlogList;
