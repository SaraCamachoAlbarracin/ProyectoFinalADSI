
<%@page import="java.util.List"%>
<%@page import="org.hibernate.Query"%>
<%@page import="org.hibernate.Session"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
         Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
         Query rs = Ss.createQuery("from Trabajador  where Documento ='" + session.getAttribute("Username") + "' ");
     
            HttpSession SS = request.getSession();
            SS.getAttribute("Username");
         
           List<Modelos.Trabajador> op = rs.list();
           for(Modelos.Trabajador us : op){
         
       %>
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
  <title>Modificar Trabajador | Trading Cars</title>

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
                   <aside id="left-sidebar-nav">
                <ul id="slide-out" class="side-nav fixed leftside-navigation">
                    <li class="user-details cyan darken-2">
                        <div class="row">
                            <div class="col col s4 m4 l4">
                                <img src="images/cochelogo.png" alt="">
                            </div>
                            <div class="col col s8 m8 18">
                                <ul id="profile-dropdown" class="dropdown-content">
                                   <li><a href="Update_Trabs.jsp"><img src="images/usuarios.png" alt=""> Profile</a>
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
                                <p class="user-roal" value="<%=us.getIdTrabajador()%>"> <%=us.getNombres()%> <%=us.getApellidos()%></p>
                            </div>
                        </div>
                    </li>
                    <li class="bold"><a href="page-menu-tra.jsp" class="waves-effect waves-cyan"><img src="images/inicio.png" alt=""> Inicio </a>
                    </li>
                   
                    <li class="no-padding">
                        <ul class="collapsible collapsible-accordion">
                            
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/equipo.png" alt="">  Usuarios</a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="page-user-tra.jsp">Registro</a>
                                        </li>
                                        <li><a href="list-user-tra.jsp">Administrar</a>
                                        </li> 
                                    </ul>
                                </div>
                            </li>
                             <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/carroC.png" alt="">  Compra </a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="page-compra_1.jsp">Registro</a>
                                        </li>  
                                    </ul>
                                </div>
                            </li> 
                            
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/venta.png" alt="">  Venta </a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="page-venta_1.jsp">Registro</a>
                                        </li>    
                                    </ul>
                                </div>
                            </li> 
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/reloj.png" alt="">  Tiempo </a>
                                <div class="collapsible-body">
                                    <ul>                    
                                        <li><a href="page-tiempo-tra.jsp">Registro</a>
                                        </li>
                                        <li><a href="list-tiempo-tra.jsp">Administrar</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> 
                            
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/llave-del-coche.png" alt=""> Apartar </a>
                                <div class="collapsible-body">
                                    <ul>                                
                                        <li><a href="list-apartar_1.jsp">Administrar</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> 
                            
                        </ul>
                    </li>
                   
                </ul>
                <a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only darken-2"><i class="mdi-navigation-menu" ></i></a>
            </aside>


            <!-- END LEFT SIDEBAR NAV-->
      <!-- //////////////////////////////////////////////////////////////////////////// -->

      <!-- START CONTENT -->
      <section id="content">

        <!--breadcrumbs start-->
        <!--<div id="breadcrumbs-wrapper" class=" grey lighten-3">
          <div class="container">
            <div class="row">
              <div class="col s12 m12 l12">
                <h5 class="breadcrumbs-title">Forms</h5>
                <ol class="breadcrumb">
                  <li><a href="index.html">Dashboard</a>
                  </li>
                  <li><a href="#">Forms</a>
                  </li>
                  <li class="active">Forms Layouts</li>
                </ol>
              </div>
            </div>
          </div>
        </div>-->
        <!--breadcrumbs end-->


          <!--Form Advance-->          
          <div class="row">
            <div class="col s12 m12 l12">
              <div class="card-panel">
                <h4 style="color: #28B463"> Modificar Datos</h4>
                <div class="row">
                    <form class="col s12" method="post" action="ProTrabajador/updates">
                        <input value="<%=us.getIdTrabajador()%>" name="Id" style="visibility: hidden;">
                   <div class="row">
                      <div class="input-field col s4">
                          <select name="Tipo">
                          <option value="<%=us.getTipo()%>"><%=us.getTipo()%></option>
                          <option value="Mecanico">Mecanico</option>
                          <option value="Limpieza">Limpieza</option>
                          <option value="Secretaria">Secretaria</option>
                          <option value="Vendedor">Vendedor</option>
                        </select>
                        <label>Tipo</label>
                      </div>                        
                     
                    </div>
                    <div class="row">
                      <div class="input-field col s4">
                          <input id="first_name" type="text" name="Nombres" value="<%=us.getNombres()%>"  required>
                        <label for="first_name">Nombres</label>
                      </div>
                    
                      <div class="input-field col s4">
                        <input id="last_name" type="text" name="Apellidos" value="<%=us.getApellidos()%>"  required>
                        <label for="last_name">Apellidos</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s4">
                          <select name="TDocumento" required>
                          <option value="<%=us.getTdocumento()%>"><%=us.getTdocumento()%></option>
                         <option>Seleccione Otro</option>
                          <option value="C.E">Cedula Extranjera</option>
                          <option value="C.C">Cedula Ciudadania</option>
                        
                        </select>
                        <label>Tipo Documento</label>
                      </div>   
                       <div class="input-field col s4">
                           <input id="first_name" type="text" name="Documento" value="<%=us.getDocumento()%>"  required>
                        <label for="first_name">Documento</label>
                      </div>                     
                   
                      </div>
                      <div class="row">
                      <div class="input-field col s4">
                        <input id="first_name" type="text" name="Celular" value="<%=us.getCelular()%>"  required>
                        <label for="first_name">Celular</label>
                      </div>
                    
                      <div class="input-field col s4">
                          <input id="last_name" type="text" name="Ciudad" value="<%=us.getCiudad()%>"  required>
                        <label for="last_name">Ciudad</label>
                      </div>
                   </div>
             <div class="row">

             <div class="input-field col s4">
                        <input id="first_name" type="text" name="Direccion" value="<%=us.getDireccion()%>"  required>
                        <label for="first_name">Dirección</label>
                      </div>                     
                     
                      <div class="input-field col s4">
                          <select name="Genero" required>
                          <option value="<%=us.getGenero()%>"><%=us.getGenero()%></option>
                         <option>Seleccione Otro</option>
                          <option value="Masculino">Masculino</option>
                          <option value="Femenino">Femenino</option>
                        
                        </select>
                        <label>Genero</label>
                      </div>   
                       
                      </div>
                                        <div class="row">
                      <div class="input-field col s4">
                          <input id="password6" type="password" name="Contrasena" value="<%=us.getContrasena()%>"  required>
                        <label for="password">Contraseña</label>
                      </div>
                    </div>
                    
                     <div class="input-field col s4">
                         <select name="Estado" required>
                          <option value="<%=us.getEstado()%>"><%=us.getEstado()%></option>
                         <option>Seleccione Otro</option>
                          <option value="Inactivo">Inactivo</option>
                          <option value="Activo">Activo</option>
                        </select>
                        <label>Estado</label>
                      </div>   
                           <%}%>
                      <div class="row">
                        <div class="input-field col s12">
                          <button class="btn waves-effect waves-light " type="submit" name="action">Modificar
                            <i class="mdi-content-send right"></i>
                          </button>
                        </div>
                      </div>
                        </form>
                </div>
                </div>
              </div>
            </div>
          </div>
      </div>
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
                        <input id="icon_prefix3" type="text" class="validate">
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
                            <div class="col s4"><img src="images/LogoJava3.png" alt="" class="circle responsive-img online-user valign profile-image">
                            </div>
                            <div class="col s8">
                                <p>Eileen Sideways</p>
                                <p class="place">Los Angeles, CA</p>
                            </div>
                        </div>
                        <div class="favorite-associate-list chat-out-list row">
                            <div class="col s4"><img src="images/LogoJava3.png" alt="" class="circle responsive-img online-user valign profile-image">
                            </div>
                            <div class="col s8">
                                <p>Zaham Sindil</p>
                                <p class="place">San Francisco, CA</p>
                            </div>
                        </div>
                        <div class="favorite-associate-list chat-out-list row">
                            <div class="col s4"><img src="images/LogoJava3.png" alt="" class="circle responsive-img offline-user valign profile-image">
                            </div>
                            <div class="col s8">
                                <p>Renov Leongal</p>
                                <p class="place">Cebu City, Philippines</p>
                            </div>
                        </div>
                        <div class="favorite-associate-list chat-out-list row">
                            <div class="col s4"><img src="images/LogoJava3.png" alt="" class="circle responsive-img online-user valign profile-image">
                            </div>
                            <div class="col s8">
                                <p>Weno Carasbong</p>
                                <p>Tokyo, Japan</p>
                            </div>
                        </div>
                        <div class="favorite-associate-list chat-out-list row">
                            <div class="col s4"><img src="images/LogoJava3.png" alt="" class="circle responsive-img offline-user valign profile-image">
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
    
    <script type="text/javascript">
      $(document).ready(function (){
         var result = <% out.print(request.getParameter("Result")); %>;
         if(result){
             Materialize.toast('Registro Modificado Correctamente', 3000, 'rounded');
         }else{
           //  Materialize.toast('El Registro No Se Pudo Ingresar', 3000, 'rounded');
         }
      })
  </script>
    
</body>

</html>
