import React from "react";
import UserContext from '../../utils/Context';

const UserProfile = props => {
   
    const value = React.useContext(UserContext);
    // console.log(value)
    
        return (
            <div>
                <p>User: {value.user.username}</p>
            </div>
        )
}


export default UserProfile;