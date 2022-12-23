
customElements.define( 'c-e', class extends HTMLElement   {
  constructor() {
      super()
      this.attachShadow( { mode: 'open' } )
          .innerHTML = ` <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

          <link rel="stylesheet" href="/assets/css/styles.css">
          
         
          <nav class="navbar navbar-expand-lg header-nav fixed-top">
          </ul>
            <div class="container-fluid flex-row-reverse">
              <a class="navbar-brand" href="#"> <img id="home" src="/assets/img/nofondo 2.png" alt=""></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
              </button>
              
              <div class="collapse navbar-collapse justify-content-between " id="navbarSupportedContent">
                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link d-block d-sm-block d-md-none"  href="#"><img id="acceder" src="/assets/img/acceer.png" alt=""></a>
                  </li>
                  
                    <a class="nav-link d-block d-sm-block d-md-none"  href="#"><img id="registro" src="/assets/img/registro.png" alt=""></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" id="a">Acerca de nosotros</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" id="a">contactos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" id="a">Productos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" id="a">servicios</a>
                  </li>
                </ul>
              
             
              </div>
            </div>
          </nav>
       
        `
  }
 
} )


