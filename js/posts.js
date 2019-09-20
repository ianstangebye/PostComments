//IIFE.
const Poster = (function(){
    //private

    //Public 
    return {
        getPosts(){
            return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
        },

        createPostTemplate(post){
            const postDiv = document.createElement('div');
            const postTitle = document.createElement('h4');
            const postBody = document.createElement('p');
            const postLink = document.createElement('a');
            // const postLink = document.createElement('button');

            postTitle.innerText = post.title;
            postBody.innerText = post.body;
            postLink.innerText = 'View comments';
            postLink.href = `/comments.html?posts=${post.id}`;
            // postLink.href = '/comments.html?post=';
            postDiv.appendChild(postTitle);
            postDiv.appendChild(postBody);
            postDiv.appendChild(postLink);

            return postDiv;
        }


        //could also write it like this 
        // getPosts: async function(){

        // }
    };

})();



