
package Controladores;

import Modelos.Apartar;
import Modelos.Automovil;
import Modelos.HibernateUtil;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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


public class ProApartar extends HttpServlet {

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
        PrintWriter out = response.getWriter();
            String Url = request.getRequestURI();
            String [] Params = Url.split("/");
      
      if(Params.length>=3){
          switch(Params[3])
          {
                case "create":
                  RegistrarApartar(request,response);
                  break;
                  
                  case "nuevo":
                  MtdApartar(request,response);
                  break;
                      
              case "update":
                   UpdateApartar(request,response);
                  break;
             
                case "updatet":
                UpdateApartarT(request,response);
                break;
                       
              case "delete":
                   DeleteApartar(request,response,Params[4]);
                  break;
                  
              case "read":
                   ListarApartar(request,response,Params[4]);
                  break;
                  
              case "readt":
                 ListarApartarT(request,response,Params[4]);
                 break;
              default:
                 out.println("su solicitud es invalida");
                  break;
                              
          }
      }
    }
private void RegistrarApartar(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
        Modelos.Apartar Apa = new Modelos.Apartar();
      
         
        DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
        Apa.setFechaActual((Date)formatter2.parse(request.getParameter("Fecha")));
        Apa.setEstado(request.getParameter("Estado"));
        int usuario = Integer.parseInt(request.getParameter("Usuario"));
        Apa.setUsuario((Modelos.Usuario) Ss.get(Modelos.Usuario.class,usuario));
        int auto= Integer.parseInt(request.getParameter("Automovil"));
        Apa.setAutomovil((Modelos.Automovil) Ss.get(Modelos.Automovil.class,auto));
    
        Automovil Autos= (Automovil) Ss.get(Automovil.class, auto);
        Autos.setEstado("Inactivo");
        
          Ss.beginTransaction();
          Ss.update(Autos);
          Ss.save(Apa);
          Ss.getTransaction().commit();
          Ss.close();
          
          response.sendRedirect("../page-apartar.jsp?Result=true");
          
          
    }
private void MtdApartar(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
        Modelos.Apartar Apa = new Modelos.Apartar();
      
         
        DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
        Apa.setFechaActual((Date)formatter2.parse(request.getParameter("Fecha")));
        Apa.setEstado(request.getParameter("Estado"));
        int usuario = Integer.parseInt(request.getParameter("Usuario"));
        Apa.setUsuario((Modelos.Usuario) Ss.get(Modelos.Usuario.class,usuario));
        int auto= Integer.parseInt(request.getParameter("Automovil"));
        Apa.setAutomovil((Modelos.Automovil) Ss.get(Modelos.Automovil.class,auto));
    
          Automovil Autoss= (Automovil) Ss.get(Automovil.class, auto);
         Autoss.setEstado("Inactivo");
        
          Ss.beginTransaction();
          Ss.update(Autoss);
          Ss.save(Apa);
          Ss.getTransaction().commit();
          Ss.close();
          
          response.sendRedirect("../page-menu-user.jsp?Result=true");
          
          
    }
 private void UpdateApartar(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        
        int id = Integer.parseInt(request.getParameter("Id"));
        Date Fecha = null;
                   DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
                   Fecha = ((Date)formatter2.parse(request.getParameter("Fecha")));
        String Estado  = request.getParameter("Estado");
        
       int Usuario = Integer.parseInt(request.getParameter("Usuario"));
       int Automovil = Integer.parseInt(request.getParameter("Automovil"));
        
        SessionFactory sf=HibernateUtil.getSessionFactory();
        Session sesion=sf.openSession();
        sesion.beginTransaction();
        
        Apartar AP =(Modelos.Apartar)sesion.get(Modelos.Apartar.class,id);
                            
            AP.setFechaActual(Fecha);
            AP.setEstado(Estado);
            AP .setUsuario((Modelos.Usuario) sesion.get (Modelos.Usuario.class, Usuario));
            AP .setAutomovil((Modelos.Automovil) sesion.get (Modelos.Automovil.class, Automovil));
            
        Automovil autos= (Automovil) sesion.get(Automovil.class, Automovil);
        autos.setEstado("Activo"); 
        
         sesion.update(autos);
         sesion.update(AP); //actualiza
         sesion.getTransaction().commit();
         sesion.close();
                           
         response.sendRedirect("../list-apartar.jsp?Result=true");
}
        
         private void UpdateApartarT (HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        
        int id = Integer.parseInt(request.getParameter("Id"));
        Date Fecha = null;
                   DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
                   Fecha = ((Date)formatter2.parse(request.getParameter("Fecha")));
        String Estado  = request.getParameter("Estado");
        
       int Usuario = Integer.parseInt(request.getParameter("Usuario"));
       int Automovil = Integer.parseInt(request.getParameter("Automovil"));
        
        SessionFactory sf=HibernateUtil.getSessionFactory();
        Session sesion=sf.openSession();
        sesion.beginTransaction();
        
        Apartar AP =(Modelos.Apartar)sesion.get(Modelos.Apartar.class,id);
                            
            AP.setFechaActual(Fecha);
            AP.setEstado(Estado);
            AP .setUsuario((Modelos.Usuario) sesion.get (Modelos.Usuario.class, Usuario));
            AP .setAutomovil((Modelos.Automovil) sesion.get (Modelos.Automovil.class, Automovil));
            
        Automovil autos= (Automovil) sesion.get(Automovil.class, Automovil);
        autos.setEstado("Activo"); 
        
         sesion.update(autos);
         sesion.update(AP); //actualiza
         sesion.getTransaction().commit();
         sesion.close();
                           
         response.sendRedirect("../list-apartar_1.jsp?Result=true");
}


    private void DeleteApartar(HttpServletRequest request, HttpServletResponse response,String ID) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        Session Ss = HibernateUtil.getSessionFactory().openSession();
                         
        int id = Integer.parseInt(ID.toString());
         Modelos.Apartar e =(Modelos.Apartar) Ss.load(Modelos.Apartar.class, id);  
        Ss.beginTransaction();
         Ss.delete(e);
         Ss.getTransaction().commit();
                    
        response.sendRedirect("../../list-apartar.jsp?Result=true");
    }
    
 
private void ListarApartar(HttpServletRequest request, HttpServletResponse response,String id) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
      
        Session Ss = HibernateUtil.getSessionFactory().openSession();
        
       Query Que = Ss.createQuery("from Apartar where idApartar ='"+id+"'");
       List<Modelos.Apartar> List = Que.list();
          for (Modelos.Apartar Obj : List) {
              Modelos.Apartar ObjResi = new Modelos.Apartar(Obj.getIdApartar(),Obj.getAutomovil(), Obj.getUsuario(), Obj.getFechaActual(),Obj.getEstado());
              request.getSession().setAttribute("nombre", ObjResi);
              response.sendRedirect("../../update-apartar.jsp");
          }
      }
private void ListarApartarT(HttpServletRequest request, HttpServletResponse response,String id) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
      
        Session Ss = HibernateUtil.getSessionFactory().openSession();
        
       Query Que = Ss.createQuery("from Apartar where idApartar ='"+id+"'");
       List<Modelos.Apartar> List = Que.list();
          for (Modelos.Apartar Obj : List) {
              Modelos.Apartar ObjResi = new Modelos.Apartar(Obj.getIdApartar(),Obj.getAutomovil(), Obj.getUsuario(), Obj.getFechaActual(),Obj.getEstado());
              request.getSession().setAttribute("nombre", ObjResi);
              response.sendRedirect("../../UpdateApartarT.jsp");
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
            Logger.getLogger(ProApartar.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(ProApartar.class.getName()).log(Level.SEVERE, null, ex);
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
