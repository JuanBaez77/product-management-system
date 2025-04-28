import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';

const columns = [
  { width: 10, label: 'Id', dataKey: 'product_id' },
  { width: 50, label: 'Name', dataKey: 'product_name' },
  { width: 50, label: 'Photo', dataKey: 'photo' },
  { width: 100, label: 'Description', dataKey: 'product_description' },
  { width: 50, label: 'Price', dataKey: 'price' },
  { width: 50, label: 'Stock', dataKey: 'stock' },
  { width: 50, label: 'Category', dataKey: 'category_name' },
  { width: 50, label: 'Action', dataKey: 'action' },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{ backgroundColor: 'background.paper' }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {column.dataKey === 'photo' ? (
            row[column.dataKey] ? (
              <img
                src={row[column.dataKey]}
                alt="Product"
                style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 8 }}
              />
            ) : (
              'No Image'
            )
          ) : (
            row[column.dataKey]
          )}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ProductTable({ rows }) {
  return (
    <Paper style={{ height: 900, width: '100%', overflow: 'hidden' }}>
      <TableVirtuoso
        components={VirtuosoTableComponents}
        data={rows}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
