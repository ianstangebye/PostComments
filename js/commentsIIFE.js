const Commenter = (function(){
    return {
         getComments(){
            return fetch('https://jsonplaceholder.typicode.com/comments')
            .then (resp => resp.json());
        },

        createCommentTemplate(comment){
            const postDiv = document.createElement('div');
            const postTitle = document.createElement('h4');
            const postEmail = document.createElement('b');
            const postBody = document.createElement('p');
            // const postLink = document.createElement('a');

            postTitle.innerText = comment.name;
            postEmail.innerText = comment.email;
            postBody.innerText = comment.body;
            
            // postLink.innerText = 'View comments';
            // postLink.onclick = `getComments(0), ${comment.email};`
            // postLink.href = `/comments.html?posts=${post.id};`
            // postLink.href = '/comments.html?post=';
            postDiv.appendChild(postTitle);
            postDiv.appendChild(postEmail);
            postDiv.appendChild(postBody);

            return postDiv;
        }

    };

})();