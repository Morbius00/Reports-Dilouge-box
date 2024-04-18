import React, { useState } from 'react';
import ReportDialog from './dilouge'; // Assuming the correct path to your ReportDialog component\
import Button from '../common/button';

export default function DialogOpen() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className='flex flex-col  lg:my-[20%] my-[35%] items-center justify-center'>
      <div className='text-center lg:text-2xl md:text-xl text-md font-bold my-9'>Hello Master, click here to check the reports</div>
      <Button onClick={handleOpenDialog}>Reports</Button>
      {dialogOpen && <ReportDialog onClose={handleCloseDialog} />}
    </div>
  );
}
