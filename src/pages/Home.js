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
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <header style={{paddingBottom: "5%"}}>
          <Box align='center' round='small' pad='medium' background='rgba(255,255,255,.8)' style={{maxWidth: '40rem', margin: 'auto', borderRadius: '.25em', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black', marginTop: '5%'}}>
            <h1>UVA LCS SPRING 2022</h1>
          </Box>
          <Box align='center' round='small' pad='medium' background='rgba(255,255,255,.8)' style={{maxWidth: '40rem', margin: 'auto', borderRadius: '.25em', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black', marginTop: '5%'}}>
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
          <Box align='center' round='small' pad='medium' background='rgba(255,255,255,.8)' style={{maxWidth: '40rem', margin: 'auto', borderRadius: '.25em', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black', marginTop: '5%'}}>
            <h2>PLAYOFF BRACKET</h2>
            <div class="split split-one">
              <div class="round round-one current">
                <div class="round-details"><b>Round 1</b><br/><span class="date"><b>April 17</b></span></div>
                <ul class="matchup">
                  <li class="team team-top">Seed 1<span class="score">0</span></li>
                  <li class="team team-bottom">Seed 8<span class="score">0</span></li>
                </ul>
                <ul class="matchup">
                  <li class="team team-top">Seed 4<span class="score">0</span></li>
                  <li class="team team-bottom">Seed 5<span class="score">0</span></li>
                </ul>
                <ul class="matchup">
                  <li class="team team-top">Seed 2<span class="score">0</span></li>
                  <li class="team team-bottom">Seed 7<span class="score">0</span></li>
                </ul>
                <ul class="matchup">
                  <li class="team team-top">Seed 3<span class="score">0</span></li>
                  <li class="team team-bottom">Seed 6<span class="score">0</span></li>
                </ul>												
              </div>	
              <div class="round round-two">
                <div class="round-details"><b>Round 2</b><br/><span class="date"><b>April 24</b></span></div>			
                <ul class="matchup">
                  <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                  <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                </ul>	
                <ul class="matchup">
                  <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                  <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                </ul>								
              </div>	
              <div class="round round-three">
                <div class="round-details"><b>Round 3</b><br/><span class="date"><b>May 1</b></span></div>			
                <ul class="matchup">
                  <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                  <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                </ul>								
              </div>		
            </div> 
          </Box>
        </header>
      </Grommet>
    )
  }
export default Home;