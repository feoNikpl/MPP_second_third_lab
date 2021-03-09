import React, {useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import JourneysTableBody from './journeysTableBody';
import Context from './context'
 
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


function JourneysTable() {

  const [rows, setRows] = React.useState([]);
  const [redirect, setRedirect] =React.useState(false);

  useEffect (() => {
    fetch('/api/authContent')
      .then(res=>{
        if (res.status === 401) return setRedirect(true);
        return res.json();})
      .then(result=>{setRows(result)})
  }, []);

  function deleteJourney(id){
    fetch('api/delete/'+ id, {method: "delete"})
      .then(res=> {
        if (res.status === 401) return setRedirect(true);
        if (res.ok) setRows(rows.filter(row => row.id !== id))
      });
  }
  function updatePass(id, pass){
    let url = 'api/update/'+id+'/'+pass;
    fetch(url, {method: "put"})
      .then(res => {
        if (res.status === 401) return setRedirect(true);
        if (res.ok) setRows(
          rows.map(row => {
            if (row.id === id){
              row.pass = !row.pass
            }
            return row
          })
        )
      })
  }
  const classes = useStyles();

  if (redirect){
    return <Redirect to='/authorization'/>
  }
  return (
    <Context.Provider value={{deleteJourney, updatePass}}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">destination</StyledTableCell>
              <StyledTableCell align="center">date</StyledTableCell>
              <StyledTableCell align="center">pass</StyledTableCell>
              <StyledTableCell align="center">filename</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <JourneysTableBody rows={rows}/>
        </Table>
      </TableContainer>
    </Context.Provider>
  );
}

export default JourneysTable;