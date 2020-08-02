const postService = {

    load: function () {
      return fetch(`http://localhost:9999/api/origami`)
      .then(res => res.json());
    },

    create: function(data) {
        return fetch(`http://localhost:9999/api/origami/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }).then(res => res.json());
    },

    put: function(data, user) {
        return fetch(`http://localhost:9999/api/user/${user}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data),
        credentials: 'include'
        })
    } 
}

export default postService;
