<%@page import="java.util.List"%>
<%@page import="org.hibernate.Criteria"%>
<%@page import="org.hibernate.Session"%>
<%@page import="Modelos.HibernateUtil"%>
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
  <title>Automovil | Trading Cars</title>

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
     
     <!-- Cargar combos-->
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
                    <h1 class="logo-wrapper"><a href="index.html" class="brand-logo darken-1"><img src="images/materialize-logo.png" alt="materialize logo"></a> <span class="logo-text">Materialize</span></h1>
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
                          <img src="images/avatar.jpg" alt="" class="circle responsive-img valign profile-image">
                      </div>
                      <div class="col col s8 m8 l8">
                          <ul id="profile-dropdown" class="dropdown-content">
                              <li><a href="#"><i class="mdi-action-face-unlock"></i> Profile</a>
                              </li>
                              <li><a href="#"><i class="mdi-action-settings"></i> Settings</a>
                              </li>
                              <li><a href="#"><i class="mdi-communication-live-help"></i> Help</a>
                              </li>
                              <li class="divider"></li>
                              <li><a href="#"><i class="mdi-action-lock-outline"></i> Lock</a>
                              </li>
                              <li><a href="#"><i class="mdi-hardware-keyboard-tab"></i> Logout</a>
                              </li>
                          </ul>
                          <a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown">John Doe<i class="mdi-navigation-arrow-drop-down right"></i></a>
                          <p class="user-roal">Administrator</p>
                      </div>
                  </div>
              </li>
              <li class="bold"><a href="index.html" class="waves-effect waves-cyan"><i class="mdi-action-dashboard"></i> Home</a>
              </li>
              <li class="no-padding">
                  <ul class="collapsible collapsible-accordion">
                      <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-action-invert-colors"></i> CSS</a>
                          <div class="collapsible-body">
                              <ul>
                                  <li><a href="css-typography.html">Typography</a>
                                  </li>                                        
                                  <li><a href="css-icons.html">Icons</a>
                                  </li>
                                  <li><a href="css-shadow.html">Shadow</a>
                                  </li>
                                  <li><a href="css-media.html">Media</a>
                                  </li>
                                  <li><a href="css-sass.html">Sass</a>
                                  </li>
                              </ul>
                          </div>
                      </li>
                      <li class="bold"><a class="collapsible-header  waves-effect waves-cyan"><i class="mdi-image-palette"></i> UI Elements</a>
                          <div class="collapsible-body">
                              <ul>
                                  <li><a href="ui-buttons.html">Buttons</a>
                                  </li>
                                  <li><a href="ui-badges.html">Badges</a>
                                  </li>
                                  <li><a href="ui-cards.html">Cards</a>
                                  </li>
                                  <li><a href="ui-collections.html">Collections</a>
                                  </li>
                                  <li><a href="ui-accordions.html">Accordian</a>
                                  </li>                                        
                                  <li><a href="ui-navbar.html">Navbar</a>
                                  </li>
                                  <li><a href="ui-pagination.html">Pagination</a>
                                  </li>
                                  <li><a href="ui-preloader.html">Preloader</a>
                                  </li>
                                  <li><a href="ui-modals.html">Modals</a>
                                  </li>
                                  <li><a href="ui-media.html">Media</a>
                                  </li>
                                  <li><a href="ui-toasts.html">Toasts</a>
                                  </li>
                                  <li><a href="ui-tooltip.html">Tooltip</a>
                                  </li>
                              </ul>
                          </div>
                      </li>
                      <li class="bold"><a class="collapsible-header  waves-effect waves-cyan"><i class="mdi-editor-border-all"></i> Tables</a>
                          <div class="collapsible-body">
                              <ul>
                                  <li><a href="table-basic.html">Basic Tables</a>
                                  </li>
                                  <li><a href="table-data.html">Data Tables</a>
                                  </li>
                              </ul>
                          </div>
                      </li>
                      <li class="bold"><a class="collapsible-header  waves-effect waves-cyan"><i class="mdi-editor-insert-comment"></i> Forms</a>
                          <div class="collapsible-body">
                              <ul>
                                  <li><a href="form-elements.html">Form Elements</a>
                                  </li>
                                  <li><a href="form-layouts.html">Form Layouts</a>
                                  </li>
                              </ul>
                          </div>
                      </li>
                      <li class="bold"><a class="collapsible-header  waves-effect waves-cyan"><i class="mdi-social-pages"></i> Pages</a>
                          <div class="collapsible-body">
                              <ul>                                        
                                  <li><a href="page-login.html">Login</a>
                                  </li>
                                  <li><a href="page-register.html">Register</a>
                                  </li>
                                  <li><a href="page-lock-screen.html">Lock Screen</a>
                                  </li>
                                  <li><a href="page-invoice.html">Invoice</a>
                                  </li>
                                  <li><a href="page-404.html">404</a>
                                  </li>
                                  <li><a href="page-500.html">500</a>
                                  </li>
                                  <li><a href="page-blank.html">Blank</a>
                                  </li>
                              </ul>
                          </div>
                      </li>
                      <li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-editor-insert-chart"></i> Charts</a>
                          <div class="collapsible-body">
                              <ul>
                                  <li><a href="charts-chartjs.html">Chart JS</a>
                                  </li>
                                  <li><a href="charts-chartist.html">Chartist</a>
                                  </li>
                                  <li><a href="charts-morris.html">Morris Charts</a>
                                  </li>
                                  <li><a href="charts-xcharts.html">xCharts</a>
                                  </li>
                                  <li><a href="charts-flotcharts.html">Flot Charts</a>
                                  </li>
                                  <li><a href="charts-sparklines.html">Sparkline Charts</a>
                                  </li>
                              </ul>
                          </div>
                      </li>
                  </ul>
              </li>
              <li class="li-hover"><div class="divider"></div></li>
              <li class="li-hover"><p class="ultra-small margin more-text">MORE</p></li>
              <li><a href="css-grid.html"><i class="mdi-image-grid-on"></i> Grid</a>
              </li>
              <li><a href="css-color.html"><i class="mdi-editor-format-color-fill"></i> Color</a>
              </li>
              <li><a href="css-helpers.html"><i class="mdi-communication-live-help"></i> Helpers</a>
              </li>
              <li><a href="changelogs.html"><i class="mdi-action-swap-vert-circle"></i> Changelogs</a>
              </li>
              <li class="li-hover"><div class="divider"></div></li>
              <li class="li-hover"><p class="ultra-small margin more-text">Daily Sales</p></li>
              <li class="li-hover">
                  <div class="row">
                      <div class="col s12 m12 l12">
                          <div class="sample-chart-wrapper">                            
                              <div class="ct-chart ct-golden-section" id="ct2-chart"></div>
                          </div>
                      </div>
                  </div>
              </li>
          </ul>
          <a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only darken-2"><i class="mdi-navigation-menu" ></i></a>
      </aside>
      <!-- END LEFT SIDEBAR NAV-->

      <!-- //////////////////////////////////////////////////////////////////////////// -->

      <!-- START CONTENT -->
      <section id="content">

        <!--breadcrumbs start-->
        <div id="breadcrumbs-wrapper" class=" grey lighten-3">
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
        </div>
        <!--breadcrumbs end-->
<!--Form Advance-->          
          <div class="row">
            <div class="col s12 m12 l12">
              <div class="card-panel">
                <h4 class="header2">Automovil</h4>
                     <div class="row">
                         <form action="ProAutomovil/create" method="post">
                              <div class="input-field col s4">
                             <input id="Fecha" type="date" name="Fecha">
                        <label for="Fecha"></label>
                      </div>
                        
                      <div class="input-field col s4">
                          <select name="Tipo">
                          <option value="" disabled selected>Seleccione</option>
                          <option value="Automovil">Automovil</option>
                          <option value="Moto">Moto</option>
                        </select>
                        <label>Tipo</label>
                      </div>
                             <div class="input-field col s4">
                        <input id="Placa" type="text" name="Placa">
                        <label for="Placa">Placa</label>
                      </div>
                    
                      <div class="input-field col s4">
                        <input id="Color" type="text" name="Color">
                        <label for="Color">Color</label>
                      </div>
                        
                        <div class="input-field col s4">
                            <input id="Modelo" type="text" name="Modelo" required>
                        <label for="Modelo">Modelo</label>
                      </div>
                             
                        <div class="input-field col s4">
                        <input id="Marca" type="text" name="Marca" required>
                        <label for="Marca">Marca</label>
                      </div>
                             
                       <div class="input-field col s4">
                        <input id="Kilometraje" type="text" name="Kilometraje" required>
                        <label for="Kilometraje">Kilometraje-Km/h</label>
                      </div>
                             
                    <div class="input-field col s4">
                        <input id="Ciudad" type="text" name="Ciudad" required>
                        <label for="Ciudad">Ciudad</label>
                      </div>
                             
                             <div class="input-field col s10">
                                  <input id="Descripcion" type="text" name="Descripcion">
                                  <label for="Descripcion">Descripcion</label>
                                </div>
            
                        <div class="input-field col s8">
                            <span>Seguro</span><br>
                                  <form action="subir.jsp" enctype="MULTIPART/FORM-DATA" method="post"/>
                                   <input type="file" name="Seguro"  class="btn waves-effect waves-light "  style="background: #f39c54;"><br/>
                         </div>
                             <br><br><br>
                        <div class="input-field col s8">
                            <span>Soat</span><br>
                            <form action="subir.jsp" enctype="MULTIPART/FORM-DATA" method="post"/>
                             <input type="file" name="Soat"  class="btn waves-effect waves-light "  style="background: #f39c54;"><br/>
                            </div>
                             
                             <div class="input-field col s8">      
                            <span>Foto</span><br>
                           <form action="subir.jsp" enctype="MULTIPART/FORM-DATA" method="post"/>
                            <input type="file" name="Foto"  class="btn waves-effect waves-light "  style="background: #f39c54;"><br/><br>
                            </div>
                              
                             <div class="input-field col s4">
                        <select name="Impuestos">
                          <option value="" disabled selected>Seleccione</option>
                          <option value="Al dia">Al dia</option>
                          <option value="En mora">En mora</option>
                          <option value="Pendiente">Pendiente</option>
                        </select>
                        <label>Impuestos</label>
                      </div>
                        
                       <div class="input-field col s2">
                        <input id="Valor" type="text" name="Valor" required>
                        <label for="Valor"> $ Valor</label>
                      </div>
                            
                             <div class="input-field col s4">
                        <select name="Estado">
                          <option value="" disabled selected>Seleccione</option>
                          <option value="Activo">Activo</option>
                          <option value="Inactivo">Inactivo</option>
                        
                        </select>
                        <label>Estado</label>
                      </div>   
                             <div class="input-field col s4">
                        <select name="Usuario">
                          <option value="" disabled selected>Seleccione</option>
                     
                        </select>
                        <label>Usuario</label>
                      </div>   
                        
                         <div class="row">
                        <div class="input-field col s12">
                          <button class="btn waves-effect waves-light " type="submit" name="action">Registrar
                            <i class="mdi-content-send right"></i>
                          </button>
                        </div>
                      </div>
                         </form>
                     </div>
                </div>
            </div>
         </div>
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
        <span>ADSI� 2017 </span>
        <span class="right">SENA-CIMM</span>
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