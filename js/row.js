$(document).ready(function(){
    $('#nser').hide();
    $('#nser_m').hide();
    $("#bt_ns").on( "click", function() {
        $('#nser_m').hide();
        $('#nser').show();
    });
    $("#bt_nsm").on( "click", function() {
        $('#nser').hide();
        $('#nser_m').show();
    });
});
document.getElementById("nserver").onclick = function() {row()};
document.getElementById("nserver_m").onclick = function() {calcul()};
function row(){
	$("#result_m").empty();
	l = document.getElementById('l').value;
	m = document.getElementById('m').value;
	s = document.getElementById('s').value;
	cont='<div class="container-fluid float-sm-left text-black"> <h3>Atencion con '+s+' servidores</h3>';
	total=0;
	lm=l/m;
	r=0;
	for (i=0; i<parseInt(s); i++) {
		r+=(Math.pow(lm,i))/factorial(i);
	}
	po=1/(r+(Math.pow(lm,s))/factorial(s)*(1/((1-(l/(s*m))))));
	if (po>=0) {
		lq1=Math.pow(lm,(parseInt(s)+1))/(factorial(s-1)*Math.pow((s-lm),2));
		lq=po*lq1;
		//ls
		ls=lq+lm;
		wq=lq/l;
		ws=ls/l;
		p=1-po;
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Utilización del sistema</h5><h6 class="card-subtitle mb-2 text-muted">'+p.toFixed(4)*100+'%</h6><p class="card-text">De utilidad del sistema</p></div></div>'
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Vagancia del sistema</h5><h6 class="card-subtitle mb-2 text-muted">'+po.toFixed(4)*100+'%</h6><p class="card-text">De timepo en sin actividad en el sistema</p></div></div>'
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Personas en cola</h5><h6 class="card-subtitle mb-2 text-muted">'+Math.round(lq)+'</h6><p class="card-text">Cantidad de clientes en cola</p></div></div>'
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Personas en fila</h5><h6 class="card-subtitle mb-2 text-muted">'+Math.round(ls)+'</h6><p class="card-text">Cantidad de Personas en fila</p></div></div>'
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Timepo de espera en cola</h5><h6 class="card-subtitle mb-2 text-muted">'+wq.toFixed(4)+' minutos</h6><p class="card-text">Timepo de atencion en cola</p></div></div>'
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Timepo de espera en fila</h5><h6 class="card-subtitle mb-2 text-muted">'+ws.toFixed(4)+'minutos</h6><p class="card-text">Timepo de atencion en fila</p></div></div></div>';		
	}else{
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Situación del sistema</h5><h6 class="card-subtitle mb-2 text-muted">Con '+s+' servidor no podrán trabajar</p></div></div>';
	}
	cont += '</div><br>'
	$('#result_m').append(cont)
}

function row_m(l,m,s,t){
	cont='<div class="container-fluid float-sm-left text-black"> <h3>Atencion con '+s+' servidores con un tiempo de '+t+' minutos</h3>';
	total=0;
	lm=l/m;
	r=0;
	for (h=0; h<parseInt(s); h++) {
		r+=(Math.pow(lm,h))/factorial(h);
	}
	po=1/(r+(Math.pow(lm,s))/factorial(s)*(1/((1-(l/(s*m))))));
	if (po>=0) {
		lq1=Math.pow(lm,(parseInt(s)+1))/(factorial(s-1)*Math.pow((s-lm),2));
		lq=po*lq1;
		//ls
		ls=lq+lm;
		wq=lq/l;
		ws=ls/l;
		p=1-po;
		//console.log(po.toFixed(4)*100," ",Math.round(lq)," ",Math.round(ls)," ",wq.toFixed(4)," ",ws.toFixed(4)," ",p.toFixed(4)*100);
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Utilización del sistema</h5><h6 class="card-subtitle mb-2 text-muted">'+p.toFixed(4)*100+'%</h6><p class="card-text">De utilidad del sistema</p></div></div>'
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Vagancia del sistema</h5><h6 class="card-subtitle mb-2 text-muted">'+po.toFixed(4)*100+'%</h6><p class="card-text">De timepo en sin actividad en el sistema</p></div></div>'
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Personas en cola</h5><h6 class="card-subtitle mb-2 text-muted">'+Math.round(lq)+'</h6><p class="card-text">Cantidad de clientes en cola</p></div></div>'
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Personas en fila</h5><h6 class="card-subtitle mb-2 text-muted">'+Math.round(ls)+'</h6><p class="card-text">Cantidad de Personas en fila</p></div></div>'
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Timepo de espera en cola</h5><h6 class="card-subtitle mb-2 text-muted">'+wq.toFixed(4)+' minutos</h6><p class="card-text">Timepo de atencion en cola</p></div></div>'
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Timepo de espera en fila</h5><h6 class="card-subtitle mb-2 text-muted">'+ws.toFixed(4)+'minutos</h6><p class="card-text">Timepo de atencion en fila</p></div></div></div>';		
	}else{
		cont += '<div class="card" style="width: 18rem; height: 9rem; float:left; margin: 5px;"><div class="card-body"><h5 class="card-title">Situación del sistema</h5><h6 class="card-subtitle mb-2 text-muted">Con '+s+' servidor no podrán trabajar</p></div></div>';
		console.log(po);
		//console.log("El sistema colapsará");		
	}
	cont += '</div><br>'
	$('#result_m').append(cont)
		
}	
function factorial (n) {
	var total = 1; 
	let r = 1;
        for(let i = n; i>0; i--){
            r *= i;
        }
		return r; 
}

function calcul(){
	$("#result_m").empty();
	l = document.getElementById('l_m').value;
	s = document.getElementById('s_m').value;
	t = document.getElementById('t').value;
	for (k=0; k<=s; k++) {
		medio=(l/t);
		ta=Math.round(medio)+k;
		m=t/ta;
		console.log("Tiempo: ",ta, " Mui",Math.round(m))
		for (j=1; j<=s; j++) {
			row_m(l,Math.round(m),j,ta);
		}
	}
		
}
