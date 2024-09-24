import {Button} from "@/components/SharedComponents/Button";
import config from "@/config/config";
import dynamic from "next/dynamic";
import Image from "next/image";

const TourCard: React.FC<any> = ({tourData}) => {
  return (
    <div className="shadow-lg bg-white border-2 hover:border-red-800 hover:cursor-pointer flex mb-5 p-2 transition-all duration-500 ease-in-out">
      <div className="w-4/12">
        <Image
          width="500"
          height="200"
          className="rounded-lg h-[40vh]  object-cover"
          src={config.blobUrl + tourData.image}
          alt="Tour image"
        />
      </div>
      <div className=" border-gray-200 px-4  w-6/12">
        <h3 className="text-lg font-bold text-cyan-900 capitalize mt-5 hover:underline hover:decoration-red-800">
          {tourData.title}
        </h3>
        <p className="mt-1 text-sm text-gray-700 capitalize text-pretty ">{tourData.description}</p>
      </div>
      <div className="w-2/12 border-l-2 border-gray-200 px-2  flex justify-center">
        <div className="flex flex-col  justify-center items-center ">
          <p className="text-sm">From BDT</p>
          <p className="font-bold text-xl">{tourData.price}</p>
          <p className="text-sm">Per Person</p>
          <Button className="bg-red-800 text-white text-bold  hover:bg-blue-900 w-full text-sm mt-2">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TourCard), {ssr: false});