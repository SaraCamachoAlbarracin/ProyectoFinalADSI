package Controladores;

import Modelos.Automovil;
import Modelos.HibernateUtil;
import Modelos.Venta;
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


public class ProVenta extends HttpServlet {

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
                    RegistrarVenta(request,response);
                    break;       
                      case "createV":
                    RegVentaV(request,response);
                    break;        
                  case "update":
                    UpdateVenta(request,response);
                    break;
                  case "delete":
                   DeleteVenta(request,response,Params[4]);
                   break;
                  case "read":
                    ListarVenta(request,response,Params[4]);
                    break;
                  case "valueAuto":
                    getValueTotal(request,response);
                    break;
                   case "valueTipo":
                    getValueTipo(request,response);
                    break;
                  default:
                    out.println("su solicitud es invalida");
                  break;
                              
          }
      }
    }
 private void RegistrarVenta(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
        Modelos.Venta Ven = new Modelos.Venta();
        
        Ven.setDescuento(request.getParameter("Descuento"));
        Ven.setTotal(Float.parseFloat(request.getParameter("Total")));
        Ven.setDescripcion(request.getParameter("Descripcion"));
            DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
            Ven.setFechaEntrega((Date) formatter2.parse(request.getParameter("Fecha")));
            
         int usuario = Integer.parseInt(request.getParameter("Usuario"));
         int auto = Integer.parseInt(request.getParameter("Automovil"));
         int trabajador = Integer.parseInt(request.getParameter("Trabajador"));
         
        Ven.setUsuario((Modelos.Usuario) Ss.get(Modelos.Usuario.class,usuario));
        Ven.setAutomovil((Modelos.Automovil) Ss.get(Modelos.Automovil.class,auto));
        Ven.setTrabajador((Modelos.Trabajador) Ss.get(Modelos.Trabajador.class,trabajador));
        
        
        Automovil autos= (Automovil) Ss.get(Automovil.class, auto);
        autos.setEstado("Vendido");
        
        Modelos.Apartar  apart= (Modelos.Apartar) Ss.get(Modelos.Apartar.class, auto);
        apart.setEstado("Vendido");
            
          Ss.beginTransaction();
          Ss.update(autos);
          Ss.update(apart);
          Ss.save(Ven);
          Ss.getTransaction().commit();
          Ss.close();
          //response.getWriter().write(request.getParameter("Total"));
          response.sendRedirect("../page-venta.jsp?Result=true");      
    }
 
 private void RegVentaV(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
        Modelos.Venta Ven = new Modelos.Venta();
        
        Ven.setDescuento(request.getParameter("Descuento"));
        Ven.setTotal(Float.parseFloat(request.getParameter("Total")));
        Ven.setDescripcion(request.getParameter("Descripcion"));
            DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
            Ven.setFechaEntrega((Date) formatter2.parse(request.getParameter("Fecha")));
            
         int usuario = Integer.parseInt(request.getParameter("Usuario"));
         int auto = Integer.parseInt(request.getParameter("Automovil"));
         int trabajador = Integer.parseInt(request.getParameter("Trabajador"));
         
        Ven.setUsuario((Modelos.Usuario) Ss.get(Modelos.Usuario.class,usuario));
        Ven.setAutomovil((Modelos.Automovil) Ss.get(Modelos.Automovil.class,auto));
        Ven.setTrabajador((Modelos.Trabajador) Ss.get(Modelos.Trabajador.class,trabajador));
        
        Automovil Autos= (Automovil) Ss.get(Automovil.class, auto);
        Autos.setEstado("Vendido");
        
        Modelos.Apartar  apar= (Modelos.Apartar) Ss.get(Modelos.Apartar.class, auto);
        apar.setEstado("Vendido");
        
          Ss.beginTransaction();
          Ss.update(apar);
          Ss.update(Autos);
          Ss.save(Ven);
          Ss.getTransaction().commit();
          Ss.close();
          
          response.sendRedirect("../page-venta_1.jsp?Result=true");      
    }
 
 private void UpdateVenta(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");    
         Date Fecha = null;
         int id = Integer.parseInt(request.getParameter(" "));
                   DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
                   Fecha = ((Date)formatter2.parse(request.getParameter("Fecha")));
            
         String Descuento = request.getParameter("Descuento");
         Float Total = Float.parseFloat(request.getParameter("Total"));
         String Descripcion  = request.getParameter("Descripcion");
         int usuario = Integer.parseInt(request.getParameter("Usuario"));
         int auto = Integer.parseInt(request.getParameter("Auto"));
         int trabajador = Integer.parseInt(request.getParameter("Trabajador"));
           
         SessionFactory sf=HibernateUtil.getSessionFactory();
         Session sesion=sf.openSession();
         sesion.beginTransaction();
        
         Venta Com =(Modelos.Venta)sesion.get(Modelos.Venta.class,id);
     
         Com.setDescuento(Descuento);
         Com.setTotal(Total);
         Com.setDescripcion(Descripcion);
         Com.setFechaEntrega(Fecha);
         Com.setUsuario((Modelos.Usuario) sesion.get (Modelos.Usuario.class, usuario));
         Com.setAutomovil((Modelos.Automovil) sesion.get (Modelos.Automovil.class, auto));
         Com.setTrabajador((Modelos.Trabajador) sesion.get (Modelos.Trabajador.class, trabajador));
        
         sesion.saveOrUpdate(Com); //actualiza
         sesion.getTransaction().commit();
                           
         response.sendRedirect("../../list-venta.jsp?Result=true");
}
 
  private void DeleteVenta(HttpServletRequest request, HttpServletResponse response,String ID) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = HibernateUtil.getSessionFactory().openSession();
                         
       int id = Integer.parseInt(ID.toString());
         Modelos.Venta e =(Modelos.Venta) Ss.load(Modelos.Venta.class, id);  
         Ss.beginTransaction();
         Ss.delete(e);
         Ss.getTransaction().commit();
                    
        response.sendRedirect("../../list-venta.jsp?Result=true");
    }
  
  private void ListarVenta(HttpServletRequest request, HttpServletResponse response,String id) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
      
        Session Ss = HibernateUtil.getSessionFactory().openSession();
        
       Query Que = Ss.createQuery("From Venta Where idVenta ='"+id+"'");
       List<Modelos.Venta> List = Que.list();
          for (Modelos.Venta Obj : List) {
             Modelos.Venta ObjResi = new Modelos.Venta(Obj.getIdVenta(),Obj.getAutomovil(), Obj.getTrabajador(), Obj.getUsuario(), Obj.getDescuento(), Obj.getTotal(), Obj.getDescripcion(), Obj.getFechaEntrega());
              request.getSession().setAttribute("nombre", ObjResi);
              response.sendRedirect("../../update-venta.jsp");
          }
      }
  
  public void getValueTotal(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException {
      
        response.setContentType("text/html;charset=UTF-8");
        int idAuto = Integer.parseInt(request.getParameter("idAuto"));
        Session Ss = HibernateUtil.getSessionFactory().openSession();
        
       Query Que = Ss.createQuery("From Automovil Where idAutomovil = '"+idAuto+"'");
       List<Modelos.Automovil> List = Que.list();

          for (Modelos.Automovil Obj : List) {
              response.getWriter().write(String.valueOf((double) Obj.getValor()));
          }
      }
  public void getValueTipo(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException {
      
        response.setContentType("text/html;charset=UTF-8");
        int idTipo = Integer.parseInt(request.getParameter("Tipo"));
        Session Ss = HibernateUtil.getSessionFactory().openSession();
        
       Query Que = Ss.createQuery("From Trabajador Where Tipo = '"+idTipo+"'");
       List<Modelos.Trabajador> List = Que.list();

          for (Modelos.Trabajador Obj : List) {
              response.getWriter().write (Obj.getTipo());
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
            Logger.getLogger(ProVenta.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(ProVenta.class.getName()).log(Level.SEVERE, null, ex);
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
