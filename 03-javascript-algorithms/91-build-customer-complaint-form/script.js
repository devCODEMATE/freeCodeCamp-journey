const form = document.querySelector("form");

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const complaintsGroup = document.getElementById("complaints-group");
const complaintDescription = document.getElementById("complaint-description");
const otherComplaint = document.getElementById("other-complaint");

const solutionsGroup = document.getElementById("solutions-group");
const solutionDescription = document.getElementById("solution-description");
const otherSolution = document.getElementById("other-solution");

function validateForm() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const orderRegex = /^2024\d{6}$/;
  const productCodeRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;

  const complaintChecked = complaintsGroup.querySelectorAll("input[type='checkbox']:checked").length > 0;
  const solutionChecked = solutionsGroup.querySelectorAll("input[type='radio']:checked").length > 0;

  return {
    "full-name": fullName.value.trim() !== "",
    email: emailRegex.test(email.value.trim()),
    "order-no": orderRegex.test(orderNo.value.trim()),
    "product-code": productCodeRegex.test(productCode.value.trim()),
    quantity: /^[1-9]\d*$/.test(quantity.value.trim()),
    "complaints-group": complaintChecked,
    "complaint-description": !otherComplaint.checked || complaintDescription.value.trim().length >= 20,
    "solutions-group": solutionChecked,
    "solution-description": !otherSolution.checked || solutionDescription.value.trim().length >= 20,
  };
}

function isValid(formResult) {
  return Object.values(formResult).every((value) => value === true);
}

function setBorder(element, isValidField) {
  element.style.borderColor = isValidField ? "green" : "red";
}

function updateFieldStyles() {
  const result = validateForm();

  setBorder(fullName, result["full-name"]);
  setBorder(email, result.email);
  setBorder(orderNo, result["order-no"]);
  setBorder(productCode, result["product-code"]);
  setBorder(quantity, result.quantity);

  setBorder(complaintsGroup, result["complaints-group"]);
  setBorder(complaintDescription, result["complaint-description"]);

  setBorder(solutionsGroup, result["solutions-group"]);
  setBorder(solutionDescription, result["solution-description"]);
}

fullName.addEventListener("change", () => {
  setBorder(fullName, validateForm()["full-name"]);
});

email.addEventListener("change", () => {
  setBorder(email, validateForm().email);
});

orderNo.addEventListener("change", () => {
  setBorder(orderNo, validateForm()["order-no"]);
});

productCode.addEventListener("change", () => {
  setBorder(productCode, validateForm()["product-code"]);
});

quantity.addEventListener("change", () => {
  setBorder(quantity, validateForm().quantity);
});

complaintsGroup.addEventListener("change", () => {
  const result = validateForm();
  setBorder(complaintsGroup, result["complaints-group"]);
  setBorder(complaintDescription, result["complaint-description"]);
});

complaintDescription.addEventListener("change", () => {
  setBorder(complaintDescription, validateForm()["complaint-description"]);
});

solutionsGroup.addEventListener("change", () => {
  const result = validateForm();
  setBorder(solutionsGroup, result["solutions-group"]);
  setBorder(solutionDescription, result["solution-description"]);
});

solutionDescription.addEventListener("change", () => {
  setBorder(solutionDescription, validateForm()["solution-description"]);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const result = validateForm();

  if (!isValid(result)) {
    updateFieldStyles();
  }
});
