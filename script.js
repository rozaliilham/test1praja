const lampToggleBtn = document.getElementById("lampToggle");
const fanToggleBtn = document.getElementById("fanToggle");

let lampStatus = false;
let fanStatus = false;

lampToggleBtn.addEventListener("click", () => {
  lampStatus = !lampStatus;
  updateDeviceStatus("Lamp", lampStatus);
  updateButtonState(lampToggleBtn, lampStatus);
});

fanToggleBtn.addEventListener("click", () => {
  fanStatus = !fanStatus;
  updateDeviceStatus("Fan", fanStatus);
  updateButtonState(fanToggleBtn, fanStatus);
});

function updateDeviceStatus(deviceName, status) {
  const statusText = status ? "On" : "Off";
  alert(`${deviceName} has been turned ${statusText}`);
}

function updateButtonState(button, status) {
  button.textContent = status ? "Turn Off" : "Turn On";
}
