<%
    Modelos.Usuario ñ = (Modelos.Usuario)request.getSession().getAttribute("nombre");

%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
  <form  method="post" action="Cliente/create" id="RU" >
                        <div class="form-group mb-3">
                                            <label for="postal-code">Nombres</label>
                                            <input type="text" name="Nombres" style="width:450px;" class="form-control"  id="postal-code" placeholder="Ingrese Nombres" value="<%=ñ.getNombres()%>"/>
                                        </div>
                        <div class="form-group mb-3">
                                            <label for="postal-code">Apellidos</label>
                                            <input type="text" name="Apellidos" style="width:450px;" class="form-control"  id="postal-code" placeholder="Ingrese Apellidos" value="<%=ñ.getApellidos()%>"/>
                                        </div>
                        
                        <div class="row" style="padding-left: 15px;">

                                         <div class="postal-code">
                                            <label for="ccmonth">Tipo Documento</label>
                                            <select name="TipoD" class="form-control" id="ccmonth">
                                                <option value="0">Seleccione..</option>
                                                    <option value="CC">C.C</option>
                                                    <option value="TI">T.I</option>
                                                    <option value="CE">C.E</option>
                                                </select>
                                            </div>

                                        <div class="form-group col-sm-4">
                                            <label for="postal-code">Documento</label>
                                            <input type="text" name="Documento" style="width:200px;" class="form-control"  id="postal-code" placeholder="Ingrese Documento">
                                        </div>

                        </div>