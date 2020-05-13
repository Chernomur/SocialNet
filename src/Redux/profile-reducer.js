const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
        postsData: [

            {id: "1", postText: "Jopa"},
            {id: "2", postText: "Konya"},
            {id: "3", postText: "zasluga"},
            {id: "4", postText: "moya"},
        ],
        updatePost: 'Jopa',
        profileData: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                postText: state.updatePost
            };
            return {
            ...state,
            postsData:[...state.postsData, newPost],
            updatePost: ''
        };

        case UPDATE_POST_TEXT:
            return  {
                ...state,
                updatePost: action.text
    };
        case SET_USER_PROFILE:
            return  {
                ...state,
                profile: action.profileData
            };
            default:
            return state;
    }
};
export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, text: text});
export const setUserProfile = (profileData) => ({type: SET_USER_PROFILE, profileData});