import gql from 'graphql-tag';



const GET_LATEST_BETS = gql`
    query {
        getGameData{
            userName
            gameType
            profitAmount
        }
    }

`

export  { GET_LATEST_BETS} ;