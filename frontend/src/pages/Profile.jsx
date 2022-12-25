import * as React from "react";
import { BasicPage } from "../components/BasicPage";
import Person from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {  useDispatch ,useSelector} from 'react-redux';
import { useAuth } from "../hooks/useAuth";
import Notification from "../components/dashboard/Notification";


export const ProfilePage = () => {
  const auth = useSelector((state) => state.auth);
  const { user,token } = useAuth();

  React.useEffect(() => {

  }, []);

  return<Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
      
    </Typography>
    <Typography component="h1" variant="h5">
      
    </Typography>
      <BasicPage title={"Hoş Geldin "+user.firstName +" "+user.lastName} icon={<Person />} />
   </Container>;
};
