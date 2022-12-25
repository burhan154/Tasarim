import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  useDispatch ,useSelector} from 'react-redux';
import { addIlac, deleteIlac} from "../../store/modules/ilac/action";

export function IlacAdd(props) {
  const [open, setOpen] = React.useState(false);
  const [ilacAdi, setAd] = React.useState("");
  const [ilacDetayi, setDetay] = React.useState("");
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addIlac(ilacAdi,ilacDetayi));
    setOpen(false);
    ///////
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        İlaç Ekle
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>İlaç Ekle</DialogTitle>
        <DialogContent>
          <DialogContentText>
        Yeni ilacın İlaç bilgilerini giriniz.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="İlac Adı"
            type="text"
            fullWidth
            variant="standard"
            value={ilacAdi}
            onChange={v=> setAd(v.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="İlac Detayı"
            type="text"
            fullWidth
            variant="standard"
            value={ilacDetayi}
            onChange={v=> setDetay(v.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button onClick={handleSubmit}>Ekle</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}