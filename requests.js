let posts = [];

//Fetching posts on pag load, method is GET
window.addEventListener("load", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      posts = data;
      document.getElementById("result-container").innerHTML = posts
        .map((post) => `<p>${post.title}</p>`)
        .join("");
    });
});

//Adding new post on form submit, method is POST
const newPost = () => {
  const postTitle = document.getElementById("title").value;
  const postBody = document.getElementById("body").value;
  const postUserId = document.getElementById("userId").value;

  const data = {
    title: postTitle,
    body: postBody,
    userId: postUserId,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          posts = data;
          document.getElementById("result-container").innerHTML = posts
            .map((post) => `<p>${post.title}</p>`)
            .join("");
        });
    });
};

//Updating a resource in posts, method is PUT
const updatePost = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "blablabla",
      body: "tjohooo",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          posts = data;
          document.getElementById("result-container").innerHTML = posts
            .map((post) => `<p>${post.title}</p>`)
            .join("");
        });
    });
};

//Deleting a resource in posts, method is DELETE
const deletePost = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          posts = data;
          document.getElementById("result-container").innerHTML = posts
            .map((post) => `<p>${post.title}</p>`)
            .join("");
        });
    });
};
