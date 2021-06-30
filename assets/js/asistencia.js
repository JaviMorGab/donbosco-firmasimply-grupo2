// Consultar el listado de firmas
Asistencia.getlistadoFirmas();

// Registrar una firma
let firma = {
	user_id: Auth.getCoder().id,
	nota: 'texto test',
	estado: 1 // 1 para entrada, 0 para salida
};
Asistencia.firmar(firma);

// Consultar el número de firmas de hoy
Asistencia.getNumFirmasHoy();
