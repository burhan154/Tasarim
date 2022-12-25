import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  useDispatch } from 'react-redux';
import { updateIlacSaati} from "../../store/modules/ilac/action";

export function IlacSaatiUpdate(props) {
  const [open, setOpen] = React.useState(false);
  const {ilacSaati,ilacAdi} = props;
  const [saat, setSaat] = React.useState(ilacSaati.saat);
  const [adet, setAdet] = React.useState(ilacSaati.adet);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateIlacSaati({id:ilacSaati.id,saat:saat,adet:adet,ilacId:ilacSaati.ilacId}));
    setOpen(false);
    ///////
  };

  return (
    <div>
      <Button variant="contained"   size="small" onClick={handleClickOpen}>
      Düzenle
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>İlaç Saati Düzenle</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {ilacAdi} isimli ilacın {ilacSaati.saat} saatininin yeni İlaç Saat bilgilerini giriniz.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="İlac Saati"
            type="text"
            fullWidth
            variant="standard"
            value={saat}
            onChange={v=> setSaat(v.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="İlac Adeti"
            type="text"
            fullWidth
            variant="standard"
            value={adet}
            onChange={v=> setAdet(v.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button onClick={handleSubmit}>Düzenle</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}