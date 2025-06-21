import Footer from "../components/Footer";
import Postmain from "../components/Postmain";
import Blogs from "../components/Blogs";

function Blog() {
  return (
    <>
      <div className="flex  items-center justify-center flex-col w-full  overflow-hidden">
        <Blogs />
        <Postmain />
        <Footer />
      </div>
    </>
  );
}

export default Blog;
