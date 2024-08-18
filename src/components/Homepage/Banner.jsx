import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full mt-10">
      {banners.map((banner, idx) => (
        <div
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(7, 25, 82, 0.9), rgba(0, 0, 0, 0.7)), url(/assets/images/banner/${
              idx + 1
            }.jpg)`,
          }}
          key={idx}
          id={`slide${idx + 1}`}
          className="carousel-item relative bg-top bg-no-repeat bg-cover w-full h-[90vh]"
        >
          {/* Navigation Buttons */}
          <div className="absolute flex bottom-12 right-12 space-x-4">
            <a
              href={banner.prev}
              className="btn btn-circle border-0  bg-white text-gray-800 hover:bg-gray-300"
            >
              ❮
            </a>
            <a
              href={banner.next}
              className="btn btn-circle border-0 bg-red-600 text-white hover:bg-red-600"
            >
              ❯
            </a>
          </div>

          {/* Banner Content */}
          <div className="absolute left-16 pl-10 top-1/2 -translate-y-1/2 transform text-white">
            <h2 className="text-5xl font-bold">{banner.title}</h2>
            <p className="mt-4 max-w-md">{banner.des}</p>
            <div className="mt-10">
              {/* Red Primary Button */}
              <button className="btn btn-primary text-white px-6 py-3  rounded-sm mr-4">
                Discover More
              </button>
              {/* Outline Button */}
              <button className="border border-white text-white px-6 py-3 hover:bg-[#FF3811] hover:text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const banners = [
  {
    title: ["Affordable Price", "For Car Servicing"],
    des: "There are many variations of passages available, but the majority have suffered alteration in some form.",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: ["Quality Car", "Maintenance Services"],
    des: "Our services are designed to ensure your car runs smoothly and efficiently, keeping you safe on the road.",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: ["Expert Technicians", "At Your Service"],
    des: "We have a team of highly trained professionals who are dedicated to providing top-notch car care services.",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: ["Comprehensive Car", "Inspection"],
    des: "Get a detailed car inspection report to know the exact condition of your vehicle and avoid unexpected breakdowns.",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
