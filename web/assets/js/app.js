document.getElementById("fechaActual").innerHTML = formatAMPM();
document.getElementById("fechaActual2").innerHTML = formatAMPM();
function formatAMPM() {
    var d = new Date(),
    months = ['enero','febrero','marza','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    console.log(d.getDay());
    return d.getDate()+' de '+months[d.getMonth()]+' '+d.getFullYear();
    }

