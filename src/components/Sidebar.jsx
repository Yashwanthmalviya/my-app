import React from 'react';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';
import { FaTh, FaUserFriends, FaTasks, FaUsersCog, FaShieldAlt, FaChartBar } from 'react-icons/fa';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo-container">
                <div className="logo">
                    <span>FS</span>
                </div>
                <span className="logo-text">FinSage ERP</span>
            </div>

            <div className="menu-items">
                <div className="menu-item">
                    <FaTh className="icon" />
                    <Link to="/dashboard"><span>Dashboard</span></Link>
                </div>

                <div className="menu-item">
                    <FaUserFriends className="icon" />
                    <Link to="/team-manager-overview"><span>Team Management</span></Link>
                </div>

                <div className="menu-item">
                    <FaTasks className="icon" />
                    <Link to="/assign-task"><span>Assign Task</span></Link>
                </div>

                <div className="menu-item">
                    <FaUsersCog className="icon" />
                    <Link to="/team-manager-overview"><span>Team Managers</span></Link>
                </div>

                <div className="menu-item">
                    <FaShieldAlt className="icon" />
                    <Link to="/administrative-control"><span>Administrative Control</span></Link>
                </div>

                <div className="menu-item">
                    <FaChartBar className="icon" />
                    <Link to="/performance-reports"><span>Performance Reports</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
