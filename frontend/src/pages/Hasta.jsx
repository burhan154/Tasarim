import * as React from "react";
import { BasicPage } from "../components/BasicPage";
import Home from "@mui/icons-material/Home";
import {  useDispatch ,useSelector} from 'react-redux';
import { getHastaList,HastaIlac } from "../store/modules/hasta/action";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import dayjs, { Dayjs } from 'dayjs';
import { HastaIlacAdd ,HastaIlacUpdate,HastaIlacDelete,HastaAdd, HastaDelete} from "../components/hasta";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const getIlac = (id,isEmpty) => {
    console.log(isEmpty);
    setOpen(!open)
    if(!open&&!isEmpty)
      dispatch(HastaIlac(id));
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => getIlac(row.id, row.ilaclar? true:false)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {row.id}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.firstName + " " +row.lastName}
        </TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell >{row.status.toString()}</TableCell>
        <TableCell width={100}> 
        <Stack align="right" spacing={2} direction="row-reverse">
            <HastaDelete id={row.id}/>
        </Stack>
          
        </TableCell>    
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
            <TableRow>
                    
                    <TableCell ><Typography variant="h6" gutterBottom component="div" direction="column">
             Hasta İlaçları 
             
              </Typography></TableCell>
                    <TableCell align="right"><HastaIlacAdd  hastaAdi={row.firstName} hastaId={row.id} /></TableCell>
                  </TableRow>
              
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>İlaç Adı</TableCell>
                    <TableCell >Başlangıç</TableCell>
                    <TableCell >Bitiş</TableCell>
                    <TableCell align="right">İşlem</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.ilaclar?.map((ilac) => (
                    <TableRow key={ilac.id}>
                      <TableCell component="th" scope="row">
                        {ilac.ilac.ilacAdi}
                      </TableCell>
                      <TableCell >{dayjs(ilac.baslangic).format('DD/MM/YYYY')}</TableCell>
                      <TableCell >{dayjs(ilac.bitis).format('DD/MM/YYYY')}</TableCell>
                      <TableCell width={100}> 
                        <Stack align="right" spacing={2} direction="row-reverse">
                          <HastaIlacDelete  hastaAdi={row.firstName} hastaId={row.id} activeIlac={ilac}/>
                          <HastaIlacUpdate  hastaAdi={row.firstName} hastaId={row.id} activeIlac={ilac}/>                      
                        </Stack>
                          
                        </TableCell> 
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}




export function HastaPage() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    React.useEffect(() => {
        dispatch(getHastaList());
      }, []);


  return (<div style={{marginTop:20}}>
    <HastaAdd /> 
    <TableContainer component={Paper} style={{marginTop:20}}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow >
          <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>Hasta İlaçları</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>Ad Soyad</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>Email</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>Durum</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}} align="center">İşlem</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>

        {users.userList.map((row) => (
           <Row key={row.id} row={row} />
            
          ))}
        
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}