"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const team = [
    "Coach Maya — Strength & Mobility",
    "Coach Jordan — HIIT & Conditioning",
    "Coach Sam — Personal Training",
  ];

  const meetBtn = document.getElementById("meetBtn");
  const meetMsg = document.getElementById("meetMsg");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function showTeam() {
    if (!meetMsg) return;

    let output = "Today’s coaches:\n";
    for (let i = 0; i < team.length; i++) {
      output += `• ${team[i]}\n`;
    }
    meetMsg.textContent = output;
  }

  if (meetBtn) meetBtn.addEventListener("click", showTeam);
});
