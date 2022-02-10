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
                                <TableCell>2/20</TableCell>
                                <TableCell>{schedule[0].home}</TableCell>
                                <TableCell>{schedule[0].homeWins}-{schedule[0].awayWins}</TableCell>
                                <TableCell>{schedule[0].away}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2/27</TableCell>
                                <TableCell>{schedule[1].home}</TableCell>
                                <TableCell>{schedule[1].homeWins}-{schedule[1].awayWins}</TableCell>
                                <TableCell>{schedule[1].away}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>3/06</TableCell>
                                <TableCell>{schedule[2].home}</TableCell>
                                <TableCell>{schedule[2].homeWins}-{schedule[2].awayWins}</TableCell>
                                <TableCell>{schedule[2].away}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>3/20</TableCell>
                                <TableCell>{schedule[3].home}</TableCell>
                                <TableCell>{schedule[3].homeWins}-{schedule[3].awayWins}</TableCell>
                                <TableCell>{schedule[3].away}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>3/27</TableCell>
                                <TableCell>{schedule[4].home}</TableCell>
                                <TableCell>{schedule[4].homeWins}-{schedule[4].awayWins}</TableCell>
                                <TableCell>{schedule[4].away}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>4/03</TableCell>
                                <TableCell>{schedule[5].home}</TableCell>
                                <TableCell>{schedule[5].homeWins}-{schedule[5].awayWins}</TableCell>
                                <TableCell>{schedule[5].away}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>4/10</TableCell>
                                <TableCell>{schedule[6].home}</TableCell>
                                <TableCell>{schedule[6].homeWins}-{schedule[6].awayWins}</TableCell>
                                <TableCell>{schedule[6].away}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>4/17</TableCell>
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
                                    <TableCell>2/20</TableCell>
                                    <TableCell>{schedule[0].home}</TableCell>
                                    <TableCell>{schedule[0].homeWins}-{schedule[0].awayWins}</TableCell>
                                    <TableCell>{schedule[0].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2/27</TableCell>
                                    <TableCell>{schedule[1].home}</TableCell>
                                    <TableCell>{schedule[1].homeWins}-{schedule[1].awayWins}</TableCell>
                                    <TableCell>{schedule[1].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3/06</TableCell>
                                    <TableCell>{schedule[2].home}</TableCell>
                                    <TableCell>{schedule[2].homeWins}-{schedule[2].awayWins}</TableCell>
                                    <TableCell>{schedule[2].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3/20</TableCell>
                                    <TableCell>{schedule[3].home}</TableCell>
                                    <TableCell>{schedule[3].homeWins}-{schedule[3].awayWins}</TableCell>
                                    <TableCell>{schedule[3].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3/27</TableCell>
                                    <TableCell>{schedule[4].home}</TableCell>
                                    <TableCell>{schedule[4].homeWins}-{schedule[4].awayWins}</TableCell>
                                    <TableCell>{schedule[4].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>4/03</TableCell>
                                    <TableCell>{schedule[5].home}</TableCell>
                                    <TableCell>{schedule[5].homeWins}-{schedule[5].awayWins}</TableCell>
                                    <TableCell>{schedule[5].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>4/10</TableCell>
                                    <TableCell>{schedule[6].home}</TableCell>
                                    <TableCell>{schedule[6].homeWins}-{schedule[6].awayWins}</TableCell>
                                    <TableCell>{schedule[6].away}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>4/17</TableCell>
                                    <TableCell>PLAYOFFS START!</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                </Grommet>
            )
        }
}
export default Schedule;