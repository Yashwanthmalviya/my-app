import React from 'react';
import '../styles/AssignTask.css';

function AssignTask() {
    return (
        <div className="main-content">
            {/* Page Header */}
            <div className="header">
                <div className="title">Assign Task</div>
                <input type="text" placeholder="Search here..." className="search-box" />
                <button className="add-button">+ Add New Target</button>
            </div>

            {/* Assign Targets Section */}
            <div className="assign-targets">
                <h2>Assign Targets</h2>
                <p>Manage and track team targets</p>

                {/* Target Stats */}
                <div className="stats">
                    <div className="stat-box">Total Managers</div>
                    <div className="stat-box">Active Targets</div>
                    <div className="stat-box">Completion Rate</div>
                </div>

                {/* Task Assignment Table */}
                <table className="task-table">
                    <thead>
                        <tr>
                            <th>Manager</th>
                            <th>Department</th>
                            <th>Monthly Target</th>
                            <th>Quarterly Target</th>
                            <th>Yearly Target</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Manager 1</td>
                            <td>Sales</td>
                            <td>$25,000</td>
                            <td>$50,000</td>
                            <td>$350,000</td>
                            <td><span className="status met">Met</span></td>
                            <td>✏️ 🗑️</td>
                        </tr>
                        <tr>
                            <td>Manager 2</td>
                            <td>Marketing</td>
                            <td>$18,000</td>
                            <td>$40,000</td>
                            <td>$405,000</td>
                            <td><span className="status behind">Behind</span></td>
                            <td>✏️ 🗑️</td>
                        </tr>
                        <tr>
                            <td>Manager 3</td>
                            <td>Operations</td>
                            <td>$30,000</td>
                            <td>$65,000</td>
                            <td>$250,000</td>
                            <td><span className="status pending">Pending</span></td>
                            <td>✏️ 🗑️</td>
                        </tr>
                        <tr>
                            <td>Manager 4</td>
                            <td>Marketing</td>
                            <td>$15,000</td>
                            <td>$36,000</td>
                            <td>$150,000</td>
                            <td><span className="status met">Met</span></td>
                            <td>✏️ 🗑️</td>
                        </tr>
                        <tr>
                            <td>Manager 5</td>
                            <td>Sales</td>
                            <td>$20,000</td>
                            <td>$42,000</td>
                            <td>$125,000</td>
                            <td><span className="status pending">Pending</span></td>
                            <td>✏️ 🗑️</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AssignTask;
