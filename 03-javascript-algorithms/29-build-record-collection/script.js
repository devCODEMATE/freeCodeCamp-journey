const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // 1) Si value es "", borrar la propiedad
  if (value === "") {
    delete records[id][prop];
  } 
  // 2) Si prop NO es tracks y value NO está vacío, asignar
  else if (prop !== "tracks") {
    records[id][prop] = value;
  } 
  // 3) Si prop es tracks y value NO está vacío, agregar al array
  else {
    // si no existe tracks, crear array vacío
    if (!records[id].hasOwnProperty("tracks")) {
      records[id]["tracks"] = [];
    }
    records[id]["tracks"].push(value);
  }

  // 4) Siempre devolver el objeto completo
  return records;
}
