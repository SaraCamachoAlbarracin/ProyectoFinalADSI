    /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controladores;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 *
 * @author CAMILO PATARROYO
 */
public class ArchivoImagen extends HttpServlet {

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
        try{
                 PrintWriter out = response.getWriter();
                String urlFile = "C:/Users/CAMILO PATARROYO/Desktop/CompraVenta/web/images/";
            //"C:\\Users\\SEBASTIAN\\Documents\\NetBeansProjects\\Turbo\\web\\imagenes"
                DiskFileItemFactory factory = new DiskFileItemFactory();
                factory.setSizeThreshold(1024);//tamaño maximo de una imagen
                factory.setRepository(new File(urlFile));//asignar lugar donde se guardara el archivo

                ServletFileUpload upload = new ServletFileUpload(factory);

                
                List<FileItem> listPartes = upload.parseRequest(request);

                for(FileItem item : listPartes){
                    File file = new File(urlFile,item.getName());

                    try{
                        item.write(file);
                        
                        String f = String.valueOf(file);
                        request.setAttribute("ruta", f);
                        request.setAttribute("nombre", item.getName());
                        request.getRequestDispatcher("page-automovil.jsp").forward(request, response);
                    }catch(Exception ex){
                        out.print("Error: " + ex.getMessage());
                    }
                }
            }catch(FileUploadException ex){
               
            
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
