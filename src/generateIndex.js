// ==========================
// Rendering Functions
// ==========================

// Renders an icon in the header representing the employee's role.
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

// Gives a different background color based on role for the header.
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

// Handles the role-specific content of the card body and fills it in
function renderContent(person) {
  let output = "";
  role = person.getRole();

  switch (role) {
    case "Manager":
      output = `<p><span class="has-text-weight-bold">Role:</span> Manager</p>
      <p><span class="has-text-weight-bold">Employee ID:</span> ${person.getId()}</p>
      <p><span class="has-text-weight-bold">Email:</span> <a href="mailto:${person.getEmail()}">${person.getEmail()}</a></p>
      <p>
        <span class="has-text-weight-bold">Office Number:</span>
        ${person.officeNumber}
      </p>`;
      break;
    case "Engineer":
      output = `<p><span class="has-text-weight-bold">Role:</span> Engineer</p>
        <p><span class="has-text-weight-bold">Employee ID:</span> ${person.getId()}</p>
        <p><span class="has-text-weight-bold">Email:</span> <a href="mailto:${person.getEmail()}">${person.getEmail()}</a></p>
        <p>
          <span class="has-text-weight-bold">Github:</span> <a href="https://github.com/${person.getGithub()}/">
          ${person.getGithub()}</a>
        </p>`;
      break;
    case "Intern":
      output = `<p><span class="has-text-weight-bold">Role:</span> Intern</p>
        <p><span class="has-text-weight-bold">Employee ID:</span> ${person.getId()}</p>
        <p><span class="has-text-weight-bold">Email:</span> <a href="mailto:${person.getEmail()}">${person.getEmail()}</a></p>
        <p>
          <span class="has-text-weight-bold">School:</span>
          ${person.getSchool()}
        </p>`;
      break;
    default:
      // Everyone should have a role, but just in case....
      output = `<p><span class="has-text-weight-bold">Role:</span> Unspecified</p>
        <p><span class="has-text-weight-bold">Employee ID:</span> ${person.getId()}</p>
        <p><span class="has-text-weight-bold">Email:</span> <a href="mailto:${person.getEmail()}">${person.getEmail()}</a></p>
        `;
      break;
  }

  return output;
}

// Fills in the template for a single card based on the employee's data
function renderEmployeeCard(person) {
  let output = `<article class="column is-one-third">
  <div class="card">
    <header class="card-header ${renderCardHeader(
      person.getRole()
    )} has-text-white">
      <p class="card-header-title has-text-white">${person.getName()}</p>
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
</article>
`;

  return output;
}

// Loops through the array of employees, rendering a card for each
// and tacking it on until the output has been assembled
function renderEmployees(employees) {
  let output = "";
  employees.forEach((person) => {
    output = output + renderEmployeeCard(person);
  });

  return output;
}

// ==========================
// The Renderer
// ==========================

// Handles the bulk of the static HTML
function generateIndex(employees) {
  const output = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
    />
    <style>
      .hero {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
      }

      /* Credit to Alison Quaglia for this neat trick - https://www.sliderrevolution.com/resources/css-animated-background/ */
      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    </style>
    <script
      src="https://kit.fontawesome.com/ba33a5b68d.js"
      crossorigin="anonymous"
    ></script>
    <title>Team Roster</title>
  </head>
  <body>
    <section class="hero">
      <div class="hero-body">
        <p class="title has-text-white">Team Roster</p>
      </div>
    </section>
    <div class="block"></div>
    <div class="container">
      <section class="columns is-multiline">
        ${renderEmployees(employees)}
      </section>
    </div>
  </body>
</html>`;

  return output;
}

module.exports = generateIndex;
