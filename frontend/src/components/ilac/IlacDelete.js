import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  useDispatch ,useSelector} from 'react-redux';
import { addIlac, deleteIlac} from "../../store/modules/ilac/action";

export function IlacDelete(props) {
  const [open, setOpen] = React.useState(false);
  const {ilac} = props;
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(ilac)
    dispatch(deleteIlac(ilac));
    setOpen(false);
    ///////
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Sil
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>İlaç Düzenle</DialogTitle>
        <DialogContent>
          <DialogContentText>
              {ilac.ilacAdi} isimli ilaci silmek istediğinize emin misiniz? 
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