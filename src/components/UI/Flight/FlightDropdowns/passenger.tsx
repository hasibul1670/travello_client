import React, {useState} from "react";
import {FaMinusSquare, FaPlusSquare} from "react-icons/fa";

interface PassengerCounts {
  adult: number;
  child: number;
  infant: number;
}

const MAX_ADULTS = 5;
const MAX_CHILDREN = 5;
const MAX_INFANTS = 5;

const PassengerSelect: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [passengerCounts, setPassengerCounts] = useState<PassengerCounts>({
    adult: 1,
    child: 0,
    infant: 0,
  });
  const [childAges, setChildAges] = useState<number[]>([]);
  const [infantAges, setInfantAges] = useState<number[]>([]);

  const handleIncrement = (type: keyof PassengerCounts) => {
    setPassengerCounts((prevCounts) => {
      if (type === "adult" && prevCounts.adult < MAX_ADULTS) {
        return {...prevCounts, [type]: prevCounts[type] + 1};
      } else if (type === "child" && prevCounts.child < MAX_CHILDREN) {
        return {...prevCounts, [type]: prevCounts[type] + 1};
      } else if (type === "infant" && prevCounts.infant < MAX_INFANTS) {
        return {...prevCounts, [type]: prevCounts[type] + 1};
      }
      return prevCounts;
    });
  };

  const handleDecrement = (type: keyof PassengerCounts) => {
    setPassengerCounts((prevCounts) => ({
      ...prevCounts,
      [type]: Math.max(prevCounts[type] - 1, 0),
    }));
  };

  const handleAgeChange = (index: number, age: number, type: "child" | "infant") => {
    if (type === "child") {
      const updatedAges = [...childAges];
      updatedAges[index] = age;
      setChildAges(updatedAges);
    } else {
      const updatedAges = [...infantAges];
      updatedAges[index] = age;
      setInfantAges(updatedAges);
    }
  };

  const handleApply = () => {
    // Handle the apply logic here
    setOpen(false);
    console.log("Apply clicked");
  };

  const totalPassengers = passengerCounts.adult + passengerCounts.child + passengerCounts.infant;

  return (
    <div className={`relative block w-1/4`}>
      <button
        className="bg-white border-2 border-gray-200 px-4 py-2 rounded-md text-gray-800 flex items-center justify-between w-full"
        onClick={() => setOpen(!open)}
      >
        Passengers: {totalPassengers}
        <span className="ml-2">{open ? "" : ""}</span>
      </button>
      {open && (
        <div className="absolute bg-white border border-gray-300 z-20 rounded-lg shadow-lg mt-2 w-full p-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <p>Adults:</p>
              <button
                onClick={() => handleDecrement("adult")}
                className="p-2 text-red-500"
                disabled={passengerCounts.adult === 0}
              >
                <FaMinusSquare className="text-xl" />
              </button>
              <span>{passengerCounts.adult}</span>
              <button
                onClick={() => handleIncrement("adult")}
                className="p-2 text-blue-500"
                disabled={passengerCounts.adult >= MAX_ADULTS}
              >
                <FaPlusSquare className="text-xl" />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <p>Children:</p>
              <button
                onClick={() => handleDecrement("child")}
                className="p-2 text-red-500"
                disabled={passengerCounts.child === 0}
              >
                <FaMinusSquare className="text-xl" />
              </button>
              <span>{passengerCounts.child}</span>
              <button
                onClick={() => handleIncrement("child")}
                className="p-2 text-blue-500"
                disabled={passengerCounts.child >= MAX_CHILDREN}
              >
                <FaPlusSquare className="text-xl" />
              </button>
            </div>
            {Array.from({length: passengerCounts.child}).map((_, index) => (
              <div key={`child-age-${index}`} className="flex items-center space-x-2">
                <input
                  type="number"
                  value={childAges[index] || ""}
                  onChange={(e) => handleAgeChange(index, parseInt(e.target.value), "child")}
                  min={2}
                  max={12}
                  placeholder={`Child ${index + 1} Age`}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
            ))}

            <div className="flex items-center space-x-2">
              <p>Infants:</p>
              <button
                onClick={() => handleDecrement("infant")}
                className="p-2 text-red-500"
                disabled={passengerCounts.infant === 0}
              >
                <FaMinusSquare className="text-xl" />
              </button>
              <span>{passengerCounts.infant}</span>
              <button
                onClick={() => handleIncrement("infant")}
                className="p-2 text-blue-500"
                disabled={passengerCounts.infant >= MAX_INFANTS}
              >
                <FaPlusSquare className="text-xl" />
              </button>
            </div>
            {Array.from({length: passengerCounts.infant}).map((_, index) => (
              <div key={`infant-age-${index}`} className="flex items-center space-x-2">
                <input
                  type="number"
                  value={infantAges[index] || ""}
                  onChange={(e) => handleAgeChange(index, parseInt(e.target.value), "infant")}
                  min={0}
                  max={2}
                  placeholder={`Infant ${index + 1} Age`}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
            ))}

            <button
              onClick={handleApply}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelect;
