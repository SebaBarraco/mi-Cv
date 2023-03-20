// evento captura click datos

document.getElementById("datos").addEventListener("click", verinfod);

function verinfod() {
  elementod = document.getElementById("infoDatos");
  elementod.style.display = 'inline';
  vdatos = document.getElementById("datos");
  vdatos.style.background = 'rgb(220, 220, 220, 0.5)';
  
  elementof = document.getElementById("infoFormacion");
  elementof.style.display = 'none';
  vform = document.getElementById("formacion");
  vform.style.background = 'none';

  elementod = document.getElementById("infoOtros");
  elementod.style.display = 'none';
  vdatos = document.getElementById("otros");
  vdatos.style.background = 'none';
  
  elementof = document.getElementById("infoAntecedentes");
  elementof.style.display = 'none';
  vant = document.getElementById("antecedentes");
  vant.style.background = 'none';
}

// evento captura click formacion

document.getElementById("formacion").addEventListener("click", verinfof);

function verinfof() {
  elementof = document.getElementById("infoFormacion");
  elementof.style.display = 'inline';
  vform = document.getElementById("formacion");
  vform.style.background = 'rgb(220, 220, 220, 0.5)';

  elementod = document.getElementById("infoDatos");
  elementod.style.display = 'none';
  vdatos = document.getElementById("datos");
  vdatos.style.background = 'none';

  elementod = document.getElementById("infoOtros");
  elementod.style.display = 'none';
  vdatos = document.getElementById("otros");
  vdatos.style.background = 'none'; 

  elementof = document.getElementById("infoAntecedentes");
  elementof.style.display = 'none';
  vant = document.getElementById("antecedentes");
  vant.style.background = 'none';
}

// evento captura click otros

document.getElementById("otros").addEventListener("click", verinfoo);

function verinfoo() {
  elementoo = document.getElementById("infoOtros");
  elementoo.style.display = 'inline';
  vo = document.getElementById("otros");  
  vo.style.background = 'rgb(220, 220, 220, 0.5)';

  elementod = document.getElementById("infoDatos");
  elementod.style.display = 'none';
  vdatos = document.getElementById("datos");  
  vdatos.style.background = 'none';

  elementof = document.getElementById("infoFormacion");
  elementof.style.display = 'none';
  vform = document.getElementById("formacion");
  vform.style.background = 'none';

  elementoa = document.getElementById("infoAntecedentes");
  elementoa.style.display = 'none';
  vant = document.getElementById("antecedentes");
  vant.style.background = 'none';
}

// evento captura click antecedentes

document.getElementById("antecedentes").addEventListener("click", verinfoa);

function verinfoa(){

  elementoa = document.getElementById("infoAntecedentes");
  elementoa.style.display = 'inline';
  vant = document.getElementById("antecedentes");
  vant.style.background = 'rgb(220, 220, 220, 0.5)';

  elementoo = document.getElementById("infoOtros");
  elementoo.style.display = 'none';
  vo = document.getElementById("otros");  
  vo.style.background = 'none';

  elementod = document.getElementById("infoDatos");
  elementod.style.display = 'none';
  vdatos = document.getElementById("datos");  
  vdatos.style.background = 'none';

  elementof = document.getElementById("infoFormacion");
  elementof.style.display = 'none';
  vform = document.getElementById("formacion");
  vform.style.background = 'none';
}

