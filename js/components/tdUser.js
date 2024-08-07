export function createTableRowUser(data) {
  const tr = document.createElement("tr");

  let tdTitle = document.createElement("td");
  tdTitle.textContent = data.id;
  tr.appendChild(tdTitle);

  let tdUsername = document.createElement("td");
  tdUsername.textContent = data.username;
  tr.appendChild(tdUsername);

  let tdEmail = document.createElement("td");
  tdEmail.textContent = data.email;
  tr.appendChild(tdEmail);

  let tdPassword = document.createElement("td");
  tdPassword.textContent = data.password;
  tr.appendChild(tdPassword);

  let tdStatus = document.createElement("td");
  tdStatus.className = "available";
  let statusDiv = document.createElement("div");
  statusDiv.className = "status";
  statusDiv.textContent = "Disponível";
  tdStatus.appendChild(statusDiv);
  tr.appendChild(tdStatus);

  let tdMethod = document.createElement("td");
  tdMethod.className = "method";

  let updateButton = document.createElement("button");
  updateButton.className = "update";
  let updateIcon = document.createElement("i");
  updateIcon.className = "fa-solid fa-pen";
  updateButton.appendChild(updateIcon);

  let deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-trash";
  deleteButton.appendChild(deleteIcon);

  tdMethod.appendChild(updateButton);
  tdMethod.appendChild(deleteButton);
  tr.appendChild(tdMethod);

  return tr;
}
