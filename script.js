document.addEventListener("DOMContentLoaded", () => {
  // Sginup
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let name = document.getElementById("signupName").value.trim();
      let email = document.getElementById("signupEmail").value.trim();
      let pass = document.getElementById("signupPassword").value;
      let confirm = document.getElementById("signupConfirm").value;

      let users = JSON.parse(localStorage.getItem("users")) || [];

      // Regex Validations
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

      if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return;
      }
      if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        return;
      }
      if (!passRegex.test(pass)) {
        alert("Password must be 8+ chars, with uppercase, lowercase and number.");
        return;
      }
      if (pass !== confirm) {
        alert("Passwords do not match.");
        return;
      }
      if (users.find((u) => u.email === email)) {
        alert("Email already registered.");
        return;
      }

      users.push({ name, email, password: pass });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful! You can login now.");
      signupForm.reset();
    });
  }

  // Loogin
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let email = document.getElementById("loginEmail").value.trim();
      let pass = document.getElementById("loginPassword").value;

      let users = JSON.parse(localStorage.getItem("users")) || [];
      let user = users.find((u) => u.email === email && u.password === pass);

      if (!user) {
        alert("Invalid email or password.");
        return;
      }

      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "welcome.html";
    });
  }

  // Welcome
  let welcomeMsg = document.getElementById("welcomeMsg");
  if (welcomeMsg) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      welcomeMsg.textContent = "Welcome, " + currentUser.name + "!";
    } else {
      window.location.href = "login.html";
    }
  }

  // Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      window.location.href = "login.html";
    });
  }
});

























// ############################################################################################################

// // Signup
// document.addEventListener("DOMContentLoaded", () => {
//   const signupForm = document.getElementById("signupForm");
//   if (signupForm) {
//     signupForm.addEventListener("submit", function (e) {
//       e.preventDefault();

//       let name = document.getElementById("signupName").value.trim();
//       let email = document.getElementById("signupEmail").value.trim();
//       let password = document.getElementById("signupPassword").value;
//       let confirmPassword = document.getElementById("signupConfirm").value;

//       let error = document.getElementById("signupError");
//       let success = document.getElementById("signupSuccess");
//       if (error) error.textContent = "";
//       if (success) success.textContent = "";

//       let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

//       if (name.length < 3) {
//         if (error) error.textContent = "Name must be at least 3 characters.";
//         return;
//       }
//       if (!emailRegex.test(email)) {
//         if (error) error.textContent = "Invalid email format.";
//         return;
//       }
//       if (!passwordRegex.test(password)) {
//         if (error)
//           error.textContent =
//             "Password must be 8+ chars, with uppercase, lowercase, and number.";
//         return;
//       }
//       if (password !== confirmPassword) {
//         if (error) error.textContent = "Passwords do not match.";
//         return;
//       }

//       let users = JSON.parse(localStorage.getItem("users")) || [];
//       let exists = users.find((u) => u.email === email);
//       if (exists) {
//         if (error) error.textContent = "Email already registered.";
//         return;
//       }

//       users.push({ name, email, password });
//       localStorage.setItem("users", JSON.stringify(users));

//       if (success) success.textContent = "Signup successful! You can now login.";
//       signupForm.reset();
//     });
//   }

//   // Login
//   const loginForm = document.getElementById("loginForm");
//   if (loginForm) {
//     loginForm.addEventListener("submit", function (e) {
//       e.preventDefault();

//       let email = document.getElementById("loginEmail").value.trim();
//       let password = document.getElementById("loginPassword").value;

//       let error = document.getElementById("loginError");
//       let success = document.getElementById("loginSuccess");
//       if (error) error.textContent = "";
//       if (success) success.textContent = "";

//       let users = JSON.parse(localStorage.getItem("users")) || [];
//       let user = users.find((u) => u.email === email && u.password === password);

//       if (!user) {
//         if (error) error.textContent = "Invalid email or password.";
//         return;
//       }

//       // Save in Local Storage
//       localStorage.setItem("currentUser", JSON.stringify(user));
//       window.location.href = "welcome.html";
//     });
//   }

//   // Welcome
//   let welcomeMsg = document.getElementById("welcomeMsg");
//   if (welcomeMsg) {
//     let currentUser = JSON.parse(localStorage.getItem("currentUser"));
//     if (currentUser) {
//       welcomeMsg.textContent = "Welcome, " + currentUser.name + "!";
//     } else {
//       window.location.href = "login.html";
//     }
//   }

//   // Logout 
//   const logoutBtn = document.getElementById("logoutBtn");
//   if (logoutBtn) {
//     logoutBtn.addEventListener("click", () => {
//       localStorage.removeItem("currentUser");
//       window.location.href = "login.html";
//     });
//   }
// });
