
package Controladores;

import Modelos.HibernateUtil;
import Modelos.Tiempo;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.text.ParseException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

public class ProTiempo extends HttpServlet {

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
            throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
         PrintWriter out = response.getWriter();
            String Url = request.getRequestURI();
            String [] Params = Url.split("/");
      
      if(Params.length>=3){
          switch(Params[3])
          {
              case "create":
                  RegistrarTiempo(request,response);
                  break;
                  
                  case "createt":
                  RegTiempoT(request,response);
                  break;
                  
              case "update":
                   UpdateTiempo(request,response);
                  break;
             
              case "delete":
                   DeleteTiempo(request,response,Params[4]);
                  break;
                  
                  case "deletet":
                   DeleteTiempoT(request,response,Params[4]);
                  break;
                  
              case "read":
                   ListarTiempo(request,response,Params[4]);
                  break;
              default:
                 out.println("su solicitud es invalida");
                  break;
                              
          }
      }
    }
private void RegistrarTiempo(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
        Modelos.Tiempo Tie = new Modelos.Tiempo();
        
        DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
        Tie.setFechaActual((Date)formatter2.parse(request.getParameter("Fecha")));
        
        Tie.setDescripcion(request.getParameter("Descripcion"));
        Tie.setEstado(request.getParameter("Estado"));
        int auto=Integer.parseInt(request.getParameter("Automovil"));
        Tie.setAutomovil((Modelos.Automovil) Ss.get(Modelos.Automovil.class,auto));
        
          Ss.beginTransaction();
          Ss.save(Tie);
          Ss.getTransaction().commit();
          Ss.close();
          
          response.sendRedirect("../page-tiempo.jsp?Result=true");
          
          
    }

private void RegTiempoT(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
        Modelos.Tiempo Tie = new Modelos.Tiempo();
        
        DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
        Tie.setFechaActual((Date)formatter2.parse(request.getParameter("Fecha")));
        
        Tie.setDescripcion(request.getParameter("Descripcion"));
        Tie.setEstado(request.getParameter("Estado"));
        int auto=Integer.parseInt(request.getParameter("Automovil"));
        Tie.setAutomovil((Modelos.Automovil) Ss.get(Modelos.Automovil.class,auto));
        
          Ss.beginTransaction();
          Ss.save(Tie);
          Ss.getTransaction().commit();
          Ss.close();
          
          response.sendRedirect("../page-tiempo-tra.jsp?Result=true");
          
          
    }

private void UpdateTiempo(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        int id = Integer.parseInt(request.getParameter("Id"));
         Date Fecha = null;
            try{
                   DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
                   Fecha = ((Date)formatter2.parse(request.getParameter("Fecha")));
            }
            catch(Exception e)
            {
                System.out.println("Error: "+e);
            }
            
        String Descripcion = request.getParameter("Descripcion");
        String Estado  = request.getParameter("Estado");
       int auto = Integer.parseInt(request.getParameter("auto"));
       
        SessionFactory sf=HibernateUtil.getSessionFactory();
        Session sesion=sf.openSession();
        sesion.beginTransaction();
        
        Tiempo Tiem =(Modelos.Tiempo)sesion.get(Modelos.Tiempo.class,id);
                            
           Tiem.setFechaActual(Fecha);
           Tiem.setDescripcion(Descripcion);
           Tiem.setEstado(Estado);
           Tiem.setAutomovil((Modelos.Automovil) sesion.get (Modelos.Automovil.class, auto));
        
         sesion.saveOrUpdate(Tiem); //actualiza
         sesion.getTransaction().commit();
         sesion.close();
                           
         response.sendRedirect("../../list-tiempo.jsp?Result=true");
}

    private void DeleteTiempo(HttpServletRequest request, HttpServletResponse response,String ID) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
       Session Ss = HibernateUtil.getSessionFactory().openSession();
                         
       int id = Integer.parseInt(ID.toString());
         Modelos.Tiempo e =(Modelos.Tiempo) Ss.load(Modelos.Tiempo.class, id);  
         Ss.beginTransaction();
         Ss.delete(e);
         Ss.getTransaction().commit();
                    
        response.sendRedirect("../../list-tiempo.jsp?Result=true");
    }
    
    private void DeleteTiempoT(HttpServletRequest request, HttpServletResponse response,String ID) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
       Session Ss = HibernateUtil.getSessionFactory().openSession();
                         
       int id = Integer.parseInt(ID.toString());
         Modelos.Tiempo e =(Modelos.Tiempo) Ss.load(Modelos.Tiempo.class, id);  
         Ss.beginTransaction();
         Ss.delete(e);
         Ss.getTransaction().commit();
                    
        response.sendRedirect("../../list-tiempo-tra.jsp?Result=true");
    }
    
private void ListarTiempo(HttpServletRequest request, HttpServletResponse response,String id) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
      
        Session Ss = HibernateUtil.getSessionFactory().openSession();
        
       Query Que = Ss.createQuery("From Tiempo Where idTiempo ='"+id+"'");
       List<Modelos.Tiempo> List = Que.list();
          for (Modelos.Tiempo Obj : List) {
              Modelos.Tiempo ObjResi = new Modelos.Tiempo(Obj.getIdTiempo(),Obj.getAutomovil(), Obj.getFechaActual(), Obj.getDescripcion(), Obj.getDescripcion());
              request.getSession().setAttribute("nombre", ObjResi);
              response.sendRedirect("../../update-tiempo.jsp");
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
        try {
            processRequest(request, response);
        } catch (ParseException ex) {
            Logger.getLogger(ProTiempo.class.getName()).log(Level.SEVERE, null, ex);
        }
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
        try {
            processRequest(request, response);
        } catch (ParseException ex) {
            Logger.getLogger(ProTiempo.class.getName()).log(Level.SEVERE, null, ex);
        }
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
