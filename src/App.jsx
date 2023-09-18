import { useEffect, useState } from "react";
import { useMyStore } from "./store";
import star from "../public/star.svg";
import heart from "../public/heart.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function App() {
  const {
    count,
    setCount,
    setDicrease,
    fetchData,
    data,
    fetchWeatherData,
    weatherData,
    fetchAirBnBData,
    airBnB,
    setCountAnB,
    count_anb,
  } = useMyStore();
  useEffect(() => {
    fetchData();
    fetchWeatherData();
    fetchAirBnBData();
  }, [count_anb]);
  console.log(airBnB);
  const handleClick = () => {
    setCountAnB();
  };

  return (
    <>
      {/* <button
        className="btn-success py-[10px] px-[18px] rounded-[20px] mx-auto  block "
        onClick={setDicrease}
      >
        -
      </button>
      <p className="bg-violet-600 text-center text-white w-[200px] mx-auto rounded-[20px] my-[20px] duration-150 hover:scale-[1.2]">
        {count}
      </p>
      <button
        className={`btn-neutral px-[18px] py-[10px] rounded-[20px] mx-auto  block my-10`}
        onClick={setCount}
      >
        +
      </button>
      <table className="table table-bordered w-[550px] mx-auto">
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
        </tr>
        {data.map((d) => (
          <tr>
            <td>{d.name}</td>
            <td>{d.phone}</td>
          </tr>
        ))}
      </table>
      <hr />
      <hr />
      <table className="table table-bordered mx-auto w-[550px]">
        <tr>
          <th>dt</th>
          <th>Phone Number</th>
        </tr>
        {weatherData.map((d) => (
          <tr>
            <td>{d.main.feels_like}</td>
            <td>{d.weather[0].main}</td>
          </tr>
        ))}
      </table> */}
      {/* <hr />
      <hr />
      <table className="table table-bordered mx-auto w-[550px]">
        <tr>
          <th>dt</th>
          <th>Phone Number</th>
        </tr>
      </table>{" "} */}

      <div className="grid my-grid  w-[90%] mx-auto gap-6 p-6 ">
        {airBnB.map((d) => (
          <div key={d.dt} className="card  my-card">
            <div className="relative">
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
                loop={true}
              >
                <SwiperSlide>
                  <img
                    className="w-[400px] h-[330px] rounded-lg"
                    src={d.picture_url.url}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-[400px] h-[330px] rounded-lg "
                    src={d.picture_url.url}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-[400px] h-[330px] rounded-lg "
                    src={d.picture_url.url}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-[400px] h-[330px] rounded-lg "
                    src={d.picture_url.url}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-[400px] h-[330px] rounded-lg "
                    src={d.picture_url.url}
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">{d.smart_location} </p>

                <p className="flex gap-2 ">
                  <img src={star} alt="" />
                  {d.review_scores_rating}
                </p>
              </div>
              <p className="text-gray-400">{d.state}</p>
              <p>{d.calendar_last_scraped} </p>
              <p>${d.price} nights</p>
            </div>
            <img
              className="absolute w-[24px] top-5 z-10 right-5"
              src={heart}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="">
        <h3 className="text-center text-lg text-black font-semibold p-4">
          Continued exploring amazing views
        </h3>

        <button
          onClick={handleClick}
          className="btn mx-auto flex my-[10ox] bg-black text-white"
        >
          Show more
        </button>
      </div>
    </>
  );
}

export default App;
