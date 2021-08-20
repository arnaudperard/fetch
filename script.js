let postfinish = document.getElementById("post");

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json()) 
.then(posts => {  

    posts.forEach(post => {
       let postcolor = document.createElement("section")
         if(post.completed == true) {
            postcolor.classList.add("green");

         } else
             postcolor.classList.add("red");

        

        let title = document.createTextNode(post.title);
        let completed = document.createTextNode(post.completed);

        let titleone = document.createElement("h2");
        let completedone = document.createElement("p");

       

        titleone.appendChild(title);
        completedone.appendChild(completed);
        postcolor.appendChild(titleone);
        postcolor.appendChild(completedone);
        postfinish.appendChild(postcolor);

    });
});