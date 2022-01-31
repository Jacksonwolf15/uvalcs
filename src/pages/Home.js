import '../App.css';
import React from "react";
import {Grid, Box, Grommet, Table, TableCell, TableHeader, TableRow } from 'grommet';

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
                <TableCell>The Doomsday Specialists</TableCell>
                <TableCell>6-0-2</TableCell>
                <TableCell>20</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>The Copium Cartel</TableCell>
                <TableCell>5-2-0</TableCell>
                <TableCell>15</TableCell>
              </TableRow>
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
                <TableCell>Team Jungle Diff </TableCell>
                <TableCell>3-4-1</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Team Verule</TableCell>
                <TableCell>2-2-3</TableCell>
                <TableCell>9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fish and Chips</TableCell>
                <TableCell>2-3-2</TableCell>
                <TableCell>8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>i like fortnite</TableCell>
                <TableCell>1-3-2</TableCell>
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
        <body>
          <Box align='center' round='small' pad='medium' background='rgba(255,255,255,.8)' style={{maxWidth: '40rem', margin: 'auto', borderRadius: '.25em', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black', marginTop: '5%'}}>
            <h1>UVA LCS FALL 2021 SEASON MVP</h1>
            <Grid style={{}}
            fill 
            rows={['auto']}
            columns={['1/2', '1/2']}
            gap="medium"
            areas={[
            { name: 'pic', start: [0, 0], end: [0, 0] },
            { name: 'info', start: [1, 0], end: [1, 0] },
            ]}
            >
              <img src='https://lolskinshop.com/wp-content/uploads/2016/01/Caitlyn_10.jpg' alt='dans fav champ' gridArea='pic'></img>
              <Table >
                <TableRow>
                  <TableCell>Team:</TableCell>
                  <TableCell>The Copium Cartel</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>IGN:</TableCell>
                  <TableCell>anticha</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Rank:</TableCell>
                  <TableCell>Diamond 2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Role:</TableCell>
                  <TableCell>ADC</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AVG KDA:</TableCell>
                  <TableCell>7.79</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AVG DMG:</TableCell>
                  <TableCell>25,318</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Favorite Drink:</TableCell>
                  <TableCell>The enemies tears</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Favorite Hobby:</TableCell>
                  <TableCell>Stealin yo' egirl spp with his nutty mechanics</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Favorite Pasta Noodle:</TableCell>
                  <TableCell>Rigatoni</TableCell>
                </TableRow>
            </Table>
            </Grid>
          </Box>
        </body>
      </Grommet>
    )
  }
export default Home;