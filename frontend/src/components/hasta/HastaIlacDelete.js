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
import { deleteHastaIlac } from '../../store/modules/hasta/action';

export function HastaIlacDelete(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const {hastaAdi,hastaId,activeIlac}=props;

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
    dispatch(deleteHastaIlac(activeIlac.id,hastaId,activeIlac.ilacId,activeIlac.baslangic,activeIlac.bitis));
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained"  size="small" color="error" onClick={handleClickOpen}>
        Sil
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>İlaç Sil</DialogTitle>
        <DialogContent>
          <DialogContentText>
        {hastaAdi} isimli hastanın {activeIlac.ilac.ilacAdi} adlı ilacını silmek istediğinize emin misiniz? 
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