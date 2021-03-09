import React, {useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
 
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


function ContentTable() {

  const [rows, setRows] = React.useState([]);

  useEffect (() => {
    fetch('/api/content')
      .then(res=>{
        if (res.ok);
        return res.json();
      })
      .then(result=>{setRows(result)})
  }, []);

  function downloadClick(filename){
    fetch('api/download/' + filename)
      .then(response => {
        response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = filename ;
        a.click();
      })
    });
  }

  const classes = useStyles();
  return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">name</StyledTableCell>
              <StyledTableCell align="center">destination</StyledTableCell>
              <StyledTableCell align="center">date</StyledTableCell>
              <StyledTableCell align="center">pass</StyledTableCell>
              <StyledTableCell align="center">filename</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.destination}</TableCell>
                <TableCell align="center">{row.niceDate}</TableCell>
                <TableCell align="center"><input type="checkbox"checked={row.pass} disabled/></TableCell>
                <TableCell align="center"><a onClick={() => downloadClick(row.filename)} download>{row.filename}</a></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default ContentTable;