$(document).ready(function () {
    cargarClientes();

    $("#selectclientes").change(function () {
        //CAPTURAMOS EL VALUE QUE CONTIENE EL ID
        var id = $(this).val();
        $.get("xml/ClientesXML.xml", function (data) {
            var filtro = "CLIENTE[IDCLIENTE=" + id + "]";
            var cliente = $(data).find(filtro).first();
            var nombre = cliente.find("NOMBRE").text();
            var email = cliente.find("EMAIL").text();
            var web = cliente.find("PAGINAWEB").text();
            var imagen = cliente.find("IMAGENCLIENTE").text();
            var html = "<h1 style='color:blue'>" + nombre + "</h1>";
            html += "<h2 style='color:fuchsia'>" + email + "</h2>";
            html += "<a href='" + web + "'>" + web + "</a><br/>";
            html += "<img src='" + imagen + "'/>";
            $("#resultado").html(html);
        });
    });
});

function cargarClientes() {
    $.get("xml/ClientesXML.xml", function (data) {
        var clientes = $(data).find("CLIENTE");
        clientes.each(function () {
            var id = $(this).attr("IDCLIENTE");
            var nombre =
                $(this).find("NOMBRE").first().text();
            var option = $("<option>", {
                "text": nombre, "value": id
            });
            $("#selectclientes").append(option);
        });
    });
}
