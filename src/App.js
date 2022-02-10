import './App.css';
import React, { useEffect, useState } from "react";
import Team from './components/team.js'
import Home from './pages/Home'
import { Anchor, Button, Menu, Box, Grommet, Header, Table, TableCell, TableRow } from 'grommet';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
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
  initializeApp(config)
}
catch {

}

function App() {
  const [teams, setTeams] = useState([])
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
  }, [])

  useEffect(() => {
    setItems([])
    let temp = []
    for (let i = 0; i < teams.length; i++) {
      temp.push({label: teams[i].name, href: '/' + teams[i].name.replace(/ /g, '')})
    }
    setItems(temp)
  }, [teams])
  

  const bigscreen = useMediaQuery('(min-width: 1020px)');
  if (!bigscreen) {
    return (
      <Grommet>
        <Router>
          <Header background="#3b68ff" pad="small">
            <Button href='/' style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold', backgroundColor: '#ffa51f', border: '#ffa51f'}} label='UVALCS'/>
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
              <Route key={team.teamName} path={'/' + team.name.replace(/ /g, '')}>
                <Team key={team.teamName} teamKey={team.teamName} Name={team.name} captain={team.captain} teamColor1={team.teamColor1} teamColor2={team.teamColor2} teamWins={team.wins} teamLosses={team.losses} teamTies={team.ties}/>
              </Route> 
            ))}
            <Route path="/">
              <Home teams={teams}/>
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
                  <TableCell key={team.teamName}>
                    <Anchor key={team.teamName} style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href={team.name.replace(/ /g, '')} label={team.name}></Anchor>
                  </TableCell> 
                ))}
              </TableRow>
            </Table>
        </Header>
      <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div className='box' >
          <Switch>
            {teams.map((team) => (
              <Route key={team.teamName} path={'/' + team.name.replace(/ /g, '')}>
                <Team key={team.teamName} teamKey={team.teamName} Name={team.name} captain={team.captain} teamColor1={team.teamColor1} teamColor2={team.teamColor2} teamWins={team.wins} teamLosses={team.losses} teamTies={team.ties} />
              </Route> 
            ))}
            <Route path="/">
              <Home teams={teams}/>
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    </Grommet>
  );
}

export default App;