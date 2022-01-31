/* eslint-disable react/jsx-no-target-blank */
import '../App.css';
import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Grommet, Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child, push } from "firebase/database";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Game from '../components/game.js'


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
  
  const champDict = {
    '266': 'aatrox',
    '103': 'ahri',
    '84': 'akali',
    '166': 'akshan',
    '12': 'alistar',
    '32': 'amumu',
    '34': 'anivia',
    '1': 'annie',
    '523': 'aphelios',
    '22': 'ashe',
    '136': 'aurelionsol',
    '268': 'azir',
    '432': 'bard',
    '53': 'blitzcrank',
    '63': 'brand',
    '201': 'braum',
    '51': 'caitlyn',
    '164': 'camille',
    '69': 'cassiopeia',
    '31': 'chogath',
    '42': 'corki',
    '122': 'darius',
    '131': 'diana',
    '119': 'draven',
    '36': 'drmundo',
    '245': 'ekko',
    '60': 'elise',
    '28': 'evelynn',
    '81': 'ezreal',
    '9': 'fiddlesticks',
    '114': 'fiora',
    '105': 'fizz',
    '3': 'galio',
    '41': 'gangplank',
    '86': 'garen',
    '150': 'gnar',
    '79': 'gragas',
    '104': 'graves',
    '887': 'gwen',
    '120': 'hecarim',
    '74': 'heimerdinger',
    '420': 'illaoi',
    '39': 'irelia',
    '427': 'ivern',
    '40': 'janna',
    '59': 'jarvaniv',
    '24': 'jax',
    '126': 'jayce',
    '202': 'jhin',
    '222': 'jinx',
    '145': 'kaisa',
    '429': 'kalista',
    '43': 'karma',
    '30': 'karthus',
    '38': 'kassadin',
    '55': 'katarina',
    '10': 'kayle',
    '141': 'kayn',
    '85': 'kennen',
    '121': 'khazix',
    '203': 'kindred',
    '240': 'kled',
    '96': 'kogmaw',
    '7': 'leblanc',
    '64': 'leesin',
    '89': 'leona',
    '876': 'lillia',
    '127': 'lissandra',
    '236': 'lucian',
    '117': 'lulu',
    '99': 'lux',
    '54': 'malphite',
    '90': 'malzahar',
    '57': 'maokai',
    '11': 'masteryi',
    '21': 'missfortune',
    '62': 'monkeyking',
    '82': 'mordekaiser',
    '25': 'morgana',
    '267': 'nami',
    '75': 'nasus',
    '111': 'nautilus',
    '518': 'neeko',
    '76': 'nidalee',
    '56': 'nocturne',
    '20': 'nunu',
    '2': 'olaf',
    '61': 'orianna',
    '516': 'ornn',
    '80': 'pantheon',
    '78': 'poppy',
    '555': 'pyke',
    '246': 'qiyana',
    '133': 'quinn',
    '497': 'rakan',
    '33': 'rammus',
    '421': 'reksai',
    '526': 'rell',
    '58': 'renekton',
    '107': 'rengar',
    '92': 'riven',
    '68': 'rumble',
    '13': 'ryze',
    '360': 'samira',
    '113': 'sejuani',
    '235': 'senna',
    '147': 'seraphine',
    '875': 'sett',
    '35': 'shaco',
    '98': 'shen',
    '102': 'shyvana',
    '27': 'singed',
    '14': 'sion',
    '15': 'sivir',
    '72': 'skarner',
    '37': 'sona',
    '16': 'soraka',
    '50': 'swain',
    '517': 'sylas',
    '134': 'syndra',
    '223': 'tahmkench',
    '163': 'taliyah',
    '91': 'talon',
    '44': 'taric',
    '17': 'teemo',
    '412': 'thresh',
    '18': 'tristana',
    '48': 'trundle',
    '23': 'tryndamere',
    '4': 'twistedfate',
    '29': 'twitch',
    '77': 'udyr',
    '6': 'urgot',
    '110': 'varus',
    '67': 'vayne',
    '45': 'veigar',
    '161': 'velkoz',
    '254': 'vi',
    '234': 'viego',
    '112': 'viktor',
    '8': 'vladimir',
    '106': 'volibear',
    '19': 'warwick',
    '498': 'xayah',
    '101': 'xerath',
    '5': 'xinzhao',
    '157': 'yasuo',
    '777': 'yone',
    '83': 'yorick',
    '350': 'yuumi',
    '154': 'zac',
    '238': 'zed',
    '115': 'ziggs',
    '26': 'zilean',
    '142': 'zoe',
    '143': 'zyra',
    '711': 'vex'
  }
  
  const riotKey = process.env.REACT_APP_riotKey
  
  try {
    const firebaseApp = initializeApp(config)
  }
  
  catch {
  
  }

  function Team10() {

    const [input, setInput] = useState("")
    const [games, setGames] = useState([])
    const [submit, setSubmit] = useState(false)
    
  
    const captain = 'Verule'
  
    useEffect(()=> {
      const dbRef = ref(getDatabase());
      get(child(dbRef, 'team10/games')).then((snapshot) => {
      if (snapshot.exists()) {
        setGames(Object.values(snapshot.val()))
      } else {
        console.log("No data available")
      }
      }).catch((error) => {
      console.error(error);
      });
    }, [submit])
    
  
    const handleChange = (newInput) => {
      setInput(newInput);
    };
  
  
    function writeGameData(json) {
      const db = getDatabase()
      // A post entry.
      const gameData = {
        gameID: json.info.gameId,
        homeWin: json.info.teams[0].win,
        homeKills: json.info.teams[0].objectives.champion.kills,
        homeDragons: json.info.teams[0].objectives.dragon.kills,
        homeBarons: json.info.teams[0].objectives.baron.kills,
        homeHeralds: json.info.teams[0].objectives.riftHerald.kills,
        homeGold: json.info.participants[0].goldEarned + json.info.participants[1].goldEarned + json.info.participants[2].goldEarned + json.info.participants[3].goldEarned + json.info.participants[4].goldEarned,
        homeTowers: json.info.teams[0].objectives.tower.kills,
        homeInhibs: json.info.teams[0].objectives.inhibitor.kills,
        oppKills: json.info.teams[1].objectives.champion.kills,
        oppDragons: json.info.teams[1].objectives.dragon.kills,
        oppBarons: json.info.teams[1].objectives.baron.kills,
        oppHeralds: json.info.teams[1].objectives.riftHerald.kills,
        oppGold: json.info.participants[5].goldEarned + json.info.participants[6].goldEarned + json.info.participants[7].goldEarned + json.info.participants[8].goldEarned + json.info.participants[9].goldEarned,
        oppTowers: json.info.teams[1].objectives.tower.kills,
        oppInhibs: json.info.teams[1].objectives.inhibitor.kills,
        member1: json.info.participants[0].summonerName,
        member1champ: json.info.participants[0].championId,
        member1kills: json.info.participants[0].kills,
        member1deaths: json.info.participants[0].deaths,
        member1assists: json.info.participants[0].assists,
        member1gold: json.info.participants[0].goldEarned,
        member1dmg: json.info.participants[0].totalDamageDealtToChampions,
        member2: json.info.participants[1].summonerName,
        member2champ: json.info.participants[1].championId,
        member2kills: json.info.participants[1].kills,
        member2deaths: json.info.participants[1].deaths,
        member2assists: json.info.participants[1].assists,
        member2gold: json.info.participants[1].goldEarned,
        member2dmg: json.info.participants[1].totalDamageDealtToChampions,
        member3: json.info.participants[2].summonerName,
        member3champ: json.info.participants[2].championId,
        member3kills: json.info.participants[2].kills,
        member3deaths: json.info.participants[2].deaths,
        member3assists: json.info.participants[2].assists,
        member3gold: json.info.participants[2].goldEarned,
        member3dmg: json.info.participants[2].totalDamageDealtToChampions,
        member4: json.info.participants[3].summonerName,
        member4champ: json.info.participants[3].championId,
        member4kills: json.info.participants[3].kills,
        member4deaths: json.info.participants[3].deaths,
        member4assists: json.info.participants[3].assists,
        member4gold: json.info.participants[3].goldEarned,
        member4dmg: json.info.participants[3].totalDamageDealtToChampions,
        member5: json.info.participants[4].summonerName,
        member5champ: json.info.participants[4].championId,
        member5kills: json.info.participants[4].kills,
        member5deaths: json.info.participants[4].deaths,
        member5assists: json.info.participants[4].assists,
        member5gold: json.info.participants[4].goldEarned,
        member5dmg: json.info.participants[4].totalDamageDealtToChampions,
        oppmember1: json.info.participants[5].summonerName,
        oppmember1champ: json.info.participants[5].championId,
        oppmember1kills: json.info.participants[5].kills,
        oppmember1deaths: json.info.participants[5].deaths,
        oppmember1assists: json.info.participants[5].assists,
        oppmember1gold: json.info.participants[5].goldEarned,
        oppmember1dmg: json.info.participants[5].totalDamageDealtToChampions,
        oppmember2: json.info.participants[6].summonerName,
        oppmember2champ: json.info.participants[6].championId,
        oppmember2kills: json.info.participants[6].kills,
        oppmember2deaths: json.info.participants[6].deaths,
        oppmember2assists: json.info.participants[6].assists,
        oppmember2gold: json.info.participants[6].goldEarned,
        oppmember2dmg: json.info.participants[6].totalDamageDealtToChampions,
        oppmember3: json.info.participants[7].summonerName,
        oppmember3champ: json.info.participants[7].championId,
        oppmember3kills: json.info.participants[7].kills,
        oppmember3deaths: json.info.participants[7].deaths,
        oppmember3assists: json.info.participants[7].assists,
        oppmember3gold: json.info.participants[7].goldEarned,
        oppmember3dmg: json.info.participants[7].totalDamageDealtToChampions,
        oppmember4: json.info.participants[8].summonerName,
        oppmember4champ: json.info.participants[8].championId,
        oppmember4kills: json.info.participants[8].kills,
        oppmember4deaths: json.info.participants[8].deaths,
        oppmember4assists: json.info.participants[8].assists,
        oppmember4gold: json.info.participants[8].goldEarned,
        oppmember4dmg: json.info.participants[8].totalDamageDealtToChampions,
        oppmember5: json.info.participants[9].summonerName,
        oppmember5champ: json.info.participants[9].championId,
        oppmember5kills: json.info.participants[9].kills,
        oppmember5deaths: json.info.participants[9].deaths,
        oppmember5assists: json.info.participants[9].assists,
        oppmember5gold: json.info.participants[9].goldEarned,
        oppmember5dmg: json.info.participants[9].totalDamageDealtToChampions,
      };
      
      
      let count = 1
      let champs = [gameData.member1champ,gameData.member2champ,gameData.member3champ,gameData.member4champ,gameData.member5champ,gameData.oppmember1champ,gameData.oppmember2champ,gameData.oppmember3champ,gameData.oppmember4champ,gameData.oppmember5champ,]
      for (let i in champs) {
        let champId = champs[i]
        for (const [key, value] of Object.entries(champDict)) {
          if (`${key}` === String(champId)) {
            switch (count) {
              case 1:
                gameData['member1champname'] = `${value}`
                break;
              case 2:
                gameData['member2champname'] = `${value}`
                break;
              case 3:
                gameData['member3champname'] = `${value}`
                break;
              case 4:
                gameData['member4champname'] = `${value}`
                break;
              case 5:
                gameData['member5champname'] = `${value}`
                break;
              case 6:
                gameData['oppmember1champname'] = `${value}`
                break;
              case 7:
                gameData['oppmember2champname'] = `${value}`
                break;
              case 8:
                gameData['oppmember3champname'] = `${value}`
                break;
              case 9:
                gameData['oppmember4champname'] = `${value}`
                break;
              case 10:
                gameData['oppmember5champname'] = `${value}`
                break;
              default:
                break;
            }
            count++
          }
        }
      }
      console.log(gameData)
      // Create a new post reference with an auto-generated id
  
      const postListRef = ref(db, 'team10/games/');
      const newPostRef = push(postListRef);
      set(newPostRef, gameData);
      
      setSubmit(!submit)
    }
  
  
    
    const handleAdd = (e) => {
      e.preventDefault();
      if (input.length !== 10)
        alert("Please enter a valid game ID");
      else {
        fetch("https://americas.api.riotgames.com/lol/match/v5/matches/NA1_" + input + "?api_key=" + riotKey)
          .then((res) => res.json())
          .then((res)=>{
            writeGameData(res)
          });
      }
      setInput("")
      alert("Game Entry Successful!")
    };
  
  
    const bigscreen = useMediaQuery('(min-width: 1138px)');
  
    if (bigscreen) {
    return(
      <Grommet>
        <div class="bgver"></div>
        <div class="bgver bg2"></div>
        <div class="bgver bg3"></div>
        <Grid style={{marginTop:'4%', paddingBottom: '2%'}}
          fill 
          rows={['xsmall', 'auto', '250px']}
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
            <h1>Team Verule</h1>
          </Box>
          <Box align='center' round='small' pad='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black'}} gridArea="schedule">
            <h1>Schedule</h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Week</TableCell>
                  <TableCell>Home</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Away</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
              <TableRow>
                <TableCell>9/26</TableCell>
                <TableCell>i like fortnite</TableCell>
                <TableCell>2-0</TableCell>
                <TableCell>Team Verule</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10/3</TableCell>
                <TableCell>Team Verule</TableCell>
                <TableCell>1-1</TableCell>
                <TableCell>Fish and Chips</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10/10</TableCell>
                <TableCell>The Copium Cartel</TableCell>
                <TableCell>0-2</TableCell>
                <TableCell>Team Verule</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10/17</TableCell>
                <TableCell>Team Verule</TableCell>
                <TableCell>0-2</TableCell>
                <TableCell>The Scuttle Hunters</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10/24</TableCell>
                <TableCell>The Doomsday Specialists</TableCell>
                <TableCell>2-0</TableCell>
                <TableCell>Team Verule</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10/31</TableCell>
                <TableCell>Team Verule</TableCell>
                <TableCell>1-1</TableCell>
                <TableCell>The Electric Rats</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>11/7</TableCell>
                <TableCell>The Supine Snails</TableCell>
                <TableCell>0-2</TableCell>
                <TableCell>Team Verule</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>11/14</TableCell>
                <TableCell>Team Kaalok</TableCell>
                <TableCell>1-1</TableCell>
                <TableCell>Team Verule</TableCell>
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
                  <TableCell><a style={{color: 'black'}} target="_blank" href='https://na.op.gg/summoner/userName=verule'>Verule</a></TableCell>
                  <TableCell>Silver 2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><a style={{color: 'black'}} target="_blank" href='https://na.op.gg/summoner/userName=Frostsharks'>Frostsharks</a></TableCell>
                  <TableCell>Masters</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><a style={{color: 'black'}} target="_blank" href='https://na.op.gg/summoner/userName=Can Milk Those'>Can Milk Those</a></TableCell>
                  <TableCell>Gold 2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><a style={{color: 'black'}} target="_blank" href='https://na.op.gg/summoner/userName=Fire155'>Fire155</a></TableCell>
                  <TableCell>Plat 4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><a style={{color: 'black'}} target="_blank" href='https://na.op.gg/summoner/userName=DespicableO'>DespicableO</a></TableCell>
                  <TableCell>Unranked</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <h2>Point Total: 170.6/175</h2>
            <Button target="_blank" href='https://na.op.gg/multi/query=verule%2C%20can%20milk%20those%2C%20frostsharks%2C%20fire155%2C%20despicableo' style={{fontSize: 'calc(10px + 1.5vmin)', color: 'white', fontWeight: 'bold', backgroundColor: '#0d0dde', border: '#0d0dde'}} label='Team OP.GG'/>
          </Box>
          <Box align='center' round='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black'}} gridArea="matches">
            <h1>Match History</h1>
            <form onSubmit={handleAdd}>
            <h2>Match ID:</h2>
  
            <input
              type="text"
              onChange={(e) => handleChange(e.target.value)}
            />
            <Button type='submit' primary style={{fontSize: 'calc(10px + 1.5vmin)', color: 'white', fontWeight: 'bold', marginLeft: '10px', backgroundColor: '#0d0dde', border: '#0d0dde'}} label='Add Game'/>
            </form>
          </Box>
          </Grid>
          {games.map((game) => (
            <Game game={game} captain={captain}/>
          ))}
      </Grommet >
    )}
    return(
        <Grommet>
        <div class="bgver"></div>
        <div class="bgver bg2"></div>
        <div class="bgver bg3"></div>
        <Grid style={{marginTop:'4%', paddingBottom: '2%'}}
          fill 
          rows={['xsmall', 'auto', 'auto', 'auto']}
          columns={['1/2', '1/2']}
          gap="medium"
          areas={[
          { name: 'banner', start: [0, 0], end: [1, 0] },
          { name: 'schedule', start: [0, 2], end: [1, 2] },
          { name: 'roster', start: [0, 1], end: [1, 1] },
          { name: 'matches', start: [0,3], end: [1,3] },
          ]}
        >
          <Box align='center' round='small' pad='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black'}} gridArea="banner" >
            <h1>Team Verule</h1>
          </Box>
          <Box align='center' round='small' pad='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black'}} gridArea="schedule">
            <h1>Schedule</h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Week</TableCell>
                  <TableCell>Home</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Away</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
              <TableRow>
                <TableCell>9/26</TableCell>
                <TableCell>i like fortnite</TableCell>
                <TableCell>2-0</TableCell>
                <TableCell>Team Verule</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10/3</TableCell>
                <TableCell>Team Verule</TableCell>
                <TableCell>1-1</TableCell>
                <TableCell>Fish and Chips</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10/10</TableCell>
                <TableCell>The Copium Cartel</TableCell>
                <TableCell>0-2</TableCell>
                <TableCell>Team Verule</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10/17</TableCell>
                <TableCell>Team Verule</TableCell>
                <TableCell>0-2</TableCell>
                <TableCell>The Scuttle Hunters</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10/24</TableCell>
                <TableCell>The Doomsday Specialists</TableCell>
                <TableCell>2-0</TableCell>
                <TableCell>Team Verule</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10/31</TableCell>
                <TableCell>Team Verule</TableCell>
                <TableCell>1-1</TableCell>
                <TableCell>The Electric Rats</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>11/7</TableCell>
                <TableCell>The Supine Snails</TableCell>
                <TableCell>0-2</TableCell>
                <TableCell>Team Verule</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>11/14</TableCell>
                <TableCell>Team Kaalok</TableCell>
                <TableCell>1-1</TableCell>
                <TableCell>Team Verule</TableCell>
              </TableRow>
              </TableBody>
            </Table>
            
          </Box>
          <Box align='center' round='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black', paddingBottom: '2%'}} gridArea="roster">
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
                  <TableCell><a style={{color: 'black'}} target="_blank" href='https://na.op.gg/summoner/userName=verule'>Verule</a></TableCell>
                  <TableCell>Silver 2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><a style={{color: 'black'}} target="_blank" href='https://na.op.gg/summoner/userName=Frostsharks'>Frostsharks</a></TableCell>
                  <TableCell>Masters</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><a style={{color: 'black'}} target="_blank" href='https://na.op.gg/summoner/userName=Can Milk Those'>Can Milk Those</a></TableCell>
                  <TableCell>Gold 2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><a style={{color: 'black'}} target="_blank" href='https://na.op.gg/summoner/userName=Fire155'>Fire155</a></TableCell>
                  <TableCell>Plat4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><a style={{color: 'black'}} target="_blank" href='https://na.op.gg/summoner/userName=DespicableO'>DespicableO</a></TableCell>
                  <TableCell>Unranked</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <h2>Point Total: 170.6/175</h2>
            <Button target="_blank" href='https://na.op.gg/multi/query=verule%2C%20can%20milk%20those%2C%20frostsharks%2C%20fire155%2C%20despicableo' style={{fontSize: 'calc(10px + 1.5vmin)', color: 'white', fontWeight: 'bold', backgroundColor: '#0d0dde', border: '#0d0dde'}} label='Team OP.GG'/>
          </Box>
          <Box align='center' round='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black', paddingBottom: '2%'}} gridArea="matches">
            <h1>Match History</h1>
            <form onSubmit={handleAdd}>
            <h2>Match ID:</h2>
  
            <input
              type="text"
              onChange={(e) => handleChange(e.target.value)}
            />
            <Button type='submit' primary style={{fontSize: 'calc(10px + 1.5vmin)', color: 'white', fontWeight: 'bold', marginLeft: '10px', backgroundColor: '#0d0dde', border: '#0d0dde'}} label='Add Game'/>
            </form>
          </Box>
          </Grid>
          {games.map((game) => (
            <Game game={game} captain={captain}/>
          ))}
      </Grommet >
    )
  }
  export default Team10;