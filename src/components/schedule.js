import '../App.css';
import React from "react";
import { Grommet, Table, TableBody, TableCell, TableHeader, TableRow} from 'grommet';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const Schedule = ({schedule}) => {

    const bigscreen = useMediaQuery('(min-width: 1138px)');
    if (bigscreen) { 
        return(
            <Grommet>
                    <h1 align='center'>Schedule</h1>
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
                                    <TableCell>Game 1</TableCell>
                                    <TableCell>{schedule[0].home}</TableCell>
                                    <TableCell>{schedule[0].homeWins}-{schedule[0].awayWins}</TableCell>
                                    <TableCell>{schedule[0].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 2</TableCell>
                                    <TableCell>{schedule[1].home}</TableCell>
                                    <TableCell>{schedule[1].homeWins}-{schedule[1].awayWins}</TableCell>
                                    <TableCell>{schedule[1].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 3</TableCell>
                                    <TableCell>{schedule[2].home}</TableCell>
                                    <TableCell>{schedule[2].homeWins}-{schedule[2].awayWins}</TableCell>
                                    <TableCell>{schedule[2].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 4</TableCell>
                                    <TableCell>{schedule[3].home}</TableCell>
                                    <TableCell>{schedule[3].homeWins}-{schedule[3].awayWins}</TableCell>
                                    <TableCell>{schedule[3].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 5</TableCell>
                                    <TableCell>{schedule[4].home}</TableCell>
                                    <TableCell>{schedule[4].homeWins}-{schedule[4].awayWins}</TableCell>
                                    <TableCell>{schedule[4].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 6</TableCell>
                                    <TableCell>{schedule[5].home}</TableCell>
                                    <TableCell>{schedule[5].homeWins}-{schedule[5].awayWins}</TableCell>
                                    <TableCell>{schedule[5].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 7</TableCell>
                                    <TableCell>{schedule[6].home}</TableCell>
                                    <TableCell>{schedule[6].homeWins}-{schedule[6].awayWins}</TableCell>
                                    <TableCell>{schedule[6].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 8</TableCell>
                                    <TableCell>{schedule[7].home}</TableCell>
                                    <TableCell>{schedule[7].homeWins}-{schedule[7].awayWins}</TableCell>
                                    <TableCell>{schedule[7].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 9</TableCell>
                                    <TableCell>{schedule[8].home}</TableCell>
                                    <TableCell>{schedule[8].homeWins}-{schedule[8].awayWins}</TableCell>
                                    <TableCell>{schedule[8].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 10</TableCell>
                                    <TableCell>{schedule[9].home}</TableCell>
                                    <TableCell>{schedule[9].homeWins}-{schedule[9].awayWins}</TableCell>
                                    <TableCell>{schedule[9].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 11</TableCell>
                                    <TableCell>{schedule[10].home}</TableCell>
                                    <TableCell>{schedule[10].homeWins}-{schedule[10].awayWins}</TableCell>
                                    <TableCell>{schedule[10].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 12</TableCell>
                                    <TableCell>{schedule[11].home}</TableCell>
                                    <TableCell>{schedule[11].homeWins}-{schedule[11].awayWins}</TableCell>
                                    <TableCell>{schedule[11].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 13</TableCell>
                                    <TableCell>{schedule[12].home}</TableCell>
                                    <TableCell>{schedule[12].homeWins}-{schedule[12].awayWins}</TableCell>
                                    <TableCell>{schedule[12].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 14</TableCell>
                                    <TableCell>{schedule[13].home}</TableCell>
                                    <TableCell>{schedule[13].homeWins}-{schedule[13].awayWins}</TableCell>
                                    <TableCell>{schedule[13].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 15</TableCell>
                                    <TableCell>{schedule[14].home}</TableCell>
                                    <TableCell>{schedule[14].homeWins}-{schedule[14].awayWins}</TableCell>
                                    <TableCell>{schedule[14].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 16</TableCell>
                                    <TableCell>{schedule[15].home}</TableCell>
                                    <TableCell>{schedule[15].homeWins}-{schedule[15].awayWins}</TableCell>
                                    <TableCell>{schedule[15].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 17</TableCell>
                                    <TableCell>{schedule[16].home}</TableCell>
                                    <TableCell>{schedule[16].homeWins}-{schedule[16].awayWins}</TableCell>
                                    <TableCell>{schedule[16].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 18</TableCell>
                                    <TableCell>{schedule[17].home}</TableCell>
                                    <TableCell>{schedule[17].homeWins}-{schedule[17].awayWins}</TableCell>
                                    <TableCell>{schedule[17].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 19</TableCell>
                                    <TableCell>{schedule[18].home}</TableCell>
                                    <TableCell>{schedule[18].homeWins}-{schedule[18].awayWins}</TableCell>
                                    <TableCell>{schedule[18].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 20</TableCell>
                                    <TableCell>{schedule[19].home}</TableCell>
                                    <TableCell>{schedule[19].homeWins}-{schedule[19].awayWins}</TableCell>
                                    <TableCell>{schedule[19].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 21</TableCell>
                                    <TableCell>{schedule[20].home}</TableCell>
                                    <TableCell>{schedule[20].homeWins}-{schedule[20].awayWins}</TableCell>
                                    <TableCell>{schedule[20].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 22</TableCell>
                                    <TableCell>{schedule[21].home}</TableCell>
                                    <TableCell>{schedule[21].homeWins}-{schedule[21].awayWins}</TableCell>
                                    <TableCell>{schedule[21].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>11/26+</TableCell>
                                    <TableCell>PLAYOFFS START!</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>     
            </Grommet>
        )} else {
            return(
                <Grommet>
                        <h1 align='center'>Schedule</h1>
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
                                    <TableCell>Game 1</TableCell>
                                    <TableCell>{schedule[0].home}</TableCell>
                                    <TableCell>{schedule[0].homeWins}-{schedule[0].awayWins}</TableCell>
                                    <TableCell>{schedule[0].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 2</TableCell>
                                    <TableCell>{schedule[1].home}</TableCell>
                                    <TableCell>{schedule[1].homeWins}-{schedule[1].awayWins}</TableCell>
                                    <TableCell>{schedule[1].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 3</TableCell>
                                    <TableCell>{schedule[2].home}</TableCell>
                                    <TableCell>{schedule[2].homeWins}-{schedule[2].awayWins}</TableCell>
                                    <TableCell>{schedule[2].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 4</TableCell>
                                    <TableCell>{schedule[3].home}</TableCell>
                                    <TableCell>{schedule[3].homeWins}-{schedule[3].awayWins}</TableCell>
                                    <TableCell>{schedule[3].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 5</TableCell>
                                    <TableCell>{schedule[4].home}</TableCell>
                                    <TableCell>{schedule[4].homeWins}-{schedule[4].awayWins}</TableCell>
                                    <TableCell>{schedule[4].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 6</TableCell>
                                    <TableCell>{schedule[5].home}</TableCell>
                                    <TableCell>{schedule[5].homeWins}-{schedule[5].awayWins}</TableCell>
                                    <TableCell>{schedule[5].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 7</TableCell>
                                    <TableCell>{schedule[6].home}</TableCell>
                                    <TableCell>{schedule[6].homeWins}-{schedule[6].awayWins}</TableCell>
                                    <TableCell>{schedule[6].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 8</TableCell>
                                    <TableCell>{schedule[7].home}</TableCell>
                                    <TableCell>{schedule[7].homeWins}-{schedule[7].awayWins}</TableCell>
                                    <TableCell>{schedule[7].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 9</TableCell>
                                    <TableCell>{schedule[8].home}</TableCell>
                                    <TableCell>{schedule[8].homeWins}-{schedule[8].awayWins}</TableCell>
                                    <TableCell>{schedule[8].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 10</TableCell>
                                    <TableCell>{schedule[9].home}</TableCell>
                                    <TableCell>{schedule[9].homeWins}-{schedule[9].awayWins}</TableCell>
                                    <TableCell>{schedule[9].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 11</TableCell>
                                    <TableCell>{schedule[10].home}</TableCell>
                                    <TableCell>{schedule[10].homeWins}-{schedule[10].awayWins}</TableCell>
                                    <TableCell>{schedule[10].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 12</TableCell>
                                    <TableCell>{schedule[11].home}</TableCell>
                                    <TableCell>{schedule[11].homeWins}-{schedule[11].awayWins}</TableCell>
                                    <TableCell>{schedule[11].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 13</TableCell>
                                    <TableCell>{schedule[12].home}</TableCell>
                                    <TableCell>{schedule[12].homeWins}-{schedule[12].awayWins}</TableCell>
                                    <TableCell>{schedule[12].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 14</TableCell>
                                    <TableCell>{schedule[13].home}</TableCell>
                                    <TableCell>{schedule[13].homeWins}-{schedule[13].awayWins}</TableCell>
                                    <TableCell>{schedule[13].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 15</TableCell>
                                    <TableCell>{schedule[14].home}</TableCell>
                                    <TableCell>{schedule[14].homeWins}-{schedule[14].awayWins}</TableCell>
                                    <TableCell>{schedule[14].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 16</TableCell>
                                    <TableCell>{schedule[15].home}</TableCell>
                                    <TableCell>{schedule[15].homeWins}-{schedule[15].awayWins}</TableCell>
                                    <TableCell>{schedule[15].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 17</TableCell>
                                    <TableCell>{schedule[16].home}</TableCell>
                                    <TableCell>{schedule[16].homeWins}-{schedule[16].awayWins}</TableCell>
                                    <TableCell>{schedule[16].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 18</TableCell>
                                    <TableCell>{schedule[17].home}</TableCell>
                                    <TableCell>{schedule[17].homeWins}-{schedule[17].awayWins}</TableCell>
                                    <TableCell>{schedule[17].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 19</TableCell>
                                    <TableCell>{schedule[18].home}</TableCell>
                                    <TableCell>{schedule[18].homeWins}-{schedule[18].awayWins}</TableCell>
                                    <TableCell>{schedule[18].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 20</TableCell>
                                    <TableCell>{schedule[19].home}</TableCell>
                                    <TableCell>{schedule[19].homeWins}-{schedule[19].awayWins}</TableCell>
                                    <TableCell>{schedule[19].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 21</TableCell>
                                    <TableCell>{schedule[20].home}</TableCell>
                                    <TableCell>{schedule[20].homeWins}-{schedule[20].awayWins}</TableCell>
                                    <TableCell>{schedule[20].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 22</TableCell>
                                    <TableCell>{schedule[21].home}</TableCell>
                                    <TableCell>{schedule[21].homeWins}-{schedule[21].awayWins}</TableCell>
                                    <TableCell>{schedule[21].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>11/26+</TableCell>
                                    <TableCell>PLAYOFFS START!</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                </Grommet>
            )
        }
}
export default Schedule;