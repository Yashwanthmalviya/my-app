import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../api/authAPI"; // Import API function
import "../styles/AdminLogin.css";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Toggle Password Visibility
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        setLoading(true);
        try {
            await adminLogin({ email, password });
            alert("Login Successful!");
            navigate("/team-manager-overview"); // Redirect after login
        } catch (err) {
            setError(err.message || "Login failed! Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <Link to={"https://erp-dashboard-azure.vercel.app/"} >
          <button
            type="submit"
            className="w-full mt-5 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go To HomePage
          </button>
          </Link>
            <div className="login-form">
                <h1 className="login-title">ADMIN LOGIN</h1>
                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleSubmit}>
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
                            <button type="button" className="eye-button" onClick={togglePasswordVisibility}>
                                {showPassword ? "👁️" : "🙈"}
                            </button>
                        </div>
                    </div>

                    <div className="signup-link">
                        <span>Don't have an account? </span>
                        <button type="button" onClick={() => navigate("/AdminSignUp")}>
                            Go to Signup
                        </button>
                    </div>

                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? "Logging in..." : "LOG IN"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
