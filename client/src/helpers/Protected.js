import { Navigate } from "react-router-dom";
const Protected = ({stringsUserID, children }) => {
    if (!stringsUserID){
        return <Navigate to='/' replace />;
    }
    return children;
}
export default Protected;