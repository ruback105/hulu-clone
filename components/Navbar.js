import requests from "../utils/requests";
import { useRouter } from "next/router";
import ScrollContainer from 'react-indiana-drag-scroll'

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="relative">
      <ScrollContainer className="scroll-container flex space-x-10 sm:space-x-20 px-10 sm:px-20 text-2xl overflow-x-scroll scrollbar-hide">
      {Object.entries(requests).map(([action, { title, url }]) => (
          <h2
            className="flex items-center h-12 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-300 whitespace-nowrap"
            key={action}
            onClick={() => router.push(`/?genre=${action}`)}
          >
            {title}
          </h2>
        ))}
      </ScrollContainer>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default Navbar;
