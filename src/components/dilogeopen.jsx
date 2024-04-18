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
    <div className='flex flex-col  my-[20%] items-center justify-center'>
      <div className='text-center text-2xl font-bold'>Hello Master, click here to check the reports</div>
      <Button  onClick={handleOpenDialog}>Reports</Button>
      {dialogOpen && <ReportDialog onClose={handleCloseDialog} />}
    </div>
  );
}
