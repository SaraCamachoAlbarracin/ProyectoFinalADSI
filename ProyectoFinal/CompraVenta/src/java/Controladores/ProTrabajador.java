package Controladores;

import Modelos.HibernateUtil;
import Modelos.Trabajador;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;


public class ProTrabajador extends HttpServlet {

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
         
            PrintWriter out = response.getWriter();
            String Url = request.getRequestURI();
            String [] Params = Url.split("/");
      
      if(Params.length>=3){
          switch(Params[3])
          {
              case "create":
                  RegistrarTrabajador(request,response);
                  break;
                  
              case "update":
                   UpdateTrabajador(request,response);
                  break;
                  case "updates":
                   UpTrab(request,response);
                  break;
              case "delete":
                   DeleteTrabajador(request,response,Params[4]);
                  break;
                  
              case "read":
                   ListarTrabajador(request,response,Params[4]);
                  break;
                  
              default:
                 out.println("su solicitud es invalida");
                  break;
                              
          }
      }
    }
     private void RegistrarTrabajador(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
        Modelos.Trabajador Tra = new Modelos.Trabajador();
        Tra.setTipo(request.getParameter("Tipo"));
        Tra.setNombres(request.getParameter("Nombres"));
        Tra.setApellidos(request.getParameter("Apellidos"));
        Tra.setTdocumento(request.getParameter("TipoD"));
        Tra.setDocumento(request.getParameter("Documento"));
        Tra.setCelular(request.getParameter("Celular"));
        Tra.setCiudad(request.getParameter("Ciudad"));
        Tra.setDireccion(request.getParameter("Direccion"));
        Tra.setGenero(request.getParameter("Genero"));
        Tra.setEstado(request.getParameter("Estado"));
        Tra.setContrasena(request.getParameter("Contra"));
        /*
             Relaciones
             F.setCentroformacion((Modelos.Centroformacion) Ss.get (Modelos.Centroformacion.class, "CentroFormacion"));
        */
          Ss.beginTransaction();
          Ss.save(Tra);
          Ss.getTransaction().commit();
          Ss.close();
          
          response.sendRedirect("../page-trabajador.jsp?Result=true");
          
          
    }
    
     private void UpdateTrabajador(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        int id = Integer.parseInt(request.getParameter("Id"));
        String Tipo = request.getParameter("Tipo");
        String Nombres = request.getParameter("Nombres");
        String Apellidos  = request.getParameter("Apellidos");
        String TDocumento = request.getParameter("TDocumento");
        String Documento = request.getParameter("Documento");
        String Celular = request.getParameter("Celular");
        String Ciudad = request.getParameter("Ciudad");
        String Direccion = request.getParameter("Direccion");
        String Genero = request.getParameter("Genero");
        String Estado = request.getParameter("Estado");
        String Contrasena = request.getParameter("Contrasena");
        
        SessionFactory sf=HibernateUtil.getSessionFactory();
        Session sesion=sf.openSession();
        sesion.beginTransaction();
        
        Trabajador Tra=(Modelos.Trabajador)sesion.get(Modelos.Trabajador.class,id);
        
            Tra.setTipo(Tipo);
            Tra.setNombres(Nombres);
            Tra.setApellidos(Apellidos);
            Tra.setTdocumento(TDocumento);
            Tra.setDocumento(Documento);
            Tra.setCelular(Celular);
            Tra.setCiudad(Ciudad);
            Tra.setDireccion(Direccion);
            Tra.setGenero(Genero);
            Tra.setEstado(Estado);
            Tra.setContrasena(Contrasena);
                           
         sesion.update(Tra); //actualiza
         sesion.getTransaction().commit();
         sesion.close();
                            
         response.sendRedirect("../list-trabajador.jsp?Result=true");
}
 private void UpTrab(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        int id = Integer.parseInt(request.getParameter("Id"));
        String Tipo = request.getParameter("Tipo");
        String Nombres = request.getParameter("Nombres");
        String Apellidos  = request.getParameter("Apellidos");
        String TDocumento = request.getParameter("TDocumento");
        String Documento = request.getParameter("Documento");
        String Celular = request.getParameter("Celular");
        String Ciudad = request.getParameter("Ciudad");
        String Direccion = request.getParameter("Direccion");
        String Genero = request.getParameter("Genero");
        String Estado = request.getParameter("Estado");
        String Contrasena = request.getParameter("Contrasena");
        
        SessionFactory sf=HibernateUtil.getSessionFactory();
        Session sesion=sf.openSession();
        sesion.beginTransaction();
        
        Trabajador Tra=(Modelos.Trabajador)sesion.get(Modelos.Trabajador.class,id);
        
            Tra.setTipo(Tipo);
            Tra.setNombres(Nombres);
            Tra.setApellidos(Apellidos);
            Tra.setTdocumento(TDocumento);
            Tra.setDocumento(Documento);
            Tra.setCelular(Celular);
            Tra.setCiudad(Ciudad);
            Tra.setDireccion(Direccion);
            Tra.setGenero(Genero);
            Tra.setEstado(Estado);
            Tra.setContrasena(Contrasena);
                           
         sesion.update(Tra); //actualiza
         sesion.getTransaction().commit();
         sesion.close();
                            
         response.sendRedirect("../Update_Trabs.jsp?Result=true");
}
    private void DeleteTrabajador(HttpServletRequest request, HttpServletResponse response,String ID) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
       
         Session Ss = HibernateUtil.getSessionFactory().openSession();
                         
       int id = Integer.parseInt(ID.toString());
         Modelos.Trabajador e =(Modelos.Trabajador) Ss.load(Modelos.Trabajador.class, id);  
          Ss.beginTransaction();
         Ss.delete(e);
         Ss.getTransaction().commit();
                    
        response.sendRedirect("../../list-trabajador.jsp?Result=true");
    }
    
    private void ListarTrabajador(HttpServletRequest request, HttpServletResponse response,String id) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        PrintWriter out = response.getWriter();
        
         Session Ss = HibernateUtil.getSessionFactory().openSession();
         Query Que = Ss.createQuery("From Trabajador Where idTrabajador='"+id+"'");
          List<Modelos.Trabajador> list = Que.list();
         for (Modelos.Trabajador Obj: list) {
             Trabajador objTrabajador = new Trabajador(Obj.getIdTrabajador(),Obj.getTipo(),Obj.getNombres(),Obj.getApellidos(),Obj.getTdocumento(),Obj.getDocumento(),Obj.getCelular(),Obj.getCiudad(),Obj.getDireccion(),Obj.getGenero(),Obj.getEstado(),Obj.getContrasena());
             request.getSession().setAttribute("nombre", objTrabajador);
             response.sendRedirect("../../update-trabajador.jsp");
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
