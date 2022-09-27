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
                                    <TableCell>{schedule.Game1.home}</TableCell>
                                    <TableCell>{schedule.Game1.homeWins}-{schedule.Game1.awayWins}</TableCell>
                                    <TableCell>{schedule.Game1.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 2</TableCell>
                                    <TableCell>{schedule.Game2.home}</TableCell>
                                    <TableCell>{schedule.Game2.homeWins}-{schedule.Game2.awayWins}</TableCell>
                                    <TableCell>{schedule.Game2.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 3</TableCell>
                                    <TableCell>{schedule.Game3.home}</TableCell>
                                    <TableCell>{schedule.Game3.homeWins}-{schedule.Game3.awayWins}</TableCell>
                                    <TableCell>{schedule.Game3.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 4</TableCell>
                                    <TableCell>{schedule.Game4.home}</TableCell>
                                    <TableCell>{schedule.Game4.homeWins}-{schedule.Game4.awayWins}</TableCell>
                                    <TableCell>{schedule.Game4.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 5</TableCell>
                                    <TableCell>{schedule.Game5.home}</TableCell>
                                    <TableCell>{schedule.Game5.homeWins}-{schedule.Game5.awayWins}</TableCell>
                                    <TableCell>{schedule.Game5.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 6</TableCell>
                                    <TableCell>{schedule.Game6.home}</TableCell>
                                    <TableCell>{schedule.Game6.homeWins}-{schedule.Game6.awayWins}</TableCell>
                                    <TableCell>{schedule.Game6.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 7</TableCell>
                                    <TableCell>{schedule.Game7.home}</TableCell>
                                    <TableCell>{schedule.Game7.homeWins}-{schedule.Game7.awayWins}</TableCell>
                                    <TableCell>{schedule.Game7.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 8</TableCell>
                                    <TableCell>{schedule.Game8.home}</TableCell>
                                    <TableCell>{schedule.Game8.homeWins}-{schedule.Game8.awayWins}</TableCell>
                                    <TableCell>{schedule.Game8.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 9</TableCell>
                                    <TableCell>{schedule.Game9.home}</TableCell>
                                    <TableCell>{schedule.Game9.homeWins}-{schedule.Game9.awayWins}</TableCell>
                                    <TableCell>{schedule.Game9.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 10</TableCell>
                                    <TableCell>{schedule.Game10.home}</TableCell>
                                    <TableCell>{schedule.Game10.homeWins}-{schedule.Game10.awayWins}</TableCell>
                                    <TableCell>{schedule.Game10.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 11</TableCell>
                                    <TableCell>{schedule.Game11.home}</TableCell>
                                    <TableCell>{schedule.Game11.homeWins}-{schedule.Game11.awayWins}</TableCell>
                                    <TableCell>{schedule.Game11.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 12</TableCell>
                                    <TableCell>{schedule.Game12.home}</TableCell>
                                    <TableCell>{schedule.Game12.homeWins}-{schedule.Game12.awayWins}</TableCell>
                                    <TableCell>{schedule.Game12.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 13</TableCell>
                                    <TableCell>{schedule.Game13.home}</TableCell>
                                    <TableCell>{schedule.Game13.homeWins}-{schedule.Game13.awayWins}</TableCell>
                                    <TableCell>{schedule.Game13.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 14</TableCell>
                                    <TableCell>{schedule.Game14.home}</TableCell>
                                    <TableCell>{schedule.Game14.homeWins}-{schedule.Game14.awayWins}</TableCell>
                                    <TableCell>{schedule.Game14.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 15</TableCell>
                                    <TableCell>{schedule.Game15.home}</TableCell>
                                    <TableCell>{schedule.Game15.homeWins}-{schedule.Game15.awayWins}</TableCell>
                                    <TableCell>{schedule.Game15.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 16</TableCell>
                                    <TableCell>{schedule.Game16.home}</TableCell>
                                    <TableCell>{schedule.Game16.homeWins}-{schedule.Game16.awayWins}</TableCell>
                                    <TableCell>{schedule.Game16.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 17</TableCell>
                                    <TableCell>{schedule.Game17.home}</TableCell>
                                    <TableCell>{schedule.Game17.homeWins}-{schedule.Game17.awayWins}</TableCell>
                                    <TableCell>{schedule.Game17.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 18</TableCell>
                                    <TableCell>{schedule.Game18.home}</TableCell>
                                    <TableCell>{schedule.Game18.homeWins}-{schedule.Game18.awayWins}</TableCell>
                                    <TableCell>{schedule.Game18.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 19</TableCell>
                                    <TableCell>{schedule.Game19.home}</TableCell>
                                    <TableCell>{schedule.Game19.homeWins}-{schedule.Game19.awayWins}</TableCell>
                                    <TableCell>{schedule.Game19.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 20</TableCell>
                                    <TableCell>{schedule.Game20.home}</TableCell>
                                    <TableCell>{schedule.Game20.homeWins}-{schedule.Game20.awayWins}</TableCell>
                                    <TableCell>{schedule.Game20.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 21</TableCell>
                                    <TableCell>{schedule.Game21.home}</TableCell>
                                    <TableCell>{schedule.Game21.homeWins}-{schedule.Game21.awayWins}</TableCell>
                                    <TableCell>{schedule.Game21.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 22</TableCell>
                                    <TableCell>{schedule.Game22.home}</TableCell>
                                    <TableCell>{schedule.Game22.homeWins}-{schedule.Game22.awayWins}</TableCell>
                                    <TableCell>{schedule.Game22.away}</TableCell>
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
                                    <TableCell>{schedule.Game1.home}</TableCell>
                                    <TableCell>{schedule.Game1.homeWins}-{schedule.Game1.awayWins}</TableCell>
                                    <TableCell>{schedule.Game1.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 2</TableCell>
                                    <TableCell>{schedule.Game2.home}</TableCell>
                                    <TableCell>{schedule.Game2.homeWins}-{schedule.Game2.awayWins}</TableCell>
                                    <TableCell>{schedule.Game2.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 3</TableCell>
                                    <TableCell>{schedule.Game3.home}</TableCell>
                                    <TableCell>{schedule.Game3.homeWins}-{schedule.Game3.awayWins}</TableCell>
                                    <TableCell>{schedule.Game3.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 4</TableCell>
                                    <TableCell>{schedule.Game4.home}</TableCell>
                                    <TableCell>{schedule.Game4.homeWins}-{schedule.Game4.awayWins}</TableCell>
                                    <TableCell>{schedule.Game4.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 5</TableCell>
                                    <TableCell>{schedule.Game5.home}</TableCell>
                                    <TableCell>{schedule.Game5.homeWins}-{schedule.Game5.awayWins}</TableCell>
                                    <TableCell>{schedule.Game5.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 6</TableCell>
                                    <TableCell>{schedule.Game6.home}</TableCell>
                                    <TableCell>{schedule.Game6.homeWins}-{schedule.Game6.awayWins}</TableCell>
                                    <TableCell>{schedule.Game6.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 7</TableCell>
                                    <TableCell>{schedule.Game7.home}</TableCell>
                                    <TableCell>{schedule.Game7.homeWins}-{schedule.Game7.awayWins}</TableCell>
                                    <TableCell>{schedule.Game7.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 8</TableCell>
                                    <TableCell>{schedule.Game8.home}</TableCell>
                                    <TableCell>{schedule.Game8.homeWins}-{schedule.Game8.awayWins}</TableCell>
                                    <TableCell>{schedule.Game8.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 9</TableCell>
                                    <TableCell>{schedule.Game9.home}</TableCell>
                                    <TableCell>{schedule.Game9.homeWins}-{schedule.Game9.awayWins}</TableCell>
                                    <TableCell>{schedule.Game9.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 10</TableCell>
                                    <TableCell>{schedule.Game10.home}</TableCell>
                                    <TableCell>{schedule.Game10.homeWins}-{schedule.Game10.awayWins}</TableCell>
                                    <TableCell>{schedule.Game10.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 11</TableCell>
                                    <TableCell>{schedule.Game11.home}</TableCell>
                                    <TableCell>{schedule.Game11.homeWins}-{schedule.Game11.awayWins}</TableCell>
                                    <TableCell>{schedule.Game11.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 12</TableCell>
                                    <TableCell>{schedule.Game12.home}</TableCell>
                                    <TableCell>{schedule.Game12.homeWins}-{schedule.Game12.awayWins}</TableCell>
                                    <TableCell>{schedule.Game12.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 13</TableCell>
                                    <TableCell>{schedule.Game13.home}</TableCell>
                                    <TableCell>{schedule.Game13.homeWins}-{schedule.Game13.awayWins}</TableCell>
                                    <TableCell>{schedule.Game13.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 14</TableCell>
                                    <TableCell>{schedule.Game14.home}</TableCell>
                                    <TableCell>{schedule.Game14.homeWins}-{schedule.Game14.awayWins}</TableCell>
                                    <TableCell>{schedule.Game14.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 15</TableCell>
                                    <TableCell>{schedule.Game15.home}</TableCell>
                                    <TableCell>{schedule.Game15.homeWins}-{schedule.Game15.awayWins}</TableCell>
                                    <TableCell>{schedule.Game15.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 16</TableCell>
                                    <TableCell>{schedule.Game16.home}</TableCell>
                                    <TableCell>{schedule.Game16.homeWins}-{schedule.Game16.awayWins}</TableCell>
                                    <TableCell>{schedule.Game16.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 17</TableCell>
                                    <TableCell>{schedule.Game17.home}</TableCell>
                                    <TableCell>{schedule.Game17.homeWins}-{schedule.Game17.awayWins}</TableCell>
                                    <TableCell>{schedule.Game17.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 18</TableCell>
                                    <TableCell>{schedule.Game18.home}</TableCell>
                                    <TableCell>{schedule.Game18.homeWins}-{schedule.Game18.awayWins}</TableCell>
                                    <TableCell>{schedule.Game18.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 19</TableCell>
                                    <TableCell>{schedule.Game19.home}</TableCell>
                                    <TableCell>{schedule.Game19.homeWins}-{schedule.Game19.awayWins}</TableCell>
                                    <TableCell>{schedule.Game19.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 20</TableCell>
                                    <TableCell>{schedule.Game20.home}</TableCell>
                                    <TableCell>{schedule.Game20.homeWins}-{schedule.Game20.awayWins}</TableCell>
                                    <TableCell>{schedule.Game20.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 21</TableCell>
                                    <TableCell>{schedule.Game21.home}</TableCell>
                                    <TableCell>{schedule.Game21.homeWins}-{schedule.Game21.awayWins}</TableCell>
                                    <TableCell>{schedule.Game21.away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Game 22</TableCell>
                                    <TableCell>{schedule.Game22.home}</TableCell>
                                    <TableCell>{schedule.Game22.homeWins}-{schedule.Game22.awayWins}</TableCell>
                                    <TableCell>{schedule.Game22.away}</TableCell>
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