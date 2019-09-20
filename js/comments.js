async function getComments(){
    const elComments = document.getElementById("comments");
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('posts');

    try {
        const response = await Commenter.getComments();
        console.log(response);

        // var filteredComments = response.filter(function(response){
        //     return response.postId == commenterId;
        // });

        var filteredComments = response.filter((comment) => comment.postId == myParam);

        filteredComments.forEach(post => {
        elComments.appendChild(Commenter.createCommentTemplate(post));
        });   

    } catch (e) {
        console.error(e);
    }
}

getComments();