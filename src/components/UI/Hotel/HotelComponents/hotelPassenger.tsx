import React, {useState} from "react";
import {FaMinusSquare, FaPlusSquare, FaTrash} from "react-icons/fa";

interface PassengerCounts {
  adult: number;
  child: number;
}

const MAX_ADULTS = 3;
const MAX_CHILDREN = 3;
const MAX_PASSENGERS = 3;
const MAX_ROOMS = 3;

const HotelPassenger: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [rooms, setRooms] = useState<{passengerCounts: PassengerCounts; childAges: number[]}[]>([
    {passengerCounts: {adult: 1, child: 0}, childAges: []},
  ]);

  const handleIncrement = (roomIndex: number, type: keyof PassengerCounts) => {
    setRooms((prevRooms) => {
      const updatedRooms = [...prevRooms];
      const currentRoom = {
        ...updatedRooms[roomIndex],
        passengerCounts: {...updatedRooms[roomIndex].passengerCounts},
      };
      const totalPassengers = currentRoom.passengerCounts.adult + currentRoom.passengerCounts.child;

      if (
        type === "adult" &&
        currentRoom.passengerCounts.adult < MAX_ADULTS &&
        totalPassengers < MAX_PASSENGERS
      ) {
        currentRoom.passengerCounts.adult++;
      } else if (
        type === "child" &&
        currentRoom.passengerCounts.child < MAX_CHILDREN &&
        totalPassengers < MAX_PASSENGERS
      ) {
        currentRoom.passengerCounts.child++;
      }
      updatedRooms[roomIndex] = currentRoom;
      return updatedRooms;
    });
  };

  const handleDecrement = (roomIndex: number, type: keyof PassengerCounts) => {
    setRooms((prevRooms) => {
      const updatedRooms = [...prevRooms];
      const currentRoom = {
        ...updatedRooms[roomIndex],
        passengerCounts: {...updatedRooms[roomIndex].passengerCounts},
      };

      if (type === "adult" && currentRoom.passengerCounts.adult > 1) {
        updatedRooms[roomIndex].passengerCounts.adult -= 1;
      } else if (type === "child" && currentRoom.passengerCounts.child > 0) {
        updatedRooms[roomIndex].passengerCounts.child -= 1;
      }
      updatedRooms[roomIndex] = currentRoom;
      return updatedRooms;
    });
  };

  const handleAgeChange = (roomIndex: number, childIndex: number, age: number) => {
    setRooms((prevRooms) => {
      const updatedRooms = [...prevRooms];
      const updatedAges = [...updatedRooms[roomIndex].childAges];
      updatedAges[childIndex] = age;
      updatedRooms[roomIndex].childAges = updatedAges;
      return updatedRooms;
    });
  };

  const handleAddRoom = () => {
    if (rooms.length < MAX_ROOMS) {
      setRooms((prevRooms) => [
        ...prevRooms,
        {passengerCounts: {adult: 1, child: 0}, childAges: []},
      ]);
    }
  };

  const handleRemoveRoom = (roomIndex: number) => {
    if (rooms.length > 1) {
      setRooms((prevRooms) => prevRooms.filter((_, index) => index !== roomIndex));
    }
  };

  const handleApply = () => {
    setOpen(false);
  };

  const totalGuest = rooms.reduce(
    (total, room) => total + room.passengerCounts.adult + room.passengerCounts.child,
    0,
  );
  const totalRoom = rooms.length;

  return (
    <div className="relative ">
      <button
        className="bg-white h-[3.5rem] w-[11rem] border-2 border-gray-200 px-4 py-2 rounded-md text-gray-800 flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <p className="text-blue-800 font-bold mr-1">{totalGuest}</p> Guest
        <p className="text-blue-800 font-bold mr-1">{totalRoom}</p> Room
      </button>

      {open && (
        <div className="absolute w-[20rem] bg-white border border-gray-300 z-20 rounded-lg shadow-lg mt-2 p-4">
          <div className="flex flex-col space-y-4">
            {rooms.map((room, roomIndex) => (
              <div key={`room-${roomIndex}`} className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center">
                  <p className="font-bold mb-2">Room {roomIndex + 1}</p>
                  {rooms.length > 1 && (
                    <button
                      onClick={() => handleRemoveRoom(roomIndex)}
                      className="p-2 text-red-500"
                    >
                      <FaTrash className="text-xl" />
                    </button>
                  )}
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <p>Adults:</p>
                  <button
                    onClick={() => handleDecrement(roomIndex, "adult")}
                    className="p-2 text-red-500"
                    disabled={room.passengerCounts.adult === 1 && rooms.length === 1}
                  >
                    <FaMinusSquare className="text-xl" />
                  </button>
                  <span>{room.passengerCounts.adult}</span>
                  <button
                    onClick={() => handleIncrement(roomIndex, "adult")}
                    className="p-2 text-blue-500"
                    disabled={
                      room.passengerCounts.adult >= MAX_ADULTS ||
                      room.passengerCounts.adult + room.passengerCounts.child >= MAX_PASSENGERS
                    }
                  >
                    <FaPlusSquare className="text-xl" />
                  </button>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <p>Child:</p>
                  <button
                    onClick={() => handleDecrement(roomIndex, "child")}
                    className="p-2 text-red-500"
                    disabled={room.passengerCounts.child === 0}
                  >
                    <FaMinusSquare className="text-xl" />
                  </button>
                  <span>{room.passengerCounts.child}</span>
                  <button
                    onClick={() => handleIncrement(roomIndex, "child")}
                    className="p-2 text-blue-500"
                    disabled={
                      room.passengerCounts.child >= MAX_CHILDREN ||
                      room.passengerCounts.adult + room.passengerCounts.child >= MAX_PASSENGERS
                    }
                  >
                    <FaPlusSquare className="text-xl" />
                  </button>
                </div>

                {Array.from({length: room.passengerCounts.child}).map((_, childIndex) => (
                  <div
                    key={`room-${roomIndex}-child-age-${childIndex}`}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="number"
                      value={room.childAges[childIndex] || ""}
                      onChange={(e) =>
                        handleAgeChange(roomIndex, childIndex, parseInt(e.target.value))
                      }
                      min={2}
                      max={12}
                      placeholder={`Child ${childIndex + 1} Age`}
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  </div>
                ))}
              </div>
            ))}

            {rooms.length < MAX_ROOMS && (
              <button
                onClick={handleAddRoom}
                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md mt-4"
              >
                Add Room
              </button>
            )}

            <button
              onClick={handleApply}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md mt-4"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelPassenger;
