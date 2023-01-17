const tableEconomic = document.getElementById('tableEconomic')
const tableFinance = document.getElementById('tableFinance')
const tablePE = document.getElementById('tablePE')
const tdBCE = document.getElementById('td-BCE')
const tdVANE = document.getElementById('td-VANE')
const tdTIRE = document.getElementById('td-TIRE')
const tdBCF = document.getElementById('td-BCF')
const tdVANF = document.getElementById('td-VANF')
const tdTIRF = document.getElementById('td-TIRF')
const tdCF = document.getElementById('td-CF')
const tdCV = document.getElementById('td-CV')
const tdCT = document.getElementById('td-CT')
const tdIT = document.getElementById('td-IT')
const tdPE = document.getElementById('td-PE')

    
const obtener_indicadores = async (Q) => {
try {
    const result = await axios ({
        method: 'get',
        url:`/updateQ/${Q}`,
        responseType: 'json'
    })
    .then ((resp) => {

        const indicadores = resp.data         

        //ocultar span loading de la tabla
        tableEconomic.getElementsByTagName('span')[0].classList.add('d-none')
        tableFinance.getElementsByTagName('span')[0].classList.add('d-none')
        tablePE.getElementsByTagName('span')[0].classList.add('d-none')
        
        //mostrar tabla
        tableEconomic.getElementsByTagName('table')[0].classList.remove('d-none')
        tableFinance.getElementsByTagName('table')[0].classList.remove('d-none')
        tablePE.getElementsByTagName('table')[0].classList.remove('d-none')

        //cargar datos en la tabla
        tdBCE.innerHTML = (indicadores.BCE).toFixed(2)
        tdVANE.innerHTML = `S/ ${(indicadores.VANE).toFixed(2)}`
        tdTIRE.innerHTML = `${(indicadores.TIRE*100).toFixed(2)} %`
        tdBCF.innerHTML = (indicadores.BCF).toFixed(2)
        tdVANF.innerHTML = `S/ ${(indicadores.VANF).toFixed(2)}`
        tdTIRF.innerHTML = `${(indicadores.TIRF*100).toFixed(2)} %`
        tdCF.innerHTML = `S/ ${(indicadores.CF).toFixed(2)}`
        tdCV.innerHTML = `S/ ${(indicadores.CV).toFixed(2)}`
        tdCT.innerHTML = `S/ ${(indicadores.CT).toFixed(2)}`
        tdIT.innerHTML = `S/ ${(indicadores.IT).toFixed(2)}`
        tdPE.innerHTML = `${(indicadores.PE).toFixed(2)}`
    })


} catch (error) {
    console.log(error)
}
}

//cuando el formulario se envie
const input = document.getElementById('input')
const button = document.getElementById('button')

// se haga click en el boton o precione enter en el input

function cargarData () {
    //seleccionar la tabla que esta dentro de la clase table-responsive
    tableEconomic.getElementsByTagName('table')[0].classList.add('d-none')
    tableFinance.getElementsByTagName('table')[0].classList.add('d-none')
    tablePE.getElementsByTagName('table')[0].classList.add('d-none')


    //mostrar span de carga
    tableEconomic.getElementsByTagName('span')[0].classList.remove('d-none')
    tableFinance.getElementsByTagName('span')[0].classList.remove('d-none')
    tablePE.getElementsByTagName('span')[0].classList.remove('d-none')

    

    //obtener el valor del input
    const Q = input.value
    obtener_indicadores(Q)
    calcDatos(Q)    
}

button.addEventListener('click', () => {
    cargarData()
})
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        cargarData()
    }

})

function calcDatos(F) {

    A = (55*F).toFixed(2);
    B = (164.85*F).toFixed(2);
    C = (142.86*F).toFixed(2);
    D = (76.94*F).toFixed(2);
    E = (141.86*F).toFixed(2);
    G = (45.43*F).toFixed(2);
    H = (31.51*F).toFixed(2);
    I = (45.43*F).toFixed(2);
    Qs = (241.124*F).toFixed(2);
    Mac = (778.7*F).toFixed(2);
    FlujoAire = (17*F).toFixed(2);
    Wex = (23.44*F).toFixed(2);
    Wde = (86.1*F).toFixed(2);
    Wt = (109.54*F).toFixed(2);


    document.getElementById("value-A").innerHTML = A + " kg/h";
    document.getElementById("td-A").innerHTML = A + " kg/h"; 
    document.getElementById("value-B").innerHTML = B+ " kg/h";
    document.getElementById("td-B").innerHTML = B+ " kg/h";
    document.getElementById("value-C").innerHTML = C+ " kg/h";
    document.getElementById("td-C").innerHTML = C+ " kg/h";
    document.getElementById("value-D").innerHTML = D+ " kg/h";
    document.getElementById("td-D").innerHTML = D+ " kg/h";
    document.getElementById("value-E").innerHTML = E+ " kg/h";
    document.getElementById("td-E").innerHTML = E + " kg/h";
    document.getElementById("td-F").innerHTML = F + " kg/h";
    document.getElementById("value-G").innerHTML = G+ " kg/h";
    document.getElementById("td-G").innerHTML = G+ " kg/h";
    document.getElementById("value-H").innerHTML = H+ " kg/h";
    document.getElementById("td-H").innerHTML = H+ " kg/h";
    document.getElementById("value-I").innerHTML = I+ " kg/h";
    document.getElementById("td-I").innerHTML = I+ " kg/h";
    document.getElementById("value-Qs").innerHTML = Qs + " MJ/h";
    document.getElementById("value-Mac").innerHTML = Mac + " kg/h";
    document.getElementById("value-FlujoAire").innerHTML = FlujoAire + ' m<sup>3</sup>/h';
    document.getElementById("value-Wex").innerHTML = Wex + " kg/h";
    document.getElementById("value-Wde").innerHTML = Wde + " kg/h";
    document.getElementById("value-Wt").innerHTML = Wt + " kg/h";


    //add data to array dataVapor and return it
    let dataVapor = new Array();
    dataVapor.push(Wex);
    dataVapor.push(Wde);
    dataVapor.push(Wt);
    updateBarChart(dataVapor);

    //Variables for pastel chart
    //sum of A + B
    totalPie = parseFloat(A) + parseFloat(B);
    pA = ((parseFloat(A)/totalPie)*100);
    pC = ((parseFloat(C)/totalPie)*100);

    let dataPie = new Array();
    dataPie.push(pA);
    dataPie.push(pC);

    updatePastelChart(dataPie);

    //updateFlowChart(a,b,c,d,e,f,g,h,i);
    var img = new Image();
    img.src = 'img/flowchart.png';
    img.onload = function(){
        ctx.drawImage(img, 0, 0,canvas.width, canvas.height);
    }

    //dibujar texto dentro del cuadrado
    ctx.clearRect(0, 0, 100000000, 100000000);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = '12px sans-serif';
    ctx.fillText(A + " kg/h",160, 28);
    ctx.fillText(B + " kg/h",280, 28);
    ctx.fillText(C + " kg/h",350, 107);
    ctx.fillText(D + " kg/h",185, 219);
    ctx.fillText(E + " kg/h",410, 275);
    ctx.fillText(F + " kg/h",396, 320);
    ctx.fillText(G + " kg/h",95, 270);
    ctx.fillText(H + " kg/h",95, 132);
    ctx.fillText(I + " kg/h",156, 320);
}
