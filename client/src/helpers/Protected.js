import { Navigate } from "react-router-dom";
const Protected = ({isLoggedIn, children }) => {
    if (!isLoggedIn){
        return <Navigate to='/' replace />;
    }
    if (isLoggedIn){
        return <Navigate to='/chat' replace />;
    }
    return children;
}
export default Protected;