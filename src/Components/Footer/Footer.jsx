import React from "react";

const Footer = () => {
  const links = [
    [
      "NCERT",
      "NCERT Solutions",
      "NCERT Solutions for Class 12",
      "NCERT Solutions for Class 12 Maths",
      "NCERT Solutions for Class 12 Physics",
      "NCERT Solutions for Class 12 Chemistry",
      "NCERT Solutions for Class 12 Biology",
      "NCERT Solutions for Class 12 Business Studies",
      "NCERT Solutions for Class 12 Economics",
      "NCERT Solutions for Class 12 Accountancy",
      "NCERT Solutions for Class 12 English",
      "NCERT Solutions for Class 12 Hindi",
    ],
    [
      "NCERT Solutions for Class 11",
      "NCERT Solutions for Class 11 Maths",
      "NCERT Solutions for Class 11 Physics",
      "NCERT Solutions for Class 11 Chemistry",
      "NCERT Solutions for Class 11 Biology",
      "NCERT Solutions for Class 11 Business Studies",
      "NCERT Solutions for Class 11 Economics",
      "NCERT Solutions for Class 11 Accountancy",
      "NCERT Solutions for Class 11 English",
      "NCERT Solutions for Class 11 Hindi",
    ],
    [
      "NCERT Solutions for Class 10",
      "NCERT Solutions for Class 10 Maths",
      "NCERT Solutions for Class 10 Science",
      "NCERT Solutions for Class 10 English",
      "NCERT Solutions for Class 10 Social Science",
      "NCERT Solutions for Class 10 Hindi",
      "NCERT Solutions for Class 9",
      "NCERT Solutions for Class 9 Maths",
      "NCERT Solutions for Class 9 Science",
      "NCERT Solutions for Class 9 English",
      "NCERT Solutions for Class 9 Social Science",
      "NCERT Solutions for Class 9 Hindi",
    ],
    [
      "NCERT Solutions for Class 8",
      "NCERT Solutions for Class 8 Maths",
      "NCERT Solutions for Class 8 Science",
      "NCERT Solutions for Class 8 English",
      "NCERT Solutions for Class 8 Social Science",
      "NCERT Solutions for Class 8 Hindi",
      "NCERT Books",
      "NCERT Books Class 12",
      "NCERT Books Class 11",
      "NCERT Books Class 10",
      "NCERT Books Class 9",
      "NCERT Books Class 8",
    ],
  ];

  return (
    <div className="bg-[#f0f0f0]">
      {" "}
      <div className="sm:px-[80px] px-[40px] sm:py-[30px] py-[15px] ">
        <h1 className="text-3xl font-bold mb-6">Study material</h1>
        <h2 className="text-[16px] font-semibold mb-4">NCERT</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {links.map((column, index) => (
            <div key={index} className="space-y-2">
              {column.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="block text-black hover:text-orange-500 underline-none "
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
