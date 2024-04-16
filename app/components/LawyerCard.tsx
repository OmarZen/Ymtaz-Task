import Image from "next/image";
import { MdOutlineVerified } from "react-icons/md";
import { AiOutlineCrown } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const LawyerCard = ({ name, position, rating }: { name: string, position: string, rating: string }) => {
  return (
    <div className="box-border p-10 m-10 bg-white rounded-lg p-6 shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-400 hover:to-neutral-600 flex justify-center flex-col">
      {/* Avatar Image */}
      <div className="rounded-full overflow-hidden h-40 w-40 mx-auto mb-4">
        <Image src="/avatar.jpeg" alt="Avatar" className="w-full h-full object-cover" width={550} height={550} />
      </div>
      <div className="flex items-center mb-4 m-0 justify-center">
        <h2 className="text-2xl font-Almarai font-bold">{name}</h2>
        <MdOutlineVerified className=" fill-blue-600 h-5 w-5" />
      </div>
      <div className="flex items-center mb-4 text-center justify-center">
      <AiOutlineCrown className="fill-yellow-500 w-5 h-5"/>
      <p className="text-lg font-Almarai font-bold text-gray-800 ml-2">{position}</p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-sm font-Almarai font-light text-gray-600">Rating: {rating}</p>
        <AiFillStar className="fill-yellow-500"/>
      </div>
    </div>
  );
};

export default LawyerCard;
