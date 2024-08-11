import { useRef, useState } from "react";
import { MdOutlineFlight } from "react-icons/md";
import Modal from "../Modals/Modal";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
const Flight = () => {
  const [showDeparture, setShowDeparture] = useState(false);
  const [showArrival, setShowArrival] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("12:00:00");
  const [showTerminal, setShowTerminal] = useState(null);
  const [showGate, setShowGate] = useState(null);

  const modalRef = useRef(null);

  const handleClose = () => {
    modalRef.current.classList.add("slide-out-bottom");

    setTimeout(() => {
      setShowDeparture(false);
      setShowArrival(false);
      setShowTerminal(null);
      setShowGate(null);
      modalRef.current.classList.remove("slide-out-bottom");
    }, 500);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const changeGate = (type) => {
    setShowGate(type);
  };
  const changeTerminal = (type) => {
    setShowTerminal(type);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between">
          <h1 className="text-secondary text-md">163632374H </h1>
          <h1 className="text-secondary text-md">Confirmed </h1>
        </div>

        <div className="bg-ternary rounded mt-3 w-full  p-6 flex items-center justify-between">
          <div className="">
            <div className="h-fit w-fit mx-auto">
              <div className="rounded-[50%] p-4  bg-quater flex items-center justify-center">
                <MdOutlineFlight className="text-3xl text-white rotate-45  " />
              </div>
            </div>
            <div className="mx-auto text-center">
              <h1 className="font-bold text-xl">DL</h1>
              <h1>New Delhi</h1>
            </div>
          </div>
          <div className="">
            <MdOutlineFlight className="text-[3rem] text-gray-300  rotate-90 " />
          </div>
          <div className="text-right">
            <div className="h-fit w-fit mx-auto ">
              <div className="rounded-[25px] p-4  bg-quater text-white flex items-center justify-center">
                Checkin
              </div>
            </div>
            <div className="mx-auto text-center ">
              <h1 className="font-bold text-xl ">BBI</h1>
              <h1>Bhubaneswar (T1)</h1>
            </div>
          </div>
        </div>

        <div className="p-6 flex justify-between text-secondary">
          <div className="">
            <h1 className="text-xl font-bold leading-6">Departure</h1>
            <h1 className="text-lg font-bold">13:00</h1>
            <h1 className="text-sm text-gray-400  ">
              Scheduled 23Feb 13:00 AM
            </h1>
            <h1 className="text-sm font-bold text-blue-500 mt-2 ">
              {" "}
              Indira Gandhi International Airport
            </h1>

            <div className="flex gap-1 text-lg mt-3 text-secondary">
              <h1 className="">Terminal</h1>
              <h1 className="font-bold">3</h1>
            </div>
            <div className="flex gap-3">
              <h1>Gate</h1>
              <h1>30</h1>
            </div>
          </div>
          <div className="text-right">
            <h1 className="text-xl font-bold leading-6">Arrival</h1>
            <h1 className="text-lg text-yellow-500 text- font-bold">13:00</h1>
            <h1 className="text-sm text-gray-400  ">
              Scheduled 23Feb 13:00 AM
            </h1>

            <h1 className="text-sm font-bold text-blue-500 mt-2 ">
              {" "}
              Indira Gandhi International Airport
            </h1>

            <div className="flex gap-1  justify-end text-right mt-3 text-lg text-secondary">
              <h1 className="">Terminal</h1>
              <h1 className="font-bold">3</h1>
            </div>
            <div className="flex gap-1 text-right justify-end text-lg text-secondary">
              <h1 className="">Gate</h1>
              <h1 className="">30</h1>
            </div>
          </div>
        </div>

        <div className="p-6 flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="">
              <button
                onClick={() => setShowDeparture(true)}
                className="bg-secondary active:scale-105 transition-all ease-in duration-100  text-white rounded-[25px] py-2 px-6"
              >
                {" "}
                Change Departure
              </button>
            </div>
            <div className="">
              <button
                onClick={() => changeTerminal("d")}
                className="bg-secondary active:scale-105 transition-all ease-in duration-100  text-white rounded-[25px] py-2 px-6"
              >
                {" "}
                Change Terminal
              </button>
            </div>
            <div className="">
              <button
                onClick={() => changeGate("d")}
                className="bg-secondary active:scale-105 transition-all ease-in duration-100  text-white rounded-[25px] py-2 px-6"
              >
                {" "}
                Change Gate
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="flex flex-col gap-2">
              <div className="">
                <button
                  onClick={() => setShowArrival(true)}
                  className="bg-secondary active:scale-105 transition-all ease-in duration-100  text-white rounded-[25px] py-2 px-6"
                >
                  {" "}
                  Change Arrival
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => changeTerminal("a")}
                  className="bg-secondary active:scale-105 transition-all ease-in duration-100  text-white rounded-[25px] py-2 px-6"
                >
                  {" "}
                  Change Terminal
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => changeGate("a")}
                  className="bg-secondary active:scale-105 transition-all ease-in duration-100  text-white rounded-[25px] py-2 px-6"
                >
                  {" "}
                  Change Gate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {(showDeparture ||
        showArrival ||
        showTerminal === "a" ||
        showTerminal === "d" ||
        showGate === "a" ||
        showGate === "d") && (
        <Modal
          modalClasses=""
          modalRef={modalRef}
          className="w-[70%]  z-[10000] shadow-lg p-6 "
          handleClose={handleClose}
        >
          {showDeparture || showArrival ? (
            <>
              {" "}
              <div className=" text-secondary font-bold text-lg mb-5">
                Change {showArrival ? "Arrival" : "Departure"}
              </div>
              <div>
                <div className="mb-4">
                  <label className="block mb-2">Select Date:</label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    className="p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block mb-2">Select Time:</label>
                  <TimePicker
                    onChange={handleTimeChange}
                    value={selectedTime}
                    disableClock={true}
                    format="HH:mm:ss"
                    className="p-2 border rounded"
                  />
                </div>

                <button className="py-2 px-6 rounded-[25px] bg-secondary text-white mt-3 ">
                  submit
                </button>
              </div>
            </>
          ) : showTerminal === "a" || showTerminal === "d" ? (
            <div>
              <div className=" text-secondary font-bold text-lg mb-5">
                Change Terminal{" "}
                {showTerminal === "a" ? "At Arrival" : "At Departure"}
              </div>
              <div className="   ">
                <select className="p-2 w-[100px] border rounded">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <button className="bg-secondary ml-4 active:scale-105 transition-all ease-in duration-100  text-white rounded-[25px] py-2 px-6">
                  Submit
                </button>
              </div>
            </div>
          ) : showGate === "a" || showGate === "d" ? (
            <div className="">

           
            <div className=" text-secondary font-bold text-lg mb-5">
              Change Gate {showGate === "a" ? "At Arrival" : "At Departure"}
            </div>
            <div className="   ">
                <select className="p-2 w-[100px] border rounded">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <button className="bg-secondary ml-4 active:scale-105 transition-all ease-in duration-100  text-white rounded-[25px] py-2 px-6">
                  Submit
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </Modal>
      )}
    </>
  );
};

export default Flight;
