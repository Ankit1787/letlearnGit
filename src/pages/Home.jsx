import { useEffect, useRef } from "react";
import { useState } from "react";
import Modal from "../components/Modals/Modal";
import Flight from "../components/Flight/Flight";
import { getMethod } from "../utils/methods";

const Home = () => {
  //defining state
  const [showModal, setShowModal] = useState(false);
  const [Flights, setFlights] = useState([]);
  //headings
  const tableHeading = ["origin", "destination", "date"];

  // create a ref for dom manipulatioin
  const modalRef = useRef(null);

  // to show modal

  const handleShow = () => {
    setShowModal(true);
  };

  //to remove modal
  const handleClose = () => {
    modalRef.current.classList.add("slide-out-bottom");

    setTimeout(() => {
      setShowModal(false);
      modalRef.current.classList.remove("slide-out-bottom");
    }, 500);
  };

  const handleFlight = () => {
    handleShow();
    console.log("clicked");
  };

  useEffect(() => {
    getMethod("flights/all").then((res) => {
      setFlights(res.Flights);
    });
  }, []);
  return (
    <>
      <div className=" py-16 w-[80%] xl:w-[70%] mx-auto ">
        <h1 className=" w-full text-[2rem] 2xl:text-[2.7rem] text-secondary">
          Bookings
        </h1>

        <div className="mt-8  shadow-md rounded-md">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Flight Number
                  </th>
                  {tableHeading.map((item, index) => (
                    <th index={index} scope="col" className="px-6 py-3">
                      <div className="flex items-center">
                        {item}
                        <a href="#"> </a>
                      </div>
                    </th>
                  ))}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Flights.length>0 &&Flights.map((flight, index) => (
                  <tr index={index} className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                    {flight?.flightNo}
                    </th>
                    <td className="px-6 py-4">{flight?.departureCity}</td>
                    <td className="px-6 py-4">{flight?.arrivalCity}</td>
                    <td className="px-6 py-4">{flight?.departureDate}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={handleFlight}
                        className="font-medium text-blue-600  hover:underline"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav
              class="flex px-6 py-3  items-center flex-column flex-wrap md:flex-row justify-between pt-4"
              aria-label="Table navigation"
            >
              <span class="text-sm font-normal text-gray-500  mb-4 md:mb-0 block w-full md:inline md:w-auto">
                Showing <span class="font-semibold text-gray-900 ">1-10</span>{" "}
                of <span class="font-semibold text-gray-900 ">1000</span>
              </span>
              <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700     "
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700   "
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700     "
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {showModal && (
          <Modal
            modalClasses="bg-semiTransparent"
            modalRef={modalRef}
            className="w-[70%] "
            handleClose={handleClose}
          >
            <Flight />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Home;
