import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        layout="responsive"
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="overflow-hidden max-h-48 md:max-h-24">
          {result.overview}
        </p>
        <h2 className="my-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <div className="flex space-x-2 opacity-0 group-hover:opacity-100">
          <p>{result.media_type && `${result.media_type}`}</p>
          <p>{result.release_date || result.first_air_date}</p>
          <ThumbUpIcon className="h-8 mx-10" />
          <p>{result.vote_count}</p>
        </div>
      </div>
    </div>
  );
});

export default Thumbnail;
