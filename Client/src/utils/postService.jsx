const postService = {

    load: function () {
      return fetch(`https://obscure-stream-49000.herokuapp.com/api/question`)
      .then(res => res.json());
    },

    create: function(data) {
        return fetch(`https://obscure-stream-49000.herokuapp.com/api/question/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }).then(res => res.json());
    },

    put: function(data, id) {
        return fetch(`https://obscure-stream-49000.herokuapp.com/api/question/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data),
        credentials: 'include'
        })
    },
    
    delete: function(id) {
        return fetch(`https://obscure-stream-49000.herokuapp.com/api/question/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        })
    },
 
}

export default postService;
