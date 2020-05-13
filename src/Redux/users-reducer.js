const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_PAGE = 'SET-PAGE';
const TOGGLE_IS_FATCHING = 'TOGGLE-IS-FATCHING';


let initialState = {
    users: [],
    usersTotalCount: 10,
    pageSize: 10,
    currentPage: 1,
    isFatching: false

};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state, users: action.users
            };

        case SET_TOTAL_COUNT:
            return {
                ...state,
                usersTotalCount: action.totalCount
            };
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case TOGGLE_IS_FATCHING:
            return {
                ...state,
                isFatching: action.isFatching
            };
        default:
            return state;
    }
};
export default usersReducer;

export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_PAGE, currentPage});
export const setUsersTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setIsFatching = (isFatching) => ({type: TOGGLE_IS_FATCHING, isFatching});
