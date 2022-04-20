export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQAVBr3lh4Lbwi-TpLjYC9JuHL093v9Wq5Zq_ByFAe5wE-cfpqzjIIaH0u5lKsjWjg-QWCrR9XeHNncSzM_8mATHnvAgJbzR5g0Tz78kv8cPAPuHzR0nw1pV5e4_69Jj51e1qqMwZrEdpNRhe9OG4bXpFpP229t8OBieEIHlrFJEBEQZ6z83',
};

const reducer = (state, action) => {
console.log(action);

switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user: action.user
        };

    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        }
    default:
        return state;
    }
};

export default reducer;