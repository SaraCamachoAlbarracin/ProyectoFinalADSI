
<%@page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@page import="org.apache.commons.fileupload.FileItemFactory"%>
<%@page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@page import="org.apache.commons.fileupload.FileItem"%>
<%@page import="java.io.*"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
        /*FileItemFactory es una interfaz para crear FileItem*/
        FileItemFactory file_factory = new DiskFileItemFactory();
 
        /*ServletFileUpload esta clase convierte los input file a FileItem*/
        ServletFileUpload servlet_up = new ServletFileUpload(file_factory);
        /*sacando los FileItem del ServletFileUpload en una lista */
        List items = servlet_up.parseRequest(request);
 
        for(int i=0;i<items.size();i++){
            /*FileItem representa un archivo en memoria que puede ser pasado al disco duro*/
            FileItem item = (FileItem) items.get(i);
            /*item.isFormField() false=input file; true=text field*/
            if (! item.isFormField()){
                /*cual sera la ruta al archivo en el servidor*/
                File archivo_server = new File(this.getServletContext().getRealPath("/images")+item.getName());
                /*y lo escribimos en el servido*/
                item.write(archivo_server);
                out.print("Nombre --> " + item.getName() );
                out.print("<br> Tipo --> " + item.getContentType());
                out.print("<br> tamaño --> " + (item.getSize()/1240)+ "KB");
                out.print("<br>");
            }
        }
%>