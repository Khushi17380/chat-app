import React from 'react';
import CreateRoomBtnModal from './dashboard/CreateRoomBtnModel';
import DashboardToogle from './dashboard/DashboardToogle';

const Sidebar = () => {
  return (
    <div className="h-100 pt-2">
      <div>
        <DashboardToogle />
        <CreateRoomBtnModal />
      </div>
      botttom
      
    </div>
  )
}

export default Sidebar
