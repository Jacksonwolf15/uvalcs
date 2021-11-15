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
                <TableCell>The Scuttle Hunters</TableCell>
                <TableCell>4-1-3</TableCell>
                <TableCell>15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>The Electric Rats</TableCell>
                <TableCell>4-1-3</TableCell>
                <TableCell>15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>The Doomsday Specialists</TableCell>
                <TableCell>4-0-2</TableCell>
                <TableCell>14</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>The Copium Cartel</TableCell>
                <TableCell>4-1-0</TableCell>
                <TableCell>12</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Team Jungle Diff </TableCell>
                <TableCell>3-3-1</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fish and Chips</TableCell>
                <TableCell>2-3-2</TableCell>
                <TableCell>8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Team Verule</TableCell>
                <TableCell>1-2-3</TableCell>
                <TableCell>6</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>i like fortnite</TableCell>
                <TableCell>1-2-2</TableCell>
                <TableCell>5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Team Kaalok</TableCell>
                <TableCell>1-3-2</TableCell>
                <TableCell>5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>The Supine Snails</TableCell>
                <TableCell>0-7-1</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
            </Table>
          </Box>
        </header>
      </Grommet>
    )
  }
export default Home;