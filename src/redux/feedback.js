import * as ActionTypes from './ActionTypes';


export const Feedbacks = (state = { errMess: null, feedbacks: '' }, action) => {
    switch (action.type) {
        case ActionTypes.SHOW_FEEDBACK:
            var lastFeedback = action.payload;
            return { ...state, errMess: null, feedbacks: lastFeedback };
        default:
            return state;
    }
}