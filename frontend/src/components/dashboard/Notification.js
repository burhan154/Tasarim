import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {  useDispatch ,useSelector} from 'react-redux';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification() {
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState("success");
  const [message, setMessage] = React.useState("");

  const users = useSelector((state) => state.users);

  const handleClick = () => {
    setOpen(true);
    console.log(users)
  };

  React.useEffect(() => {
    if(users.message!==""){
      setSeverity("success")
      setMessage(users.message)
      setOpen(true);
    }
  }, [users.message]);

  React.useEffect(() => {
    if(users.error!==""){
      setSeverity("error")
      setMessage(users.error)
      setOpen(true);
    }
  }, [users.error]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>  
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
        </Alert>
      </Snackbar>
    </div>
  );
}