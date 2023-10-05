// pop up blog add form

const addBlog = document.getElementById('blogAddIcon')

addBlog.addEventListener('click',()=>{
    document.getElementById('blogFormBox').style.visibility = 'visible'
})

// hide blog add form

const hideForm = document.getElementById('cancelForm')

hideForm.addEventListener('click',()=>{
    document.getElementById('blogFormBox').style.visibility = 'hidden'
})

// add data local system




// const blogImg = document.getElementById('blogImg')
// const blogTitle = document.getElementById('blogTitle')
// const blogDes = document.getElementById('blogDes')
// const fullBlog = document.getElementById('fullBlog')
// const blogSubmit = document.getElementById('blogSubmit')
// const blogSection = document.getElementById('blogSection')
// const blogArr = JSON.parse(localStorage.getItem('blogs')) || [] ;

// function addBlogs(imgUrl,title,des,fullBlog){
//     blogArr.push({imgUrl,title,des,fullBlog})

//     localStorage.setItem('blogs',JSON.stringify(blogArr))

//     return {imgUrl,title,des,fullBlog}
    
// }

// function createBlogs({imgUrl,title,des,fullBlog}){
//     // const obj = {img: imgUrl.value,title: title.value,desc: des.value,blog: fullBlog.value}

//     // arr.push(obj)
//     // localStorage.setItem('blogs',JSON.stringify(arr))

    // const blogCard =  `<img src=${imgUrl} alt="">
    //                 <h2 class="title">${title}</h2>
    //                 <p class="description">${des}</p>
    //                 <a href='./blog.html?'><button class='readmore' >Read</button></a>`
    
    // const blogCardDiv = document.createElement('div')
    // blogCardDiv.classList = 'blogBox'
    // blogCardDiv.innerHTML = blogCard

    // blogSection.appendChild(blogCardDiv)

    
    
    
// }

// blogArr.forEach(createBlogs)




// blogSubmit.addEventListener('click',(e)=>{
//     e.preventDefault()
//     const newBlog = addBlogs(
//         blogImg.value,
//         blogTitle.value,
//         blogDes.value,
//         fullBlog.value
//     )

//     // console.log(newBlog)
//     createBlogs(newBlog)

//     blogImg.value = '';
//     blogTitle.value = '';
//     blogDes.value = '';
//     fullBlog.value = '' ;
// })


function addBlogPost(title, imgUrl, description, content) {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    // Generate a unique identifier for the new blog post
    const newPostId = Date.now().toString();

    const newBlogPost = {
        id: newPostId,
        title: title,
        img: imgUrl,
        description: description,
        content: content
    };

    blogPosts.push(newBlogPost);

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}


function displayBlogPosts() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogList = document.getElementById('blogSection');

    // Clear any existing blog posts in the list
    blogList.innerHTML = '';

    blogPosts.forEach(post => {
        const blogCard =  `<img src=${post.img} alt="">
                    <h2 class="title">${post.title}</h2>
                    <p class="description">${post.description}</p>
                    <a href='./blog.html?id=${post.id}'><button class='readmore' >Read</button></a>`
        
        const blogCardDiv = document.createElement('div')
        blogCardDiv.classList = 'blogBox'
        blogCardDiv.innerHTML = blogCard

        blogList.appendChild(blogCardDiv)
    });
}


// Add an event listener to the "Add Blog" form submission
const addBlogForm = document.getElementById('blogSubmit');
addBlogForm.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form fields
    const title = document.getElementById('blogTitle').value;
    const imgUrl = document.getElementById('blogImg').value;
    const description = document.getElementById('blogDes').value;
    const content = document.getElementById('fullBlog').value;


    // Add the new blog post and update the list of existing blog posts
    addBlogPost(title, imgUrl, description, content);
    displayBlogPosts();

    // Clear the form fields
    addBlogForm.reset();
});

displayBlogPosts();

// main blog page


// document.getElementsByClassName('readmore').addEventListener('click',function fBlog(){
//     const fullBlogCard = `
//     <div class="titleBox">
//         <div class="rightTitle">
//             <h1>this is first pw skill blog</h1>
//             <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, fugiat officiis voluptatibus ad illo vitae </h2>
//         </div>
//         <div class="leftTitle">
//             <img src="https://www.digitalplatforms.co.za/wp-content/uploads/2015/11/Website-Design-Background.png" alt="">
//         </div>
//     </div>
//     <div class="dsec">
//         <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non doloremque quisquam aspernatur, magni minima magnam hic? Ratione dicta reiciendis omnis qui laudantium labore esse expedita, eligendi cumque. Est reprehenderit minus soluta neque. Sed, fuga ex in explicabo dolor veritatis ea, ut placeat nihil saepe ipsa quas adipisci. Dolor debitis nam quae et repellendus odit ipsa, fugiat voluptatum sed quis perspiciatis nisi ad maiores, doloribus, commodi optio. Eligendi cumque nostrum eveniet totam, non vel provident modi nobis esse. Aliquid rerum laborum voluptatibus. Reiciendis aspernatur perferendis adipisci, laborum doloribus vero nesciunt hic id quibusdam nisi voluptatibus quo! Sed earum impedit, esse ducimus atque maxime culpa est alias soluta quisquam beatae veniam. Corrupti modi provident magnam ipsum itaque pariatur deserunt officiis. Sunt quibusdam officia corrupti accusamus, dolore est iusto quo autem, ipsa vel repellendus non voluptate ab qui nulla rem. At facilis distinctio reiciendis blanditiis deleniti. Dolore architecto velit laborum voluptatum. Tempora nihil fugiat molestias consectetur commodi iste hic voluptatem officiis natus, voluptate blanditiis vitae quod magnam explicabo atque! Ratione reiciendis quae ad porro cupiditate quia! Molestias maiores illum, beatae consectetur enim nobis quis rem dolor ab nihil voluptate, ipsa architecto assumenda dolores, dolore iusto laudantium eius blanditiis adipisci reprehenderit deleniti vitae.
//         </p>
//     </div>`
//     const blogCardDiv = document.createElement('div')
//     blogCardDiv.className = 'blog'
//     blogCardDiv.innerHTML = fullBlogCard

//     document.querySelector('#blogSec').appendChild(blogCardDiv)

// })

