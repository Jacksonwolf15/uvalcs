import '../App.css';
import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Grommet, Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet';
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
  
  const champDict = {
    '266': 'aatrox',
    '103': 'ahri',
    '84': 'akali',
    '166': 'akshan',
    '12': 'alistar',
    '32': 'amumu',
    '34': 'anivia',
    '1': 'annie',
    '523': 'apehlios',
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
  }
  
  const riotKey = process.env.REACT_APP_riotKey
  
  try {
    const firebaseApp = initializeApp(config)
  }
  
  catch {
  
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
      }
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
                          <TableCell>{game.member1champname}</TableCell>
                          <TableCell>{game.member1}</TableCell>
                          <TableCell>{game.member1kills}/{game.member1deaths}/{game.member1assists}</TableCell>
                          <TableCell>{game.member1dmg}</TableCell>
                          <TableCell>   </TableCell>
                          <TableCell>{game.oppmember1dmg}</TableCell>
                          <TableCell>{game.oppmember1kills}/{game.oppmember1deaths}/{game.oppmember1assists}</TableCell>
                          <TableCell>{game.oppmember1}</TableCell>
                          <TableCell>{game.oppmember1champname}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{game.member2champname}</TableCell>
                          <TableCell>{game.member2}</TableCell>
                          <TableCell>{game.member2kills}/{game.member2deaths}/{game.member2assists}</TableCell>
                          <TableCell>{game.member2dmg}</TableCell>
                          <TableCell>   </TableCell>
                          <TableCell>{game.oppmember2dmg}</TableCell>
                          <TableCell>{game.oppmember2kills}/{game.oppmember2deaths}/{game.oppmember2assists}</TableCell>
                          <TableCell>{game.oppmember2}</TableCell>
                          <TableCell>{game.oppmember2champname}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{game.member3champname}</TableCell>
                          <TableCell>{game.member3}</TableCell>
                          <TableCell>{game.member3kills}/{game.member3deaths}/{game.member3assists}</TableCell>
                          <TableCell>{game.member3dmg}</TableCell>
                          <TableCell>   </TableCell>
                          <TableCell>{game.oppmember3dmg}</TableCell>
                          <TableCell>{game.oppmember3kills}/{game.oppmember3deaths}/{game.oppmember3assists}</TableCell>
                          <TableCell>{game.oppmember3}</TableCell>
                          <TableCell>{game.oppmember3champname}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{game.member4champname}</TableCell>
                          <TableCell>{game.member4}</TableCell>
                          <TableCell>{game.member4kills}/{game.member4deaths}/{game.member4assists}</TableCell>
                          <TableCell>{game.member4dmg}</TableCell>
                          <TableCell>   </TableCell>
                          <TableCell>{game.oppmember4dmg}</TableCell>
                          <TableCell>{game.oppmember4kills}/{game.oppmember4deaths}/{game.oppmember4assists}</TableCell>
                          <TableCell>{game.oppmember4}</TableCell>
                          <TableCell>{game.oppmember4champname}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{game.member5champname}</TableCell>
                          <TableCell>{game.member5}</TableCell>
                          <TableCell>{game.member5kills}/{game.member5deaths}/{game.member5assists}</TableCell>
                          <TableCell>{game.member5dmg}</TableCell>
                          <TableCell>   </TableCell>
                          <TableCell>{game.oppmember5dmg}</TableCell>
                          <TableCell>{game.oppmember5kills}/{game.oppmember5deaths}/{game.oppmember5assists}</TableCell>
                          <TableCell>{game.oppmember5}</TableCell>
                          <TableCell>{game.oppmember5champname}</TableCell>
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
                          <TableCell>{game.member1champname}</TableCell>
                          <TableCell>{game.member1}</TableCell>
                          <TableCell>{game.member1kills}/{game.member1deaths}/{game.member1assists}</TableCell>
                          <TableCell>{game.member1dmg}</TableCell>
                          <TableCell>   </TableCell>
                          <TableCell>{game.oppmember1dmg}</TableCell>
                          <TableCell>{game.oppmember1kills}/{game.oppmember1deaths}/{game.oppmember1assists}</TableCell>
                          <TableCell>{game.oppmember1}</TableCell>
                          <TableCell>{game.oppmember1champname}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{game.member1champname}</TableCell>
                          <TableCell>{game.member2}</TableCell>
                          <TableCell>{game.member2kills}/{game.member2deaths}/{game.member2assists}</TableCell>
                          <TableCell>{game.member2dmg}</TableCell>
                          <TableCell>   </TableCell>
                          <TableCell>{game.oppmember2dmg}</TableCell>
                          <TableCell>{game.oppmember2kills}/{game.oppmember2deaths}/{game.oppmember2assists}</TableCell>
                          <TableCell>{game.oppmember2}</TableCell>
                          <TableCell>{game.oppmember2champname}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{game.member3champname}</TableCell>
                          <TableCell>{game.member3}</TableCell>
                          <TableCell>{game.member3kills}/{game.member3deaths}/{game.member3assists}</TableCell>
                          <TableCell>{game.member3dmg}</TableCell>
                          <TableCell>   </TableCell>
                          <TableCell>{game.oppmember3dmg}</TableCell>
                          <TableCell>{game.oppmember3kills}/{game.oppmember3deaths}/{game.oppmember3assists}</TableCell>
                          <TableCell>{game.oppmember3}</TableCell>
                          <TableCell>{game.oppmember3champname}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{game.member4champname}</TableCell>
                          <TableCell>{game.member4}</TableCell>
                          <TableCell>{game.member4kills}/{game.member4deaths}/{game.member4assists}</TableCell>
                          <TableCell>{game.member4dmg}</TableCell>
                          <TableCell>   </TableCell>
                          <TableCell>{game.oppmember4dmg}</TableCell>
                          <TableCell>{game.oppmember4kills}/{game.oppmember4deaths}/{game.oppmember4assists}</TableCell>
                          <TableCell>{game.oppmember4}</TableCell>
                          <TableCell>{game.oppmember4champname}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{game.member5champname}</TableCell>
                          <TableCell>{game.member5}</TableCell>
                          <TableCell>{game.member5kills}/{game.member5deaths}/{game.member5assists}</TableCell>
                          <TableCell>{game.member5dmg}</TableCell>
                          <TableCell>   </TableCell>
                          <TableCell>{game.oppmember5dmg}</TableCell>
                          <TableCell>{game.oppmember5kills}/{game.oppmember5deaths}/{game.oppmember5assists}</TableCell>
                          <TableCell>{game.oppmember5}</TableCell>
                          <TableCell>{game.oppmember5champname}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Box>
                  
              </Grommet>
              </div>
          )}
    };
  
    const bigscreen = useMediaQuery('(min-width: 1138px)');
  
    if (bigscreen) {
      return(
        <Grommet>
          <div class="bgrats"></div>
          <div class="bgrats bg2"></div>
          <div class="bgrats bg3"></div>
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
              <h1>The Electric Rats</h1>
            </Box>
            <Box align='center' round='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black'}} gridArea="schedule">
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
                  <TableCell>9/19</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>Team Keith</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>9/26</TableCell>
                  <TableCell>Team Bejeweled</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10/3</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>The Scuttle Hunters</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10/10</TableCell>
                  <TableCell>The Doomsday Specialists</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10/17</TableCell>
                  <TableCell>Team Kaalok</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10/24</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell> The Supine Snails</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10/31</TableCell>
                  <TableCell>Team Verule</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11/7</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>Team Xan</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11/14</TableCell>
                  <TableCell>Team Taesung</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>0-0</TableCell>
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
                    <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=JWoIf'>JWoIf</a></TableCell>
                    <TableCell>Diamond 4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=Quigm'>Quigm</a></TableCell>
                    <TableCell>Bronze 3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=Sariz'>Sariz</a></TableCell>
                    <TableCell>Diamond 4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=NoiceFC'>NoiceFC</a></TableCell>
                    <TableCell>Silver 1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=TheDyou'>TheDyou</a></TableCell>
                    <TableCell>Unranked</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <h2>Point Total: 174.8/175</h2>
              <Button href='https://na.op.gg/multi/query=JWoif%2CQuigm%2CSariz%2CNoiceFC%2CTheDyou' primary style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold', backgroundColor: '#fffa75', border: '#fffa75'}} label='Team OP.GG'/>
            </Box>
            <Box align='center' round='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black'}} gridArea="matches">
              <h1>Match History</h1>
              <form onSubmit={handleAdd}>
              <h2>Match ID:</h2>
  
              <input
                type="text"
                onChange={(e) => handleChange(e.target.value)}
              />
              <Button type='submit' style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold', marginLeft: '10px', backgroundColor: '#fffa75', border: '#fffa75'}} label='Add Game'/>
              </form>
            </Box>
            </Grid>
            {games.map((game) => (
              <Game game={game}/>
            ))}
        </Grommet >
      )}
      return(
        <Grommet>
          <div class="bgrats"></div>
          <div class="bgrats bg2"></div>
          <div class="bgrats bg3"></div>
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
              <h1>The Electric Rats</h1>
            </Box>
            <Box align='center' round='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black'}} gridArea="schedule">
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
                  <TableCell>9/19</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>Team Keith</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>9/26</TableCell>
                  <TableCell>Team Bejeweled</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10/3</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>The Scuttle Hunters</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10/10</TableCell>
                  <TableCell>The Doomsday Specialists</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10/17</TableCell>
                  <TableCell>Team Kaalok</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10/24</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell> The Supine Snails</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10/31</TableCell>
                  <TableCell>Team Verule</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11/7</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>Team Xan</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11/14</TableCell>
                  <TableCell>Team Taesung</TableCell>
                  <TableCell>The Electric Rats</TableCell>
                  <TableCell>0-0</TableCell>
                </TableRow>
                </TableBody>
              </Table>
              
            </Box>
            <Box align='center' round='small' background='rgba(255,255,255,.8)' style={{marginLeft: '10%', marginRight: '10%', paddingBottom: '2%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black',}} gridArea="roster">
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
                    <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=JWoIf'>JWoIf</a></TableCell>
                    <TableCell>Diamond 4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=Quigm'>Quigm</a></TableCell>
                    <TableCell>Bronze 3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=Sariz'>Sariz</a></TableCell>
                    <TableCell>Diamond 4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=NoiceFC'>NoiceFC</a></TableCell>
                    <TableCell>Silver 1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><a style={{color: 'black'}} href='https://na.op.gg/summoner/userName=TheDyou'>TheDyou</a></TableCell>
                    <TableCell>Unranked</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <h2>Point Total: 174.8/175</h2>
              <Button href='https://na.op.gg/multi/query=JWoif%2CQuigm%2CSariz%2CNoiceFC%2CTheDyou' primary style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold', backgroundColor: '#fffa75', border: '#fffa75'}} label='Team OP.GG'/>
            </Box>
            <Box align='center' round='small' background='rgba(255,255,255,.8)' style={{paddingBottom: '2%', marginLeft: '10%', marginRight: '10%', boxShadow:'0 0 .25em rgba(0,0,0,.25)', color: 'black'}} gridArea="matches">
              <h1>Match History</h1>
              <form onSubmit={handleAdd}>
              <h2>Match ID:</h2>
  
              <input
                type="text"
                onChange={(e) => handleChange(e.target.value)}
              />
              <Button type='submit' style={{fontSize: 'calc(10px + 1.5vmin)', color: 'black', fontWeight: 'bold', marginLeft: '10px', backgroundColor: '#fffa75', border: '#fffa75'}} label='Add Game'/>
              </form>
            </Box>
            </Grid>
            {games.map((game) => (
              <Game game={game}/>
            ))}
        </Grommet >
      )
  }

  export default Team1;