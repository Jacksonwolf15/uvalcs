import '../App.css';
import React from "react";
import {Box, Grommet, Table, TableCell, TableHeader, TableRow } from 'grommet';

function Home() {
    return(
      <Grommet>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <header>
          <Box align='center' round='small' pad='medium' background='rgba(255,255,255,.8)' style={{maxWidth: '40rem', margin: 'auto', borderRadius: '.25em', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black', marginTop: '5%'}}>
            <h1>UVA LCS FALL 2021</h1>
            <h2>STANDINGS</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Team</TableCell>
                  <TableCell>Record</TableCell>
                  <TableCell>Points</TableCell>
                </TableRow>
              </TableHeader>
              <TableRow>
                <TableCell>The Electric Rats</TableCell>
                <TableCell>0-0-0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>The Doomsday Specialists</TableCell>
                <TableCell>0-0-0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>i like fortnite</TableCell>
                <TableCell>0-0-0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Team Keith</TableCell>
                <TableCell>0-0-0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>The Supine Snails</TableCell>
                <TableCell>0-0-0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>The Scuttle Hunters</TableCell>
                <TableCell>0-0-0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Team Verule</TableCell>
                <TableCell>0-0-0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>The Copium Cartel</TableCell>
                <TableCell>0-0-0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Team Jungle Diff </TableCell>
                <TableCell>0-0-0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Team Kaalok</TableCell>
                <TableCell>0-0-0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
            </Table>
          </Box>
        </header>
      </Grommet>
    )
  }
export default Home;