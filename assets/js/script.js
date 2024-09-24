tippy("[data-tippy-content]", { allowHTML: true });

const notificationBox = document.querySelector(
  ".top-header .top-header-content-notification .top-header-content-notification-box"
);
const menuBox = document.querySelector(".min-header .nav-links");
const openModalMenuDataItem = document.querySelector(
  ".media-modal .modal-dialog .modal-tab-box .input-data-box .input-data-box-name-container"
);
function openNotation(event) {
  event.stopPropagation();
  notificationBox.classList.toggle("d-none");
}

const bodySelector = document.getElementById("body-selector");
if (bodySelector) {
  bodySelector.onclick = function () {
    notificationBox.classList.add("d-none");
    openModalMenuDataItem.classList.add("d-none");
  };
}
function openMenu() {
  menuBox.classList.add("open-menu-class");
  document.querySelector(".overlay").classList.remove("d-none");
}
function removeMenu() {
  menuBox.classList.remove("open-menu-class");
  document.querySelector(".overlay").classList.add("d-none");
}
function openModalMenuData(event) {
  event.stopPropagation();
  openModalMenuDataItem.classList.toggle("d-none");
}
function addLinks() {
  const linkTitle = document.querySelector(
    ".input-box .input-data-box .input-data-box-input-box input.link-title"
  );
  const linkUrl = document.querySelector(
    ".input-box .input-data-box .input-data-box-input-box input.link-url"
  );

  if (linkTitle.value && linkUrl.value) {
    const doxID = Math.random().toString(36).substr(2, 9);
    const linkElement = document.createElement("div");
    linkElement.id = doxID;

    linkElement.innerHTML = `
      <div class="modal-media-link-box mb-4 d-flex justify-content-between align-items-center">
        <div class="modal-media-link-box-title">
          <h5 class="input-data-box-title mb-2">
            ${linkTitle.value}
          </h5>
          <h6 class="link-item">${linkUrl.value}</h6>
        </div>
        <div class="modal-media-link-box-icons">
          <i class="fa-solid fa-pen" ></i>
          <i class="fa-solid fa-trash-alt delete-icon" onclick="deleteLink(${doxID})"></i>
        </div>
      </div>
    `;
    document.getElementById("media-list").appendChild(linkElement);
    linkTitle.value = "";
    linkUrl.value = "";
  }
}
function deleteLink(link) {
  if (link.id) {
    var linkElement = document.getElementById(link.id);
  } else {
    var linkElement = document.getElementById(link);
  }
  document.getElementById("media-list").removeChild(linkElement);
}
function toggleDateInput() {
  const dateLabel = document.querySelector(
    ".send-page .send-page-filter form .send-page-filter-item label"
  );
  const dateInput = document.querySelector(
    ".send-page .send-page-filter form .send-page-filter-item #date-filter-input"
  );
  dateLabel.classList.add("d-none");
  dateInput.classList.remove("d-none");
}
