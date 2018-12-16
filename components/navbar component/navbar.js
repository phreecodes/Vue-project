


Vue.component('finto-logo', {
    template: `
    <div>
    <nav class="navbar navbar-expand-lg navbar-light">
    <img src="../images/finto-logo.png" class="logo-finto mr-3">
    <a class="navbar-brand text-light ml-1" style="font-size:30px;" href="#">finto</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Why us? <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Priceng</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
    <button type="button" class="btn btn-warning login-button">Login</button>
  </div>
</nav>
</div>
    
    `
});



new Vue({
    el: '#nav'
});