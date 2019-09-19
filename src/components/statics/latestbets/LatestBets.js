import React from 'react';
import { Query,Subscription,withApollo } from 'react-apollo';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { GET_LATEST_BETS } from '../../../graphql/query';
import { SportsCricket,SportsFootballSharp,SportsHandball,SportsHockey } from '@material-ui/icons';
import './latestbets.scss';
import {GAME_DATA_SUBSCRIPTION} from '../../../graphql/subscription';

const LatestBets = (props) => {
    const setBookToSubscription = (subscribeToMore) => {
        subscribeToMore({
            document: GAME_DATA_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
                const { getGameData  } = props.client.cache.readQuery({ query: GET_LATEST_BETS })
                props.client.cache.writeQuery({
                    query: GET_LATEST_BETS,
                    data: { getGameData : getGameData.map((game,index) => {
                        if(index === 0) {
                            return subscriptionData.data.getGameDataSubscription;
                        }else {
                            return game;
                        }
                    })},
                  });
                
               
            }
        })
    }

    return (
        <Query query={GET_LATEST_BETS}>
            {
                ({ subscribeToMore, data, loading, error }) => {
                    if (loading) {
                        return (
                            <h5>Loading.....</h5>
                        )
                    }
                    if(!data) {
                        return (
                            <h5>Something Went Wrong.....</h5>
                        )
                    }
                    setBookToSubscription(subscribeToMore);
                    return (
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <span className="profit-font White">
                                            Game
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <span className="profit-font White">
                                            User
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <span className="profit-font White">
                                            Game
                                        </span>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data.getGameData.map((game, index) => {
                                        let gameIcon = <SportsCricket className="Icon-color" />
                                        if(game.gameType === "Dice") {
                                            gameIcon = <SportsHandball className="Icon-color" />
                                        }else if(game.gameType === "Hockey") {
                                            gameIcon = <SportsHockey className="Icon-color" />
                                        }else if(game.gameType === "Football") {
                                            gameIcon = <SportsFootballSharp className="Icon-color" />
                                        }
                                        return (
                                            <TableRow key={index} >
                                                <TableCell component="th" scope="row" >
                                                    {gameIcon}
                                                </TableCell>
                                                <TableCell >
                                                    <span className="White profit-font">
                                                        {game.userName}
                                                    </span>
                                                </TableCell>
                                                <TableCell >
                                                    <span className={game.profitAmount > 0 ? "Green profit-font" : "Red profit-font"}>
                                                        {game.profitAmount}
                                                    </span>
                                                </TableCell>
                                            </TableRow>
                                        )})}
                            </TableBody>
                        </Table>
                    )
                }
            }
        </Query>
    );
};

export default withApollo(LatestBets);