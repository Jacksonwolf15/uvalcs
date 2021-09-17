import './App.css';
import React from "react";
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
import { Anchor, Button, Menu, Box, Grommet, Header, Table, TableCell, TableRow } from 'grommet';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { initializeApp } from "firebase/app";
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
                  items={[
                    { label: 'The Electric Rats', href: '/Team1', },
                    { label: 'The Doomsday Specialists', href: '/Team2' },
                    { label: 'The Supine Snails', href: '/Team3' },
                    { label: 'Team Jungle Diff ', href: '/Team4' },
                    { label: 'The Scuttle Hunters', href: '/Team5' },
                    { label: 'Team Kaalok', href: '/Team6' },
                    { label: 'Team Keith', href: '/Team7' },
                    { label: 'The Copium Cartel', href: '/Team8' },
                    { label: 'i like fortnite', href: '/Team9' },
                    { label: 'The Verule', href: '/Team10' },
                  ]}
                />
              </Box>
            </Header>
            <div>
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
            <Route path="/Team7">
              <Team7 />
            </Route>
            <Route path="/Team8">
              <Team8 />
            </Route>
            <Route path="/Team9">
              <Team9 />
            </Route>
            <Route path="/Team10">
              <Team10 />
            </Route>
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
                <TableCell>
                  <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team1' label='The Electric Rats'/>
                </TableCell>
                <TableCell>
                  <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team2' label='The Doomsday Specialists'/>
                </TableCell>
                <TableCell>
                  <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team3' label=' The Supine Snails'/>
                </TableCell>
                <TableCell>
                  <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team4' label='Team Jungle Diff '/>
                </TableCell>
                <TableCell>
                  <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team5' label='The Scuttle Hunters'/>
                </TableCell>
                <TableCell>
                  <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team6' label='Team Kaalok'/>
                </TableCell>
                <TableCell>
                  <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team7' label='Team Keith'/>
                </TableCell>
                <TableCell>
                  <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team8' label='The Copium Cartel'/>
                </TableCell>
                <TableCell>
                  <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team9' label='i like fortnite'/>
                </TableCell>
                <TableCell>
                  <Anchor style={{fontSize: 'calc(6px + 1.25vmin)'}} color='white' href='/Team10' label='Team Verule'/>
                </TableCell>
              </TableRow>
            </Table>
        </Header>
      
      <div>
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
            <Route path="/Team7">
              <Team7 />
            </Route>
            <Route path="/Team8">
              <Team8 />
            </Route>
            <Route path="/Team9">
              <Team9 />
            </Route>
            <Route path="/Team10">
              <Team10 />
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

export default App;