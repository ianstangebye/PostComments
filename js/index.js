    
async function getPosts(){

    const elPosts = document.getElementById("posts");

    try{
        const response = await Poster.getPosts();
        // console.log(response);
        response.forEach(post => {
            elPosts.appendChild(Poster.createPostTemplate(post));
        });            

    } catch (e) {
        console.error(e);
    }
    

}  

getPosts();

