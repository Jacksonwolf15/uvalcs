import './App.css';
import React, { useEffect, useState } from "react";
import { Grid, Anchor, Button, Box, Grommet, Header, Nav, Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child, push } from "firebase/database";


const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

const riotKey = process.env.REACT_APP_riotKey

try {
  const firebaseApp = initializeApp(config)
}

catch {

}

const customTheme = {
  button: {
    primary: {
      color: '#ffa51f',
    },
    border: {
      color: '#ffa51f',
    },
  }
};


function App() {

  return (
    <Grommet theme={customTheme}>
      <Router>
        <Header background="#3b68ff" pad="small">
          <Nav direction="row">
            <Button style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold'}} href='/' primary label='UVA LCS'></Button>
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/' label='Home'/>|
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team1' label='Team 1'/>|
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team2' label='Team 2'/>|
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team3' label='Team 3'/>|
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team4' label='Team 4'/>|
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team5' label='Team 5'/>|
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team6' label='Team 6'/>
          </Nav>
        </Header>
      
      <div>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div class='box' >
          <Switch>
            <Route path="/Team1">
              <Team1 />
            </Route>
            <Route path="/Team2">
              <Team2 />
            </Route>
            <Route path="/Team3">
              <Team3 />
            </Route>
            <Route path="/Team4">
              <Team4 />
            </Route>
            <Route path="/Team5">
              <Team5 />
            </Route>
            <Route path="/Team6">
              <Team6 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    </Grommet>
  );
}

function Home() {
  return(
    <Grommet>
    <div>
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
              <TableCell>Team 4</TableCell>
              <TableCell>4-0-1</TableCell>
              <TableCell>9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Team 3</TableCell>
              <TableCell>3-0-2</TableCell>
              <TableCell>8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Team 1</TableCell>
              <TableCell>3-1-1</TableCell>
              <TableCell>7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Team 6</TableCell>
              <TableCell>2-1-2</TableCell>
              <TableCell>6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Team 2</TableCell>
              <TableCell>2-2-1</TableCell>
              <TableCell>5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Team 5</TableCell>
              <TableCell>0-3-2</TableCell>
              <TableCell>2</TableCell>
            </TableRow>
          </Table>
        </Box>
      </header>
      
    </div>
    </Grommet>
  )
}

function Team1() {

  const [input, setInput] = useState("")
  const [games, setGames] = useState([])
  const [submit, setSubmit] = useState(false)
  const captain = 'JWoIf'

  useEffect(()=> {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'team1/games')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(Object.values(snapshot.val()))
      setGames(Object.values(snapshot.val()))
    } else {
      console.log("No data available")
    }
    }).catch((error) => {
    console.error(error);
    });
    console.log('yo')
  }, [submit])
  

  const handleChange = (newInput) => {
    setInput(newInput);
  };


  function writeGameData(json) {
    const db = getDatabase()
    // A post entry.
    const gameData = {
      gameID: json.gameId,
      homeWin: json.teams[0].win,
      homeKills: json.participants[0].stats.kills + json.participants[1].stats.kills + json.participants[2].stats.kills + json.participants[3].stats.kills + json.participants[4].stats.kills,
      homeDeaths: json.participants[0].stats.deaths + json.participants[1].stats.deaths + json.participants[2].stats.deaths + json.participants[3].stats.deaths + json.participants[4].stats.deaths,
      homeAssists: json.participants[0].stats.assists + json.participants[1].stats.assists + json.participants[2].stats.assists + json.participants[3].stats.assists + json.participants[4].stats.assists,
      homeDragons: json.teams[0].dragonKills,
      homeBarons: json.teams[0].baronKills,
      homeHeralds: json.teams[0].riftHeraldKills,
      homeGold: json.participants[0].stats.goldEarned + json.participants[1].stats.goldEarned + json.participants[2].stats.goldEarned + json.participants[3].stats.goldEarned + json.participants[4].stats.goldEarned,
      homeTowers: json.teams[0].towerKills,
      homeInhibs: json.teams[0].inhibitorKills,
      oppKills: json.participants[5].stats.kills + json.participants[6].stats.kills + json.participants[7].stats.kills + json.participants[8].stats.kills + json.participants[9].stats.kills,
      oppDeaths: json.participants[5].stats.deaths + json.participants[6].stats.deaths + json.participants[7].stats.deaths + json.participants[8].stats.deaths + json.participants[9].stats.deaths,
      oppAssists: json.participants[5].stats.assists + json.participants[6].stats.assists + json.participants[7].stats.assists + json.participants[8].stats.assists + json.participants[9].stats.assists,
      oppeDragons: json.teams[1].dragonKills,
      oppBarons: json.teams[1].baronKills,
      oppHeralds: json.teams[1].riftHeraldKills,
      oppGold: json.participants[5].stats.goldEarned + json.participants[6].stats.goldEarned + json.participants[7].stats.goldEarned + json.participants[8].stats.goldEarned + json.participants[9].stats.goldEarned,
      oppTowers: json.teams[1].towerKills,
      oppInhibs: json.teams[1].inhibitorKills,
      member1: json.participantIdentities[0].player.summonerName,
      member1champ: json.participants[0].championId,
      member1kills: json.participants[0].stats.kills,
      member1deaths: json.participants[0].stats.deaths,
      member1assists: json.participants[0].stats.assists,
      member1gold: json.participants[0].stats.goldEarned,
      member1dmg: json.participants[0].stats.totalDamageDealtToChampions,
      member2: json.participantIdentities[1].player.summonerName,
      member2champ: json.participants[1].championId,
      member2kills: json.participants[1].stats.kills,
      member2deaths: json.participants[1].stats.deaths,
      member2assists: json.participants[1].stats.assists,
      member2gold: json.participants[1].stats.goldEarned,
      member2dmg: json.participants[1].stats.totalDamageDealtToChampions,
      member3: json.participantIdentities[2].player.summonerName,
      member3champ: json.participants[2].championId,
      member3kills: json.participants[2].stats.kills,
      member3deaths: json.participants[2].stats.deaths,
      member3assists: json.participants[2].stats.assists,
      member3gold: json.participants[2].stats.goldEarned,
      member3dmg: json.participants[2].stats.totalDamageDealtToChampions,
      member4: json.participantIdentities[3].player.summonerName,
      member4champ: json.participants[3].championId,
      member4kills: json.participants[3].stats.kills,
      member4deaths: json.participants[3].stats.deaths,
      member4assists: json.participants[3].stats.assists,
      member4gold: json.participants[3].stats.goldEarned,
      member4dmg: json.participants[3].stats.totalDamageDealtToChampions,
      member5: json.participantIdentities[4].player.summonerName,
      member5champ: json.participants[4].championId,
      member5kills: json.participants[4].stats.kills,
      member5deaths: json.participants[4].stats.deaths,
      member5assists: json.participants[4].stats.assists,
      member5gold: json.participants[4].stats.goldEarned,
      member5dmg: json.participants[4].stats.totalDamageDealtToChampions,
      oppmember1: json.participantIdentities[5].player.summonerName,
      oppmember1champ: json.participants[5].championId,
      oppmember1kills: json.participants[5].stats.kills,
      oppmember1deaths: json.participants[5].stats.deaths,
      oppmember1assists: json.participants[5].stats.assists,
      oppmember1gold: json.participants[5].stats.goldEarned,
      oppmember1dmg: json.participants[5].stats.totalDamageDealtToChampions,
      oppmember2: json.participantIdentities[6].player.summonerName,
      oppmember2champ: json.participants[6].championId,
      oppmember2kills: json.participants[6].stats.kills,
      oppmember2deaths: json.participants[6].stats.deaths,
      oppmember2assists: json.participants[6].stats.assists,
      oppmember2gold: json.participants[6].stats.goldEarned,
      oppmember2dmg: json.participants[6].stats.totalDamageDealtToChampions,
      oppmember3: json.participantIdentities[7].player.summonerName,
      oppmember3champ: json.participants[7].championId,
      oppmember3kills: json.participants[7].stats.kills,
      oppmember3deaths: json.participants[7].stats.deaths,
      oppmember3assists: json.participants[7].stats.assists,
      oppmember3gold: json.participants[7].stats.goldEarned,
      oppmember3dmg: json.participants[7].stats.totalDamageDealtToChampions,
      oppmember4: json.participantIdentities[8].player.summonerName,
      oppmember4champ: json.participants[8].championId,
      oppmember4kills: json.participants[8].stats.kills,
      oppmember4deaths: json.participants[8].stats.deaths,
      oppmember4assists: json.participants[8].stats.assists,
      oppmember4gold: json.participants[8].stats.goldEarned,
      oppmember4dmg: json.participants[8].stats.totalDamageDealtToChampions,
      oppmember5: json.participantIdentities[9].player.summonerName,
      oppmember5champ: json.participants[9].championId,
      oppmember5kills: json.participants[9].stats.kills,
      oppmember5deaths: json.participants[9].stats.deaths,
      oppmember5assists: json.participants[9].stats.assists,
      oppmember5gold: json.participants[9].stats.goldEarned,
      oppmember5dmg: json.participants[9].stats.totalDamageDealtToChampions,
    };
    
    console.log(gameData)
    // Create a new post reference with an auto-generated id

    const postListRef = ref(db, 'team1/games/');
    const newPostRef = push(postListRef);
    set(newPostRef, gameData);
    
    setSubmit(!submit)
  }


  
  const handleAdd = (e) => {
    e.preventDefault();
    if (input.length !== 10)
      alert("Please enter a valid game ID");
    else {
      fetch("https://na1.api.riotgames.com/lol/match/v4/matches/" + input + "?api_key=" + riotKey)
        .then((res) => res.json())
        .then((res)=>{
          writeGameData(res)
        });
    } console.log('ho')
  };


  //This is a component that will be reused to represent each individual game.
  const Game = ({game}) => {
      let win = false
      if (game.member1 === captain || game.member2 === captain || game.member3 === captain || game.member4 === captain || game.member5 === captain) {
        if (game.homeWin === 'Win') {
          win = true
        }
        
      } else {
        if (game.homeWin === 'Fail') {
          win = true
        }
      }
      const kills = game.member1kills + game.member2kills + game.member3kills + game.member4kills + game.member5kills
      const oppkills = game.oppmember1kills + game.oppmember2kills + game.oppmember3kills + game.oppmember4kills + game.oppmember5kills
      if (win) {
      return (
        <div  style={{display: "flex", flexDirection: "column", height: games.length * 120, marginTop: '4%', marginRight: '-2%'}}>
            <Grommet>
              <Box align='center' round='small' pad='small' background='rgba(71, 188, 255, .8)' style={{marginLeft: '10%', marginRight: '10%', marginBottom: '10px', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'white'}}>
                <h1>{kills} | {oppkills}</h1>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableCell>CHAMP</TableCell>
                      <TableCell>IGN</TableCell>
                      <TableCell>KDA</TableCell>
                      <TableCell>DMG</TableCell>
                      <TableCell>   </TableCell>
                      <TableCell>DMG</TableCell>
                      <TableCell>KDA</TableCell>
                      <TableCell>IGN</TableCell>
                      <TableCell>CHAMP</TableCell>
                    </TableRow>
                  </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>{game.member1champ}</TableCell>
                        <TableCell>{game.member1}</TableCell>
                        <TableCell>{game.member1kills}/{game.member1deaths}/{game.member1assists}</TableCell>
                        <TableCell>{game.member1dmg}</TableCell>
                        <TableCell>   </TableCell>
                        <TableCell>{game.oppmember1dmg}</TableCell>
                        <TableCell>{game.oppmember1kills}/{game.oppmember1deaths}/{game.oppmember1assists}</TableCell>
                        <TableCell>{game.oppmember1}</TableCell>
                        <TableCell>{game.oppmember1champ}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{game.member2champ}</TableCell>
                        <TableCell>{game.member2}</TableCell>
                        <TableCell>{game.member2kills}/{game.member2deaths}/{game.member2assists}</TableCell>
                        <TableCell>{game.member2dmg}</TableCell>
                        <TableCell>   </TableCell>
                        <TableCell>{game.oppmember2dmg}</TableCell>
                        <TableCell>{game.oppmember2kills}/{game.oppmember2deaths}/{game.oppmember2assists}</TableCell>
                        <TableCell>{game.oppmember2}</TableCell>
                        <TableCell>{game.oppmember2champ}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{game.member3champ}</TableCell>
                        <TableCell>{game.member3}</TableCell>
                        <TableCell>{game.member3kills}/{game.member3deaths}/{game.member3assists}</TableCell>
                        <TableCell>{game.member3dmg}</TableCell>
                        <TableCell>   </TableCell>
                        <TableCell>{game.oppmember3dmg}</TableCell>
                        <TableCell>{game.oppmember3kills}/{game.oppmember3deaths}/{game.oppmember3assists}</TableCell>
                        <TableCell>{game.oppmember3}</TableCell>
                        <TableCell>{game.oppmember3champ}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{game.member4champ}</TableCell>
                        <TableCell>{game.member4}</TableCell>
                        <TableCell>{game.member4kills}/{game.member4deaths}/{game.member4assists}</TableCell>
                        <TableCell>{game.member4dmg}</TableCell>
                        <TableCell>   </TableCell>
                        <TableCell>{game.oppmember4dmg}</TableCell>
                        <TableCell>{game.oppmember4kills}/{game.oppmember4deaths}/{game.oppmember4assists}</TableCell>
                        <TableCell>{game.oppmember4}</TableCell>
                        <TableCell>{game.oppmember4champ}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{game.member5champ}</TableCell>
                        <TableCell>{game.member5}</TableCell>
                        <TableCell>{game.member5kills}/{game.member5deaths}/{game.member5assists}</TableCell>
                        <TableCell>{game.member5dmg}</TableCell>
                        <TableCell>   </TableCell>
                        <TableCell>{game.oppmember5dmg}</TableCell>
                        <TableCell>{game.oppmember5kills}/{game.oppmember5deaths}/{game.oppmember5assists}</TableCell>
                        <TableCell>{game.oppmember5}</TableCell>
                        <TableCell>{game.oppmember5champ}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
            </Grommet>
            </div>
        )}
      else {
        return (
          <div  style={{display: "flex", flexDirection: "column", height: games.length * 120, marginTop: '4%', marginRight: '-2%'}}>
            <Grommet>
              <Box align='center' round='small' pad='small' background='rgba(232, 58, 58, .9)' style={{marginLeft: '10%', marginRight: '10%', marginBottom: '10px', boxShadow:'0 0 .25em rgba(0,0,0,.25)'}}>
                <h1>{kills} | {oppkills}</h1>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableCell>CHAMP</TableCell>
                      <TableCell>IGN</TableCell>
                      <TableCell>KDA</TableCell>
                      <TableCell>DMG</TableCell>
                      <TableCell>   </TableCell>
                      <TableCell>DMG</TableCell>
                      <TableCell>KDA</TableCell>
                      <TableCell>IGN</TableCell>
                      <TableCell>CHAMP</TableCell>
                    </TableRow>
                  </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>{game.member1champ}</TableCell>
                        <TableCell>{game.member1}</TableCell>
                        <TableCell>{game.member1kills}/{game.member1deaths}/{game.member1assists}</TableCell>
                        <TableCell>{game.member1dmg}</TableCell>
                        <TableCell>   </TableCell>
                        <TableCell>{game.oppmember1dmg}</TableCell>
                        <TableCell>{game.oppmember1kills}/{game.oppmember1deaths}/{game.oppmember1assists}</TableCell>
                        <TableCell>{game.oppmember1}</TableCell>
                        <TableCell>{game.oppmember1champ}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{game.member2champ}</TableCell>
                        <TableCell>{game.member2}</TableCell>
                        <TableCell>{game.member2kills}/{game.member2deaths}/{game.member2assists}</TableCell>
                        <TableCell>{game.member2dmg}</TableCell>
                        <TableCell>   </TableCell>
                        <TableCell>{game.oppmember2dmg}</TableCell>
                        <TableCell>{game.oppmember2kills}/{game.oppmember2deaths}/{game.oppmember2assists}</TableCell>
                        <TableCell>{game.oppmember2}</TableCell>
                        <TableCell>{game.oppmember2champ}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{game.member3champ}</TableCell>
                        <TableCell>{game.member3}</TableCell>
                        <TableCell>{game.member3kills}/{game.member3deaths}/{game.member3assists}</TableCell>
                        <TableCell>{game.member3dmg}</TableCell>
                        <TableCell>   </TableCell>
                        <TableCell>{game.oppmember3dmg}</TableCell>
                        <TableCell>{game.oppmember3kills}/{game.oppmember3deaths}/{game.oppmember3assists}</TableCell>
                        <TableCell>{game.oppmember3}</TableCell>
                        <TableCell>{game.oppmember3champ}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{game.member4champ}</TableCell>
                        <TableCell>{game.member4}</TableCell>
                        <TableCell>{game.member4kills}/{game.member4deaths}/{game.member4assists}</TableCell>
                        <TableCell>{game.member4dmg}</TableCell>
                        <TableCell>   </TableCell>
                        <TableCell>{game.oppmember4dmg}</TableCell>
                        <TableCell>{game.oppmember4kills}/{game.oppmember4deaths}/{game.oppmember4assists}</TableCell>
                        <TableCell>{game.oppmember4}</TableCell>
                        <TableCell>{game.oppmember4champ}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{game.member5champ}</TableCell>
                        <TableCell>{game.member5}</TableCell>
                        <TableCell>{game.member5kills}/{game.member5deaths}/{game.member5assists}</TableCell>
                        <TableCell>{game.member5dmg}</TableCell>
                        <TableCell>   </TableCell>
                        <TableCell>{game.oppmember5dmg}</TableCell>
                        <TableCell>{game.oppmember5kills}/{game.oppmember5deaths}/{game.oppmember5assists}</TableCell>
                        <TableCell>{game.oppmember5}</TableCell>
                        <TableCell>{game.oppmember5champ}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
                
            </Grommet>
            </div>
        )}
  };
  
  return(
    <Grommet theme={customTheme}>
      <Grid style={{marginTop:'4%'}}
        fill 
        rows={['xsmall', '450px', '250px']}
        columns={['1/2', '1/2']}
        gap="medium"
        areas={[
        { name: 'banner', start: [0, 0], end: [1, 0] },
        { name: 'schedule', start: [0, 1], end: [0, 1] },
        { name: 'roster', start: [1, 1], end: [1, 1] },
        { name: 'matches', start: [0,2], end: [1,2] },
        ]}
      >
        <Box align='center' round='small' pad='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black'}} gridArea="banner" >
          <h1>Team 1</h1>
        </Box>
        <Box align='center' round='small' pad='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black'}} gridArea="schedule">
          <h1>Schedule</h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Week</TableCell>
                <TableCell>Home</TableCell>
                <TableCell>Away</TableCell>
                <TableCell>Score</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Team 3</TableCell>
              <TableCell>Team 1</TableCell>
              <TableCell>2-0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Team 1</TableCell>
              <TableCell>Team 5</TableCell>
              <TableCell>1-1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Team 4</TableCell>
              <TableCell>Team 1</TableCell>
              <TableCell>0-2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>Team 2</TableCell>
              <TableCell>Team 1</TableCell>
              <TableCell>2-0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>Team 1</TableCell>
              <TableCell>Team 6</TableCell>
              <TableCell>1-1</TableCell>
            </TableRow>
            </TableBody>
          </Table>
          
        </Box>
        <Box align='center' round='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black'}} gridArea="roster">
          <h1>Roster</h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>IGN</TableCell>
                <TableCell>Rank</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=jwoif'>JWoIf</a></TableCell>
                <TableCell>Diamond 1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=Sariz'>Sariz</a></TableCell>
                <TableCell>Diamond 1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=trollfaceftw'>Trollfaceftw</a></TableCell>
                <TableCell>Gold 1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=spartacus'>Spartacus</a></TableCell>
                <TableCell>Silver 1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=J%C3%A4cks'>Jäcks</a></TableCell>
                <TableCell>Silver 4</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <h2>Point Total: 187/200</h2>
          <Button href='https://na.op.gg/multi/query=jwoif%2C%20sariz%2C%20spartacus%2C%20Trollfaceftw%2C%20J%C3%A4cks' primary style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold'}} label='Team OP.GG'/>
        </Box>
        <Box align='center' round='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black'}} gridArea="matches">
          <h1>Match History</h1>
          <form onSubmit={handleAdd}>
          <h2>Match ID:</h2>

          <input
            type="text"
            onChange={(e) => handleChange(e.target.value)}
          />
          <Button type='submit' primary style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold', marginLeft: '10px'}} label='Add Game'/>
          </form>
        </Box>
        </Grid>
        {games.map((game) => (
          <Game game={game}/>
        ))}
    </Grommet >
  )
}

function Team2() {
  return(
    <h1>Team 2</h1>
  )
}

function Team3() {
  return(
    <h1>Team 3</h1>
  )
}

function Team4() {
  return(
    <h1>Team 4</h1>
  )
}

function Team5() {
  return(
    <h1>Team 5</h1>
  )
}

function Team6() {
  return(
    <h1>Team 6</h1>
  )
}

export default App;