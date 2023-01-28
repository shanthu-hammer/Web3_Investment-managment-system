import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../dashboard/Title';
import { useEffect, useState } from "react";
const TableData=()=>{

    function preventDefault(event) {
        event.preventDefault();
      }
      
    return (
        <div>
        <React.Fragment>
          <Title>Recent Orders</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>CID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                {/* <TableCell align="right">Sale Amount</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map((row) => ( */}
                <TableRow >
                  <TableCell>{this?.data?.data[0]?.attributes?.fileID}</TableCell>
                  <TableCell>this.data.data[0].attributes?.cid</TableCell>
                  <TableCell>this.data.data[0].attributes?.name</TableCell>
                  <TableCell>this.data.data[0].attributes?.type</TableCell>
                  {/* <TableCell>{row.paymentMethod}</TableCell> */}
                  {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
                </TableRow>
              {/* ))} */}
            </TableBody>
          </Table>
          <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
            See more orders
          </Link>
        </React.Fragment>
        
        
        </div>
      );

}

export default TableData;