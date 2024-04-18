import React, { useState } from 'react';
import ReportDialog from './dilouge'; // Assuming the correct path to your ReportDialog component\
import {Button} from '@/common/index';

export default function DialogOpen() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className='flex flex-col  lg:my-[10%] mt-[35%] items-center justify-center'>
      <div className='text-center lg:text-2xl md:text-xl text-md font-bold my-9'>Hello Master, click on Reports to check the data</div>
      <Button onClick={handleOpenDialog}  className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4  w-32 rounded'>Reports</Button>
      {dialogOpen && <ReportDialog onClose={handleCloseDialog} />}
    </div>
  );
}
