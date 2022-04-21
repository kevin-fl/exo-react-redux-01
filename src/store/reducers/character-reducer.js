import { CHARACTER_ADD, CHARACTER_DELETE } from "../actions/character-action";

const initialState = {
    characters: []
};

export const characterReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case CHARACTER_ADD:
            const character = {
                id: 42,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname.toUpperCase()
            };

            return {
                ...state,
                characters: [...state.characters, character]
            };
        case CHARACTER_DELETE:
            return {
                ...state
            };


        default:
            return state;
    }

};

export default characterReducer;