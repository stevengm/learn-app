import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
export function Home() {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to="login" />;
    }
    return (
        <h1>Home</h1>
    )
}