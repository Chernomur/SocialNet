import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setIsFatching,
    setUsersTotalCount,
    setUsers,
    unfollow
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader";



class UsersAPIcomponent extends React.Component {

    componentDidMount() {
        this.props.setIsFatching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFatching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            });

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFatching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFatching(false);
                this.props.setUsers(response.data.items);
            });
    };


    render() {
        return <>
            <Preloader isFatching={this.props.isFatching}/>
        <Users
            usersTotalCount={this.props.usersTotalCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
        </>
        }
}


const mapStateToProps = (state) => {
    return {
    users: state.usersPage.users,
        usersTotalCount: state.usersPage.usersTotalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFatching: state.usersPage.isFatching
    }
};
/*const mapDispatchToProps = (dispatch) => {
    return{
        follow: (userID)=>
        {
            dispatch(follow(userID));
        },
        unfollow:(userID)=>{
            dispatch(unfollow(userID));
        },
        setUsers:(users)=>{
            dispatch(setUsers(users));
        },
        setUsersTotalCount:(totalCount)=>{
            dispatch(setUsersTotalCount(totalCount));
        },
        setCurrentPage:(currentPage)=>{
            dispatch(setCurrentPage(currentPage));
        },
        setIsFatching:(isFatching)=>{
            dispatch(setIsFatching(isFatching))
        }
    }
};*/
const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setUsersTotalCount, setCurrentPage,setIsFatching})(UsersAPIcomponent);
export default UsersContainer;