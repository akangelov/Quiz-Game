import React from "react";

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = { username: null }
      }

      componentDidMount() {
        this.getUser(this.props.match.params.id)
      }

      getUser = async (id) => {
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`)
    
        if(!response.ok) {
            console.log('not ok')
        //   this.props.history.push('/error')
        }   
        const user = await response.json()
        console.log(user)
        this.setState({
          username: user.username,
        //   posts: user.posts && user.posts.length
        })
      }

      render() {
          
        const { username } = this.state

        return (
              <div>
                <p>User: {username}</p>
              </div>
          )
        }
}

export default UserProfile;