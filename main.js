function createGame(player1, hour, player2) {
  return `<li>
              <img src="./assets/icon-${player1}.svg" alt="icon-${player2}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="icon-${player2}" />
            </li>`
}

let delay = -0.3
function createCard(date, day, games) {
  delay += 0.3
  return `<div class="card" style= "animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>

          <ul>
          ${games}
          </ul>
        </div>`
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta-feira", createGame("brazil", "16:00", "servia")) +
  createCard(
    "28/11",
    "segunda-feira",
    createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard("02/12", "sexta-feira", createGame("brazil", "16:00", "cameroon"))
