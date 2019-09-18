import gql from 'graphql-tag';

const GAME_DATA_SUBSCRIPTION = gql`
    subscription {
        getGameDataSubscription{
            gameType
            userName
            profitAmount
        }
    }
`;


export {GAME_DATA_SUBSCRIPTION};