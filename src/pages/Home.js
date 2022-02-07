import '../App.css';
import React, { useEffect } from "react";
import {Box, Grommet, Table, TableCell, TableHeader, TableRow } from 'grommet';

function Home({teams}) {

  useEffect(() => {
    teams.sort(function(a,b) {
      return (b.wins * 3 + b.ties) - (a.wins * 3 + a.ties)
    })
  }, [teams])

    return(
      <Grommet>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <header>
          <Box align='center' round='small' pad='medium' background='rgba(255,255,255,.8)' style={{maxWidth: '40rem', margin: 'auto', borderRadius: '.25em', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black', marginTop: '5%'}}>
            <h1>UVA LCS SPRING 2022</h1>
            <h2>STANDINGS</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Team</TableCell>
                  <TableCell>Record</TableCell>
                  <TableCell>Points</TableCell>
                </TableRow>
              </TableHeader>
              {Object.values(teams).map((team) => (
                <TableRow key={team.teamName}>
                  <TableCell>{team.name}</TableCell>
                  <TableCell>{team.wins + '/' + team.losses + '/' + team.ties}</TableCell>
                  <TableCell>{(team.wins * 3) + team.ties}</TableCell>
                </TableRow> 
              ))}
            </Table>
          </Box>
        </header>
      </Grommet>
    )
  }
export default Home;