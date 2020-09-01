const postService = {

    load: function () {
      return fetch(`http://localhost:9999/api/question`)
      .then(res => res.json());
    },

    create: function(data) {
        return fetch(`http://localhost:9999/api/question/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }).then(res => res.json());
    },

    put: function(data, id) {
        return fetch(`http://localhost:9999/api/question/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data),
        credentials: 'include'
        })
    },
    
    delete: function(id) {
        return fetch(`http://localhost:9999/api/question/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        })
    },
 
}

export default postService;
