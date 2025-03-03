import React, { useState } from "react";
import "../styles/AdminLogin.css";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [email, setEmail] = useState("Admin1@email.com");
    const [password, setPassword] = useState("********");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/team-manager-overview"); // ✅ Navigates instantly on button click
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1 className="login-title">ADMIN LOGIN</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            />
                            <button
                                type="button"
                                className="eye-button"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <span className="eye-icon">👁️</span> : <span className="eye-icon">👁️</span>}
                            </button>
                        </div>
                    </div>

                    <div className="signup-link">
                        <span>Don't have an account? </span>
                        <button type="button" onClick={() => navigate("/AdminSignUp")}>
                            Go to Signup
                        </button>
                    </div>

                    <button type="submit" className="login-button">LOG IN</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
