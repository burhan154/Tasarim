import { Navigate, useOutlet,useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AppBar } from "./AppBar";
import Button from "@mui/material/Button";
import Notification from "./dashboard/Notification";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <AppBar
        pages={[
          
          { label: "Profil", path: "profile" }
        ]}
      />
      
      <div class="d-flex" id="wrapper">
      <div class="border-end bg-white" id="sidebar-wrapper">
          <div class="list-group list-group-flush">  
            <Button class="list-group-item list-group-item-action list-group-item-light p-3" variant="elevated" onClick={() => navigate("hasta")}> Hastalarım</Button>
            <Button class="list-group-item list-group-item-action list-group-item-light p-3" variant="elevated" onClick={() => navigate("ilac")}> İlaçlar</Button>
          </div>
      </div>
      
      <div id="page-content-wrapper">
          <div class="container-fluid">
          <Notification/>
          {outlet}
          </div>
      </div>
    </div>
    </div>
  );
};
