
package Controladores;

import Modelos.Automovil;
import Modelos.HibernateUtil;
import java.io.File;
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
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

public class ProAutomovil extends HttpServlet {

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
                  RegistrarAuto(request,response);
                  break;
                      
               case "createc":
               RegistrarAutoC(request,response);
               break;
                  
              case "update":
                   UpdateAuto(request,response);
                  break;
             
              case "delete":
                   DeleteAuto(request,response,Params[4]);
                  break;
                  
              case "read":
                   ListarAuto(request,response,Params[4]);
                  break;
                  
                  case "leer":
                   MtdApartar(request,response,Params[4]);
                  break;
                      
              default:
                 out.println("su solicitud es invalida");
                  break;
                              
          }
      }
    }
     private void RegistrarAuto(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
        Modelos.Automovil Aut = new Modelos.Automovil();
        Date Fecha=null;
        try{
        DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
        Fecha = ((Date)formatter2.parse(request.getParameter("Fecha")));
        }
        catch(Exception e){ System.out.println("Error"+e);}
        Aut.setFechaEntrada(Fecha);
        Aut.setTipo(request.getParameter("Tipo"));
        Aut.setPlaca(request.getParameter("Placa"));
        Aut.setColor(request.getParameter("Color"));
        Aut.setModelo(Integer.parseInt(request.getParameter("Modelo")));
        Aut.setMarca(request.getParameter("Marca"));
        Aut.setKilometraje(request.getParameter("Kilometraje"));
        Aut.setCiudad(request.getParameter("Ciudad"));
        Aut.setDescripcion(request.getParameter("Descripcion"));
       Aut.setSeguro(request.getParameter("Seguro"));
        Aut.setSoat(request.getParameter("Soat"));
        Aut.setImpuestos(request.getParameter("Impuestos"));
        Aut.setValor(Float.parseFloat(request.getParameter("Valor")));
        Aut.setFoto(request.getParameter("Foto"));
        Aut.setEstado(request.getParameter("Estado"));
        int Cli = Integer.parseInt(request.getParameter("Usuario"));
        Aut.setUsuario((Modelos.Usuario) Ss.get(Modelos.Usuario.class,Cli));
        
          Ss.beginTransaction();
          Ss.save(Aut);
          Ss.getTransaction().commit();
          Ss.close();
          
          response.sendRedirect("../page-automovil.jsp?Result=true");
          
          
    }
     
     private void RegistrarAutoC(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
        
        Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
        Modelos.Automovil Aut = new Modelos.Automovil();
        Date Fecha=null;
        try{
        DateFormat formatter2= new SimpleDateFormat("Y-M-D");       
        Fecha = ((Date)formatter2.parse(request.getParameter("Fecha")));
        }
        catch(Exception e){ System.out.println("Error"+e);}
        Aut.setFechaEntrada(Fecha);
        Aut.setTipo(request.getParameter("Tipo"));
        Aut.setPlaca(request.getParameter("Placa"));
        Aut.setColor(request.getParameter("Color"));
        Aut.setModelo(Integer.parseInt(request.getParameter("Modelo")));
        Aut.setMarca(request.getParameter("Marca"));
        Aut.setKilometraje(request.getParameter("Kilometraje"));
        Aut.setCiudad(request.getParameter("Ciudad"));
        Aut.setDescripcion(request.getParameter("Descripcion"));
       Aut.setSeguro(request.getParameter("Seguro"));
        Aut.setSoat(request.getParameter("Soat"));
        Aut.setImpuestos(request.getParameter("Impuestos"));
        Aut.setValor(Double.parseDouble(request.getParameter("Valor")));
        Aut.setFoto(request.getParameter("Foto"));
        Aut.setEstado(request.getParameter("Estado"));
        int usuario = Integer.parseInt(request.getParameter("Usuario"));
        Aut.setUsuario((Modelos.Usuario) Ss.get(Modelos.Usuario.class,usuario));
        
          Ss.beginTransaction();
          Ss.save(Aut);
          Ss.getTransaction().commit();
          Ss.close();
          
          response.sendRedirect("../page-cars.jsp?Result=true");
          
    }
    
     private void UpdateAuto(HttpServletRequest request, HttpServletResponse response) 
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
        String Tipo = request.getParameter("Tipo");
        String Placa = request.getParameter("Placa");
        String Color = request.getParameter("Color");
        int Modelo  =Integer.parseInt(request.getParameter("Modelo"));
        String Marca = request.getParameter("Marca");
        String Kilometraje = request.getParameter("Kilometraje");
        String Ciudad = request.getParameter("Ciudad");
        String Descripcion = request.getParameter("Descripcion");
       String Seguro=request.getParameter("Seguro");
        String Soat=request.getParameter("Soat");
        String Impuestos = request.getParameter("Impuestos");
        Double Valor = Double.parseDouble(request.getParameter("Valor"));
        String Foto=request.getParameter("Foto");
        String Estado = request.getParameter("Estado");
           int usuario = Integer.parseInt(request.getParameter("Usuario"));
        
        SessionFactory sf=HibernateUtil.getSessionFactory();
        Session sesion=sf.openSession();
        sesion.beginTransaction();
        
        Automovil Aut=(Modelos.Automovil)sesion.get(Modelos.Automovil.class,id);
        
            Aut.setFechaEntrada(Fecha);
            Aut.setTipo(Tipo);
            Aut.setPlaca(Placa);
            Aut.setColor(Color);
            Aut.setModelo(Modelo);
            Aut.setMarca(Marca);
            Aut.setKilometraje(Kilometraje);
            Aut.setCiudad(Ciudad);
            Aut.setDescripcion(Descripcion);
            Aut.setSeguro(Seguro);
            Aut.setSoat(Soat);
            Aut.setImpuestos(Impuestos);
            Aut.setValor(Valor);
            Aut.setFoto(Foto);
            Aut.setEstado(Estado);
           Aut .setUsuario((Modelos.Usuario) sesion.get (Modelos.Usuario.class, usuario));
                           
         sesion.saveOrUpdate(Aut); //actualiza
         sesion.getTransaction().commit();
         sesion.close();
                           
         response.sendRedirect("../list-auto.jsp?Result=true");
}

    private void DeleteAuto(HttpServletRequest request, HttpServletResponse response,String ID) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
         Session Ss = HibernateUtil.getSessionFactory().openSession();
                         
          int id = Integer.parseInt(ID.toString());
         Modelos.Automovil e =(Modelos.Automovil) Ss.load(Modelos.Automovil.class, id);  
          Ss.beginTransaction();
         Ss.delete(e);
         Ss.getTransaction().commit();
                    
        response.sendRedirect("../../list-automovil.jsp?Result=true");
    }
    
    private void ListarAuto(HttpServletRequest request, HttpServletResponse response,String id) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        
         Session Ss = HibernateUtil.getSessionFactory().openSession();
         Query Que = Ss.createQuery("From Automovil Where idAutomovil='"+id+"'");
          List<Modelos.Automovil> list = Que.list();
         for (Modelos.Automovil Obj: list) {
             Automovil objTrabajador = new Automovil(Obj.getIdAutomovil(),Obj.getUsuario(),Obj.getFechaEntrada(),Obj.getTipo(),Obj.getPlaca(),Obj.getColor(),Obj.getModelo(),Obj.getMarca(),Obj.getKilometraje(),Obj.getCiudad(),Obj.getDescripcion(),Obj.getSeguro(),Obj.getSoat(),Obj.getImpuestos(),Obj.getValor(),Obj.getFoto(),Obj.getEstado());
             request.getSession().setAttribute("nombre", objTrabajador);
             response.sendRedirect("../../update-automovil.jsp");
         }
          
}

    private void MtdApartar(HttpServletRequest request, HttpServletResponse response,String id) 
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        
         Session Ss = HibernateUtil.getSessionFactory().openSession();
         Query Que = Ss.createQuery("From Automovil Where idAutomovil='"+id+"'");
          List<Modelos.Automovil> list = Que.list();
         for (Modelos.Automovil Obj: list) {
             Automovil objTrabajador = new Automovil(Obj.getIdAutomovil(),Obj.getUsuario(),Obj.getFechaEntrada(),Obj.getTipo(),Obj.getPlaca(),Obj.getColor(),Obj.getModelo(),Obj.getMarca(),Obj.getKilometraje(),Obj.getCiudad(),Obj.getDescripcion(),Obj.getSeguro(),Obj.getSoat(),Obj.getImpuestos(),Obj.getValor(),Obj.getFoto(),Obj.getEstado());
             request.getSession().setAttribute("nombre", objTrabajador);
             response.sendRedirect("../../page-apartar-user.jsp");
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
            Logger.getLogger(ProAutomovil.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(ProAutomovil.class.getName()).log(Level.SEVERE, null, ex);
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

    private void RegAutos(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException, ParseException {
        response.setContentType("text/html;charset=UTF-8");
         if (!ServletFileUpload.isMultipartContent(request)) 
         {
          response.sendError(HttpServletResponse.SC_BAD_REQUEST,"Multipart content expected!");
          }
        Session Ss = Modelos.HibernateUtil.getSessionFactory().openSession();
        Modelos.Automovil Aut = new Modelos.Automovil();
        try
        {
                String urlFile = "C:\\Users\\CAMILO PATARROYO\\Desktop\\CompraVenta\\web\\Imagenes";
                DiskFileItemFactory factory = new DiskFileItemFactory();
                factory.setSizeThreshold(1024);
                factory.setRepository(new File(urlFile));
                ServletFileUpload upload = new ServletFileUpload(factory);
                List<FileItem> listPartes = upload.parseRequest(request);
                for(FileItem item : listPartes){
                    File file = new File(urlFile,item.getName());
                        item.write(file);
                        String f = String.valueOf(file);
                        request.setAttribute("ruta", f);
                        request.setAttribute("nombre", item.getName());
                }
        }
        catch(FileUploadException  e)
        {
             System.out.println("Error FileUploadException: "+e.getMessage());
             throw new ServletException(e);
        }
        catch(Exception e)
        {
            System.out.println("Error"+e);
        }
            DateFormat formatter2= new SimpleDateFormat("Y-M-D");  
            Aut.setFechaEntrada((Date)formatter2.parse(request.getParameter("Fecha")));
            Aut.setTipo(request.getParameter("Tipo"));
            Aut.setPlaca(request.getParameter("Placa"));
            Aut.setColor(request.getParameter("Color"));
            Aut.setModelo(Integer.parseInt(request.getParameter("Modelo")));
            Aut.setMarca(request.getParameter("Marca"));
            Aut.setKilometraje(request.getParameter("Kilometraje"));
            Aut.setCiudad(request.getParameter("Ciudad"));
            Aut.setDescripcion(request.getParameter("Descripcion"));
            Aut.setSeguro(request.getParameter("Seguro"));
            Aut.setSoat(request.getParameter("Soat"));
            Aut.setImpuestos(request.getParameter("Impuestos"));
            Aut.setValor(Double.parseDouble(request.getParameter("Valor")));
            Aut.setFoto(request.getParameter("Foto"));
            Aut.setEstado(request.getParameter("Estado"));
            int Cli = Integer.parseInt(request.getParameter("Id"));
            Aut.setUsuario((Modelos.Usuario) Ss.get(Modelos.Usuario.class,Cli));

          Ss.beginTransaction();
          Ss.save(Aut);
          Ss.getTransaction().commit();
          Ss.close();
          response.sendRedirect("../page-automovil.jsp?Result=true");
    }
    
}
