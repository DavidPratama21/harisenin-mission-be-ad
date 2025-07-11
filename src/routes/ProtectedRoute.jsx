import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem("Login");

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
