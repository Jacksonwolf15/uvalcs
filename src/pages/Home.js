import '../App.css';
import React, { useEffect } from "react";
import {Box, Grommet, Grid, Table, TableCell, TableHeader, TableRow } from 'grommet';

function Home({teams}) {

  useEffect(() => {
    teams.sort(function(a,b) {
      return (b.wins * 3) - (a.wins * 3)
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
          
          {/* Joe Beason tournament bracket slightly modified
          <Box align='center' round='small' pad='medium' background='rgba(255,255,255,.8)' style={{maxWidth: '40rem', margin: 'auto', borderRadius: '.25em', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black', marginTop: '5%'}}>
            <h2>PLAYOFF BRACKET</h2>
            <div class="split split-one">
              <div class="round round-one current">
                <div class="round-details"><b>Quarterfinals</b><br/><span class="date"><b>April 17</b></span></div>
                <ul class="matchup">
                  <li class="team team-top">1 Bees? Bees.<span class="score">2</span></li>
                  <li class="team team-bottom">8 Team Mugiwara<span class="score">1</span></li>
                </ul>
                <ul class="matchup">
                  <li class="team team-top" style={{fontSize: "12px"}}>4 Blieth Mief's Blind Blokes<span class="score">1</span></li>
                  <li class="team team-bottom" style={{fontSize: "15px"}}>5 Team Jungle Bully<span class="score">2</span></li>
                </ul>
                <ul class="matchup">
                  <li class="team team-top" style={{fontSize: "14px"}}>2 Doomsday Survivors<span class="score">0</span></li>
                  <li class="team team-bottom">7 Team Taesung<span class="score">2</span></li>
                </ul>
                <ul class="matchup">
                  <li class="team team-top" style={{fontSize: "12px"}}>3 The Teamfight Tacticians<span class="score">2</span></li>
                  <li class="team team-bottom" style={{fontSize: "14px"}}>6 Please Ban Rengar<span class="score">0</span></li>
                </ul>												
              </div>	
              <div class="round round-two current">
                <div class="round-details"><b>Semifinals</b><br/><span class="date"><b>April 24</b></span></div>			
                <ul class="matchup">
                  <li class="team team-top">1 Bees? Bees.<span class="score">1</span></li>
                  <li class="team team-bottom" style={{fontSize: "15px"}}>5 Team Jungle Bully<span class="score">2</span></li>
                </ul>	
                <ul class="matchup">
                  <li class="team team-top">7 Team Taesung<span class="score">2</span></li>
                  <li style={{fontSize: "12px"}} class="team team-bottom">3 The Teamfight Tacticians<span class="score">1</span></li>
                </ul>								
              </div>	
              <div class="round round-three current">
                <div class="round-details"><b>Finals</b><br/><span class="date"><b>May 1</b></span></div>			
                <ul class="matchup">
                  <li class="team team-top">5 Team Jungle Bully<span class="score">2</span></li>
                  <li class="team team-bottom">7 Team Taesung<span class="score">3</span></li>
                </ul>								
              </div>		
            </div> 
          </Box>
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
              <img src='https://lolskinshop.com/wp-content/uploads/2017/01/lux-elementalist.jpg' alt='dans fav champ' gridArea='pic'></img>
              <Table >
                <TableRow>
                  <TableCell>Team:</TableCell>
                  <TableCell>The Teamfight Tacticians</TableCell>
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
                  <TableCell>MID</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Kills:</TableCell>
                  <TableCell>124</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AVG DMG:</TableCell>
                  <TableCell>28,415</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Favorite Drink:</TableCell>
                  <TableCell>The enemies' tears</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Favorite Hobby:</TableCell>
                  <TableCell>Commiting war crimes against the enemy team</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Quote of the season:</TableCell>
                  <TableCell>"This is a dark lux game"</TableCell>
                </TableRow>
            </Table>
            </Grid>
          </Box> */}
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
                  <TableCell>{team.wins + '/' + team.losses}</TableCell>
                  <TableCell>{team.wins * 3}</TableCell>
                </TableRow> 
              ))}
            </Table>
          </Box>
        </header>
      </Grommet>
    )
  }
export default Home;