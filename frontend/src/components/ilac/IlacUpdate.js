import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export function IlacUpdate(props) {
  const [open, setOpen] = React.useState(false);
  const {ilac} = props;
  const [ad, setAd] = React.useState(ilac.ilacAdi);
  const [detay, setDetay] = React.useState(ilac.ilacDetayi);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 
    ///////
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Düzenle
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>İlaç Düzenle</DialogTitle>
        <DialogContent>
          <DialogContentText>
        {ilac.ilacAdi} isimli ilacın yeni İlaç bilgilerini giriniz.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="İlac Adı"
            type="text"
            fullWidth
            variant="standard"
            value={ad}
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
            value={detay}
            onChange={v=> setDetay(v.target.value)}
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