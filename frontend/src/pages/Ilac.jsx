import * as React from "react";
import { BasicPage } from "../components/BasicPage";
import Home from "@mui/icons-material/Home";
import {  useDispatch ,useSelector} from 'react-redux';
import { getIlacList } from "../store/modules/ilac/action";
import  {IlacUpdate,IlacDelete ,IlacSaatiDelete,IlacSaatiUpdate,IlacAdd,IlacSaatiAdd} from "../components/ilac";


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

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {row.id}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.ilacAdi}
        </TableCell>
        <TableCell>{row.ilacDetayi}</TableCell>
        <TableCell width={100}> 
        <Stack align="right" spacing={2} direction="row-reverse">
          <IlacDelete ilac={row}/>
          <IlacUpdate ilac={row} />
        </Stack>
          
        </TableCell>    
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
            <TableRow>
                    
                    <TableCell ><Typography variant="h6" gutterBottom component="div" direction="column">
             İlac Saatleri 
             
              </Typography></TableCell>
                    <TableCell align="right"><IlacSaatiAdd  ilacAdi={row.ilacAdi} ilacId={row.id} /></TableCell>
                  </TableRow>
              
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Saat</TableCell>
                    <TableCell >Adet</TableCell>
                    <TableCell align="right">İşlem</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.ilacSaatleri.map((ilacSaatleri) => (
                    <TableRow key={ilacSaatleri.id}>
                      <TableCell component="th" scope="row">
                        {ilacSaatleri.saat}
                      </TableCell>
                      <TableCell >{ilacSaatleri.adet}</TableCell>
                      <TableCell width={100}> 
                        <Stack align="right" spacing={2} direction="row-reverse">
                          <IlacSaatiDelete ilacAdi={row.ilacAdi} ilacSaati={ilacSaatleri}/>
                          <IlacSaatiUpdate ilacAdi={row.ilacAdi} ilacSaati={ilacSaatleri} />
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


export function IlacPage() {
    const dispatch = useDispatch();
    const ilacList = useSelector((state) => state.ilacList);

    React.useEffect(() => {
        dispatch(getIlacList());
      }, []);


  return (<div style={{marginTop:20}}>
    <IlacAdd/>
    <TableContainer component={Paper} style={{marginTop:20}}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow >
          <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>İlac Saatleri</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>İlac Adı</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}}>İlac Detayı</TableCell>
            <TableCell sx={{backgroundColor:"#1976d2", color:"white"}} align="center">İşlem</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
        {ilacList.ilacList.map((row) => (
           <Row key={row.id} row={row} />
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}