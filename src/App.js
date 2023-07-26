import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between p-3">
        <a class="navbar-brand" href="#">
          Start Bootstrap
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse my-2 my-lg-0 homeMenu"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav ">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item dropdown">
              <button className="btn btn-dark">Blog</button>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className=" welcome p-5 mb-3 bg-light border w-100">
        <h1>Welcome to Blog Home!</h1>
        <p>A Bootstrap 5 starter layout for your next blog homepage</p>
      </div>
      <div className="d-flex flex-wrap align-items-start ">
        <div className="d-flex flex-wrap col-lg-6 col-md-10 m-lg-5 m-md-3 m-sm-1 justify-content-center">
          <div class="card">
            <img
              class="card-img-top"
              src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
              alt="Card image cap"
            ></img>
            <div class="card-body d-flex flex-column justify-content-start">
              <p className="opacity-75 text-start">
                <small>January 1, 2023</small>
              </p>
              <h5 class="card-title text-start">Featured Post Title</h5>
              <p class="card-text text-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                laboriosam. Dicta expedita corporis animi vero voluptate
                voluptatibus possimus, veniam magni quis!
              </p>
              <a href="#" class="btn btn-primary  ">
                Read more
              </a>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between pt-5">
            <div class="card m-xxl-4 m-xl-1 col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <img
                class="card-img-top"
                src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                alt="Card image cap"
              ></img>
              <div class="card-body d-flex flex-column justify-content-start">
                <p className="opacity-75 text-start">
                  <small>January 1, 2023</small>
                </p>
                <h5 class="card-title text-start">Post Title</h5>
                <p class="card-text text-start">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
            <div class="card card m-xxl-4 m-xl-1 col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <img
                class="card-img-top"
                src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                alt="Card image cap"
              ></img>
              <div class="card-body d-flex flex-column justify-content-start">
                <p className="opacity-75 text-start">
                  <small>January 1, 2023</small>
                </p>
                <h5 class="card-title text-start">Card title</h5>
                <p class="card-text text-start">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla nulla.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="m-5">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">
                    Newer
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    ...
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    15
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Older
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="d-flex flex-column col-lg-4 col-md-10 m-lg-5 m-md-2 m-sm-1 justify-content-center">
          <div class="card mb-4 d-flex flex-column justify-content-start">
            <div class="card-header">Search</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter search term..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  ></input>
                  <div class="input-group-append ">
                    <button class="btn btn-primary" type="button">
                      Go!
                    </button>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
          <div class="card mb-4 d-flex flex-column justify-content-start">
            <div class="card-header">Categories</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0 d-flex flex-wrap">
                <a href="#" className="col-md-4 me-4 ms-4 col-sm-4 ">
                  Web design
                </a>
                <a href="#" className="col-md-4 me-4 ms-4 col-sm-4 ">
                  HTML
                </a>
                <a href="#" className="col-md-4 me-4 ms-4 col-sm-4 ">
                  Freebies
                </a>
                <a href="#" className="col-md-4 me-4 ms-4 col-sm-4 ">
                  JavaScript
                </a>
                <a href="#" className="col-md-4 me-4 ms-4 col-sm-4 ">
                  CSS
                </a>
                <a href="#" className="col-md-4 me-4 ms-4 col-sm-4 ">
                  Tutorials
                </a>
              </blockquote>
            </div>
          </div>
          <div class="card mb-4 d-flex flex-column justify-content-start">
            <div class="card-header">Side Widget</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p className="p">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the Bootstrap 5 card
                  component!
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <footer className="bg-dark p-5 w-100">
          <p className="text-center text-white">
            Copyright © Your Website 2023
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
