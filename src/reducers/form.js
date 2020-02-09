const form = (state = [], action) => {
    switch(action.type) {
        case 'ADD_COMPONENT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    props: action.props
                }
            ]
        case 'REMOVE_COMPONENT':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state
    }
}

export default form