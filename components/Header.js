import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col sm:flex-row items-center justify-between m-5 h-auto">
        <div className="flex items-center flex-grow justify-between max-w-2xl sm:mt-7">
          <HeaderItem title="Home" Icon={HomeIcon} />
          <HeaderItem title="Trending" Icon={LightningBoltIcon} />
          <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
          <HeaderItem title="Collections" Icon={CollectionIcon} />
          <HeaderItem title="Search" Icon={SearchIcon} />
          <HeaderItem title="Account" Icon={UserIcon} />
        </div>
        <Image
          className="object-contain cursor-pointer"
          src="https://links.papareact.com/ua6"
          height={100}
          width={200}
        />
      </div>
    </header>
  );
};

export default Header;
