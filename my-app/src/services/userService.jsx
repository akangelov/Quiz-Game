const userService = {
  load: function () {
    return fetch(`http://localhost:9999/api/user`)
    .then(res => res.json());
  },
    register: function (data) {
      return fetch(`http://localhost:9999/api/user/register`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json())
      .catch(e => {console.log(e)});
    },
  
    login: function (data) {
      return fetch(`http://localhost:9999/api/user/login`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        credentials: 'include'
      }).then(res => res.json())
      .catch(e => {console.log(e)});
    },
  
    logout: function () {
      return fetch(`http://localhost:9999/api/user/logout`, {
        method: 'POST',
        credentials: 'include'
      }).then(res => res.text());
    }
  
  };
  
  export default userService;