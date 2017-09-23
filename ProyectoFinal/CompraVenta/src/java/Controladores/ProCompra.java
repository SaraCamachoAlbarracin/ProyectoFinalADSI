
package Controladores;

import Modelos.Compra;
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

public class ProCompra extends HttpServlet {

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
                  RegistrarCompra(request,response);
                  break;
                  case "createT":
                  RegCompraT(request,response);
                  break;
              case "update":
                   UpdateCompra(request,response);
                  break;
             
              case "delete":
                   DeleteCompra(request,response,Params[4]);
                  break;
                    case "read":
                   TraerDatos(request,response,Params[4]);
                  break;
                   case "valueAuto":
                    getValueTotal(request,response);
                    break;
              default:
                 out.println("su solicitud es invalida");
                  break;
                              
          }
      }
    }

    private void RegistrarCompra(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
        Modelos.Compra Com = new Modelos.Compra();
        DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
        Com.setFechaEntrega((Date) formatter2.parse(request.getParameter("Fecha")));
        Com.setDescuento(request.getParameter("Descuento"));
        Com.setTotal(Float.parseFloat(request.getParameter("Total")));
        Com.setEstado(request.getParameter("Estado"));
        
        int auto = Integer.parseInt(request.getParameter("Automovil"));
        Com.setAutomovil((Modelos.Automovil) Ss.get(Modelos.Automovil.class,auto));
        
          Ss.beginTransaction();
          Ss.save(Com);
          Ss.getTransaction().commit();
          Ss.close();
          
          response.sendRedirect("../page-compra.jsp?Result=true");      
    }
    
     private void RegCompraT(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
        Modelos.Compra Com = new Modelos.Compra();
        DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
        Com.setFechaEntrega((Date) formatter2.parse(request.getParameter("Fecha")));
        Com.setDescuento(request.getParameter("Descuento"));
        Com.setTotal(Float.parseFloat(request.getParameter("Total")));
        Com.setEstado(request.getParameter("Estado"));
        
        int auto = Integer.parseInt(request.getParameter("Automovil"));
        Com.setAutomovil((Modelos.Automovil) Ss.get(Modelos.Automovil.class,auto));
        
          Ss.beginTransaction();
          Ss.save(Com);
          Ss.getTransaction().commit();
          Ss.close();
          
          response.sendRedirect("../page-compra_1.jsp?Result=true");      
    }
    
    private void UpdateCompra(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");    
         Date Fecha = null;
         int id = Integer.parseInt(request.getParameter("Id"));
                   DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
                   Fecha = ((Date)formatter2.parse(request.getParameter("Fecha")));
            
         String Descuento = request.getParameter("Descuento");
         Float Total = Float.parseFloat(request.getParameter("Total"));
         String Estado  = request.getParameter("Estado");
         int auto = Integer.parseInt(request.getParameter("Automovil"));
         SessionFactory sf=HibernateUtil.getSessionFactory();
         Session sesion=sf.openSession();
         sesion.beginTransaction();
        
         Compra Com =(Modelos.Compra)sesion.get(Modelos.Compra.class,id);
         Com.setFechaEntrega(Fecha);
         Com.setDescuento(Descuento);
         Com.setTotal(Total);
         Com.setEstado(Estado);
         Com.setAutomovil((Modelos.Automovil) sesion.get (Modelos.Automovil.class, auto));
         sesion.saveOrUpdate(Com); //actualiza
         sesion.getTransaction().commit();
         
         response.sendRedirect("../list-compra.jsp?Result=true");
}
    private void DeleteCompra(HttpServletRequest request, HttpServletResponse response,String ID) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = HibernateUtil.getSessionFactory().openSession();
                         
        int id = Integer.parseInt(ID.toString());
         Modelos.Compra e =(Modelos.Compra) Ss.load(Modelos.Compra.class, id);  
        Ss.beginTransaction();
         Ss.delete(e);
         Ss.getTransaction().commit();
                    
        response.sendRedirect("../../list-compra.jsp?Result=true");
    }
    
private void TraerDatos(HttpServletRequest request, HttpServletResponse response,String id) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
      
        Session Ss = HibernateUtil.getSessionFactory().openSession();
        
       Query Que = Ss.createQuery("From Compra Where idCompra ='"+id+"'");
       List<Modelos.Compra> List = Que.list();
          for (Modelos.Compra Obj : List) {
              Modelos.Compra ObjResi = new Modelos.Compra(Obj.getIdCompra(), Obj.getAutomovil(),Obj.getFechaEntrega(), Obj.getDescuento(), Obj.getTotal(), Obj.getDescuento());
              request.getSession().setAttribute("nombre", ObjResi);
              response.sendRedirect("../../update-compra.jsp");
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
            Logger.getLogger(ProCompra.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(ProCompra.class.getName()).log(Level.SEVERE, null, ex);
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
