import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

function createData(name, email, section, phone) {
        return {
                name,
                email,
                section,
                phone,
        };
}

const rows = [
        createData('fares', 'f@app.com', 'ITE', +47382940583),
        createData('ahmad', 'a@app.com', 'ITE', +65546456646),
        createData('ghith', 'g@app.com', 'ITE', +65467868678),
];

export default function EmployeeTable() {
        return (
                <Box sx={{
                        width: '100%',
                        overflowX: 'auto',
                }}>
                        <Paper sx={{ width: '100%', mb: 2 , pr:5 , pl:5 }}>
                                <TableContainer>
                                        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
                                                <TableHead>
                                                        <TableRow>
                                                                <TableCell padding="checkbox">
                                                                        <Checkbox color="primary" />
                                                                </TableCell>
                                                                <TableCell>Name</TableCell>
                                                                <TableCell>Email</TableCell>
                                                                <TableCell>Section</TableCell>
                                                                <TableCell>Phone</TableCell>
                                                        </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                        {rows.map((row, index) => (
                                                                <TableRow
                                                                        hover
                                                                        role="checkbox"
                                                                        tabIndex={-1}
                                                                        key={index}
                                                                        sx={{ cursor: 'pointer' }}
                                                                >
                                                                        <TableCell padding="checkbox">
                                                                                <Checkbox color="primary" />
                                                                        </TableCell>
                                                                        <TableCell>{row.name}</TableCell>
                                                                        <TableCell>{row.email}</TableCell>
                                                                        <TableCell>{row.section}</TableCell>
                                                                        <TableCell>{row.phone}</TableCell>
                                                                </TableRow>
                                                        ))}
                                                </TableBody>
                                        </Table>
                                </TableContainer>
                        </Paper>
                </Box>
        );
}
