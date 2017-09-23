/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controladores;


import Modelos.HibernateUtil;
import Modelos.Trabajador;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.hibernate.Query;
import org.hibernate.Session;

/**
 *
 * @author User
 */
public class SessionController extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
       Session Ss = HibernateUtil.getSessionFactory().openSession();
       
        String User = request.getParameter("User");
        String Pass = request.getParameter("Contra");
        HttpSession SS = request.getSession();
        
    /*  Long NResult = (Long) Ss.createQuery("select count(*) from Trabajador where Documento = '"+User+"' AND Contrasena = '"+Pass+"'").uniqueResult();
      if(NResult > 0)
        {
            Query rs = Ss.createQuery("from Trabajador where Documento = '"+User+"' AND Contrasena = '"+Pass+"'");
            List<Trabajador> lsTra = rs.list();
            for (Modelos.Trabajador list1 : lsTra) 
                  {
                    SS.setAttribute("Nombres", list1.getNombres());
                    SS.setAttribute("Documento", list1.getDocumento());
                    SS.setAttribute("Tipo", list1.getTipo());
                        if (SS.getAttribute("Tipo").equals("Vendedor") || (SS.getAttribute("Tipo").equals("Secretaria"))) 
                        {
                            response.sendRedirect("page-menu-tra.jsp");
                        } 
                        else 
                          {
                            response.getWriter().write("Su rol no tiene permiso para acceder al sistema: "+SS.getAttribute("Tipo"));
                            response.sendRedirect("page-login.html");
                          }         
                  }
        }    */
        
      if(User.equalsIgnoreCase("Administrador")){
          if(Pass.equalsIgnoreCase("123")){
            SS = request.getSession();
            SS.setAttribute("Username", User);
            response.sendRedirect("page-menu.html"); 
          }else{   response.getWriter().write("Su rol no tiene permiso para acceder al sistema: "+SS.getAttribute("Administrador"));
                            response.sendRedirect("page-login.html");}
          
      }else if(User.equalsIgnoreCase("")){
          if(Pass.equalsIgnoreCase("")){
            response.sendRedirect("page-login.html"); 
          } else{   response.getWriter().write("Su rol no tiene permiso para acceder al sistema: "+SS.getAttribute("Administrador"));
                            response.sendRedirect("page-login.html"); }
          
      } else if(User.equalsIgnoreCase("Administrador")){
          if(Pass.equalsIgnoreCase("")){
            response.sendRedirect("page-login.html"); 
          } else{    response.getWriter().write("Su rol no tiene permiso para acceder al sistema: "+SS.getAttribute("Administrador"));
                            response.sendRedirect("page-login.html");}
      }
    
      Query us = Ss.createQuery("From Usuario Where Documento ='" + User + "' and Contrasena='" + Pass + "' ");
            List<Modelos.Usuario> list = us.list();
               for(Modelos.Usuario P :list)
               {
                       if(P==P)
                       {
                            SS = request.getSession();
                            SS.setAttribute("Username", User);
                             response.sendRedirect("page-menu-user.jsp");
                        }else{
                             response.getWriter().write("Su rol no tiene permiso para acceder al sistema: "+SS.getAttribute("Documento"));
                            response.sendRedirect("page-login.html");
                        }
               }
               
           Query utra = Ss.createQuery("From Trabajador Where Documento ='" + User + "' and Contrasena='" + Pass + "' ");
            List<Modelos.Trabajador> listutra = utra.list();
               for(Modelos.Trabajador P :listutra)
               {
                       if(P==P)
                       {
                            SS = request.getSession();
                            SS.setAttribute("Username", User);
                             response.sendRedirect("page-menu-tra.jsp");
                        }else{
                           
                            response.getWriter().write("Su rol no tiene permiso para acceder al sistema: "+SS.getAttribute("Documento"));
                            response.sendRedirect("page-login.html");
                        }
               }
  }
    
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
