import {Button} from "@/components/SharedComponents/Button";
import DatePickerUmrah from "@/components/SharedComponents/DatePickerUmrah";
import dynamic from "next/dynamic";
import {FaSearchMinus} from "react-icons/fa";

const UmrahPackage = () => {
  return (
    <div>
      <div className=" z-20 relative items-center">
        <div className=" flex justify-center">
          <DatePickerUmrah dateLabel="When ? " />
        </div>
      </div>

      <div className="z-10 text-center  relative">
        <Button className="text-xl text-white font-bold bg-red-900 py-4 top-[3rem] cursor-pointer hover:bg-blue-950  rounded-full absolute  transform -translate-x-1/2 -translate-y-1/2">
          <p className="flex gap-1 justify-center items-center">
            <FaSearchMinus /> Search
          </p>
        </Button>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(UmrahPackage), {ssr: false});
