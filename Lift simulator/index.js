function Create() {
  let floors = document.getElementById("NumberOfFloor").value;
  let lifts = document.getElementById("NumberOfLifts").value;
  if (floors > 0 && lifts > 0) {
    let floorBox = document.createElement("div");
    floorBox.classList.add("floorBox");
    for (let i = floors; i > 0; i--) {
      let flooring = `<div class="floorContainer">
      <div class="buttons">
      ${
        i < floors
          ? `<button class = "downB" id="${i}" onclick="moveIt(id)">Down</button>`
          : ``
      }
      ${
        i > 1
          ? `<button class = "upB" id="${i}" onclick="moveIt(id)">Up</button>`
          : ``
      }
      </div>
      <h3>Floor ${i}</h3><div class="line"></div>
      </div>`;
      floorBox.innerHTML += flooring;
    }
    let elevatorBox = document.createElement("div");
    elevatorBox.classList.add("elevatorBox");
    for (let i = lifts; i > 0; i--) {
      let elevators = `
      <div id="lifts" style="right:${(i + 1) * 3 + "%"}">Lift</div>
      `;
      floorBox.innerHTML += elevators;
    }
    let liftArea = document.getElementsByClassName("liftArea");
    liftArea[0].append(floorBox);
  }
}

function freeLiftbox(allLift) {
  let liftArray = Array.from(allLift);
  for (i = 0; i < liftArray.length; i++) {
    if (!liftArray[i].classList.contains("occupied")) return liftArray[i];
  }
  console.log(liftArray[i]);
}

function moveIt(id) {
  let allLift = document.querySelectorAll("#lifts");
  let freeLift = freeLiftbox(allLift);
  if (!freeLift.classList.contains("occupied")) {
    moveLift(id, freeLift);
  }
}

function moveLift(id, freeLift) {
  freeLift.style.transform = `translateY(-${180 * id}px)`;
  freeLift.classList.add("occupied");
  setTimeout(() => {
    freeLift.classList.remove("occupied");
  }, 3000);
}
