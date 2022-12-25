import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  useDispatch ,useSelector} from 'react-redux';
import { getIlacList} from "../../store/modules/ilac/action";
import { deleteHasta } from '../../store/modules/hasta/action';
import { useAuth } from '../../hooks/useAuth';

export function HastaDelete(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const {id}=props;
  const { user } = useAuth();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(deleteHasta(id,user.userId));
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained"  color="error" onClick={handleClickOpen}>
        Kaldır
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Hasta Kaldır</DialogTitle>
        <DialogContent>
          <DialogContentText>
        {"Hüseyin Başaran"} isimli hastayı kaldırmak istediğinize emin misiniz? 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button onClick={handleSubmit}>Sil</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

