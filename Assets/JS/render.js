const getApi = "http://localhost:3000/posts";
fetch(getApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (posts) {
        // Sử dụng map để lặp qua phần tử 

        var htmls = posts.map(function (post) {
            return `

                <nav id = "navbar-top" class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">NghiaisMotivated</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <hr>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <hr>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Projects</a>
                            </li>
                            <hr>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div class = "container information d-flex">
                    <div class = "my-infor">
                        <h1>Front-End Web Developer <i class='bx bxs-cat'></i></h1>
                        <p>Hi, I'm Nghia Le. A passionatte Front-end web developer with a dream to become Full Stack developer. <br> Developer based in Binh Tan district, Ho Chi Minh city.</p>
                    
                        <ul class = "my-link d-flex">
                            <li><a href = ""><i class='bx bxl-linkedin-square'></i></a></li>
                            <li><a href = ""><i class='bx bxl-github' ></i></a></li>
                        </ul>
                    </div>
                    <div class = "my-photo-img">
                        <img src=${post.img} alt="">
                    </div>  
                </div>


                <div class= "tech-stock d-flex">
                    <p>Tech Stack | </p>
                    <ul class = "my-tech-stock d-flex">
                        <li><i class='bx bxl-html5' style = "color: orangered"></i></li>
                        <li><i class='bx bxl-css3' style = "color: blue"></i></li>
                        <li><i class='bx bxl-javascript' style = "color: yellow"></i></li>
                        <li><i class='bx bxl-bootstrap' style = "color: rgb(163, 22, 245);"></i></li>     
                        <li><i class='bx bxs-file-json' style = "color: grey;"></i></li>     
                     </ul>
                </div>


                <div class = "about-me-section">
                    <img src=${post.gif} alt="">
                    <div class = "about-me">
                        <b>about me</b>
                        <h6>Front-end developer intership with his passion and dedication <i class='bx bxs-coffee'></i></h6>
                        <p>
                            As an intern front-end developer, I am eager to learn and gain hands-on experience in the field of web development. I have a solid foundation in front-end technologies such as HTML, CSS, and JavaScript, and am enthusiastic about learning new tools and frameworks to expand my skill set.
                        </p>
                    </div>
                </div>


                <div class = "projects-section">
                    <b class = "portfolio">Portfolio</b>
                    <h6>Every project has a unique style of a developer <i class='bx bx-leaf'></i></h6>
                
                        <div class = "project">
                            <img src="${post.shoes}" alt="">

                            <div class = "project-description text-center">
                                <b>Sneaker Store</b>
                                <p>A shoe store is a retail establishment that specializes in selling shoes. Shoe stores may carry a wide variety of styles and sizes for men, women, and children, ranging from athletic shoes to dress shoes, sandals, boots, and more.</p>
                                <ul class = "tech-use d-flex">
                                    <li><i class='bx bxl-html5' style = "color: orangered"></i></li>
                                    <li><i class='bx bxl-css3' style = "color: blue"></i></li>
                                    <li><i class='bx bxl-javascript' style = "color: yellow"></i></li>
                                    <li><i class='bx bxs-file-json' style = "color: grey;"></i></li>
                                </ul>

                                <ul class = "show-code d-flex">
                                    <li><a href = "https://github.com/NghiaisMotivated/Sneaker-Store-Demo-With-Json-server">Code <i class='bx bxl-github'></i></a></li>
                                    <li><a href = "https://nghiaismotivated.github.io/Sneaker-Store-Demo-With-Json-server/">Live Demo <i class='bx bx-show-alt'></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class = "project">
                            <div class = "project-description text-center">
                                <b>Shoes Store</b>
                                <p>A bookstore is a retail establishment that specializes in selling books. Bookstores may sell new books, used books, or a combination of both. They may also carry a range of other printed materials, such as magazines, newspapers, and comics.</p>
                                <ul class = "tech-use d-flex">
                                    <li><i class='bx bxl-html5' style = "color: orangered"></i></li>
                                    <li><i class='bx bxl-css3' style = "color: blue"></i></li>
                                    <li><i class='bx bxl-javascript' style = "color: yellow"></i></li>
                                    <li><i class='bx bxs-file-json' style = "color: grey;"></i></li>
                                </ul>

                                <ul class = "show-code d-flex">
                                    <li><a href = "https://github.com/NghiaisMotivated/Book-Store-Demo">Code <i class='bx bxl-github'></i></a></li>
                                    <li><a href = "https://nghiaismotivated.github.io/Book-Store-Demo/">Live Demo <i class='bx bx-show-alt'></i></a></li>
                                </ul>
                            </div>
                            <img src="${post.bookstore}" alt="">
                        </div>

                        <div class = "project">
                            <img src="${post.electronic}" alt="">

                            <div class = "project-description text-center">
                                <b>Electronic Supermarket</b>
                                <p>An electronic supermarket is a retail establishment that specializes in selling electronic goods and gadgets. Electronic supermarkets may carry a wide range of products, including computers, laptops, tablets, smartphones, cameras, televisions, gaming consoles, home appliances, and more.</p>
                                <ul class = "tech-use d-flex">
                                    <li><i class='bx bxl-html5' style = "color: orangered"></i></li>
                                    <li><i class='bx bxl-css3' style = "color: blue"></i></li>
                                    <li><i class='bx bxl-javascript' style = "color: yellow"></i></li>
                                    <li><i class='bx bxs-file-json' style = "color: grey;"></i></li>
                                </ul>

                                <ul class = "show-code d-flex">
                                    <li><a href = "https://github.com/NghiaisMotivated/Electronic-Super-Market-Demo">Code <i class='bx bxl-github'></i></a></li>
                                    <li><a href = "https://nghiaismotivated.github.io/Electronic-Super-Market-Demo/">Live Demo <i class='bx bx-show-alt'></i></a></li>
                                </ul>
                            </div>
                        </div>
                </div>

                <div class = "footer" >
                   <div class = "container d-flex">
                        <p>Copyright © 2023. All rights are reserved</p>
                        <ul>
                            <li><a href = ""><i class='bx bxl-linkedin-square'></i></a></li>
                            <li><a href = ""><i class='bx bxl-github'></i></a></li>
                        </ul>
                   </div>
                </div>
                        
          `
        })
        document.getElementById('root').innerHTML = htmls.join('');
        console.log(htmls)
    })
