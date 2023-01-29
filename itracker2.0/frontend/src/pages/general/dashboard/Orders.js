import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useEffect, useState } from "react";
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}


//--------------------------
//  const [data, setData] = useState([]);
//   //const navigate = useNavigate();
//   var requestOptions = {
//     method: "GET",
//     redirect: "follow",
//   };
//   const fetchData = () => {
//     fetch(`http://localhost:1337/api/fileinfos`)
//       .then((response) => response.json())
//       .then((actualData) => {
//         console.log(actualData);
//         setData(actualData.products);
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//--------------------------

//let dataa= actualdata.data

var requestOptions = {
  method: "GET",
  redirect: "follow",
};
let fetchdcndata = async () => {
  try {
    let dcnfile = await fetch(
      "http://localhost:1337/api/fileinfos",
      requestOptions
    ).then((x) => x.json());

    //console.log(dcnfile.data[0].attributes.cid);
    //alert(dcnfile.data[0].attributes);
    const rowsobj = dcnfile.data[0].attributes;
    console.log(rowsobj);
    return await rowsobj;
  } catch (error) {
    console.log(error);
  }
};

let testdata= {fileID: 'first file ID ', cid: 'bafybeiacs6qaawbgrwq26zzno2lpoor3nzzmjyo5b4f2ejbjfdp5n2of74', name: 'file3.json', type: 'invest', createdAt: '2023-01-26T15:10:02.581Z'}
const rows =testdata//{fileID: 'first file ID ', cid: 'bafybeiacs6qaawbgrwq26zzno2lpoor3nzzmjyo5b4f2ejbjfdp5n2of74', name: 'file3.json', type: 'invest', createdAt: '2023-01-26T15:10:02.581Z'}//fetchdcndata;



//   createData(
//     0,
//     "16 Mar, 2019",
//     "Elvis Presley",
//     "Tupelo, MS",
//     "VISA ⠀•••• 3719",
//     312.44
//   ),
//   // createData(
//   //   1,
//   //   '16 Mar, 2019',
//   //   'Paul McCartney',
//   //   'London, UK',
//   //   'VISA ⠀•••• 2574',
//   //   866.99,
//   // ),
//   //   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//   //   createData(
//   //     3,
//   //     '16 Mar, 2019',
//   //     'Michael Jackson',
//   //     'Gary, IN',
//   //     'AMEX ⠀•••• 2000',
//   //     654.39,
//   //   ),
//   //   createData(
//   //     4,
//   //     '15 Mar, 2019',
//   //     'Bruce Springsteen',
//   //     'Long Branch, NJ',
//   //     'VISA ⠀•••• 5919',
//   //     212.79,
//   //   ),
// ];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(`http://localhost:1337/api/fileinfos`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData.data);
        setData(actualData.data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);


  
  return (
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
          {data.map((item, index) => (
            <TableRow>
              <TableCell>{item.attributes.fileID}</TableCell>
              <TableCell>{item.attributes.cid}</TableCell>
              <TableCell>{item.attributes.name}</TableCell>
              <TableCell>{item.attributes.type}</TableCell>
              {/* <TableCell>{row.paymentMethod}</TableCell> */}
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
