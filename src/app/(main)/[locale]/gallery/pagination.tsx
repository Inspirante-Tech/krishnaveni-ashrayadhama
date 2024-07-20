import Link from "next/link";

import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React from "react";

function Pagination() {
  const pageCount = 10;
  const maxButtons = 5;
  const active = 3;
  return (
    <div className="p-5 flex items-center justify-center text-gray-600">
      <ChevronsLeft />
      {Array.from({ length: 5 }, (_, i) => {
        return (
          <Link
            href=""
            key={i}
            className={`inline-block py-3 mx-px text-center leading-none rounded ${active ? "text-blue-500 font-bold" : "bg-gray-50 enabled:hover:bg-gray-100 disabled:opacity-50"}`}
          >
            {i}
          </Link>
        );
      })}
      <ChevronsRight />
    </div>
  );
}

export default Pagination;
