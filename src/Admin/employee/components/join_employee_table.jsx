import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from 'react-bootstrap/Button';

function createData(name, email, phone, national, address, information) {
        return {
                name,
                email,
                phone,
                national,
                address,
                information,
        };
}

const rows = [
        createData('fares', 'f@app.com', +47382940583, 'RS', 'syria - damascus'),
        createData('ahmad', 'a@app.com', +65546456646, 'RS', ' Uk - Liverpool'),
        createData('ghith', 'g@app.com', +65467868678, 'RS', 'US - New'),
];

// Function to handle the CV download
const handleDownloadCV = (employee) => {
        // Add your logic to download the CV for the given employee
        console.log(`Downloading CV for ${employee.name}`);
};

export default function JoinEmployeeTable() {
        return (
                <Box sx={{ width: '100%', overflowX: 'auto' }}>
                        <Paper sx={{ width: '100%', mb: 2, pr: 5, pl: 5 }}>
                                <TableContainer>
                                        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
                                                <TableHead>
                                                        <TableRow sx={{
                                                                backgroundColor: '#E6392B'
                                                        }}>
                                                                <TableCell sx={{
                                                                        color: 'white'
                                                                }}>Name</TableCell>
                                                                <TableCell sx={{
                                                                        color: 'white'
                                                                }}>Email</TableCell>
                                                                <TableCell sx={{
                                                                        color: 'white'
                                                                }}>Phone</TableCell>
                                                                <TableCell sx={{
                                                                        color: 'white'
                                                                }}>National</TableCell>
                                                                <TableCell sx={{
                                                                        color: 'white'
                                                                }}>Address</TableCell>
                                                                <TableCell sx={{
                                                                        color: 'white'
                                                                }}>Information</TableCell>
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
                                                                        <TableCell>{row.name}</TableCell>
                                                                        <TableCell>{row.email}</TableCell>
                                                                        <TableCell>{row.phone}</TableCell>
                                                                        <TableCell>{row.national}</TableCell>
                                                                        <TableCell>{row.address}</TableCell>
                                                                        <TableCell>
                                                                                <Button
                                                                                        onClick={() => handleDownloadCV(row)}
                                                                                        variant="outline-danger"
                                                                                        className="keyword_button"
                                                                                >
                                                                                        Download CV
                                                                                </Button>
                                                                        </TableCell>
                                                                </TableRow>
                                                        ))}
                                                </TableBody>
                                        </Table>
                                </TableContainer>
                        </Paper>
                </Box>
        );
}
