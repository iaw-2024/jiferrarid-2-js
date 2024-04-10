function getComment(){
    fetch('http://localhost:3001/cliente_servidor')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta.');
            }
            return response.text();
        })
        .then(data => {
            console.log(data)
            let json = JSON.parse(data)
            let commentContainer=document.createElement("div")
            commentContainer.classList.add("flex")
            commentContainer.classList.add("align-top")
            commentContainer.classList.add("gap-4")
            commentContainer.classList.add("py-2")
            let commentAvatarContainer=document.createElement("div")
            let commentAvatar=document.createElement("img")
            commentAvatar.setAttribute("src","image.png")
            commentAvatar.classList.add("py-4")
            let commentText=document.createElement("div")
            let commentName=document.createElement("h2")
            commentName.classList.add("text-3xl")
            let commentContent=document.createElement("div")
            commentContent.classList.add("font-serif")
            commentContent.classList.add("py-2")
            document.getElementById("comments").appendChild(commentContainer)
            commentContainer.appendChild(commentAvatarContainer)
            commentAvatarContainer.append(commentAvatar)
            commentContainer.appendChild(commentText)
            commentText.appendChild(commentName)
            commentName.append(json.user)
            commentContent.append(json.comment)
            commentText.appendChild(commentContent)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
getComment()
getComment()
getComment()