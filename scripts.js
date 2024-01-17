const posts = [
  { id: 1, title: "Post #1", text: "BENVENUTI" },
  { id: 2, title: "Post #2", text: "PRESENTIAMOCI" },
  { id: 3, title: "Post #3", text: "OGGI PIZZA" },
  { id: 4, title: "Post #4", text: "CHE FIGATA FARE CODING" },
  { id: 5, title: "Post #5", text: "TRY...CATCH" },
  { id: 6, title: "Post #6", text: "TI PROMETTO CHE..." },
];

async function getComments(postId) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=" + postId
  );
  const comments = await response.json();
  return comments.map((comment) => comment.body);
}

async function renderPosts() {
  const container = document.getElementById("posts-container");

  for (const post of posts) {
    const postElement = document.createElement("div");
    postElement.className = "post-container";
    postElement.id = "post-" + post.id;

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    const textElement = document.createElement("p");
    textElement.textContent = post.text;

    const commentsElement = document.createElement("div");
    commentsElement.className = "comments-container";
    commentsElement.innerHTML = "<strong>Commenti:</strong>";

    // Recupera i commenti in modo asincrono

    const comments = await getComments(post.id);

    // Aggiungere i commenti al post
    comments.forEach(function (comment) {
      var commentElement = document.createElement("p");
      commentElement.textContent = comment;
      commentsElement.appendChild(commentElement);
    });

    postElement.appendChild(titleElement);
    postElement.appendChild(textElement);
    postElement.appendChild(commentsElement);

    container.appendChild(postElement);
  }
}

document.addEventListener("DOMContentLoaded", renderPosts);
