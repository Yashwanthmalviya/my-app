import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/AdminSignUp.css';

const AdminSignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add validation and signup logic here
        console.log("Admin Signed Up:", { name, email, password });
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h1 className="signup-title">ADMIN SIGN UP</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Enter Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-input-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="eye-button"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "👁️" : "👁️"}
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <div className="password-input-container">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="eye-button"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? "👁️" : "👁️"}
                            </button>
                        </div>
                    </div>

                    <div className="login-link">
                        Already have an account?{" "}
                        <button type="button" onClick={() => navigate("/AdminLogin")}>
                            Go to Login
                        </button>
                    </div>

                    <button type="submit" className="signup-button">SIGN UP</button>
                </form>
            </div>
        </div>
    );
};

export default AdminSignUp;
