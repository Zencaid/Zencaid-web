"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const hospitals = [
  {
    name: "Mayo Clinic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Mayo_Clinic_logo.svg",
  },
  {
    name: "Cleveland Clinic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Cleveland_Clinic_logo.svg",
  },
  {
    name: "Johns Hopkins",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Johns_Hopkins_Hospital_logo.svg",
  },
  {
    name: "Mount Sinai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Mount_Sinai_logo.svg",
  },
  {
    name: "Charité – Berlin",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Charite_Logo.svg",
  },
  {
    name: "St. Jude Children’s Research Hospital",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f0/St_Jude_Children%27s_Research_Hospital_logo.svg",
  },
  {
    name: "Massachusetts General",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Massachusetts_General_Hospital_logo.svg",
  },
  {
    name: "Sheba Medical Center",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/25/Sheba_Medical_Center_logo.png",
  },
];

const HospitalCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "20px", background: "#f8f9fa" }}>
      <Slider {...settings}>
        {hospitals.map((hospital, index) => (
          <div key={index} style={{ textAlign: "center", padding: "10px" }}>
            <img
              src={hospital.logo}
              alt={hospital.name}
              style={{
                height: "60px",
                objectFit: "contain",
                margin: "0 auto",
              }}
            />
            <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>{hospital.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HospitalCarousel;