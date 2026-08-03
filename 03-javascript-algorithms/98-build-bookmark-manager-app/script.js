const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");

const categoryDropdown = document.getElementById("category-dropdown");
const addBookmarkButton = document.getElementById("add-bookmark-button");
const viewCategoryButton = document.getElementById("view-category-button");

const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");

const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const categoryNames = document.querySelectorAll(".category-name");
const categoryList = document.getElementById("category-list");

const getBookmarks = () => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  if (
    !Array.isArray(bookmarks) ||
    !bookmarks.every(
      (bookmark) =>
        typeof bookmark === "object" &&
        bookmark !== null &&
        bookmark.hasOwnProperty("name") &&
        bookmark.hasOwnProperty("category") &&
        bookmark.hasOwnProperty("url")
    )
  ) {
    return [];
  }

  return bookmarks;
};

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
};

const updateCategoryName = () => {
  categoryNames.forEach((categoryName) => {
    categoryName.innerText = categoryDropdown.value;
  });
};

const displayCategory = () => {
  const bookmarks = getBookmarks();
  const selectedCategory = categoryDropdown.value;

  const categoryBookmarks = bookmarks.filter(
    (bookmark) => bookmark.category === selectedCategory
  );

  categoryList.innerHTML = "";

  if (!categoryBookmarks.length) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    return;
  }

  categoryBookmarks.forEach(({ name, url }) => {
    categoryList.innerHTML += `
      <label for="${name}">
        <input type="radio" id="${name}" value="${name}" name="bookmark">
        <a href="${url}" target="_blank">${name}</a>
      </label>
    `;
  });
};

addBookmarkButton.addEventListener("click", () => {
  updateCategoryName();
  displayOrCloseForm();
});

closeFormButton.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkButtonForm.addEventListener("click", () => {
  const bookmarks = getBookmarks();

  bookmarks.push({
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value,
  });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  nameInput.value = "";
  urlInput.value = "";

  displayOrCloseForm();
});

viewCategoryButton.addEventListener("click", () => {
  updateCategoryName();
  displayCategory();
  displayOrHideCategory();
});

closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmarkButton.addEventListener("click", () => {
  const selectedBookmark = document.querySelector('input[name="bookmark"]:checked');

  if (!selectedBookmark) {
    return;
  }

  const bookmarks = getBookmarks();
  const selectedCategory = categoryDropdown.value;

  const updatedBookmarks = bookmarks.filter(
    (bookmark) =>
      bookmark.name !== selectedBookmark.value ||
      bookmark.category !== selectedCategory
  );

  localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

  displayCategory();
});
