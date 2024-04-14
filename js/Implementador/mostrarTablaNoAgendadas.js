function mostrarTablaNoAgendadas(nombreSistema) {
    $.ajax({
        type: "POST",
        url: "sistema.aspx/ObtenerHistoriasNoAgendadas",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({ sistema: nombreSistema }),
        success: function(response) {
            console.log(response); // Verifica la respuesta del servidor
            var data = JSON.parse(response.d);
            var tableBody = $('#tblReporteSinAgendar tbody');
            tableBody.empty();
            $.each(data, function(i, item) {
                var row = $('<tr>').append(
                    $('<td>').text(item.folio),
                    $('<td>').text(item.descripcion),
                    $('<td>').text(item.nomGrupo),
                    $('<td>').text(item.puntosDeHistoria),
                    $('<td>').text(item.fechaPropuestaOwner),
                    fila.append($("<td>").html("<input type='checkbox'>")
                    ));
                tableBody.append(row);
            });
        },
        failure: function(response) {
            alert(response.d);
        }
    });
}
