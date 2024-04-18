import React from 'react'
import {DownloadIcon} from "@/components/assets";
import Image from 'next/image';

const ReportsData = ({ reports, handleDownload }) => {
    return (
        <table className="flex flex-col w-full">
        <thead className=" bg-slate-200">
          <tr className="flex lg:space-x-72 md:space-x-64 sm:space-x-40 space-x-24 mx-9">
            <th>Date</th>
            <th>Report Name</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} className="flex flex-row  lg:space-x-[108px] md:space-x-[58px] space-x-2 my-8 mx-5">
              <td>{report.date}</td>
              <td>{report.name}</td>
              <td>
                  <button onClick={() => handleDownload(report)}>
                    <Image src={DownloadIcon} alt="Download Icon" width={30} height={30} />
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ReportsData;
  
