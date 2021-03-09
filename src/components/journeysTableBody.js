import React, {useContext} from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Context from './context'


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

function JourneysTableBody(props){  
    const {deleteJourney} = useContext(Context)
    const {updatePass} = useContext(Context)
    return(
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.destination}</TableCell>
              <TableCell align="center">{row.niceDate}</TableCell>
              <TableCell align="center"><input type="checkbox" onChange={() => updatePass(row.id, row.pass)} checked={row.pass}/></TableCell>
              <TableCell align="center"><a onClick={() => downloadClick(row.filename)} download>{row.filename}</a></TableCell>
              <TableCell align="center"><button class="subscribe" onClick={() => deleteJourney(row.id)}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
    );
}
export default JourneysTableBody;