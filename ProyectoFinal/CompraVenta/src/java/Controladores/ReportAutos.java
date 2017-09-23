/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controladores;

import Modelos.HibernateUtil;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Image;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hibernate.Query;
import org.hibernate.Session;

/**
 *
 * @author CAMILO PATARROYO
 */
public class ReportAutos extends HttpServlet {

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
        response.setContentType("application/pdf");
        OutputStream out = response.getOutputStream();
        
        try {
            
            Calendar fecha = new GregorianCalendar();
            
            int año =fecha.get(Calendar.YEAR);
            int mes =fecha.get(Calendar.MONTH);
            int dia =fecha.get(Calendar.DAY_OF_MONTH);
            
            Session Ss = HibernateUtil.getSessionFactory().openSession();
            Query Que = Ss.createQuery("from Automovil");
            
            
            try {
                Document Doc = new Document(PageSize.LETTER,10,4,4,10);
                PdfWriter.getInstance(Doc, out);
                
                Doc.open();
                
                Paragraph ParC = new Paragraph();
                Font titulo = new Font(Font.FontFamily.TIMES_ROMAN,16,Font.BOLD,BaseColor.RED);
                ParC.add(new Phrase("Reporte Autos y Motos Registrados", titulo));
                Image imagen = Image.getInstance("C:/Users/CAMILO PATARROYO/Desktop/CompraVenta/web/images/logot.jpg");
                imagen.setAlignment(Element.ALIGN_CENTER);
                ParC.setAlignment(Element.ALIGN_CENTER);
                ParC.add(new Phrase(Chunk.NEWLINE));
                ParC.add(new Phrase(Chunk.NEWLINE));
                Doc.add(imagen);
                Doc.add(ParC);
                
                
                Paragraph ParB = new Paragraph();
                Font des = new Font(Font.FontFamily.HELVETICA,12,Font.NORMAL,BaseColor.BLACK);
                ParB.add(new Phrase(String.valueOf(año+"/"+mes+"/"+dia), des));
                ParB.setAlignment(Element.ALIGN_CENTER);
                ParB.add(new Phrase(Chunk.NEWLINE));
                ParB.add(new Phrase(Chunk.NEWLINE));
                Doc.add(ParB);
               
                
               
                
                PdfPTable Tbla = new PdfPTable(8);
                PdfPCell C1 = new PdfPCell(new Paragraph("Fecha",FontFactory.getFont("Arial",11,Font.NORMAL,BaseColor.BLACK)));
                PdfPCell C2 = new PdfPCell(new Paragraph("Tipo",FontFactory.getFont("Arial",11,Font.NORMAL,BaseColor.BLACK)));
                PdfPCell C3 = new PdfPCell(new Paragraph("Placa",FontFactory.getFont("Arial",11,Font.NORMAL,BaseColor.BLACK)));
                PdfPCell C4 = new PdfPCell(new Paragraph("Color",FontFactory.getFont("Arial",11,Font.NORMAL,BaseColor.BLACK)));
                PdfPCell C5 = new PdfPCell(new Paragraph("Modelo",FontFactory.getFont("Arial",11,Font.NORMAL,BaseColor.BLACK)));
                PdfPCell C6 = new PdfPCell(new Paragraph("Marca",FontFactory.getFont("Arial",11,Font.NORMAL,BaseColor.BLACK)));
                PdfPCell C7 = new PdfPCell(new Paragraph("Kilometraje",FontFactory.getFont("Arial",11,Font.NORMAL,BaseColor.BLACK)));
                PdfPCell C8 = new PdfPCell(new Paragraph("Ciudad",FontFactory.getFont("Arial",11,Font.NORMAL,BaseColor.BLACK)));
//                PdfPCell C9 = new PdfPCell(new Paragraph("Impuestos",FontFactory.getFont("Arial",11,Font.NORMAL,BaseColor.BLACK)));
//                PdfPCell C10 = new PdfPCell(new Paragraph("Valor",FontFactory.getFont("Arial",11,Font.NORMAL,BaseColor.BLACK)));  
//                PdfPCell C11 = new PdfPCell(new Paragraph("Usuario",FontFactory.getFont("Arial",11,Font.NORMAL,BaseColor.BLACK)));
                  
                  
                Tbla.addCell(C1);
                Tbla.addCell(C2);
                Tbla.addCell(C3);
                Tbla.addCell(C4);
                Tbla.addCell(C5);
                Tbla.addCell(C6);
                Tbla.addCell(C7);
                Tbla.addCell(C8);
//                Tbla.addCell(C9);
//                Tbla.addCell(C10);
//                Tbla.addCell(C11);
                
                
                List<Modelos.Automovil> list = Que.list();
            
       for(Modelos.Automovil A :list){
           
           Tbla.addCell(String.valueOf(A.getFechaEntrada()));
           Tbla.addCell(A.getTipo());
           Tbla.addCell(A.getPlaca());
           Tbla.addCell(A.getColor());
           Tbla.addCell(String.valueOf(A.getModelo()));
           Tbla.addCell(A.getMarca());
           Tbla.addCell(A.getKilometraje());  
           Tbla.addCell(A.getCiudad());
//           Tbla.addCell(A.getImpuestos());
//           Tbla.addCell(String.valueOf(A.getValor()));
//           Tbla.addCell(A.getUsuario().getNombres());

       }
                Doc.add(Tbla);
                
                   Paragraph ParF = new Paragraph();
                   Font ffont = new Font(Font.FontFamily.UNDEFINED,10,Font.ITALIC);
                   ParF.add(new Phrase("ADSI © 2017     Para mas información: tradingcars@hotmail.com",ffont));
                   ParF.setAlignment(Element.ALIGN_CENTER);
                    Doc.add(ParF);
                    
                Doc.close();
                
                
            } catch (Exception e) {
            }
        } catch (Exception e) {
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
