import _ from 'lodash';
import { LIKE_JOB } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case LIKE_JOB:
            // unique by job key, remove duplicated jobs
            return _.uniqBy([action.payload, ...state], 'jobkey');
        default:
            return state;
    }
}
