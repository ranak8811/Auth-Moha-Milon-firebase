import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoutes;

// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProviders";
// import { Navigate } from "react-router-dom";

// // eslint-disable-next-line react/prop-types
// const PrivateRoutes = (props) => {
//   const { user, loading } = useContext(AuthContext);
//   console.log("check", props.children);

//   if (loading) {
//     return <span className="loading loading-infinity loading-lg"></span>;
//   }
//   if (user) {
//     return props.children;
//   }

//   return <Navigate to={"/login"}></Navigate>;
// };

// export default PrivateRoutes;
