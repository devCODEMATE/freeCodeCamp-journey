function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const maskedMiddle = "*".repeat(username.length - 2);

  return firstChar + maskedMiddle + lastChar + domain;
}

const email = "apple.pie@example.com";
console.log(maskEmail(email));
