import React from "react";
import Link from "next/link";

const PageHeader = () => {
  return (
    <header className="z-20 fixed flex items-center bg-mint-500 border-mint-100/50 border-b-2 w-full h-12">
      <nav className="flex justify-between items-center mx-auto px-4 md:px-8 container">
        <div className="flex items-center bg-clip-text bg-gradient-to-r from-mint-100 to-mint-50 font-bolder font-extrabold text-transparent md:text-2xl hover:underline text">
          <Link href="/">FinCoder Blog</Link>
        </div>
        <ul className="flex gap-2 font-bold text-mint-500 list-none">
          <li className="hover:text-mint-400">{/* Study */}</li>
          <li className="mt-0 hover:text-white dark:text-mint-50 list-none">
            <Link className="list-none" href="../about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
