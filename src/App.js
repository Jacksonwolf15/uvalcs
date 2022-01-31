import './App.css';
import React, { useEffect, useState } from "react";
import Team from './components/team.js'
import Home from './pages/Home'
import Team1 from './pages/Team1'
import Team2 from './pages/Team2'
import Team3 from './pages/Team3'
import Team4 from './pages/Team4'
import Team5 from './pages/Team5'
import Team6 from './pages/Team6'
import Team7 from './pages/Team7'
import Team8 from './pages/Team8'
import Team9 from './pages/Team9'
import Team10 from './pages/Team10'
import { Anchor, Button, Menu, Box, Layer, Grommet, Header, Table, TableCell, TableRow } from 'grommet';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child, push } from "firebase/database";
import useMediaQuery from '@material-ui/core/useMediaQuery';

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

try {
  const firebaseApp = initializeApp(config)
}

catch {

}

function App() {

  const [teams, setTeams] = useState([])
  const [submit, setSubmit] = useState(false)
  const [teamName, setTeamName] = useState('')
  const [teamColor1, setTeamColor1] = useState('')
  const [teamColor2, setTeamColor2] = useState('')
  const [captain, setCaptain] = useState('')
  const [show, setShow] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(dbRef).then((snapshot) => {
    if (snapshot.exists()) {
      setTeams(Object.values(snapshot.val()))
    } else {
      console.log("No data available")
    }
    }).catch((error) => {
    console.error(error);
    });
  }, [submit])

  useEffect(() => {
    setItems([])
    let temp = []
    for (let i = 0; i < teams.length; i++) {
      temp.push({label: teams[i].teamName, href: '/' + teams[i].teamName.replace(/ /g, '')})
    }
    setItems(temp)
  }, [teams])
  
  const handleAdd = () => {
    if (teamName.length === 0) {
      alert("Please enter a valid team name");
    } else if (teamColor1.length !== 7 || teamColor2.length !== 7) {
      alert("Please enter a valid hex code for your colors in the form #1a34b6 for example")
    } else if (captain.length === 0) {
      alert("Please enter a valid captain name")
    } else {
      writeTeamData()
      setTeamName('')
      setTeamColor1('')
      setTeamColor2('')
      setCaptain('')
      setShow(false)
      alert("Team Entry Successful!")
    }
  };
  console.log(teams[1])
  const writeTeamData = () => {
    const db = getDatabase()
    const teamData = {
      teamName: teamName,
      teamColor1: teamColor1,
      teamColor2: teamColor2,
      captain: captain,
      games: [],
      wins: 0,
      losses: 0,
      ties: 0,
      players: [],
      schedeule: []
    }
    set(ref(db, teamName), teamData);
    setSubmit(!submit)
  }

  const handleTeamName = (newTeamName) => {
    setTeamName(newTeamName)
  }

  const handleTeamColor1 = (newColor) => {
    setTeamColor1(newColor)
  }

  const handleTeamColor2 = (newColor) => {
    setTeamColor2(newColor)
  }

  const handleCaptain = (newCaptain) => {
    setCaptain(newCaptain)
  }

  const bigscreen = useMediaQuery('(min-width: 1020px)');
  if (!bigscreen) {
    return (
      <Grommet>
        <Router>
          <Header background="#3b68ff" pad="small">
            <Button href='/' style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold', backgroundColor: '#ffa51f', border: '#ffa51f'}} label='UVALCS'/>
              <form onSubmit={handleAdd}>
                  <Button label="Add Team" onClick={() => setShow(true)} />
                    {show && (
                      <Layer
                        onEsc={() => setShow(false)}
                        onClickOutside={() => setShow(false)}
                      >
                        <Box align='center' round='small' pad='medium' background='rgba(255,255,255,.8)' style={{maxWidth: '40rem', margin: 'auto', borderRadius: '.25em', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black', marginTop: '5%'}}>
                          <h2>Team Name: </h2>
                          <input
                            label='Team Name: ' 
                            type="text"
                            onChange={(e) => handleTeamName(e.target.value)}
                          />
                          <h2>Captain: </h2>
                          <input
                            label='Captain: ' 
                            type="text"
                            onChange={(e) => handleCaptain(e.target.value)}
                          />
                          <h2>Hexcode Color 1: </h2>
                          <input
                            label='Color 1: ' 
                            type="text"
                            onChange={(e) => handleTeamColor1(e.target.value)}
                          />
                          <h2>Hexcode Color 2: </h2>
                          <input
                            label='Color 2: ' 
                            type="text"
                            onChange={(e) => handleTeamColor2(e.target.value)}
                          />
                          <Button type='submit' onClick={() => handleAdd()} style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold', backgroundColor: '#ffa51f', border: '#ffa51f'}} label='Add Team'/>
                        </Box>
                      </Layer>
                    )}
                  </form>
              <Box justify='end'>
                <Menu 
                  label="Teams"
                  dropProps={{ align: { top: 'bottom', right: 'right' } }}
                  items={items}
                />
              </Box>
            </Header>
            <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div className='box' >
          <Switch>
            {teams.map((team) => (
              <Route path={'/' + team.teamName.replace(/ /g, '')}>
                <Team teamName={team.teamName} captain={team.captain} teamColor1={team.teamColor1} teamColor2={team.teamColor2}/>
              </Route> 
            ))}
            
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    </Grommet>
    )
  }
      return(
    <Grommet>
      <Router>
        <Header tag="header" background="#3b68ff" pad="small" justify='center'>
          <Button href='/' style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold', backgroundColor: '#ffa51f', border: '#ffa51f'}} label='UVALCS'/>
            <Table>
              <TableRow>
                {teams.map((team) => (
                  <TableCell>
                    <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href={team.teamName.replace(/ /g, '')} label={team.teamName}></Anchor>
                  </TableCell> 
                ))}
                <TableCell>
                  <form onSubmit={handleAdd}>
                  <Button label="Add Team" onClick={() => setShow(true)} />
                    {show && (
                      <Layer
                        onEsc={() => setShow(false)}
                        onClickOutside={() => setShow(false)}
                      >
                        <Box align='center' round='small' pad='medium' background='rgba(255,255,255,.8)' style={{maxWidth: '40rem', margin: 'auto', borderRadius: '.25em', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black', marginTop: '5%'}}>
                          <h2>Team Name: </h2>
                          <input
                            label='Team Name: ' 
                            type="text"
                            onChange={(e) => handleTeamName(e.target.value)}
                          />
                          <h2>Captain: </h2>
                          <input
                            label='Captain: ' 
                            type="text"
                            onChange={(e) => handleCaptain(e.target.value)}
                          />
                          <h2>Hexcode Color 1: </h2>
                          <input
                            label='Color 1: ' 
                            type="text"
                            onChange={(e) => handleTeamColor1(e.target.value)}
                          />
                          <h2>Hexcode Color 2: </h2>
                          <input
                            label='Color 2: ' 
                            type="text"
                            onChange={(e) => handleTeamColor2(e.target.value)}
                          />
                          <Button type='submit' onClick={() => handleAdd()} style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold', backgroundColor: '#ffa51f', border: '#ffa51f'}} label='Add Team'/>
                        </Box>
                      </Layer>
                    )}
                  </form>
                </TableCell>
              </TableRow>
            </Table>
        </Header>
      
      <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div className='box' >
          <Switch>
            {teams.map((team) => (
              <Route path={'/' + team.teamName.replace(/ /g, '')}>
                <Team teamName={team.teamName} captain={team.captain}/>
              </Route> 
            ))}
            
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

export default App;