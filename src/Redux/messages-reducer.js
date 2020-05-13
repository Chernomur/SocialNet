const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
        dialogsData: [
            {
                id: 1,
                name: 'Andrey',
                avatar: 'https://i.pinimg.com/originals/69/9c/93/699c93619ed3d8440c668035edd11780.jpg'
            },
            {
                id: 2,
                name: 'Daria',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQLII5TtZrdcPlk3CZR0DwLrWI1jGtt_EAl-TqIlgK6BghHkKX&usqp=CAU'
            },
            {
                id: 3,
                name: 'Cherni',
                avatar: 'https://cs5.pikabu.ru/post_img/big/2015/12/12/5/144990018127745284.jpg'
            },
            {
                id: 4,
                name: 'pOIEgf',
                avatar: 'https://i.pinimg.com/originals/4a/28/91/4a2891c86ae699ed94616305c440d317.jpg'
            },
            {
                id: 5,
                name: 'IIIR',
                avatar: 'https://steamuserimages-a.akamaihd.net/ugc/315620234642808280/2BAC53D21C01B4232200CA712F28A959F2BBBF6B/'
            },
            {
                id: 6,
                name: 'Asdf',
                avatar: 'data:image/jpeg;base64,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'
            },
            {
                id: 7,
                name: 'Perty',
                avatar: 'https://i.pinimg.com/originals/2d/99/54/2d99547472bc8f18d832dfab466e4280.jpg'
            },
            {
                id: 8,
                name: 'DDss',
                avatar: 'https://i.pinimg.com/originals/0c/ed/a0/0ceda07049baee42d3931b7a6ad4cd1f.jpg'
            },
            {
                id: 9,
                name: 'QWERTy',
                avatar: 'https://i.pinimg.com/originals/d0/c9/30/d0c930399dd665c37c9d2f26dd288c20.jpg'
            }
        ],
        messageData: [
            {
                id: 1,
                message: 'Hello',
                avatar: 'https://i.pinimg.com/originals/69/9c/93/699c93619ed3d8440c668035edd11780.jpg'
            },
            {
                id: 2,
                message: 'How are you',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQLII5TtZrdcPlk3CZR0DwLrWI1jGtt_EAl-TqIlgK6BghHkKX&usqp=CAU'
            },
            {
                id: 3,
                message: 'I loio',
                avatar: 'https://cs5.pikabu.ru/post_img/big/2015/12/12/5/144990018127745284.jpg'
            },
            {
                id: 4,
                message: 'OOpp',
                avatar: 'https://i.pinimg.com/originals/4a/28/91/4a2891c86ae699ed94616305c440d317.jpg'
            },
            {
                id: 5,
                message: 'Dasha programmer number 1',
                avatar: 'https://steamuserimages-a.akamaihd.net/ugc/315620234642808280/2BAC53D21C01B4232200CA712F28A959F2BBBF6B/'
            }
        ],
        updateMessage: ''
};

const messagesReducer = ( state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 10,
                message: state.updateMessage,
                avatar: 'https://i.pinimg.com/originals/69/9c/93/699c93619ed3d8440c668035edd11780.jpg'
            };
            return {
                ...state,
                messageData:[...state.messageData, newMessage],
                updateMessage: ''
        };
        case UPDATE_MESSAGE:
            return {
                ...state,
                updateMessage: action.text
            };
        default:
            return state;
    }
};
export default messagesReducer;

export const sendMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE, text: text});

