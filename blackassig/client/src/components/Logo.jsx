import React from 'react';
import './Logo.css';

function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

  return (
    <div className="logobox d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
            {/* <img src="" alt=""/> */}
            <span className="d-none d-lg-block">AdminDasboard</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn" onClick={handleToggleSideBar}></i>            
    </div>
  )
}

export default Logo