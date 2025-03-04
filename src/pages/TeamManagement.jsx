
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Container, Row, Col, Card, Table, Button, Navbar, Form, InputGroup } from "react-bootstrap";
import { FaSearch, FaUserPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/TeamManagement.css";

const data = [
    { name: "1", Team1: 9, Team2: 7, Team3: 6, Team4: 8, Team5: 7 },
    { name: "2", Team1: 8, Team2: 6, Team3: 7, Team4: 9, Team5: 8 },
    { name: "3", Team1: 10, Team2: 8, Team3: 6, Team4: 7, Team5: 9 },
    { name: "4", Team1: 7, Team2: 6, Team3: 8, Team4: 9, Team5: 7 },
    { name: "5", Team1: 9, Team2: 7, Team3: 7, Team4: 6, Team5: 8 }
];

const managers = [
    { name: "Manager 1", team: "Team 1", project: "Project 1", completion: "95%", size: 25, performance: "80%" },
    { name: "Manager 2", team: "Team 2", project: "Project 2", completion: "90%", size: 20, performance: "70%" },
    { name: "Manager 3", team: "Team 3", project: "Project 3", completion: "85%", size: 18, performance: "81%" },
    { name: "Manager 4", team: "Team 4", project: "Project 4", completion: "80%", size: 22, performance: "75%" },
    { name: "Manager 5", team: "Team 5", project: "Project 5", completion: "78%", size: 15, performance: "70%" }
];

const TeamManagement = () => {
    return (
        <Container fluid className="dashboard-container">
            <Navbar className="dashboard-navbar">
                <Navbar.Brand>FinSage ERP</Navbar.Brand>
                <InputGroup className="search-bar">
                    <Form.Control placeholder="Search here..." />
                    <InputGroup.Text><FaSearch /></InputGroup.Text>
                </InputGroup>
                <Button variant="primary"><FaUserPlus /> Add Manager</Button>
            </Navbar>

            <Row>


                <Col md={10} className="content-area">
                    <Row className="g-3">
                        <Col xs={12} sm={4}><Card className="stat-card">Total Managers</Card></Col>
                        <Col xs={12} sm={4}><Card className="stat-card">Active Teams</Card></Col>
                        <Col xs={12} sm={4}><Card className="stat-card">Average Performance</Card></Col>
                    </Row>

                    <Card className="chart-card mt-3">
                        <Card.Header className="chart-title">Team Performance</Card.Header>
                        <Card.Body>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Team1" fill="#2c3e50" />
                                    <Bar dataKey="Team2" fill="#27ae60" />
                                    <Bar dataKey="Team3" fill="#2980b9" />
                                    <Bar dataKey="Team4" fill="#f39c12" />
                                    <Bar dataKey="Team5" fill="#8e44ad" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Card.Body>
                    </Card>

                    <Table striped bordered hover className="mt-3">
                        <thead>
                            <tr>
                                <th>Manager</th>
                                <th>Teams</th>
                                <th>Projects</th>
                                <th>Target Completion</th>
                                <th>Team Size</th>
                                <th>Performance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {managers.map((manager, index) => (
                                <tr key={index}>
                                    <td>{manager.name}</td>
                                    <td>{manager.team}</td>
                                    <td>{manager.project}</td>
                                    <td>{manager.completion}</td>
                                    <td>{manager.size}</td>
                                    <td>{manager.performance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default TeamManagement;
