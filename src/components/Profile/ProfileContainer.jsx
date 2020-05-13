import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import {setUserProfile} from '../../Redux/profile-reducer';
import {withRouter} from "react-router-dom";




class ProfileContainer extends React.Component {


    componentDidMount() {
        debugger;
        /* let userID =this.props.match.params.userID;*/
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state) => ({profile: state.profile});


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
