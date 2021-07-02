// ==========================
// Rendering Functions
// ==========================
function renderIcon(role) {
  let output = "";

  switch (role) {
    case "Manager":
      output = "<i class='fas fa-user-tie'></i>";
      break;
    case "Engineer":
      output = "<i class='fas fa-user-cog'></i>";
      break;
    case "Intern":
      output = "<i class='fas fa-user-graduate'></i>";
      break;
    default:
      // Everyone should have a role, but just in case....
      output = "<i class='fas fa-user'></i>";
      break;
  }

  return output;
}

function renderCardHeader(role) {
  let output = "";

  switch (role) {
    case "Manager":
      output = "has-background-danger";
      break;
    case "Engineer":
      output = "has-background-success";
      break;
    case "Intern":
      output = "has-background-link";
      break;
    default:
      // Everyone should have a role, but just in case....
      output = "has-background-warning";
      break;
  }

  return output;
}

function renderContent(person) {
  let output = "";
  role = person.getRole();

  switch (role) {
    case "Manager":
      output = `<p><span class="has-text-weight-bold">Role:</span> Manager</p>
      <p><span class="has-text-weight-bold">Employee ID:</span> ${person.id}</p>
      <p><span class="has-text-weight-bold">Email:</span> ${person.email}</p>
      <p>
        <span class="has-text-weight-bold">Office Number:</span>
        ${person.officeNumber}
      </p>`;
      break;
    case "Engineer":
      output = "has-background-success";
      break;
    case "Intern":
      output = "has-background-link";
      break;
    default:
      // Everyone should have a role, but just in case....
      output = "has-background-warning";
      break;
  }

  return output;
}

function renderEmployeeCard(person) {
  let output = `<article class="column is-one-third">
  <div class="card">
    <header class="card-header ${renderCardHeader(
      person.getRole()
    )} has-text-white">
      <p class="card-header-title has-text-white">NAME</p>
      <div class="card-header-icon">
        <span class="icon">${renderIcon(person.getRole())}</span>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        ${renderContent(person)}
      </div>
    </div>
  </div>
</article>`;

  return output;
}

function renderEmployees(employees) {
  let output = "";
  employees.forEach((person) => {
    output = output + renderEmployeeCard(person);
  });

  return output;
}
// ==========================
// The Template
// ==========================
const template = `
Template Goes Here
`;
