const postService = {
    load: function () {
      return fetch(`http://localhost:9999/api/origami`)
      .then(res => res.json());
    },
    // loadCategory: function () {
    //   return fetch(`http://localhost:9999/api/origami/5f158b5ddb4d97226ca14974`)
    //   .then(res => res.json());
    // },
  // load: function (id, limit) {
  //   return fetch(`http://localhost:9999/api/origami${id ? `/${id}` : ''}${limit ? `?limit=${limit}` : ''}`).then(res => res.json());
  // },
    create: function(data) {
        return fetch(`http://localhost:9999/api/origami/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }).then(res => res.json());
    }
} 

export default postService;