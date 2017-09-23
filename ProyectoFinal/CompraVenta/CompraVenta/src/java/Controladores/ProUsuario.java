package Controladores;

import Modelos.HibernateUtil;
import Modelos.Usuario;
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
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;


public class ProUsuario extends HttpServlet {

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
                  RegistrarUsuario(request,response);
                  break;
                  
              case "update":
                   UpdateUsuario(request,response);
                  break;
             
              case "delete":
                   DeleteUsuario(request,response,Params[4]);
                  break;
                  
              case "read":
                   ListarUsuario(request,response,Params[4]);
                  break;
//                  
              default:
                 out.println("su solicitud es invalida");
                  break;
                              
          }
      }
    }
     private void RegistrarUsuario(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
        Modelos.Usuario Usu = new Modelos.Usuario();
        Usu.setNombres(request.getParameter("Nombres"));
        Usu.setApellidos(request.getParameter("Apellidos"));
        Usu.setTdocumento(request.getParameter("TDocumento"));
        Usu.setDocumento(request.getParameter("Documento"));
        Usu.setCelular(request.getParameter("Celular"));
        Usu.setCiudad(request.getParameter("Ciudad"));
        Usu.setDireccion(request.getParameter("Direccion"));
        Usu.setGenero(request.getParameter("Genero"));
        Usu.setNlicencia(request.getParameter("NLicencia"));
        Usu.setEstado(request.getParameter("Estado"));
        Usu.setContrasena(request.getParameter("Contra"));
        /*
             Relaciones
             F.setCentroformacion((Modelos.Centroformacion) Ss.get (Modelos.Centroformacion.class, "CentroFormacion"));
        */
          Ss.beginTransaction();
          Ss.save(Usu);
          Ss.getTransaction().commit();
          Ss.close();
          
          response.sendRedirect("../page-register.html?Result=true");
          
          
    }
    
     private void UpdateUsuario(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        int id = Integer.parseInt(request.getParameter("Id"));
        String Nombres = request.getParameter("Nombres");
        String Apellidos  = request.getParameter("Apellidos");
        String TDocumento = request.getParameter("TipoD");
        String Documento = request.getParameter("Documento");
        String Celular = request.getParameter("Celular");
        String Ciudad = request.getParameter("Ciudad");
        String Direccion = request.getParameter("Direccion");
        String Genero = request.getParameter("Genero");
        String NLicencia = request.getParameter("NLicencia");
        String Estado = request.getParameter("Estado");
        String Contrasena = request.getParameter("Contra");
        
        SessionFactory sf=HibernateUtil.getSessionFactory();
        Session sesion=sf.openSession();
        sesion.beginTransaction();
        
        Usuario US =(Modelos.Usuario)sesion.get(Modelos.Usuario.class,id);
                            
            US.setNombres(Nombres);
            US.setApellidos(Apellidos);
            US.setTdocumento(TDocumento);
            US.setDocumento(Documento);
            US.setCelular(Celular);
            US.setCiudad(Ciudad);
            US.setDireccion(Direccion);
            US.setGenero(Genero);
            US.setNlicencia(NLicencia);
            US.setEstado(Estado);
            US.setContrasena(Contrasena);
                           
         sesion.update(US); //actualiza
         sesion.getTransaction().commit();
         sesion.close();
                           
         response.sendRedirect("../ListUser.jsp?Result=true");
}

    private void DeleteUsuario(HttpServletRequest request, HttpServletResponse response,String ID ) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
      Session Ss = HibernateUtil.getSessionFactory().openSession();
                         
       int id = Integer.parseInt(ID.toString());
         Modelos.Usuario e =(Modelos.Usuario) Ss.load(Modelos.Usuario.class, id);  
      Ss.beginTransaction();
         Ss.delete(e);
         Ss.getTransaction().commit();
                    
        response.sendRedirect("../../ListUser.jsp?Result=true");
    }
    
    private void ListarUsuario(HttpServletRequest request, HttpServletResponse response,String id) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        PrintWriter out = response.getWriter();
        
         Session Ss = HibernateUtil.getSessionFactory().openSession();
         Query Que = Ss.createQuery("From Usuario Where idCliente='"+id+"'");
          List<Modelos.Usuario> list = Que.list();
         for (Modelos.Usuario Obj: list) {
             Usuario objCliente = new Usuario(Obj.getIdCliente(),Obj.getNombres(), Obj.getApellidos(), Obj.getTdocumento(), Obj.getDocumento(), Obj.getCelular(), Obj.getCiudad(), Obj.getDireccion(), Obj.getGenero(), Obj.getNlicencia(), Obj.getEstado(),Obj.getContrasena());
             request.getSession().setAttribute("nombre", objCliente);
             response.sendRedirect("../../update-usuario.jsp");
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
