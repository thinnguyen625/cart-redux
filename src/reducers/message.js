//import * as Types from './../constants/ActionType';
import * as Message from './../constants/Message';

var initState = Message.MSG_WELCOME;

const message = (state = initState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default message;