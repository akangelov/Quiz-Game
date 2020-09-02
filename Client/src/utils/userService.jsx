const userService = {

  load: function () {
    return fetch(`http://localhost:4999/api/user`)
    .then(res => res.json());
  },
    register: function (data) {
      return fetch(`http://localhost:4999/api/user/register`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json())
      .catch(e => {console.log(e)});
    },
  
    login: function (data) {
      return fetch(`http://localhost:4999/api/user/login`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        credentials: 'include'
      }).then(res => res.json())
      .catch(e => {console.log(e)});
    },
  
    logout: function () {
      return fetch(`http://localhost:4999/api/user/logout`, {
        method: 'POST',
        credentials: 'include'
      }).then(res => res.text());
    },

    put: function(data, user) {
        return fetch(`http://localhost:4999/api/user/${user}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data),
        credentials: 'include'
        })
    },

    reset: function() {
        setTimeout(() => {
            window.location.reload(false)
        }, 4500) 
    }

};
  
  export default userService;