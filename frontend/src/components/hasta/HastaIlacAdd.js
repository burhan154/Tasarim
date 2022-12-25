import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import {  useDispatch ,useSelector} from 'react-redux';
import { getIlacList} from "../../store/modules/ilac/action";
import { addHastaIlac } from '../../store/modules/hasta/action';

export function HastaIlacAdd(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const ilacList = useSelector((state) => state.ilacList);
  const {hastaAdi,hastaId}=props;
  const [baslangic, setBaslangic] = React.useState(dayjs());
  const [bitis, setBitis] = React.useState(dayjs());
  const [ilacId, setIlacId] = React.useState(0);

  React.useEffect(() => {
      dispatch(getIlacList());
    }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("--"+dayjs(baslangic).format())
    dispatch(addHastaIlac(hastaId,ilacId,baslangic.format(),bitis.format(),ilacList.ilacList.find(obj => {return obj.id === ilacId;})));
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained"  size="small" onClick={handleClickOpen}>
        İlaç Ekle
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>İlaç Ekle</DialogTitle>
        <DialogContent>
          <DialogContentText>
        {hastaAdi} isimli hastanın yeni ilaç bilgilerini giriniz.
          </DialogContentText>

          <TextField
          margin="dense"
          id="standard-select-currency"
          select
          label="İlac"
          value={ilacId}
          onChange={v=> setIlacId(v.target.value)}
          autoFocus
          variant="standard"
          fullWidth
          type="text"
        >
          {ilacList.ilacList.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.ilacAdi}
            </MenuItem>
          ))}
        </TextField>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          variant="standard"
          fullWidth
          type="text"
          label="İlac Başlangıç Tarihi"
          inputFormat="DD/MM/YYYY"
          value={baslangic}
          autoFocus
          margin="dense"
          onChange={(v)=>setBaslangic(v)}
          renderInput={(params) => <TextField autoFocus  variant="standard" margin="dense" fullWidth {...params} />}
        />
        <MobileDatePicker
          variant="standard"
          fullWidth
          type="text"
          label="İlac Bitiş Tarihi"
          inputFormat="DD/MM/YYYY"
          value={bitis}
          autoFocus
          margin="dense"
          onChange={(v)=>setBitis(v)}
          renderInput={(params) => <TextField autoFocus  variant="standard" margin="dense" fullWidth {...params} />}
        />    
         </LocalizationProvider>
       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button onClick={handleSubmit}>Ekle</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}