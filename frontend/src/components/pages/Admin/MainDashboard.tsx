const MainDashboard = () => {
    return (
        <>
        {/* <div id="spinner" className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div> */}

        {/* <div className="container-fluid bg-dark py-2 d-none d-md-flex">
            <div className="container">
                <div className="d-flex justify-content-between topbar">
                    <div className="top-info">
                        <small className="me-3 text-white-50"><a href="#"><i className="fas fa-map-marker-alt me-2 text-secondary"></i></a>23 Ranking Street, New York</small>
                        <small className="me-3 text-white-50"><a href="#"><i className="fas fa-envelope me-2 text-secondary"></i></a>Email@Example.com</small>
                    </div>
                    <div id="note" className="text-secondary d-none d-xl-flex"><small>Note : We help you to Grow your Business</small></div>
                    <div className="top-link">
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></a>
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-twitter text-primary"></i></a>
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-instagram text-primary"></i></a>
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
                    </div>
                </div>
            </div>
        </div> */}

        <div className="container-fluid bg-primary">
            <div className="container">
                <nav className="navbar navbar-dark navbar-expand-lg py-0">
                    <a href="index.html" className="navbar-brand">
                        <h2 className="text-white fw-bold d-block">High<span className="text-secondary">Tech</span> </h2>
                    </a>
                    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                        <div className="navbar-nav ms-auto mx-xl-auto p-0">
                            <a href="index.html" className="nav-item nav-link active text-secondary">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Services</a>
                            <a href="project.html" className="nav-item nav-link">Projects</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded">
                                    <a href="blog.html" className="dropdown-item">Our Blog</a>
                                    <a href="team.html" className="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                    <div className="d-none d-xl-flex flex-shirink-0">
                        <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                            <a href="" className="position-relative animated tada infinite">
                                <i className="fa fa-phone-alt text-white fa-2x"></i>
                                <div className="position-absolute" style={{top: '-7px', left: '20px'}}>
                                    <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                </div>
                            </a>
                        </div>
                        <div className="d-flex flex-column pe-4 border-end">
                            <span className="text-white-50">Have any questions?</span>
                            <span className="text-secondary">Call: + 0123 456 7890</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center ms-4 ">
                            <a href="/login" className="text-light" style={{textDecoration: "none"}}>Login </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

        <div className="container-fluid px-0">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src="images/img/carousel-1.jpg" className="img-fluid" alt="First slide"/>
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                <h1 className="text-white display-1 mb-4 animated fadeInRight">An Innovative IT Solutions Agency</h1>
                                <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                                <a href="" className="me-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                                <a href="" className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/img/carousel-2.jpg" className="img-fluid" alt="Second slide"/>
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                <h1 className="text-white display-1 mb-4 animated fadeInLeft">Quality Digital Services You Really Need!</h1>
                                <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                                <a href="" className="me-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                                <a href="" className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>


        <div className="container-fluid bg-secondary py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">99</h1>
                            <h5 className="text-white mt-1">Success in getting happy customer</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">25</h1>
                            <h5 className="text-white mt-1">Thousands of successful business</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">120</h1>
                            <h5 className="text-white mt-1">Total clients who love HighTech</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">5</h1>
                            <h5 className="text-white mt-1">Stars reviews given by satisfied clients</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid py-5 my-5">
            <div className="container pt-5">
                <div className="row g-5">
                    <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                        <div className="h-100 position-relative">
                            <img src="images/img/about-1.jpg" className="img-fluid w-75 rounded" alt="" style={{marginBottom: '25%'}}/>
                            <div className="position-absolute w-75" style={{top: '25%', left: '25%'}}>
                                <img src="images/img/about-2.jpg" className="img-fluid w-100 rounded" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                        <h5 className="text-primary">About Us</h5>
                        <h1 className="mb-4">About HighTech Agency And It's Innovative IT Solutions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.</p>
                        <p className="mb-4">Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.</p>
                        <a href="" className="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</a>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid services py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: '600px'}}>
                    <h5 className="text-primary">Our Services</h5>
                    <h1>Services Built Specifically For Your Business</h1>
                </div>
                <div className="row g-5 services-inner">
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fa fa-code fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Web Design</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                    <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fa fa-file-code fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Web Development</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                    <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fa fa-external-link-alt fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">UI/UX Design</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                    <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fas fa-user-secret fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Web Cecurity</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                    <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fa fa-envelope-open fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Digital Marketing</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                    <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fas fa-laptop fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Programming</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                    <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid project py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: '600px'}}>
                    <h5 className="text-primary">Our Project</h5>
                    <h1>Our Recently Completed Projects</h1>
                </div>
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src="images/img/project-1.jpg" className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">Web design</h4>
                                        <p className="m-0 text-white">Web Analysis</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src="images/img/project-2.jpg" className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">Cyber Security</h4>
                                        <p className="m-0 text-white">Cyber Security Core</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src="images/img/project-3.jpg" className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">Mobile Info</h4>
                                        <p className="m-0 text-white">Upcomming Phone</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src="images/img/project-4.jpg" className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">Web Development</h4>
                                        <p className="m-0 text-white">Web Analysis</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src="images/img/project-5.jpg" className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">Digital Marketing</h4>
                                        <p className="m-0 text-white">Marketing Analysis</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src="images/img/project-6.jpg" className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">keyword Research</h4>
                                        <p className="m-0 text-white">keyword Analysis</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid blog py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: '600px'}}>
                    <h5 className="text-primary">Our Blog</h5>
                    <h1>Latest Blog & News</h1>
                </div>
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="blog-item position-relative bg-light rounded">
                            <img src="images/img/blog-1.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                            <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{top: '-28px', right: '20px'}}>Web Design</span>
                            <div className="blog-content text-center position-relative px-3" style={{marginTop: '-25px'}}>
                                <img src="images/img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt=""/>
                                <h5 className="">By Daniel Martin</h5>
                                <span className="text-secondary">24 March 2023</span>
                                <p className="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                            </div>
                            <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="blog-item position-relative bg-light rounded">
                            <img src="images/img/blog-2.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                            <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{top: '-28px', right: '20px'}}>Development</span>
                            <div className="blog-content text-center position-relative px-3" style={{marginTop: '-25px'}}>
                                <img src="images/img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt="" />
                                <h5 className="">By Daniel Martin</h5>
                                <span className="text-secondary">23 April 2023</span>
                                <p className="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                            </div>
                            <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".7s">
                        <div className="blog-item position-relative bg-light rounded">
                            <img src="images/img/blog-3.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                            <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{top: '-28px', right: '20px'}}>Mobile App</span>
                            <div className="blog-content text-center position-relative px-3" style={{ marginTop: '-25px'}}>
                                <img src="images/img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt=""/>
                                <h5 className="">By Daniel Martin</h5>
                                <span className="text-secondary">30 jan 2023</span>
                                <p className="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                            </div>
                            <div className="blog-coments d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* <div className="container-fluid py-5 mb-5 team">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                    <h5 className="text-primary">Our Team</h5>
                    <h1>Meet our expert Team</h1>
                </div>
                <div className="owl-carousel team-carousel wow fadeIn" data-wow-delay=".5s">
                    <div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="images/img/team-1.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="images/img/team-2.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="images/img/team-3.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="images/img/team-4.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        {/* <div className="container-fluid testimonial py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px'}}>
                    <h5 className="text-primary">Our Testimonial</h5>
                    <h1>Our Client Saying!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay=".5s">
                    <div className="testimonial-item border p-4">
                        <div className="d-flex align-items-center">
                            <div className="">
                                <img src="images/img/testimonial-1.jpg" alt=""/>
                            </div>
                            <div className="ms-4">
                                <h4 className="text-secondary">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                </div>
                            </div>
                        </div>
                        <div className="border-top mt-4 pt-3">
                            <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                        </div>
                    </div>
                    <div className="testimonial-item border p-4">
                        <div className=" d-flex align-items-center">
                            <div className="">
                                <img src="images/img/testimonial-2.jpg" alt=""/>
                            </div>
                            <div className="ms-4">
                                <h4 className="text-secondary">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                </div>
                            </div>
                        </div>
                        <div className="border-top mt-4 pt-3">
                            <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                        </div>
                    </div>
                    <div className="testimonial-item border p-4">
                        <div className=" d-flex align-items-center">
                            <div className="">
                                <img src="images/img/testimonial-3.jpg" alt=""/>
                            </div>
                            <div className="ms-4">
                                <h4 className="text-secondary">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                </div>
                            </div>
                        </div>
                        <div className="border-top mt-4 pt-3">
                            <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                        </div>
                    </div>
                    <div className="testimonial-item border p-4">
                        <div className=" d-flex align-items-center">
                            <div className="">
                                <img src="images/img/testimonial-4.jpg" alt=""/>
                            </div>
                            <div className="ms-4">
                                <h4 className="text-secondary">Client Name</h4>
                                <p className="m-0 pb-3">Profession</p>
                                <div className="d-flex pe-5">
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                    <i className="fas fa-star me-1 text-primary"></i>
                                </div>
                            </div>
                        </div>
                        <div className="border-top mt-4 pt-3">
                            <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}



        {/* <div className="container-fluid py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                    <h5 className="text-primary">Get In Touch</h5>
                    <h1 className="mb-3">Contact for any query</h1>
                    <p className="mb-2">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                </div>
                <div className="contact-detail position-relative p-5">
                    <div className="row g-5 mb-5 justify-content-center">
                        <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".3s">
                            <div className="d-flex bg-light p-3 rounded">
                                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{ width: '64px', height: '64px' }}>
                                    <i className="fas fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h4 className="text-primary">Address</h4>
                                    <a href="https://goo.gl/maps/Zd4BCynmTb98ivUJ6" target="_blank" className="h5">23 rank Str, NY</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".5s">
                            <div className="d-flex bg-light p-3 rounded">
                                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: '64px', height: '64px'}}>
                                    <i className="fa fa-phone text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h4 className="text-primary">Call Us</h4>
                                    <a className="h5" href="tel:+0123456789" target="_blank">+012 3456 7890</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s">
                            <div className="d-flex bg-light p-3 rounded">
                                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: '64px', height: '64px'}}>
                                    <i className="fa fa-envelope text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h4 className="text-primary">Email Us</h4>
                                    <a className="h5" href="mailto:info@example.com" target="_blank">info@example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                            <div className="p-5 h-100 rounded contact-map">
                                <iframe className="rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710403339755!2d-73.82241512404069!3d40.685622471397615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686493221834!5m2!1sen!2sbd" style={{ border: '0' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                            <div className="p-5 rounded contact-form">
                                <div className="mb-4">
                                    <input type="text" className="form-control border-0 py-3" placeholder="Your Name"/>
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="form-control border-0 py-3" placeholder="Your Email"/>
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control border-0 py-3" placeholder="Project"/>
                                </div>
                                <div className="mb-4">
                                    <textarea className="w-100 form-control border-0 py-3" rows={6} cols={10} placeholder="Message"></textarea>
                                </div>
                                <div className="text-start">
                                    <button className="btn bg-primary text-white py-3 px-5" type="button">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> */}


         <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
            <div className="container pt-5 pb-4">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <a href="index.html">
                            <h1 className="text-white fw-bold d-block">High<span className="text-secondary">Tech</span> </h1>
                        </a>
                        <p className="mt-4 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.</p>
                        <div className="d-flex hightech-link">
                            <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-facebook-f text-primary"></i></a>
                            <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-twitter text-primary"></i></a>
                            <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-instagram text-primary"></i></a>
                            <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="h3 text-secondary">Short Link</a>
                        <div className="mt-4 d-flex flex-column short-link">
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>About us</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Contact us</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Our Services</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Our Projects</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Latest Blog</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="h3 text-secondary">Help Link</a>
                        <div className="mt-4 d-flex flex-column help-link">
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Terms Of use</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Privacy Policy</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Helps</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>FQAs</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Contact</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="h3 text-secondary">Contact Us</a>
                        <div className="text-white mt-4 d-flex flex-column contact-link">
                            <a href="#" className="pb-3 text-light border-bottom border-primary"><i className="fas fa-map-marker-alt text-secondary me-2"></i> 123 Street, New York, USA</a>
                            <a href="#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-secondary me-2"></i> +123 456 7890</a>
                            <a href="#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-envelope text-secondary me-2"></i> info@exmple.con</a>
                        </div>
                    </div>
                </div>
                <hr className="text-light mt-5 mb-4"/>
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <span className="text-light"><a href="#" className="text-secondary"><i className="fas fa-copyright text-secondary me-2"></i>Your Site Name</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <span className="text-light">Designed By<a href="https://htmlcodex.com" className="text-secondary">HTML Codex</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a></span>
                    </div>
                </div>
            </div>
        </div>


        <a href="#" className="btn btn-secondary btn-square rounded-circle back-to-top" style={{paddingLeft:'18px'}}><i className="fa fa-arrow-up text-white"></i></a>

        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>

        <script src="js/main.js"></script>

        </>
    )
}

export default MainDashboard;