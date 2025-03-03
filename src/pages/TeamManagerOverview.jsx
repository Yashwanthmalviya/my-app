import React, { useState } from "react";
import "../styles/TeamManagerOverview.css";
import { FaSearch, FaPlus, FaPen, FaTrash } from "react-icons/fa";

function TeamManagerOverview() {
    const [managers, setManagers] = useState([
        { id: 1, name: "Manager 1", email: "M1@gmail.com", phone: "125125125", team: "Team 1" },
        { id: 2, name: "Manager 2", email: "M2@gmail.com", phone: "569741524", team: "Team 2" },
        { id: 3, name: "Manager 3", email: "M3@gmail.com", phone: "456789123", team: "Team 3" },
        { id: 4, name: "Manager 4", email: "M4@gmail.com", phone: "369852147", team: "Team 4" },
        { id: 5, name: "Manager 5", email: "M5@gmail.com", phone: "741852963", team: "Team 5" },
    ]);

    return (
        <div className="main-content">
            {/* Header Section */}
            <div className="header">
                <h1 className="title">Team Manager Overview</h1>
                <div className="search-container">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search managers..." className="search-input" />
                </div>
                <button className="add-button">
                    <FaPlus className="plus-icon" />
                    Add Manager
                </button>
            </div>

            {/* Managers Table */}
            <div className="managers-section">
                <h2>Team Managers</h2>
                <div className="managers-table">
                    <div className="table-header">
                        <div className="column">Name</div>
                        <div className="column">Email</div>
                        <div className="column">Phone</div>
                        <div className="column">Team</div>
                        <div className="column actions">Actions</div>
                    </div>

                    {managers.map((manager, index) => (
                        <div key={manager.id} className={`table-row ${index % 2 === 0 ? "even" : "odd"}`}>
                            <div className="column">{manager.name}</div>
                            <div className="column">{manager.email}</div>
                            <div className="column">{manager.phone}</div>
                            <div className="column">{manager.team}</div>
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
