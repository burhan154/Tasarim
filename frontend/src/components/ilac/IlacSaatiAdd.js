import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  useDispatch ,useSelector} from 'react-redux';
import { addIlacSaati} from "../../store/modules/ilac/action";

export function IlacSaatiAdd(props) {
  const [open, setOpen] = React.useState(false);
  const {ilacId,ilacAdi} = props;
  const [saat, setSaat] = React.useState("");
  const [adet, setAdet] = React.useState("");
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addIlacSaati(saat,adet,ilacId));
    setOpen(false);
    ///////
  };

  return (
    <div style={{ }}   >
      <Button  variant="contained"  size="small" onClick={handleClickOpen}>
        İlac Saati Ekle
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>İlaç Saati Ekle</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {ilacAdi} isimli ilacın yeni İlaç Saat bilgilerini giriniz.
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
          <Button onClick={handleSubmit}>Ekle</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}