
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
      
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="msapplication-tap-highlight" content="no">
  <meta name="description" content="Materialize is a Material Design Admin Template,It's modern, responsive and based on Material Design by Google. ">
  <meta name="keywords" content="materialize, admin template, dashboard template, flat admin template, responsive admin template,">
  <title>Trabajador Registrados | Trading Cars</title>

  <!-- Favicons-->
  <link rel="icon" href="images/favicon/favicon-32x32.png" sizes="32x32">
  <!-- Favicons-->
  <link rel="apple-touch-icon-precomposed" href="images/favicon/apple-touch-icon-152x152.png">
  <!-- For iPhone -->
  <meta name="msapplication-TileColor" content="#00bcd4">
  <meta name="msapplication-TileImage" content="images/favicon/mstile-144x144.png">
  <!-- For Windows Phone -->


  <!-- CORE CSS-->
  
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection">
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection">


  <!-- INCLUDED PLUGIN CSS ON THIS PAGE -->
  <link href="css/prism.css" type="text/css" rel="stylesheet" media="screen,projection">
  <link href="js/plugins/perfect-scrollbar/perfect-scrollbar.css" type="text/css" rel="stylesheet" media="screen,projection">
  <link href="js/plugins/chartist-js/chartist.min.css" type="text/css" rel="stylesheet" media="screen,projection">
    </head>
    <body>
        
       <div id="loader-wrapper">
      <div id="loader"></div>        
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
  </div>
       <!-- START HEADER -->
  <header id="header" class="page-topbar">
        <!-- start header nav-->
        <div class="navbar-fixed">
            <nav class="cyan">
                <div class="nav-wrapper">
                    <h1 class="logo-wrapper"><a href="#" class="brand-logo darken-1"><img src="images/motocicleta.png" alt=""> COMPRA VENTA DE AUTOS Y MOTOS <img src="images/carreras.png" alt=""> </a> <span class="logo-text"> </span></h1>
                    <ul class="right hide-on-med-and-down">
                        <li class="search-out">
                            <input type="text" class="search-out-text">
                        </li>
                        <li>    
                            <a href="javascript:void(0);" class="waves-effect waves-block waves-light show-search"><i class="mdi-action-search"></i></a>                              
                        </li>
                        <li><a href="javascript:void(0);" class="waves-effect waves-block waves-light toggle-fullscreen"><i class="mdi-action-settings-overscan"></i></a>
                        </li>
                        <li><a href="javascript:void(0);" class="waves-effect waves-block waves-light"><i class="mdi-social-notifications"></i></a>
                        </li>
                        <!-- Dropdown Trigger -->                        
                        <li><a href="#" data-activates="chat-out" class="waves-effect waves-block waves-light chat-collapse"><i class="mdi-communication-chat"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- end header nav-->
  </header>
  <!-- END HEADER -->

  <!-- //////////////////////////////////////////////////////////////////////////// -->

  <!-- START MAIN -->
  <div id="main">
    <!-- START WRAPPER -->
    <div class="wrapper">

        <!-- START LEFT SIDEBAR NAV-->
                <!-- START LEFT SIDEBAR NAV-->
            <aside id="left-sidebar-nav">
                <ul id="slide-out" class="side-nav fixed leftside-navigation">
                    <li class="user-details cyan darken-2">
                        <div class="row">
                            <div class="col col s4 m4 l4">
                                <img src="images/cochelogo.png" alt="">
                            </div>
                            <div class="col col s8 m8 18">
                                <ul id="profile-dropdown" class="dropdown-content">
                                    <li><a href="page-menu.html"><img src="images/usuarios.png" alt=""> Profile</a>
                                    </li>
                                   <!-- <li><a href="#"><i class="mdi-action-settings"></i> Settings</a>
                                    </li>
                                    <li><a href="#"><i class="mdi-communication-live-help"></i> Help</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li><a href="#"><i class="mdi-action-lock-outline"></i> Lock</a>
                                    </li>
                                   -->
                                   <li><a href="page-login.html"><img src="images/salir-opcion.png" alt=""> Logout</a>
                                    </li>
                                </ul>
                                <a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown"> Trading Cars<i class="mdi-navigation-arrow-drop-down right"></i></a>
                                <p class="user-roal"> Administrador </p>
                            </div>
                        </div>
                    </li>
                    <li class="bold"><a href="page-menu.html" class="waves-effect waves-cyan"><img src="images/inicio.png" alt=""> Inicio </a>
                    </li>
                   
                    <li class="no-padding">
                        <ul class="collapsible collapsible-accordion">
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/empresarios.png" alt="">  Trabajador</a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="page-trabajador.jsp">Registro</a>
                                        </li>                                        
                                        <li><a href="list-trabajador.jsp">Administrar</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li>
                           
                           
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/coche.png" alt=""> Auto/Moto </a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="page-automovil.jsp">Registro</a>
                                        </li>
                                        <li><a href="list-automovil.jsp">Administrar</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li>
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/equipo.png" alt="">  Usuarios</a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="page-user.jsp">Registro</a>
                                        </li>                                        
                                        <li><a href="ListUser.jsp">Administrar</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li>
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/carroC.png" alt="">  Compra </a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="page-compra.jsp">Registro</a>
                                        </li>                                        
                                        <li><a href="list-compra.jsp">Administrar</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li> 
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/venta.png" alt="">  Venta </a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="page-venta.jsp">Registro</a>
                                        </li>                                        
                                        <li><a href="list-venta.jsp">Administrar</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li> 
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/reloj.png" alt="">  Tiempo </a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="page-tiempo.jsp">Registro</a>
                                        </li>                                        
                                        <li><a href="list-tiempo.jsp">Administrar</a>
                                        </li>
                                        <li><a href="Info-date.jsp">Autos Out Off Time</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> 
                            
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/llave-del-coche.png" alt="">  Apartar </a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="page-apartar.jsp">Registro</a>
                                        </li>                                        
                                        <li><a href="list-apartar.jsp">Administrar</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li> 
                            
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/pdf.png" alt=""> Informes </a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="InfoUsers.jsp">Usuarios</a>
                                        </li>  
                                        <li><a href="InfoCars.jsp">Automoviles</a>
                                        </li>
                                        <li><a href="InfoTras.jsp">Trabajador</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> 
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/icon.png" alt=""> Información Adicional </a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="InfoCarrosVen.jsp">Autos Vendidos</a></li>
                                        <li><a href="InfoCont.jsp">Contador</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> 
                        </ul>
                    </li>
                   
                </ul>

    </div>
</aside>

  <!-- LEFT RIGHT SIDEBAR NAV-->
<div class="row">
            <div class="col s12 m12 l12">
              <div class="card-panel">
                  <h4 class="header2" style="color: #0059bc">Generar PDF </h4>
                  <p>
                      Aqui podra ver y descargar el informe de los TRABAJADORES que estan registrados hasta el momento.
                  </p>
                <div class="row">
                    
                    <form method="post" action="ReporteTra" target="_new">
                        <div class="input-field col s12">
                          <button class="btn waves-effect waves-light " type="submit" name="action">Generar
                            <i class="mdi-content-send right"></i>
                          </button>
                        </div>
                    </form>
                    
                </div>
              </div>
            </div>
</div>
  </div>
  <!-- END WRAPPER -->

 
  <!-- END MAIN -->



  <!-- //////////////////////////////////////////////////////////////////////////// -->

  <!-- START FOOTER -->
  <footer class="page-footer">
    <div class="footer-copyright">
      <div class="container">
       <span>ADSI © 2017</span>
      </div>
    </div>
  </footer>
  <!-- END FOOTER -->



    <!-- ================================================
    Scripts
    ================================================ -->
    
    <!-- jQuery Library -->
    <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>    
    <!--materialize js-->
    <script type="text/javascript" src="js/materialize.js"></script>
    <!--prism-->
    <script type="text/javascript" src="js/prism.js"></script>
    <!--scrollbar-->
    <script type="text/javascript" src="js/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
    <!-- chartist -->
    <script type="text/javascript" src="js/plugins/chartist-js/chartist.min.js"></script>   
    
    <!--plugins.js - Some Specific JS codes for Plugin Settings-->
    <script type="text/javascript" src="js/plugins.js"></script>
    </body>
</html>
