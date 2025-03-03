import React, { useState } from 'react';
import '../styles/TeamManagerOverview.css';
import { FaSearch, FaPlus, FaPen, FaTrash } from 'react-icons/fa';

function TeamManagerOverview() {
    const [managers, setManagers] = useState([
        { id: 1, name: 'Manager 1', email: 'M1@gmail.com', phone: '125125125', team: 'Team 1' },
        { id: 2, name: 'Manager 2', email: 'M2@gmail.com', phone: '569741524', team: 'Team 2' },
        { id: 3, name: 'Manager 3', email: 'M3@gmail.com', phone: '456789123', team: 'Team 3' },
        { id: 4, name: 'Manager 4', email: 'M4@gmail.com', phone: '369852147', team: 'Team 4' },
        { id: 5, name: 'Manager 5', email: 'M5@gmail.com', phone: '741852963', team: 'Team 5' },
    ]);

    return (
        <div className="main-content">
            <div className="header">
                <div className="title">Team Manager Overview</div>
                <div className="search-bar">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search here..." />
                </div>
                <button className="add-button">
                    <FaPlus className="plus-icon" />
                    Add New Manager
                </button>
            </div>

            <div className="managers-section">
                <h2>Team Managers</h2>

                <div className="managers-table">
                    <div className="table-header">
                        <div className="column name">Name</div>
                        <div className="column email">Email</div>
                        <div className="column phone">Phone</div>
                        <div className="column teams">Teams</div>
                        <div className="column actions">Actions</div>
                    </div>

                    {managers.map((manager) => (
                        <div key={manager.id} className="table-row">
                            <div className="column name">{manager.name}</div>
                            <div className="column email">{manager.email}</div>
                            <div className="column phone">{manager.phone}</div>
                            <div className="column teams">{manager.team}</div>
                            <div className="column actions">
                                <button className="edit-btn"><FaPen /></button>
                                <button className="delete-btn"><FaTrash /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamManagerOverview;