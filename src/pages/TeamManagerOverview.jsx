import React, { useState } from "react";
import "../styles/TeamManagerOverview.css";
import { FaSearch, FaPlus, FaPen, FaTrash, FaTimes } from "react-icons/fa";

function TeamManagerOverview() {
    const [managers, setManagers] = useState([
        { id: 1, name: "Manager 1", email: "M1@gmail.com", phone: "125125125", team: "Team 1" },
        { id: 2, name: "Manager 2", email: "M2@gmail.com", phone: "569741524", team: "Team 2" },
        { id: 3, name: "Manager 3", email: "M3@gmail.com", phone: "456789123", team: "Team 3" },
        { id: 4, name: "Manager 4", email: "M4@gmail.com", phone: "369852147", team: "Team 4" },
        { id: 5, name: "Manager 5", email: "M5@gmail.com", phone: "741852963", team: "Team 5" },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newManager, setNewManager] = useState({
        name: "",
        email: "",
        phone: "",
        team: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Handle Input Change
    const handleAddManager = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const token = localStorage.getItem("token"); // Retrieve token from local storage

        if (!token) {
            setError("Authentication token not found. Please log in.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("https://erp-r0hx.onrender.com/api/manager/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(newManager),
            });

            const data = await response.json();

            console.log("Response Data:", data); // ✅ Debugging response

            if (!response.ok) {
                throw new Error(data.message || "Failed to add manager.");
            }

            // ✅ Update the manager list dynamically
            setManagers((prevManagers) => [...prevManagers, data.manager]);

            // ✅ Reset modal state after success
            setNewManager({ name: "", email: "", phone: "", team: "" });
            setShowModal(false);
        } catch (error) {
            console.error("Error registering manager:", error.message); // ✅ Debugging error
            setError(error.message);
        } finally {
            setLoading(false); // ✅ Ensure loading is set to false in all cases
        }
    };




    return (
        <div className="main-content">
            {/* Header Section */}
            <div className="header">
                <h1 className="title">Team Manager Overview</h1>
                <div className="search-container">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search managers..." className="search-input" />
                </div>
                <button className="add-button" onClick={() => setShowModal(true)}>
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

            {/* Add Manager Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h3>Add New Manager</h3>
                            <FaTimes className="close-icon" onClick={() => setShowModal(false)} />
                        </div>

                        {error && <p className="error-message">{error}</p>}

                        <form onSubmit={handleAddManager} className="modal-form">
                            <input type="text" name="name" placeholder="Name" value={newManager.name} onChange={handleInputChange} required />
                            <input type="email" name="email" placeholder="Email" value={newManager.email} onChange={handleInputChange} required />
                            <input type="text" name="phone" placeholder="Phone" value={newManager.phone} onChange={handleInputChange} required />
                            <input type="text" name="team" placeholder="Team" value={newManager.team} onChange={handleInputChange} required />

                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? "Adding..." : "Add Manager"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
export default TeamManagerOverview;
