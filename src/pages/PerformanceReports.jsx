import React from "react";
import { Table, Button, Form, InputGroup } from "react-bootstrap";
import { FaEdit, FaSearch, FaFilePdf, FaFileExcel } from "react-icons/fa";
import "../styles/PerformanceReports.css";

const PerformanceReports = () => {
    const managers = [
        { id: 1, name: "Manager 1", sales: 20000, target: 25000, rate: 80, incentives: 20000 },
        { id: 2, name: "Manager 2", sales: 17000, target: 18000, rate: 70, incentives: 17000 },
        { id: 3, name: "Manager 3", sales: 28000, target: 30500, rate: 81, incentives: 28000 },
        { id: 4, name: "Manager 4", sales: 14000, target: 16000, rate: 85, incentives: 14000 },
        { id: 5, name: "Manager 5", sales: 17000, target: 20000, rate: 70, incentives: 17000 },
    ];

    return (
        <div className="main-content">
            <div className="content-wrapper">
                <h2 className="mb-3">Performance Report Overview</h2>

                {/* Filters */}
                <div className="filter-container">
                    <Form.Group>
                        <Form.Label>Date Range</Form.Label>
                        <Form.Control type="date" className="custom-input" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Select className="custom-input">
                            <option>All Categories</option>
                            <option>Sales</option>
                            <option>Marketing</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Managers</Form.Label>
                        <Form.Select className="custom-input">
                            <option>All Managers</option>
                            <option>Manager 1</option>
                            <option>Manager 2</option>
                        </Form.Select>
                    </Form.Group>

                    <InputGroup className="search-bar">
                        <Form.Control type="text" placeholder="Search..." className="custom-input" />
                        <Button variant="primary" className="search-btn">
                            <FaSearch />
                        </Button>
                    </InputGroup>
                </div>

                {/* Summary Cards */}
                <div className="summary-container">
                    <div className="summary-card summary-blue">Total Managers</div>
                    <div className="summary-card summary-green">Active Targets</div>
                    <div className="summary-card summary-orange">Completion Rate</div>
                </div>

                {/* Performance Table */}
                <Table striped bordered hover responsive className="performance-table">
                    <thead>
                        <tr>
                            <th>Manager</th>
                            <th>Sales Achieved</th>
                            <th>Target Assigned</th>
                            <th>Achievement Rate</th>
                            <th>Incentives Earned</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {managers.map((manager) => (
                            <tr key={manager.id}>
                                <td>{manager.name}</td>
                                <td>${manager.sales.toLocaleString()}</td>
                                <td>${manager.target.toLocaleString()}</td>
                                <td>{manager.rate}%</td>
                                <td>${manager.incentives.toLocaleString()}</td>
                                <td>
                                    <Button variant="outline-dark" className="edit-btn">
                                        <FaEdit />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {/* Buttons */}
                <div className="button-container">
                    <div>
                        <Button variant="secondary" className="me-2 download-btn">
                            <FaFilePdf /> Download PDF
                        </Button>
                        <Button variant="secondary" className="download-btn">
                            <FaFileExcel /> Download Excel
                        </Button>
                    </div>
                    <div>
                        <Button variant="dark" className="me-2 pagination-btn">Previous</Button>
                        <Button variant="dark" className="pagination-btn">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceReports;
