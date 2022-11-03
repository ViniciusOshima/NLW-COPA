function createGame(player1, hour, player2) {
  return `<li>
              <img src="./assets/icon-${player1}.svg" alt="icon-${player2}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="icon-${player2}" />
            </li>`
}

function createCard(date, day, games) {
  return `<div class="card">
          <h2>${date} <span>${day}</span></h2>

          <ul>
          ${games}
          </ul>
        </div>`
}

document.querySelector("#app").innerHTML = `
      <header>
        <img src="./assets/logo.svg" alt="logo_nlw" />
      </header>
      <main id="cards">
      ${createCard(24, "quinta-feira", createGame("brazil", "16:00", "servia"))}
      ${createCard(
        28,
        "segunda-feira",
        createGame("switzerland", "13:00", "brazil") +
          createGame("portugal", "16:00", "uruguay")
      )}
      ${createCard(
        02,
        "sexta-feira",
        createGame("brazil", "16:00", "cameroon")
      )}
      </main>`
