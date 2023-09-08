//24.	Разработайте страницу, отображающую таблицу с данными. Данные необходимо подгружать из этого источника
// Требования:
// •	данные должны загружаться при загрузке страницы
// •	необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
// •	необходимо реализовать клиентскую пагинацию (50 элементов на странице)

//url для запроса

const url =
  "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true";
let tableHeaders = ["Address", "City", "Fname", "lname", "State", "tel", "zip"];
const table = document.querySelector("table");
const thead = document.querySelector("thead");
let tbody = document.querySelector("tbody"); // Перемещено сюда, чтобы быть доступным в обоих функциях
window.addEventListener("DOMContentLoaded", () => {
  loadingTable();
});

async function loadingTable() {
  try {
    let response = await fetch(url);
    let users = await response.json();
    main(users);
  } catch (error) {
    console.log(error);
  }
}

function tableCreate() {
  let trHead = document.createElement("tr");
  tableHeaders.forEach((header) => {
    let th = document.createElement("th");
    th.textContent = header;
    trHead.append(th);
  });
  thead.append(trHead);
  table.append(thead);
  document.body.appendChild(table);
}

function sortTable() {
  const th = table.querySelectorAll("th");
  let rows;
  if (tbody) {
    rows = [...tbody.rows];
  }
  th.forEach((header) => {
    header.addEventListener("click", function () {
      let columnIndex = header.cellIndex;
      let sortDirection =
        header.getAttribute("data-sort-direction") === "asc" ? "desc" : "asc";
      header.setAttribute("data-sort-direction", sortDirection);

      rows.sort((a, b) => {
        let aValue = a.cells[columnIndex].textContent;
        let bValue = b.cells[columnIndex].textContent;

        if (sortDirection === "asc") {
          return aValue.localeCompare(bValue, undefined, {
            sensitivity: "base",
          });
        } else {
          return bValue.localeCompare(aValue, undefined, {
            sensitivity: "base",
          });
        }
      });

      if (tbody) {
        tbody.remove();
      }

      tbody = document.createElement("tbody");
      rows.forEach((row) => tbody.appendChild(row));
      table.appendChild(tbody);
    });
  });
}

function main(users) {
  let current_page = 1;
  const rows = 50;
  tableCreate(users);

  function displayList(users, rows, page) {
    tbody.innerHTML = "";
    page--;
    const start = rows * page;
    const end = start + rows;
    const paginatedData = users.slice(start, end);
    paginatedData.forEach((elem) => {
      let trBody = document.createElement("tr");
      let tdAddress = document.createElement("td");
      tdAddress.textContent = elem.address;
      let tdCity = document.createElement("td");
      tdCity.textContent = elem.city;
      let tdFname = document.createElement("td");
      tdFname.textContent = elem.fname;
      let tdLname = document.createElement("td");
      tdLname.textContent = elem.lname;
      let tdState = document.createElement("td");
      tdState.textContent = elem.state;
      let tdTel = document.createElement("td");
      tdTel.textContent = elem.tel;
      let tdZip = document.createElement("td");
      tdZip.textContent = elem.zip;
      trBody.append(tdAddress, tdCity, tdFname, tdLname, tdState, tdTel, tdZip);
      tbody.append(trBody);
    });
    table.append(tbody);
  }

  function displayPagination(users, rows) {
    const pagination = document.createElement("div");
    pagination.classList.add("pagination");
    const pagesCount = Math.ceil(users.length / rows);
    const ulEl = document.createElement("ul");
    ulEl.classList.add("pagination-list");
    for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.append(liEl);
    }
    pagination.append(ulEl);
    table.after(pagination);
  }

  function displayPaginationBtn(page) {
    const liEl = document.createElement("li");
    liEl.classList.add("pagination-item");
    liEl.textContent = page;
    if (current_page === page) liEl.classList.add("pagination__item--active");
    liEl.addEventListener("click", () => {
      current_page = page;
      displayList(users, rows, current_page);
      let currentItemLi = document.querySelector("li.pagination__item--active");
      currentItemLi.classList.remove("pagination__item--active");
      liEl.classList.add("pagination__item--active");
    });
    return liEl;
  }

  displayList(users, rows, current_page);
  displayPagination(users, rows);
  sortTable();
}
