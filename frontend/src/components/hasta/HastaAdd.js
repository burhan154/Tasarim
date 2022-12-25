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
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import {  useDispatch ,useSelector} from 'react-redux';
import { GetHastaWithoutAileHekimi} from "../../store/modules/hasta/action";
import { AddHasta } from '../../store/modules/hasta/action';
import { useAuth } from '../../hooks/useAuth';

export function HastaAdd(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const hasta = useSelector((state) => state.users);
  const [hastaId, setHastaId] = React.useState(0);
  const { user } = useAuth();

  React.useEffect(() => {
      dispatch(GetHastaWithoutAileHekimi());
    }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    dispatch(AddHasta(hastaId,user.userId));
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Hasta Ekle
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Hasta Ekle</DialogTitle>
        <DialogContent>
          <DialogContentText>
         isimli hastanın yeni ilaç bilgilerini giriniz.
          </DialogContentText>

          <TextField
          margin="dense"
          id="standard-select-currency"
          select
          label="İlac"
          value={hastaId}
          onChange={v=> setHastaId(v.target.value)}
          autoFocus
          variant="standard"
          fullWidth
          type="text"
        >
          {hasta.nullHasta.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              <Avatar sx={{ bgcolor: '#bbdefb', color: '#1e88e5' }}>
                <PersonIcon />
              </Avatar>
              {option.firstName+ " "+option.lastName}
            </MenuItem>
          ))}
        </TextField>


       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button onClick={handleSubmit}>Ekle</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}