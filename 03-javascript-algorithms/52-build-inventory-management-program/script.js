const inventory = [];

function findProductIndex(productName) {
  const lowerName = productName.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === lowerName) {
      return i;
    }
  }

  return -1;
}

function addProduct(product) {
  const lowerName = product.name.toLowerCase();
  const index = findProductIndex(lowerName);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(lowerName + " quantity updated");
  } else {
    inventory.push({
      name: lowerName,
      quantity: product.quantity
    });
    console.log(lowerName + " added to inventory");
  }
}

function removeProduct(productName, quantity) {
  const lowerName = productName.toLowerCase();
  const index = findProductIndex(lowerName);

  if (index === -1) {
    console.log(lowerName + " not found");
    return;
  }

  const product = inventory[index];

  if (product.quantity < quantity) {
    console.log(
      "Not enough " + lowerName + " available, remaining pieces: " + product.quantity
    );
    return;
  }

  product.quantity -= quantity;

  console.log("Remaining " + lowerName + " pieces: " + product.quantity);

  if (product.quantity === 0) {
    inventory.splice(index, 1);
  }
}
