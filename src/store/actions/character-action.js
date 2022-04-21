export const CHARACTER_ADD = 'character/add';
export const CHARACTER_DELETE = 'character/delete';

export const characterAdd = (value) => {
    return {
        type: CHARACTER_ADD,
        payload: value
    };
};

export const characterDelete = (value) => {
    return {
        type: CHARACTER_DELETE,
        payload: value
    };
};