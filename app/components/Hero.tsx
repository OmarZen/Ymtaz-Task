// HeroSection.tsx

import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { BsBookFill, BsFillPersonCheckFill } from "react-icons/bs";
import { RiFileList3Fill } from "react-icons/ri";
import { IoIosListBox } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import Link from "next/link";

const Card = ({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) => {

  return (
    <Link href='/component/lawyercard'>
      <div className="w-282 h-270 text-[#292019] bg-orange-50/[.6] rounded-lg p-6 shadow-lg transition duration-300 ease-in-out transform hover:text-white hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-400 hover:to-neutral-600">
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
          <span className="fill-yellow-700">{icon}</span>
        </div>
        <h2 className="text-2xl font-Almarai font-bold mb-1">{title}</h2>
        <p className="text-sm font-Almarai font-light">{subtitle}</p>
      </div>
    </Link>
  );
};


const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-[#2D4768] font-Almarai font-bold py-20 text-center">
        <h1 className="text-5xl mb-12">الدليل الرقمي</h1>
        <SearchBar />
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 mt-12">
          <Card
            icon={<IoIosListBox className="text-gray-800 text-3xl" />}
            title="موثق"
            subtitle="متوفر عدد 17"
          />
          <Card
            icon={<BsFillPersonCheckFill className="text-gray-800 text-3xl" />}
            title="محامي مرخص"
            subtitle="متوفر عدد 17"
          />
          <Card
            icon={<PiPencilSimpleLineDuotone className="text-gray-800 text-3xl" />}
            title="محكم"
            subtitle="متوفر عدد 17"
          />
          <Card
            icon={<BsBookFill className="text-gray-800 text-3xl" />}
            title="باحث قانوني"
            subtitle="متوفر عدد 17"
          />

          <Card
            icon={<MdEditSquare className="text-gray-800 text-3xl" />}
            title="ناظر وقف"
            subtitle="متوفر عدد 17"
          />
          <Card
            icon={<RiFileList3Fill className="text-gray-800 text-3xl" />}
            title="مأذون أنكحه"
            subtitle="متوفر عدد 17"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
