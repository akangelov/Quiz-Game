import React from "react";

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: null }
      }

      render() {
      console.log(this.props)
        return (
              <div>
                <p>User: {this.props.userId}</p>
              </div>
          )
        }
}

export default UserProfile;