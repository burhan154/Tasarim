import * as React from "react";
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import {  useDispatch ,useSelector} from 'react-redux';
import { signIn,userIn,signOut } from "../store/modules/auth/action";

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useLocalStorage("user", userData);
  const [token, setToken] = useLocalStorage("token", userData);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  React.useEffect(() => {
    if(auth.userToken!=null){
      setToken(auth.userToken);
      dispatch(userIn());
    }
  }, [auth.userToken]);

  React.useEffect(() => {
    if(auth.userToken!=null){
      setUser(auth);
      navigate("/dashboard/profile", { replace: true });
    }
  }, [auth.firstName]);

  const login = async (data) => {
    dispatch(signIn(data.email,data.password))
  };

  const logout = () => {
    dispatch(signOut());
    setUser(null);
    setToken(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      token,
      login,
      logout
    }),
    [user,token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
