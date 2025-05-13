// Button click event
document.getElementById("click-me").addEventListener("click", () => {
    alert("Button was clicked!");
  });
  
  // Hover effect
  document.getElementById("hover-box").addEventListener("mouseover", () => {
    document.getElementById("hover-box").style.backgroundColor = "lightgreen";
  });
  document.getElementById("hover-box").addEventListener("mouseout", () => {
    document.getElementById("hover-box").style.backgroundColor = "lightgray";
  });
  
  // Keypress detection
  document.getElementById("keypress-input").addEventListener("keydown", (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Secret double-click
  document.getElementById("secret-btn").addEventListener("dblclick", () => {
    alert("You discovered the secret double-click! 🔐");
  });
  
  // Toggle color on button
  document.getElementById("color-toggle").addEventListener("click", () => {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "lavender" ? "#f0f8ff" : "lavender";
  });
  
  // Image gallery
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3"
  ];
  let currentImage = 0;
  document.getElementById("next-img").addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById("gallery-img").src = images[currentImage];
  });
  
  // Accordion toggle
  document.querySelector(".accordion-btn").addEventListener("click", () => {
    const content = document.querySelector(".accordion-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
  
  // Form validation
  document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    let valid = true;
  
    // Email validation
    const emailFeedback = document.getElementById("email-feedback");
    if (!email.value.includes("@")) {
      emailFeedback.textContent = "Please enter a valid email.";
      valid = false;
    } else {
      emailFeedback.textContent = "";
    }
  
    // Password validation
    const passwordFeedback = document.getElementById("password-feedback");
    if (password.value.length < 8) {
      passwordFeedback.textContent = "Password must be at least 8 characters.";
      valid = false;
    } else {
      passwordFeedback.textContent = "";
    }
  
    if (valid) {
      alert("Form submitted successfully!");
    }
  });
  
  // Real-time feedback
  document.getElementById("password").addEventListener("input", (e) => {
    const feedback = document.getElementById("password-feedback");
    if (e.target.value.length < 8) {
      feedback.textContent = "Password too short.";
    } else {
      feedback.textContent = "";
    }
  });
  