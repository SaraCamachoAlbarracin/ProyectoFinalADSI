
<%@page import="java.util.Calendar"%>
<%@page import="java.util.List"%>
<%@page import="org.hibernate.Query"%>
<%@page import="org.hibernate.Session"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<!--================================================================================
	Item Name: Materialize - Material Design Admin Template
	Version: 1.0
	Author: GeeksLabs
	Author URL: http://www.themeforest.net/user/geekslabs
================================================================================ -->

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="msapplication-tap-highlight" content="no">
  <meta name="description" content="Materialize is a Material Design Admin Template,It's modern, responsive and based on Material Design by Google. ">
  <meta name="keywords" content="materialize, admin template, dashboard template, flat admin template, responsive admin template,">
  <title> Contadores  | Trading Cars</title>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
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
  <link href="http://cdn.datatables.net/1.10.6/css/jquery.dataTables.min.css" type="text/css" rel="stylesheet" media="screen,projection">
  


  <!-- INCLUDED PLUGIN CSS ON THIS PAGE -->
  <link href="css/prism.css" type="text/css" rel="stylesheet" media="screen,projection">
  <link href="js/plugins/perfect-scrollbar/perfect-scrollbar.css" type="text/css" rel="stylesheet" media="screen,projection">
  <link href="js/plugins/data-tables/css/jquery.dataTables.min.css" type="text/css" rel="stylesheet" media="screen,projection">
  <link href="js/plugins/chartist-js/chartist.min.css" type="text/css" rel="stylesheet" media="screen,projection">
</head>

<body>
  <!-- Start Page Loading -->
  <div id="loader-wrapper">
      <div id="loader"></div>        
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
  </div>
  <!-- End Page Loading -->

  <!-- //////////////////////////////////////////////////////////////////////////// -->

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


      <!-- //////////////////////////////////////////////////////////////////////////// -->

      <!-- START CONTENT -->
      <section id="content">
        <!--breadcrumbs end-->
        <% Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();%>
            <!--DataTables example-->
            
                <!--<h3 style="color: #0544d3" > 
                    Aqui podra ver la cantidad de registros que hay en cada tabla hasta el momento 
                </h3>-->
             <!-- <h5 class="header" style="color: red">Buscar por estado de APARTADO</h5>
              <div class="row">
                   <div class="input-field col s4">
                         <select name="Estado" required >
                          <option value="" disabled selected>Seleccione</option>
                          <option value="Solicitado">Solicitado</option>
                          <option value="Cancelado">Cancelado</option>
                         <option value="Vendido">Vendido</option>
                        </select>
                        <label></label>
                        <div class="input-field col s12">
                          <button class="btn waves-effect waves-light " type="submit" name="action" >Buscar
                            <i class="mdi-content-send right"></i>
                          </button>
                        </div>
                      </div>   
                  </div>-->
              
        <div id="breadcrumbs-wrapper" class=" grey lighten-3">
          <div class="container">
            <div class="row">
              <div class="col s12 m12 l12">
               
              </div>
            </div>
          </div>
        </div>
              
        <!--start container-->
        <div class="container">
          <div class="section">
            <!--DataTables example-->
            <div id="table-datatables">
              <h3 class="header" style="color: #28B463"  > Contador </h3>
              <div class="row">
                  
                  
               
                  <table class="table" id="example" >
                      <thead style="background: #28B463">
                        <tr>
                            <th>Cantidad Ventas</th>
                            <th>Cantidad Compras</th>             
                            <th>Cantidad Automoviles</th>
                            <th>Cantidad Trabajadores</th> 
                            <th>Cantidad Apartar</th>
                             <th>Cantidad Tiempo</th>
                             <th>Cantidad Usuarios</th>
                        </tr>
                    </thead>
                 
                    <%
              
              Long tital = (Long) Ss.createQuery("select count(*) from Venta").uniqueResult();
              Long tital1 = (Long) Ss.createQuery("select count(*) from Compra").uniqueResult();
              Long tital2= (Long) Ss.createQuery("select count(*) from Automovil").uniqueResult();
              Long tital3 = (Long) Ss.createQuery("select count(*) from Trabajador").uniqueResult();
              Long tital4 = (Long) Ss.createQuery("select count(*) from Apartar").uniqueResult();
              Long tital5 = (Long) Ss.createQuery("select count(*) from Tiempo").uniqueResult();
              Long tital6 = (Long) Ss.createQuery("select count(*) from Usuario").uniqueResult();
               %>
               <tbody >
                      <tr>
                          <td><%= tital %></td>
                      <td>  <%= tital1%></td>
                      <td>  <%=tital2 %></td>
                      <td>  <%= tital3%></td>
                     <td>   <%= tital4%></td>
                      <td>   <%= tital5%></td>
                        <td>   <%= tital6%></td>
                      </tr>
                    </tbody>
                  </table>
              </div>
            </div> 
          </div>
        </div>
        <!--end container-->

      </section>
      <!-- END CONTENT -->

      <!-- //////////////////////////////////////////////////////////////////////////// -->
      <!-- START RIGHT SIDEBAR NAV-->
      <aside id="right-sidebar-nav">
        <ul id="chat-out" class="side-nav rightside-navigation">
            <li class="li-hover">
            <a href="#" data-activates="chat-out" class="chat-close-collapse right"><i class="mdi-navigation-close"></i></a>
            <div id="right-search" class="row">
                <form class="col s12">
                    <div class="input-field">
                        <i class="mdi-action-search prefix"></i>
                        <input id="icon_prefix" type="text" class="validate">
                        <label for="icon_prefix">Search</label>
                    </div>
                </form>
            </div>
            </li>
            <li class="li-hover">
                <ul class="chat-collapsible" data-collapsible="expandable">
                <li>
                    <div class="collapsible-header teal white-text active"><i class="mdi-social-whatshot"></i>Recent Activity</div>
                    <div class="collapsible-body recent-activity">
                        <div class="recent-activity-list chat-out-list row">
                            <div class="col s3 recent-activity-list-icon"><i class="mdi-action-add-shopping-cart"></i>
                            </div>
                            <div class="col s9 recent-activity-list-text">
                                <a href="#">just now</a>
                                <p>Jim Doe Purchased new equipments for zonal office.</p>
                            </div>
                        </div>
                        <div class="recent-activity-list chat-out-list row">
                            <div class="col s3 recent-activity-list-icon"><i class="mdi-device-airplanemode-on"></i>
                            </div>
                            <div class="col s9 recent-activity-list-text">
                                <a href="#">Yesterday</a>
                                <p>Your Next flight for USA will be on 15th August 2015.</p>
                            </div>
                        </div>
                        <div class="recent-activity-list chat-out-list row">
                            <div class="col s3 recent-activity-list-icon"><i class="mdi-action-settings-voice"></i>
                            </div>
                            <div class="col s9 recent-activity-list-text">
                                <a href="#">5 Days Ago</a>
                                <p>Natalya Parker Send you a voice mail for next conference.</p>
                            </div>
                        </div>
                        <div class="recent-activity-list chat-out-list row">
                            <div class="col s3 recent-activity-list-icon"><i class="mdi-action-store"></i>
                            </div>
                            <div class="col s9 recent-activity-list-text">
                                <a href="#">Last Week</a>
                                <p>Jessy Jay open a new store at S.G Road.</p>
                            </div>
                        </div>
                        <div class="recent-activity-list chat-out-list row">
                            <div class="col s3 recent-activity-list-icon"><i class="mdi-action-settings-voice"></i>
                            </div>
                            <div class="col s9 recent-activity-list-text">
                                <a href="#">5 Days Ago</a>
                                <p>Natalya Parker Send you a voice mail for next conference.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="collapsible-header light-blue white-text active"><i class="mdi-editor-attach-money"></i>Sales Repoart</div>
                    <div class="collapsible-body sales-repoart">
                        <div class="sales-repoart-list  chat-out-list row">
                            <div class="col s8">Target Salse</div>
                            <div class="col s4"><span id="sales-line-1"></span>
                            </div>
                        </div>
                        <div class="sales-repoart-list chat-out-list row">
                            <div class="col s8">Payment Due</div>
                            <div class="col s4"><span id="sales-bar-1"></span>
                            </div>
                        </div>
                        <div class="sales-repoart-list chat-out-list row">
                            <div class="col s8">Total Delivery</div>
                            <div class="col s4"><span id="sales-line-2"></span>
                            </div>
                        </div>
                        <div class="sales-repoart-list chat-out-list row">
                            <div class="col s8">Total Progress</div>
                            <div class="col s4"><span id="sales-bar-2"></span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="collapsible-header red white-text"><i class="mdi-action-stars"></i>Favorite Associates</div>
                    <div class="collapsible-body favorite-associates">
                        <div class="favorite-associate-list chat-out-list row">
                            <div class="col s4"><img src="images/avatar.jpg" alt="" class="circle responsive-img online-user valign profile-image">
                            </div>
                            <div class="col s8">
                                <p>Eileen Sideways</p>
                                <p class="place">Los Angeles, CA</p>
                            </div>
                        </div>
                        <div class="favorite-associate-list chat-out-list row">
                            <div class="col s4"><img src="images/avatar.jpg" alt="" class="circle responsive-img online-user valign profile-image">
                            </div>
                            <div class="col s8">
                                <p>Zaham Sindil</p>
                                <p class="place">San Francisco, CA</p>
                            </div>
                        </div>
                        <div class="favorite-associate-list chat-out-list row">
                            <div class="col s4"><img src="images/avatar.jpg" alt="" class="circle responsive-img offline-user valign profile-image">
                            </div>
                            <div class="col s8">
                                <p>Renov Leongal</p>
                                <p class="place">Cebu City, Philippines</p>
                            </div>
                        </div>
                        <div class="favorite-associate-list chat-out-list row">
                            <div class="col s4"><img src="images/avatar.jpg" alt="" class="circle responsive-img online-user valign profile-image">
                            </div>
                            <div class="col s8">
                                <p>Weno Carasbong</p>
                                <p>Tokyo, Japan</p>
                            </div>
                        </div>
                        <div class="favorite-associate-list chat-out-list row">
                            <div class="col s4"><img src="images/avatar.jpg" alt="" class="circle responsive-img offline-user valign profile-image">
                            </div>
                            <div class="col s8">
                                <p>Nusja Nawancali</p>
                                <p class="place">Bangkok, Thailand</p>
                            </div>
                        </div>
                    </div>
                </li>
                </ul>
            </li>
        </ul>
      </aside>
      <!-- LEFT RIGHT SIDEBAR NAV-->

    </div>
    <!-- END WRAPPER -->

  </div>
  <!-- END MAIN -->



  <!-- //////////////////////////////////////////////////////////////////////////// -->

  <!-- START FOOTER -->
  
    <!-- END FOOTER -->



    <!-- ================================================
    Scripts
    ================================================ -->
    
    <script>
    $(document).ready(function () {
        $('#example').DataTable();
    });
</script>
<script src="js/jquery-1.12.4.js"></script>
<script src="js/jquery.dataTables.min.js"></script>
<link href="css/jquery.dataTables.min.css" rel="stylesheet" type="text/css" />
    
    <!-- jQuery Library -->
    <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>    
    <!--materialize js-->
    <script type="text/javascript" src="js/materialize.js"></script>
    <!--prism-->
    <script type="text/javascript" src="js/prism.js"></script>
    <!--scrollbar-->
    <script type="text/javascript" src="js/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
    <!-- data-tables -->
    <script type="text/javascript" src="js/plugins/data-tables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="js/plugins/data-tables/data-tables-script.js"></script>
    <!-- chartist -->
    <script type="text/javascript" src="js/plugins/chartist-js/chartist.min.js"></script>   
    
    <!--plugins.js - Some Specific JS codes for Plugin Settings-->
    <script type="text/javascript" src="js/plugins.js"></script>    
</body>

</html>
