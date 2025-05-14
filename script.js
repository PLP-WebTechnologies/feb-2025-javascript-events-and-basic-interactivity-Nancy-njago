// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.backgroundColor = "#cfc";
});

document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

// Double-click bonus
document.getElementById("clickBtn").addEventListener("dblclick", () => {
  alert("Double click secret revealed!");
});

// Interactive Elements
document.getElementById("colorBtn").addEventListener("click", () => {
  const btn = document.getElementById("colorBtn");
  btn.style.backgroundColor = btn.style.backgroundColor === "coral" ? "lightblue" : "coral";
  btn.textContent = "Color Changed!";
});

// Tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(tc => tc.style.display = "none");
    document.getElementById(tab.dataset.target).style.display = "block";
  });
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  if (!email.includes("@") || password.length < 8) {
    feedback.textContent = "Invalid email or password!";
    feedback.className = "error";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.className = "success";
  }
});

// Real-time Feedback
document.getElementById("password").addEventListener("input", () => {
  const feedback = document.getElementById("formFeedback");
  const pwd = document.getElementById("password").value;
  if (pwd.length < 8) {
    feedback.textContent = "Password too short!";
    feedback.className = "error";
  } else {
    feedback.textContent = "Looks good!";
    feedback.className = "success";
  }
});


