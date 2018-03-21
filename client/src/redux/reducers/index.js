import { TOGGLE_RYDES_TAB } from '../constants/action-types';
import { LIFT_TOKEN_TO_STATE } from '../constants/action-types';
import { LOGOUT_USER } from '../constants/action-types';
import { LIFT_BIG_SEARCH } from '../constants/action-types';
import { LIFT_MINI_SEARCH } from '../constants/action-types';

const initialState = {
    rydesTabIsToggled: true,
    token: '',
    user: null,
    searchResults: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_RYDES_TAB:
            console.log('Toggled Rydes/Dryves tab');
            // Object with old state + updated articles value
            return {...state, rydesTabIsToggled: action.payload};
        case LIFT_TOKEN_TO_STATE:
            console.log('Lifted token to Redux state');
            return {...state, token: action.payload.token, user: action.payload.user};
        case LOGOUT_USER:
            console.log('Logging out user');
            return {...state, token: '', user: null };
        case LIFT_BIG_SEARCH:
            console.log('lifted big search results');
            return {...state, searchResults: action.payload.searchResults}
        case LIFT_MINI_SEARCH:
            console.log('lifted mini search results');
            return {...state, searchResults: action.payload.searchResults}
        default:
            return state;
    }
}

export default rootReducer;
