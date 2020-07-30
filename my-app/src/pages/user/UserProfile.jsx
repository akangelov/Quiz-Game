import React from "react";

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: null }
    }

    render() {
        return (
            <div>
                <p>User: {this.props.userName}</p>
            </div>
        )
    }
}

export default UserProfile;