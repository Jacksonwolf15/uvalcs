import '../App.css';
import React from "react";
import { Box, Grommet, Table, TableBody, TableCell, TableHeader, TableRow, Meter} from 'grommet';



const Game = ({game, captain}) => {
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
    const damage1 = Math.max(game.member1dmg, game.member2dmg,game.member3dmg, game.member4dmg,game.member5dmg)
    const damage2 = Math.max(game.oppmember1dmg,game.oppmember2dmg, game.oppmember3dmg,game.oppmember4dmg, game.oppmember5dmg)
    const kills = game.member1kills + game.member2kills + game.member3kills + game.member4kills + game.member5kills
    const oppkills = game.oppmember1kills + game.oppmember2kills + game.oppmember3kills + game.oppmember4kills + game.oppmember5kills
    let image1 = 'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/' + game.member1champname + '.png'
    let image2 = 'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/' + game.member2champname + '.png'
    let image3 = 'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/' + game.member3champname + '.png'
    let image4 = 'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/' + game.member4champname + '.png'
    let image5 = 'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/' + game.member5champname + '.png'
    let image6 = 'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/' + game.oppmember1champname + '.png'
    let image7 = 'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/' + game.oppmember2champname + '.png'
    let image8 = 'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/' + game.oppmember3champname + '.png'
    let image9 = 'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/' + game.oppmember4champname + '.png'
    let image10 = 'https://fastcdn.mobalytics.gg/assets/lol/images/dd/champions/icons/' + game.oppmember5champname + '.png'
    if (win) { //make everything in the boxes and the box static size.
    return (
      <div  style={{display: "flex", flexDirection: "column", marginTop: '4%', marginRight: '-2%'}}> 
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
                      <TableCell><img src={image1} alt={game.member1champname} width='48px' height='48'></img></TableCell>
                      <TableCell>{game.member1}</TableCell>
                      <TableCell>{game.member1kills}/{game.member1deaths}/{game.member1assists}</TableCell>
                      <TableCell>{game.member1dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.member1dmg / damage1) * 100,
                            label: game.member1dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>   </TableCell>
                      <TableCell>{game.oppmember1dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.oppmember1dmg / damage2) * 100,
                            label: game.oppmember1dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>{game.oppmember1kills}/{game.oppmember1deaths}/{game.oppmember1assists}</TableCell>
                      <TableCell>{game.oppmember1}</TableCell>
                      <TableCell><img src={image6} alt={game.oppmember1champname} width='48px' height='48'></img></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><img src={image2} alt={game.member2champname} width='48px' height='48'></img></TableCell>
                      <TableCell>{game.member2}</TableCell>
                      <TableCell>{game.member2kills}/{game.member2deaths}/{game.member2assists}</TableCell>
                      <TableCell>{game.member2dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.member2dmg / damage1) * 100,
                            label: game.member2dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>   </TableCell>
                      <TableCell>{game.oppmember2dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.oppmember2dmg / damage2) * 100,
                            label: game.oppmember2dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>{game.oppmember2kills}/{game.oppmember2deaths}/{game.oppmember2assists}</TableCell>
                      <TableCell>{game.oppmember2}</TableCell>
                      <TableCell><img src={image7} alt={game.oppmember2champname} width='48px' height='48'></img></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><img src={image3} alt={game.member3champname} width='48px' height='48'></img></TableCell>
                      <TableCell>{game.member3}</TableCell>
                      <TableCell>{game.member3kills}/{game.member3deaths}/{game.member3assists}</TableCell>
                      <TableCell>{game.member3dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.member3dmg / damage1) * 100,
                            label: game.member3dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>   </TableCell>
                      <TableCell>{game.oppmember3dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.oppmember3dmg / damage2) * 100,
                            label: game.oppmember3dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>{game.oppmember3kills}/{game.oppmember3deaths}/{game.oppmember3assists}</TableCell>
                      <TableCell>{game.oppmember3}</TableCell>
                      <TableCell><img src={image8} alt={game.oppmember3champname} width='48px' height='48'></img></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><img src={image4} alt={game.member4champname} width='48px' height='48'></img></TableCell>
                      <TableCell>{game.member4}</TableCell>
                      <TableCell>{game.member4kills}/{game.member4deaths}/{game.member4assists}</TableCell>
                      <TableCell>{game.member4dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.member4dmg / damage1) * 100,
                            label: game.member4dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>   </TableCell>
                      <TableCell>{game.oppmember4dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.oppmember4dmg / damage2) * 100,
                            label: game.oppmember4dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>{game.oppmember4kills}/{game.oppmember4deaths}/{game.oppmember4assists}</TableCell>
                      <TableCell>{game.oppmember4}</TableCell>
                      <TableCell><img src={image9} alt={game.oppmember4champname} width='48px' height='48'></img></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><img src={image5} alt={game.member5champname} width='48px' height='48'></img></TableCell>
                      <TableCell>{game.member5}</TableCell>
                      <TableCell>{game.member5kills}/{game.member5deaths}/{game.member5assists}</TableCell>
                      <TableCell>{game.member5dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.member5dmg / damage1) * 100,
                            label: game.member5dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>   </TableCell>
                      <TableCell>{game.oppmember5dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.oppmember5dmg / damage2) * 100,
                            label: game.oppmember5dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>{game.oppmember5kills}/{game.oppmember5deaths}/{game.oppmember5assists}</TableCell>
                      <TableCell>{game.oppmember5}</TableCell>
                      <TableCell><img src={image10} alt={game.oppmember5champname} width='48px' height='48'></img></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
          </Grommet>
          </div>
      )}
    else {
      return (
        <div  style={{display: "flex", flexDirection: "column", marginTop: '4%', marginRight: '-2%'}}>
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
                      <TableCell><img src={image1} alt={game.member1champname} width='48px' height='48'></img></TableCell>
                      <TableCell>{game.member1}</TableCell>
                      <TableCell>{game.member1kills}/{game.member1deaths}/{game.member1assists}</TableCell>
                      <TableCell>{game.member1dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.member1dmg / damage1) * 100,
                            label: game.member1dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>   </TableCell>
                      <TableCell>{game.oppmember1dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.oppmember1dmg / damage2) * 100,
                            label: game.oppmember1dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>{game.oppmember1kills}/{game.oppmember1deaths}/{game.oppmember1assists}</TableCell>
                      <TableCell>{game.oppmember1}</TableCell>
                      <TableCell><img src={image6} alt={game.oppmember1champname} width='48px' height='48'></img></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><img src={image2} alt={game.member2champname} width='48px' height='48'></img></TableCell>
                      <TableCell>{game.member2}</TableCell>
                      <TableCell>{game.member2kills}/{game.member2deaths}/{game.member2assists}</TableCell>
                      <TableCell>{game.member2dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.member2dmg / damage1) * 100,
                            label: game.member2dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>   </TableCell>
                      <TableCell>{game.oppmember2dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.oppmember2dmg / damage2) * 100,
                            label: game.oppmember2dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>{game.oppmember2kills}/{game.oppmember2deaths}/{game.oppmember2assists}</TableCell>
                      <TableCell>{game.oppmember2}</TableCell>
                      <TableCell><img src={image7} alt={game.oppmember2champname} width='48px' height='48'></img></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><img src={image3} alt={game.member3champname} width='48px' height='48'></img></TableCell>
                      <TableCell>{game.member3}</TableCell>
                      <TableCell>{game.member3kills}/{game.member3deaths}/{game.member3assists}</TableCell>
                      <TableCell>{game.member3dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.member3dmg / damage1) * 100,
                            label: game.member3dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>   </TableCell>
                      <TableCell>{game.oppmember3dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.oppmember3dmg / damage2) * 100,
                            label: game.oppmember3dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>{game.oppmember3kills}/{game.oppmember3deaths}/{game.oppmember3assists}</TableCell>
                      <TableCell>{game.oppmember3}</TableCell>
                      <TableCell><img src={image8} alt={game.oppmember3champname} width='48px' height='48'></img></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><img src={image4} alt={game.member4champname} width='48px' height='48'></img></TableCell>
                      <TableCell>{game.member4}</TableCell>
                      <TableCell>{game.member4kills}/{game.member4deaths}/{game.member4assists}</TableCell>
                      <TableCell>{game.member4dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.member4dmg / damage1) * 100,
                            label: game.member4dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>   </TableCell>
                      <TableCell>{game.oppmember4dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.oppmember4dmg / damage2) * 100,
                            label: game.oppmember4dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>{game.oppmember4kills}/{game.oppmember4deaths}/{game.oppmember4assists}</TableCell>
                      <TableCell>{game.oppmember4}</TableCell>
                      <TableCell><img src={image9} alt={game.oppmember4champname} width='48px' height='48'></img></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><img src={image5} alt={game.member5champname} width='48px' height='48'></img></TableCell>
                      <TableCell>{game.member5}</TableCell>
                      <TableCell>{game.member5kills}/{game.member5deaths}/{game.member5assists}</TableCell>
                      <TableCell>{game.member5dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.member5dmg / damage1) * 100,
                            label: game.member5dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>   </TableCell>
                      <TableCell>{game.oppmember5dmg}<br/><Meter height='10px' width='50px'
                        values={[{
                            value: (game.oppmember5dmg / damage2) * 100,
                            label: game.oppmember5dmg,
                        }]}
                        aria-label="meter"
                        /></TableCell>
                      <TableCell>{game.oppmember5kills}/{game.oppmember5deaths}/{game.oppmember5assists}</TableCell>
                      <TableCell>{game.oppmember5}</TableCell>
                      <TableCell><img src={image10} alt={game.oppmember5champname} width='48px' height='48'></img></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
              
          </Grommet>
          </div>
      )}
};

export default Game;