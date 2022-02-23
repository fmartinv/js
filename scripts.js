let cantidadNotas = prompt('INGRESAR CANTIDAD DE NOTAS A PROMEDIAR');
if (cantidadNotas <= 10) {
	let notas = '';
	for (let index = 0; index < cantidadNotas; index++) {
		notas += prompt('INGRESAR NOTAS A PROMEDIAR') + '\n';
	}

	let CantNotas = parseInt(cantidadNotas);
	let Notas = parseInt(notas);
	const resultado = (Notas * CantNotas) / CantNotas;
	let decimal = resultado.toFixed(2);
	alert(decimal);
} else {
	const msjError = prompt('LA CANTIDAD DE NOTAS DEBE SER MENOR A 10 ');
	let notas = '';
	for (let index = 0; index < msjError; index++) {
		notas += prompt('INGRESAR NOTAS A PROMEDIAR') + '\n';
	}

	let CantNotas = parseInt(msjError);
	let Notas = parseInt(notas);
	const resultado = (Notas * CantNotas) / CantNotas;
	let decimal = resultado.toFixed(2);
	alert(decimal);
}
