"use client"; // This is a client component
import React, { useState } from "react";
import Button from "@/common/button";

const ReportDialog = ({ onClose }) => {
  const handleClose = () => {
    console.log("Close button clicked...");
    onClose();
  };
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 4;

  const reports = [
    {
      name: "APP_URL_USAGE (Exclude_Half Days)_3_6_2021_3_31_2021.csv",
      date: "20.07.2021",
    },
    {
      name: "RUR L1_01_01_2021_31_03_2021.csv",
      date: "17:00 PM 19.07.2021",
    },
    {
      name: "RUR L2_(Exclude_NonWorking Days)_4_1_2021_4_1_2021.csv",
      date: "15:00 PM 19.07.2021",
    },
    {
      name: "RUR L2_(Exclude_NonWorking Days)_4_1_2021_4_1_2021.csv",
      date: "15:00 PM 19.07.2021",
    },
    {
      name: "RUR L2_(Exclude_NonWorking Days)_4_1_2021_4_1_2021.csv",
      date: "15:00 PM 19.07.2021",
    },
    {
      name: "RUR L2_(Exclude_NonWorking Days)_4_1_2021_4_1_2021.csv",
      date: "15:00 PM 19.07.2021",
    },
    // Add more reports here...
  ];

  const totalReports = reports.length;
  const totalPages = Math.ceil(totalReports / reportsPerPage);

  const startIndex = (currentPage - 1) * reportsPerPage;
  const endIndex = Math.min(startIndex + reportsPerPage, totalReports); // Ensure endIndex doesn't exceed totalReports
  const currentReports = reports.slice(startIndex, endIndex);

  const paginate = (pageNumber) => {
    console.log("Paginate called with page number:", pageNumber);
    setCurrentPage(pageNumber);
  };

  console.log("Current page:", currentPage);

  return (
    <div className="dialog absolute bg-white border border-gray-300 rounded-xl shadow-md w-[900px] h-[900px]">
      <div className="flex justify-center items-center space-x-[250px]">
        <div></div>
        <div className=" my-3 text-center text-xl font-bold">
          Recently Generated Reports
        </div>
        <div>
          <Button onClick={handleClose}>Close</Button>
        </div>
      </div>

      <table className="flex flex-col space-x-[350px]  w-full" >
        <thead className=" bg-slate-200">
          <tr >
            <th>Date</th>
            <th>Report Name</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {currentReports.map((report, index) => (
            <tr key={index}>
              <td>{report.date}</td>
              <td>{report.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="paginator space-x-3">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => paginate(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReportDialog;
