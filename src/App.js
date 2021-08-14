import './App.css';
import React, { useState } from "react";
import { Grid, Anchor, Button, Box, Grommet, Header, Nav } from 'grommet';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { initializeApp, firebase } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";


const config = {
  apiKey: "AIzaSyDeAQw1gPdDTVR6kF4ru7O1ae-9j3cPuPs",
  authDomain: "uvalol-989f6.firebaseapp.com",
  databaseURL: "https://uvalol-989f6-default-rtdb.firebaseio.com",
  projectId: "uvalol-989f6",
  storageBucket: "uvalol-989f6.appspot.com",
  messagingSenderId: "784419543132",
  appId: "1:784419543132:web:29aa78c88292bb10a4ae99",
  measurementId: "G-D631FY7R8W"
};

try {
  const firebaseApp = initializeApp(config)
}

catch {

}

const db = getDatabase()



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

// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });


function App() {
  

  return (
    <Grommet theme={customTheme}>
      <Router>
        <Header background="#3b68ff" pad="small">
          <Nav direction="row">
            <Button style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold'}} primary label='UVA LCS'></Button>
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/' label='Home'/>|
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team1' label='Team 1'/>|
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team2' label='Team 2'/>|
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team3' label='Team 3'/>|
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team4' label='Team 4'/>|
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team5' label='Team 5'/>|
            <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team6' label='Team 6'/>
          </Nav>
        </Header>
      <div className='body'>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
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
      </Router>
    </Grommet>
  );
}

function Home() {
  return(
    <Grommet>
    <div className="App">a
      <header className="App-header">
        <Box round='small' pad='large' background='dark-1'>
          <h1>UVA LCS FALL 2021</h1>
          <h2>STANDINGS</h2>
          <table>
            <thead>
              <tr>
                <th>Team</th>
                <th>Record</th>
                <th>Points</th>
              </tr>
            </thead>
            <tr>
              <td>Team 4</td>
              <td>4-0-1</td>
              <td>9</td>
            </tr>
            <tr>
              <td>Team 3</td>
              <td>3-0-2</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Team 1</td>
              <td>3-1-1</td>
              <td>7</td>
            </tr>
            <tr>
              <td>Team 6</td>
              <td>2-1-2</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Team 2</td>
              <td>2-2-1</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Team 5</td>
              <td>0-3-2</td>
              <td>2</td>
            </tr>
          </table>
        </Box>
      </header>
      
    </div>
    </Grommet>
  )
}

function Team1() {

  const [input, setInput] = useState("");

  const handleChange = (newInput) => {
    setInput(newInput);
  };


  function writeGameData(json) {
  
    // A post entry.
    const gameData = {
      gameID: 'a',
      opposingTeam: 'a',
      homeWin: 'a',
      homeSide: 'a',
      homeKills: 'a',
      homeDeaths: 'a',
      homeAssists: 'a',
      homeDragons: 'a',
      homeBarons: 'a',
      homeGold: 'a',
      homeTowers: 'a',
      member1champ: 'a',
      member1kills: 'a',
      member1deaths: 'a',
      member1assists: 'a',
      member1gold: 'a',
      member1dmg: 'a',
      member2champ: 'a',
      member2kills: 'a',
      member2deaths: 'a',
      member2assists: 'a',
      member2gold: 'a',
      member2dmg: 'a',
      member3champ: 'a',
      member3kills: 'a',
      member3deaths: 'a',
      member3assists: 'a',
      member3gold: 'a',
      member3dmg: 'a',
      member4champ: 'a',
      member4kills: 'a',
      member4deaths: 'a',
      member4assists: 'a',
      member4gold: 'a',
      member4dmg: 'a',
      member5champ: 'a',
      member5kills: 'a',
      member5deaths: 'a',
      member5assists: 'a',
      member5gold: 'a',
      member5dmg: 'a',
      oppmember1champ: 'a',
      oppmember1kills: 'a',
      oppmember1deaths: 'a',
      oppmember1assists: 'a',
      oppmember1gold: 'a',
      oppmember1dmg: 'a',
      oppmember2champ: 'a',
      oppmember2kills: 'a',
      oppmember2deaths: 'a',
      oppmember2assists: 'a',
      oppmember2gold: 'a',
      oppmember2dmg: 'a',
      oppmember3champ: 'a',
      oppmember3kills: 'a',
      oppmember3deaths: 'a',
      oppmember3assists: 'a',
      oppmember3gold: 'a',
      oppmember3dmg: 'a',
      oppmember4champ: 'a',
      oppmember4kills: 'a',
      oppmember4deaths: 'a',
      oppmember4assists: 'a',
      oppmember4gold: 'a',
      oppmember4dmg: 'a',
      oppmember5champ: 'a',
      oppmember5kills: 'a',
      oppmember5deaths: 'a',
      oppmember5assists: 'a',
      oppmember5gold: 'a',
      oppmember5dmg: 'a',
    };
  
    // Get a key for a new Game.
    const newGameKey = db.push(db.child(db.ref, 'games')).key;
  
    // Write the new game's data simultaneously in the team's games list.
    const updates = {};
    updates['team1/games/' + newGameKey] = gameData;
  
    return db.update(db.ref, updates);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.length !== 10)
      alert("Please enter a valid game ID");
    else {
      fetch("https://na1.api.riotgames.com/lol/match/v4/matches/" + input + "?api_key=RGAPI-52a61610-b8a2-4968-91aa-4db800e8a1e6")
        .then((res) => {
          writeGameData(res)
          console.log(res)
        });
    }
  };

  
  return(
    <Grommet full theme={customTheme}>
      <Grid style={{ padding: '40px'}}
        fill 
        rows={['xsmall', 'medium', 'auto']}
        columns={['1/2', '1/2']}
        gap="small"
        areas={[
        { name: 'banner', start: [0, 0], end: [1, 0] },
        { name: 'schedule', start: [0, 1], end: [0, 1] },
        { name: 'roster', start: [1, 1], end: [1, 1] },
        { name: 'matches', start: [0,2], end: [1,2] },
        ]}
      >
        <Box style={{alignItems: 'center'}} gridArea="banner" background="#3b68ff" round='xsmall'>
          <h1>Team 1</h1>
        </Box>
        <Box style={{alignItems: 'center'}} gridArea="schedule" background="dark-1">
          <h1>Schedule</h1>
          <table>
            <thead>
              <tr>
                <th>Week</th>
                <th>Home</th>
                <th>Away</th>
                <th>Score</th>
              </tr>
            </thead>
            <tr>
              <td>1</td>
              <td>Team 3</td>
              <td>Team 1</td>
              <td>2-0</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Team 1</td>
              <td>Team 5</td>
              <td>1-1</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Team 4</td>
              <td>Team 1</td>
              <td>0-2</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Team 2</td>
              <td>Team 1</td>
              <td>2-0</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Team 1</td>
              <td>Team 6</td>
              <td>1-1</td>
            </tr>
          </table>
        </Box>
        <Box style={{alignItems: 'center'}} gridArea="roster" background="dark-1">
          <h1>Roster</h1>
          <table>
            <thead>
              <tr>
                <th>IGN</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tr>
              <td><a style={{color: 'white'}} href='https://na.op.gg/summoner/userName=jwoif'>JWoIf</a></td>
              <td>Diamond 1</td>
            </tr>
            <tr>
              <td><a style={{color: 'white'}} href='https://na.op.gg/summoner/userName=Sariz'>Sariz</a></td>
              <td>Diamond 1</td>
            </tr>
            <tr>
              <td><a style={{color: 'white'}} href='https://na.op.gg/summoner/userName=trollfaceftw'>Trollfaceftw</a></td>
              <td>Platinum 3</td>
            </tr>
            <tr>
            <td><a style={{color: 'white'}} href='https://na.op.gg/summoner/userName=spartacus'>Spartacus</a></td>
              <td>Gold 2</td>
            </tr>
            <tr>
            <td><a style={{color: 'white'}} href='https://na.op.gg/summoner/userName=J%C3%A4cks'>Jäcks</a></td>
              <td>Silver 4</td>
            </tr>
          </table>
          <h2>Point Total: 187/200</h2>
          <Button href='https://na.op.gg/multi/query=jwoif%2C%20sariz%2C%20spartacus%2C%20Trollfaceftw%2C%20J%C3%A4cks' primary style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold'}} label='Team OP.GG'/>
        </Box>
        <Box style={{alignItems: 'center'}} gridArea="matches" background="dark-1">
          <h1>Match History</h1>
          <form onSubmit={handleAdd}>
          <h2>Match ID:</h2>

          <input
            type="text"
            onChange={(e) => handleChange(e.target.value)}
          />
          <Button type='submit' primary style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold'}} label='Add Game'/>
          </form>
        </Box>
        
      </Grid>
    </Grommet>
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