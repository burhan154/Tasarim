import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  useDispatch ,useSelector} from 'react-redux';
import { deleteIlacSaati} from "../../store/modules/ilac/action";

export function IlacSaatiDelete(props) {
  const [open, setOpen] = React.useState(false);
  const {ilacSaati ,ilacAdi} = props;
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(deleteIlacSaati(ilacSaati));
    setOpen(false);
    ///////
  };

  return (
    <div>
      <Button variant="contained"  size="small" color="error" onClick={handleClickOpen}>
        Sil
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>İlaç Saati Düzenle</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {ilacAdi} isimli ilacın {ilacSaati.saat} saatini silmek istediğinize emin misiniz? 
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