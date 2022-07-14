export const currentChat = (state, action)=> {
    switch (action.type) {
        case 'setCurrentChat':
            return state = action.payload
        default:
            return state;
    }
}