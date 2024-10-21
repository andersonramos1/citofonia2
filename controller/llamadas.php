<?php 
$insertQuery = "INSERT INTO llamadas (vivienda_id, fecha_hora, duracion, audio_url) 
VALUES (:vivienda_id, :fecha_hora, :duracion, :audio_url)";
$stmt = $db->prepare($insertQuery);
$stmt->execute([
'vivienda_id' => $viviendaId,
'fecha_hora' => date('Y-m-d H:i:s'),  // Fecha y hora actuales
'duracion' => $duracion,  // Duración de la llamada en segundos
'audio_url' => $audioUrl  // Ruta del archivo de audio grabado
]);

?>