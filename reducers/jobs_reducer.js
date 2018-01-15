import { FETCH_JOBS } from '../actions/types';

const INITIAL_STATE = {
    results: []
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        // reset job list because of changing location
        case FETCH_JOBS:
            return action.payload;
        default:
            return state;
    }
}
