import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CustomizedTableCell } from "./styles.js";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: 11435,
    experiment: "px330 digestion",
    researcher: "John Smith",
    date: "1 March",
    method: "restriction enzyme",
    status: "Approved",
  },
  {
    id: 11436,
    experiment: "px330 digestion",
    researcher: "John Smith",
    date: "1 March",
    method: "restriction enzyme",
    status: "Approved",
  },
  {
    id: 11437,
    experiment: "px330 digestion",
    researcher: "John Smith",
    date: "1 March",
    method: "restriction enzyme",
    status: "Approved",
  },
];

const BasicTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Experiments</TableCell>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Method</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.experiment}
              </TableCell>
              <TableCell align="right">{row.researcher}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.method}</TableCell>
              <CustomizedTableCell align="right">
                <span className={`status ${row.status}`}>{row.status}</span>
              </CustomizedTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
