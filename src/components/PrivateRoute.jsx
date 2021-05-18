import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ({ path, ...props }) => {
  //   const { isUserLoggedIn } = useAuthentication();

  return true ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
