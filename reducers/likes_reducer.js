import _ from 'lodash';
import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case LIKE_JOB:
            // unique by job key, remove duplicated jobs
            return _.uniqBy([action.payload, ...state], 'jobkey');
        case CLEAR_LIKED_JOBS:
            return [];
        default:
            return state;
    }
}
