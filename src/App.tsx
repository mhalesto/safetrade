import './App.css';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { FaAngular, FaWarehouse } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Dashboard from './pages/dashboard';

function App() {
  const { collapseSidebar } = useProSidebar();
  const [sideBarRouter, setSideBarRouter] = useState('dashboard');

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar backgroundColor='#122046' className='h-screen'>
        <Menu>
          <MenuItem icon={''} className='text-white text-center font-bold font-mont text-3xl mt-3'> Safetrade </MenuItem>
          <MenuItem icon={''}>  </MenuItem>

          <MenuItem onClick={() => setSideBarRouter('dashboard')} className='text-white text-lg'> Dashboard </MenuItem>
          <MenuItem onClick={() => setSideBarRouter('shipments')} className='text-white text-lg'> Shipments </MenuItem>
          <MenuItem onClick={() => setSideBarRouter('projects')} className='text-white text-lg'> Projects </MenuItem>
          <MenuItem onClick={() => setSideBarRouter('businesses')} className='text-white text-lg'> Businesses </MenuItem>
          <MenuItem onClick={() => setSideBarRouter('news')} className='text-white text-lg'> News </MenuItem>


        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>

        {
          (sideBarRouter === 'dashboard') ?
            (
              <Dashboard />
            ) : (sideBarRouter === 'shipments') ? (
              <div>Shipments</div>
            ) : (sideBarRouter === 'projects') ? (
              <div>Projects</div>
            ) : (sideBarRouter === 'businesses') ? (
              <div>Businesses</div>
            ) : (sideBarRouter === 'news') ? (
              <div>News</div>
            ) : (
              <div>404</div>
            )
        }

      </main>
    </div>
  )
}

export default App;
