import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AssignTask.css";

function AssignTask() {
    const [managers, setManagers] = useState([]);
    const [selectedManager, setSelectedManager] = useState("");
    const [targets, setTargets] = useState({
        monthlyTarget: "",
        quarterlyTarget: "",
        yearlyTarget: "",
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch managers on component mount
    useEffect(() => {
        const fetchManagers = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) throw new Error("No auth token found");

                const response = await axios.get("https://erp-r0hx.onrender.com/api/admin/managers", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log("API Response:", response.data); // Debugging

                if (Array.isArray(response.data)) {
                    setManagers(response.data); // Ensure it's an array
                } else if (response.data.managers && Array.isArray(response.data.managers)) {
                    setManagers(response.data.managers); // Handle wrapped response
                } else {
                    console.error("Unexpected API response format:", response.data);
                    setManagers([]); // Prevent errors
                }
            } catch (err) {
                console.error("Error fetching managers:", err);
                setError(err.message);
                setManagers([]); // Prevent breaking `.map()`
            }
        };

        fetchManagers();
    }, []);

    // Handle input changes for targets
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTargets({ ...targets, [name]: value });
    };

    // Handle form submission to assign targets
    const handleAssignTargets = async (e) => {
        e.preventDefault();
        if (!selectedManager) {
            setError("Please select a manager.");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const token = localStorage.getItem("token");
            if (!token) throw new Error("No auth token found");

            await axios.post(
                "https://erp-r0hx.onrender.com/api/admin/manager-targets",
                {
                    managerId: selectedManager,
                    monthly: Number(targets.monthlyTarget),
                    quarterly: Number(targets.quarterlyTarget),
                    yearly: Number(targets.yearlyTarget),
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            alert("Targets assigned successfully!");
            setTargets({ monthlyTarget: "", quarterlyTarget: "", yearlyTarget: "" });
        } catch (err) {
            console.error("Error assigning targets:", err);
            setError(err.response?.data?.message || "Failed to assign targets.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="assign-main-content">
            {/* Page Header */}
            <div className="header">
                <div className="title">Assign Sales Targets</div>
                {/* <input type="text" placeholder="Search here..." className="search-box" /> */}
            </div>

            {/* Assign Targets Section */}
            <div className="assign-targets">
                <h2>Assign Targets</h2>
                <p>Select a manager and assign sales targets.</p>

                {error && <div className="error">Error: {error}</div>}

                <form onSubmit={handleAssignTargets} className="assign-form">
                    <select
                        name="manager"
                        value={selectedManager}
                        onChange={(e) => setSelectedManager(e.target.value)}
                        required
                    >
                        <option value="">Select Manager</option>
                        {Array.isArray(managers) && managers.length > 0 ? (
                            managers.map((manager) => (
                                <option key={manager.id} value={manager.id}>
                                    {manager.name}
                                </option>
                            ))
                        ) : (
                            <option disabled>No managers available</option>
                        )}
                    </select>

                    <input
                        type="number"
                        name="monthlyTarget"
                        placeholder="Monthly Target"
                        value={targets.monthlyTarget}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="quarterlyTarget"
                        placeholder="Quarterly Target"
                        value={targets.quarterlyTarget}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="yearlyTarget"
                        placeholder="Yearly Target"
                        value={targets.yearlyTarget}
                        onChange={handleInputChange}
                        required
                    />

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? "Assigning..." : "Assign Targets"}
                    </button>
                </form>
            </div>

            {/* Assigned Targets Table */}
            <div className="assigned-targets">
                <h2>Managers & Assigned Targets</h2>
                <table className="task-table">
                    <thead>
                        <tr>
                            <th>Manager</th>
                            <th>Monthly Target</th>
                            <th>Quarterly Target</th>
                            <th>Yearly Target</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(managers) && managers.length > 0 ? (
                            managers.map((manager) => (
                                <tr key={manager.id}>
                                    <td>{manager.name}</td>
                                    <td>${Number(manager.assignedTargets?.monthly || 0).toLocaleString()}</td>
                                    <td>${Number(manager.assignedTargets?.quarterly || 0).toLocaleString()}</td>
                                    <td>${Number(manager.assignedTargets?.yearly || 0).toLocaleString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No managers found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AssignTask;
