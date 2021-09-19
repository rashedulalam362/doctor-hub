import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <a class="nav-link me-3 me-5" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  me-5" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  me-5 text-white" href="#">Dental Services </a>
        </li>
        <li class="nav-item">
          <a class="nav-link  me-5 text-white " href="#">Reviews </a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-3 me-5 text-white" href="#">Blogs</a>
        </li>
        </ul>
       
      
    </div>
  </div>
</nav>
    )
}

export default Navbar
