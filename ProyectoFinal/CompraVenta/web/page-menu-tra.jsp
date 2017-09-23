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
    <title>Inicio | Trading Cars </title>

    <!-- Favicons-->
    <link rel="icon" href="images/automovil.png" sizes="32x32">
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
    <link href="js/plugins/perfect-scrollbar/perfect-scrollbar.css" type="text/css" rel="stylesheet" media="screen,projection">
    <link href="js/plugins/jvectormap/jquery-jvectormap.css" type="text/css" rel="stylesheet" media="screen,projection">
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

            <!-- START CONTENT -->
            <div>
                <div>
                    <h4 style="color: #EAB425">Ventas Realizadas por: <%=us.getNombres()%> <%=us.getApellidos()%></h4>
                    <br>
                    <!--<div class="input-field col s8">
                    <label id="TotalV" type="textv" name="Totalv" style="background: #FB9400; color: black" >Total</label>
                    </div>-->
                    <table>
                        <thead style="background: #EAB425 ">
                            <tr>
                                <th>Fecha</th>
                                <th>Descripcion</th>
                                <th>Usuario</th>
                                <th>Automovil</th>
                                <th>Descuento</th>
                                <th>Total</th>
                            </tr>
                           </thead>
                    
                <tbody>
                     <%
                        
                        Query rq = Ss.createQuery("Select V from Venta V Where V.trabajador='"+us.getIdTrabajador()+"'");

                          List<Modelos.Venta> au = rq.list();
                          for(Modelos.Venta A : au){
                    %>
                    <tr>
                        <td><%=A.getFechaEntrega()%></td>
                        <td><%=A.getDescripcion()%></td>
                        <td><%=A.getUsuario().getNombres()%></td>
                        <td><%=A.getAutomovil().getPlaca()%></td>
                        <td><%=A.getDescuento()%></td>
                        <td><label>$</label><%
                        Double d = A.getTotal();
                        out.print(String.valueOf(d.longValue()));
                        %></td>
                    </tr>
                </tbody>
                
                <%} }%>
                    </table>
                </div>
            </div>
        </div>
        <!-- END WRAPPER -->
    </div>
    
    <!-- ================================================
    Scripts
    ================================================ -->
    
    <!-- jQuery Library -->
    <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>    
    <!--materialize js-->
    <script type="text/javascript" src="js/materialize.min.js"></script>
    <!--scrollbar-->
    <script type="text/javascript" src="js/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
       

    <!-- chartist -->
    <script type="text/javascript" src="js/plugins/chartist-js/chartist.min.js"></script>   

    <!-- chartjs -->
    <script type="text/javascript" src="js/plugins/chartjs/chart.min.js"></script>
    <script type="text/javascript" src="js/plugins/chartjs/chart-script.js"></script>

    <!-- sparkline -->
    <script type="text/javascript" src="js/plugins/sparkline/jquery.sparkline.min.js"></script>
    <script type="text/javascript" src="js/plugins/sparkline/sparkline-script.js"></script>
    
    <!--jvectormap-->
    <script type="text/javascript" src="js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
    <script type="text/javascript" src="js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
    <script type="text/javascript" src="js/plugins/jvectormap/vectormap-script.js"></script>
    
    
    <!--plugins.js - Some Specific JS codes for Plugin Settings-->
    <script type="text/javascript" src="js/plugins.js"></script>
    <!-- Toast Notification -->
    <script type="text/javascript">
    // Toast Notification
    $(window).load(function() {
        setTimeout(function() {
            Materialize.toast('Bienvenido Trabajador', 1500);
        }, 3000);
    });
    
    </script>
</body>
</html>