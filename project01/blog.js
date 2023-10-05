

// for get id from url

function getSelectedBlogId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id'); // Assumes the identifier is passed as a query parameter
}



function displayBlogPost() {
    const blogId = getSelectedBlogId();
    console.log(blogId)

    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const induBlog = blogPosts.filter(blog=>blog.id===blogId)

    console.log(induBlog)

    if (induBlog) {
        
        const fullBlogCard = `
            <div class="titleBox">
                <div class="rightTitle">
                    <h1>${induBlog[0].title}</h1>
                    <h2> ${induBlog[0].description} </h2>
                </div>
                <div class="leftTitle">
                    <img src="${induBlog[0].img}" alt="">
                </div>
            </div>
            <div class="dsec">
                <p>
                    ${induBlog[0].content}
                </p>
            </div>`

            const blogCardDiv = document.createElement('div')
            blogCardDiv.className = 'blog'
            blogCardDiv.innerHTML = fullBlogCard

            document.querySelector('#blogSec').appendChild(blogCardDiv)
    }

    else {
        console.log('no data found plz refresh the page')
    }
}

displayBlogPost()