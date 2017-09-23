<%@page import="java.util.List"%>
<%@page import="org.hibernate.Query"%>
<%@page import="org.hibernate.Session"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
         Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
         Query rs = Ss.createQuery("from Usuario  where Documento ='" + session.getAttribute("Username") + "' ");
     
            HttpSession SS = request.getSession();
            SS.getAttribute("Username");
         
           List<Modelos.Usuario> op = rs.list();
           for(Modelos.Usuario us : op){
         
       %>
<!DOCTYPE html>
<html lang="en">

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


<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
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
                                      <li><a href="Update_Users.jsp"><img src="images/usuarios.png" alt=""> Profile</a>
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
                                <p class="user-roal" value="<%=us.getIdCliente()%>"> <%=us.getNombres()%> <%=us.getApellidos()%></p>
                            </div>
                        </div>
                    </li>
                    <li class="bold"><a href="page-menu-user.jsp" class="waves-effect waves-cyan"><img src="images/inicio.png" alt=""> Inicio </a>
                    </li>
                    
                    <li class="no-padding">
                        <ul class="collapsible collapsible-accordion">
                            
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/coche.png" alt=""> Auto/Moto </a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="page-cars.jsp">Registro</a>
                                        </li>
                                        <li><a href="list-auto.jsp">Administrar</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li>
                            
                            <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><img src="images/llave-del-coche.png" alt=""></i>  Apartados </a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li><a href="list-auto-apartado.jsp">Ver</a>
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
            <div class="row">
                <div class="col col s4 m4 l4">
              <h4 style="color: #28B463" >Autos Disponibles </h4>
              <br>
                </div>
            </div>
            <!-- END CONTENT -->
            <div>
                <div>
                    <table>
                        <thead style="background: #28B463">
                            <tr>
                            <th>Marca</th>
                             <th>Color</th>
                            <th>Modelo</th>
                            <th>Kilometraje</th>
                            <th>Valor</th>
                            <th>Foto</th>
                             <th>Accion</th>
                            </tr>
                           </thead>
                    
                <tbody>
                     <%
                        
                        Query rq = Ss.createQuery("from Automovil e where e.estado='Activo'");

                          List<Modelos.Automovil> au = rq.list();
                          for(Modelos.Automovil A : au){
                    %>
                    <tr>
                        <td><%=A.getMarca()%></td>
                        <td><%=A.getColor()%></td>
                        <td><%=A.getModelo()%></td>
                        <td><%=A.getKilometraje()%><label>Km</label></td>
                          <td><label>$</label><%
                        Double d = A.getValor();
                        out.print(String.valueOf(d.longValue()));
                        %></td>
                        
                          <td><img style="width: 100px;height: 80px" src="Imagenes/<%out.print(A.getFoto()); %>" /></td>
                        <td> 
                            <a href="ProAutomovil/leer/<%= A.getIdAutomovil()%>" class="btn waves-effect waves-light">Apartar <img src="images/add.png"> </a>
                     </td>
                    </tr>
                </tbody>
                
                <%} }%>
                    </table>
                </div>
            </div>
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
            Materialize.toast('Bienvenido Sr(a) Usuario', 1500);
        }, 3000);
    });
    
    </script>
</body>

</html>
