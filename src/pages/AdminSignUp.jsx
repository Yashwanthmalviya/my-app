import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import './AdminSignUp.css';
import '../styles/AdminSignUp.css';

const AdminSignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="container">
            <div className="form-container">
                <h1 className="title">ADMIN SIGN UP</h1>

                <div className="input-group">
                    <label htmlFor="name">Enter Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Manager 1"
                        className="input-field"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Admin1@email.com"
                        className="input-field"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value="********"
                            className="input-field"
                        />
                        <button
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            <i className={showPassword ? "eye-icon open" : "eye-icon closed"}></i>
                        </button>
                    </div>
                </div>

                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <div className="password-container">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirm-password"
                            value="********"
                            className="input-field"
                        />
                        <button
                            className="toggle-password"
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            <i className={showConfirmPassword ? "eye-icon open" : "eye-icon closed"}></i>
                        </button>
                    </div>
                </div>

                <div className="login-link">
                    Already have account? <button onClick={() => navigate("/AdminLogin")}>Go to Login</button>
                </div>

                <button className="signup-button">SIGN UP</button>
            </div>
        </div>
    );
};

export default AdminSignUp;