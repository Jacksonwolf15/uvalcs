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
                                    <TableCell>{schedule["game1"].home}</TableCell>
                                    <TableCell>{schedule["game1"].homeWins}-{schedule["game1"].awayWins}</TableCell>
                                    <TableCell>{schedule["game1"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 2</TableCell>
                                    <TableCell>{schedule["game2"].home}</TableCell>
                                    <TableCell>{schedule["game2"].homeWins}-{schedule["game2"].awayWins}</TableCell>
                                    <TableCell>{schedule["game2"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 3</TableCell>
                                    <TableCell>{schedule["game3"].home}</TableCell>
                                    <TableCell>{schedule["game3"].homeWins}-{schedule["game3"].awayWins}</TableCell>
                                    <TableCell>{schedule["game3"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 4</TableCell>
                                    <TableCell>{schedule["game4"].home}</TableCell>
                                    <TableCell>{schedule["game4"].homeWins}-{schedule["game4"].awayWins}</TableCell>
                                    <TableCell>{schedule["game4"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 5</TableCell>
                                    <TableCell>{schedule["game5"].home}</TableCell>
                                    <TableCell>{schedule["game5"].homeWins}-{schedule["game5"].awayWins}</TableCell>
                                    <TableCell>{schedule["game5"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 6</TableCell>
                                    <TableCell>{schedule["game6"].home}</TableCell>
                                    <TableCell>{schedule["game6"].homeWins}-{schedule["game6"].awayWins}</TableCell>
                                    <TableCell>{schedule["game6"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 7</TableCell>
                                    <TableCell>{schedule["game7"].home}</TableCell>
                                    <TableCell>{schedule["game7"].homeWins}-{schedule["game7"].awayWins}</TableCell>
                                    <TableCell>{schedule["game7"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 8</TableCell>
                                    <TableCell>{schedule["game8"].home}</TableCell>
                                    <TableCell>{schedule["game8"].homeWins}-{schedule["game8"].awayWins}</TableCell>
                                    <TableCell>{schedule["game8"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 9</TableCell>
                                    <TableCell>{schedule["game9"].home}</TableCell>
                                    <TableCell>{schedule["game9"].homeWins}-{schedule["game9"].awayWins}</TableCell>
                                    <TableCell>{schedule["game9"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 10</TableCell>
                                    <TableCell>{schedule["game10"].home}</TableCell>
                                    <TableCell>{schedule["game10"].homeWins}-{schedule["game10"].awayWins}</TableCell>
                                    <TableCell>{schedule["game10"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 11</TableCell>
                                    <TableCell>{schedule["game11"].home}</TableCell>
                                    <TableCell>{schedule["game11"].homeWins}-{schedule["game11"].awayWins}</TableCell>
                                    <TableCell>{schedule["game11"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 12</TableCell>
                                    <TableCell>{schedule["game12"].home}</TableCell>
                                    <TableCell>{schedule["game12"].homeWins}-{schedule["game12"].awayWins}</TableCell>
                                    <TableCell>{schedule["game12"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 13</TableCell>
                                    <TableCell>{schedule["game13"].home}</TableCell>
                                    <TableCell>{schedule["game13"].homeWins}-{schedule["game13"].awayWins}</TableCell>
                                    <TableCell>{schedule["game13"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 14</TableCell>
                                    <TableCell>{schedule["game14"].home}</TableCell>
                                    <TableCell>{schedule["game14"].homeWins}-{schedule["game14"].awayWins}</TableCell>
                                    <TableCell>{schedule["game14"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 15</TableCell>
                                    <TableCell>{schedule["game15"].home}</TableCell>
                                    <TableCell>{schedule["game15"].homeWins}-{schedule["game15"].awayWins}</TableCell>
                                    <TableCell>{schedule["game15"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 16</TableCell>
                                    <TableCell>{schedule["game16"].home}</TableCell>
                                    <TableCell>{schedule["game16"].homeWins}-{schedule["game16"].awayWins}</TableCell>
                                    <TableCell>{schedule["game16"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 17</TableCell>
                                    <TableCell>{schedule["game17"].home}</TableCell>
                                    <TableCell>{schedule["game17"].homeWins}-{schedule["game17"].awayWins}</TableCell>
                                    <TableCell>{schedule["game17"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 18</TableCell>
                                    <TableCell>{schedule["game18"].home}</TableCell>
                                    <TableCell>{schedule["game18"].homeWins}-{schedule["game18"].awayWins}</TableCell>
                                    <TableCell>{schedule["game18"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 19</TableCell>
                                    <TableCell>{schedule["game19"].home}</TableCell>
                                    <TableCell>{schedule["game19"].homeWins}-{schedule["game19"].awayWins}</TableCell>
                                    <TableCell>{schedule["game19"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 20</TableCell>
                                    <TableCell>{schedule["game20"].home}</TableCell>
                                    <TableCell>{schedule["game20"].homeWins}-{schedule["game20"].awayWins}</TableCell>
                                    <TableCell>{schedule["game20"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 21</TableCell>
                                    <TableCell>{schedule["game21"].home}</TableCell>
                                    <TableCell>{schedule["game21"].homeWins}-{schedule["game21"].awayWins}</TableCell>
                                    <TableCell>{schedule["game21"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 22</TableCell>
                                    <TableCell>{schedule["game22"].home}</TableCell>
                                    <TableCell>{schedule["game22"].homeWins}-{schedule["game22"].awayWins}</TableCell>
                                    <TableCell>{schedule["game22"].away}</TableCell>
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
                                    <TableCell>{schedule["game1"].home}</TableCell>
                                    <TableCell>{schedule["game1"].homeWins}-{schedule["game1"].awayWins}</TableCell>
                                    <TableCell>{schedule["game1"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 2</TableCell>
                                    <TableCell>{schedule["game2"].home}</TableCell>
                                    <TableCell>{schedule["game2"].homeWins}-{schedule["game2"].awayWins}</TableCell>
                                    <TableCell>{schedule["game2"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 3</TableCell>
                                    <TableCell>{schedule["game3"].home}</TableCell>
                                    <TableCell>{schedule["game3"].homeWins}-{schedule["game3"].awayWins}</TableCell>
                                    <TableCell>{schedule["game3"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 4</TableCell>
                                    <TableCell>{schedule["game4"].home}</TableCell>
                                    <TableCell>{schedule["game4"].homeWins}-{schedule["game4"].awayWins}</TableCell>
                                    <TableCell>{schedule["game4"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 5</TableCell>
                                    <TableCell>{schedule["game5"].home}</TableCell>
                                    <TableCell>{schedule["game5"].homeWins}-{schedule["game5"].awayWins}</TableCell>
                                    <TableCell>{schedule["game5"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 6</TableCell>
                                    <TableCell>{schedule["game6"].home}</TableCell>
                                    <TableCell>{schedule["game6"].homeWins}-{schedule["game6"].awayWins}</TableCell>
                                    <TableCell>{schedule["game6"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 7</TableCell>
                                    <TableCell>{schedule["game7"].home}</TableCell>
                                    <TableCell>{schedule["game7"].homeWins}-{schedule["game7"].awayWins}</TableCell>
                                    <TableCell>{schedule["game7"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 8</TableCell>
                                    <TableCell>{schedule["game8"].home}</TableCell>
                                    <TableCell>{schedule["game8"].homeWins}-{schedule["game8"].awayWins}</TableCell>
                                    <TableCell>{schedule["game8"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 9</TableCell>
                                    <TableCell>{schedule["game9"].home}</TableCell>
                                    <TableCell>{schedule["game9"].homeWins}-{schedule["game9"].awayWins}</TableCell>
                                    <TableCell>{schedule["game9"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 10</TableCell>
                                    <TableCell>{schedule["game10"].home}</TableCell>
                                    <TableCell>{schedule["game10"].homeWins}-{schedule["game10"].awayWins}</TableCell>
                                    <TableCell>{schedule["game10"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 11</TableCell>
                                    <TableCell>{schedule["game11"].home}</TableCell>
                                    <TableCell>{schedule["game11"].homeWins}-{schedule["game11"].awayWins}</TableCell>
                                    <TableCell>{schedule["game11"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 12</TableCell>
                                    <TableCell>{schedule["game12"].home}</TableCell>
                                    <TableCell>{schedule["game12"].homeWins}-{schedule["game12"].awayWins}</TableCell>
                                    <TableCell>{schedule["game12"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 13</TableCell>
                                    <TableCell>{schedule["game13"].home}</TableCell>
                                    <TableCell>{schedule["game13"].homeWins}-{schedule["game13"].awayWins}</TableCell>
                                    <TableCell>{schedule["game13"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 14</TableCell>
                                    <TableCell>{schedule["game14"].home}</TableCell>
                                    <TableCell>{schedule["game14"].homeWins}-{schedule["game14"].awayWins}</TableCell>
                                    <TableCell>{schedule["game14"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 15</TableCell>
                                    <TableCell>{schedule["game15"].home}</TableCell>
                                    <TableCell>{schedule["game15"].homeWins}-{schedule["game15"].awayWins}</TableCell>
                                    <TableCell>{schedule["game15"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 16</TableCell>
                                    <TableCell>{schedule["game16"].home}</TableCell>
                                    <TableCell>{schedule["game16"].homeWins}-{schedule["game16"].awayWins}</TableCell>
                                    <TableCell>{schedule["game16"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 17</TableCell>
                                    <TableCell>{schedule["game17"].home}</TableCell>
                                    <TableCell>{schedule["game17"].homeWins}-{schedule["game17"].awayWins}</TableCell>
                                    <TableCell>{schedule["game17"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 18</TableCell>
                                    <TableCell>{schedule["game18"].home}</TableCell>
                                    <TableCell>{schedule["game18"].homeWins}-{schedule["game18"].awayWins}</TableCell>
                                    <TableCell>{schedule["game18"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 19</TableCell>
                                    <TableCell>{schedule["game19"].home}</TableCell>
                                    <TableCell>{schedule["game19"].homeWins}-{schedule["game19"].awayWins}</TableCell>
                                    <TableCell>{schedule["game19"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 20</TableCell>
                                    <TableCell>{schedule["game20"].home}</TableCell>
                                    <TableCell>{schedule["game20"].homeWins}-{schedule["game20"].awayWins}</TableCell>
                                    <TableCell>{schedule["game20"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 21</TableCell>
                                    <TableCell>{schedule["game21"].home}</TableCell>
                                    <TableCell>{schedule["game21"].homeWins}-{schedule["game21"].awayWins}</TableCell>
                                    <TableCell>{schedule["game21"].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 22</TableCell>
                                    <TableCell>{schedule["game22"].home}</TableCell>
                                    <TableCell>{schedule["game22"].homeWins}-{schedule["game22"].awayWins}</TableCell>
                                    <TableCell>{schedule["game22"].away}</TableCell>
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