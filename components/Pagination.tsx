import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ currentPage = 1 }) => {
  const page = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center gap-3 py-3 mt-10">
      <Link href={currentPage === 1 ? `` : `/?page=${currentPage - 1}`}>
        <FaArrowLeft
          className={currentPage === 1 ? `text-gray-400` : `text-orange-400`}
        />
      </Link>
      {page.map((item) => (
        <Link key={item} href={`/?page=${item}`}>
          <div
            className={`${
              currentPage === item
                ? " bg-orange-400 text-white"
                : "text-orange-400 border-[1px] border-orange-400 "
            }  h-[30px] w-[30px]  flex items-center justify-center rounded-md
      `}
          >
            {item}
          </div>
        </Link>
      ))}
      <Link
        href={currentPage === page.length ? `` : `/?page=${currentPage + 1}`}
      >
        <FaArrowRight
          className={
            currentPage === page.length ? `text-gray-400` : `text-orange-400`
          }
        />
      </Link>
    </div>
  );
};

export default Pagination;
