"use client"; // This is a client component
import React, { useState } from "react";
import Button from "@/common/button";

const ReportDialog = ({ onClose }) => {
  const handleClose = () => {
    console.log("Close button clicked...");
    onClose();
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [reportsPerPage, setReportsPerPage] = useState(4);

  const handleRowsPerPageChange = (e) => {
    setReportsPerPage(parseInt(e.target.value)); // Parse value to integer
    setCurrentPage(1); // Reset current page to 1 when the number of rows per page changes
  };

  const reports = [
    {
      name: "APP_URL_USAGE (Exclude_Half Days)_3_6_2021_3_31_2021.csv",
      date: " 17:00 PM 20.07.2021",
    },
    {
      name: "APP_URL_USAGE (Exclude_Half Days)_3_6_2021_3_31_2021.csv",
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
    <div
      className="dialog relative bg-white border border-gray-300 rounded-xl shadow-md lg:w-[900px] md:w-[800px] sm:w-[600px] w-[410px] h-auto"
      style={{ position: 'relative', top: '-200px' }}
    >
      <div className="flex justify-center items-center lg:space-x-[250px] md:space-x-[200px] sm:space-x-[120px] space-x-[25px]">
        <div className="my-3"></div>
        <div className=" my-3 text-center text-xl font-bold">
          Recently Generated Reports
        </div>
        <div>
          <Button onClick={handleClose}>Close</Button>
        </div>
      </div>

      <table className="flex flex-col w-full">
        <thead className=" bg-slate-200">
          <tr className="flex lg:space-x-72 md:space-x-64 sm:space-x-40 space-x-24 mx-9">
            <th>Date</th>
            <th>Report Name</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {currentReports.map((report, index) => (
            <tr key={index} className="flex flex-row lg:space-x-20 space-x-2 mt-6 mx-5">
              <td>{report.date}</td>
              <td>{report.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full h-1 bg-slate-400 mt-64"></div>
      <div className="paginator flex flex-row space-x-2 items-center justify-center my-3 mx-3 ">
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
            className={`w-10 h-10 border rounded-md  ${
              currentPage === page ? "bg-red-400" : ""
            }`}
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

        <div className="flex flex-row pl-9 space-x-3">
          <div>Rows per page:</div>
          <select value={reportsPerPage} onChange={handleRowsPerPageChange}>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            {/* Add more options for different values if needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ReportDialog;
