import { CenterFocusStrong } from "@mui/icons-material";
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AppBar } from "./AppBar";

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard/profile" replace />;
  }

  return (
    <div>
      <AppBar
        pages={[
          { label: "Ana Sayfa", path: "/" },
          { label: "Giriş", path: "/login" }
        ]}
      />
       <div style={{ 
      backgroundImage: `url("../../background.jpg")`,  
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      justifyContent:"center",
      alignItems:"center",
      height:'93.6vh',
      paddingTop:30,
       }}>{outlet}</div>
      
    </div>
  );
};
