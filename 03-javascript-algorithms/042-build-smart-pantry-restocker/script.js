// ====== Ejemplo de datos ======
const rawData = [
  "A10|Tomatoes|5|2027-01-01",        // no zone field => "general"
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry",     // zone: "pantry"
  "A10|Tomatoes|99|2030-01-01|pantry" // duplicate sku => ignorar
];

const pantry = [
  { sku: "B21", name: "Bananas", qty: 2, expires: "2026-12-01", zone: "fridge" },
  { sku: "X99", name: "Rice", qty: 1, expires: "2028-05-10", zone: "pantry" }
];

// ====== 1) parseShipment ======
function parseShipment(rawData) {
  const seen = new Set();
  const parsed = [];

  for (const line of rawData) {
    const parts = line.split("|");
    const sku = parts[0];
    const name = parts[1];
    const qty = Number(parts[2]);
    const expires = parts[3];
    const zone = parts[4] ? parts[4] : "general";

    // ignorar duplicados
    if (seen.has(sku)) continue;
    seen.add(sku);

    parsed.push({ sku, name, qty, expires, zone });
  }

  return parsed;
}

// ====== 2) clonePantry (deep copy) ======
function clonePantry(pantry) {
  // nuevo array + nuevos objetos (deep copy simple para este caso)
  return pantry.map(item => ({ ...item }));
}

// ====== 3) planRestock ======
function planRestock(pantry, shipment) {
  const actions = [];

  for (const item of shipment) {
    let type;

    if (item.qty <= 0) {
      type = "discard";
    } else {
      const exists = pantry.some(p => p.sku === item.sku);
      type = exists ? "restock" : "donate";
    }

    actions.push({ type, item });
  }

  return actions;
}

// ====== 4) groupByZone ======
function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if (!grouped[zone]) grouped[zone] = [];
    grouped[zone].push(action);
  }

  return grouped;
}

// ====== USO: todo junto ======
const pantryCopy = clonePantry(pantry);          // por si después querés simular cambios sin tocar el original
const shipment = parseShipment(rawData);
const actions = planRestock(pantryCopy, shipment);
const grouped = groupByZone(actions);

console.log(grouped);
