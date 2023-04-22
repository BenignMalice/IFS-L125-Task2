// Create a new HTML page for the “Save for later” section, which allows the user to see what is in their folder.

// Add View Later to navbar
const link = document.createElement("a");
link.href = "saveLater.html";
link.textContent = "View Later";

// Get the navbar element
const navbar = document.querySelector(".navbar");

// Add the new link element to the navbar
navbar.appendChild(link);

// Do the same for Your Saved Items to navbar
const link2 = document.createElement("a");
link2.href = "savedItems.html";
link2.textContent = "Your Saved Items";

navbar.appendChild(link2);

// 15.04.23
// Select all medication and procedure names
const medicationNames = document.querySelectorAll(".medicationSaved");
const procedureNames = document.querySelectorAll(".procedureSaved");

// Loop through all medication and procedure names
[...medicationNames, ...procedureNames].forEach((name) => {
  // Create a new button element
  const button = document.createElement("button");
  button.textContent = "Click to Save for Later";

  // Create a new icon element
  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-bookmark");

  // Add a click event listener to the button
  button.addEventListener("click", () => {
    // Check if the name is already saved
    if (name.classList.contains("saved")) {
      // Remove the saved class and the bookmark icon
      name.classList.remove("saved");
      button.innerHTML = "Click to Save for Later";
      button.classList.remove("saved");
      name.removeChild(icon);

      // Remove the name from local storage
      localStorage.removeItem(name.textContent);

      // Get the number of saved items
      const savedItems = Object.keys(localStorage).length;

      // Show an alert with the number of saved items
      alert(`You have ${savedItems} item(s) in your Saved for Later folder.`);
    } else {
      // Add the saved class and the bookmark icon
      name.classList.add("saved");
      button.innerHTML = "Saved / Click again to Unsave";
      button.classList.add("saved");
      name.insertAdjacentElement("afterbegin", icon);

      // Save the name to local storage
      localStorage.setItem(name.textContent, "saved");

      // Get the number of saved items
      const savedItems = Object.keys(localStorage).length;

      // Show an alert with the number of saved items
      alert(`You have ${savedItems} item(s) in your Saved for Later folder.`);
    }
  });

  // Insert the button after the name
  name.insertAdjacentElement("afterend", button);

  // Check if the name is already saved and update the button text, class, and icon
  if (localStorage.getItem(name.textContent)) {
    name.classList.add("saved");
    button.innerHTML = "Saved";
    button.classList.add("saved");
    name.insertAdjacentElement("afterbegin", icon);
  }
});

/* 16.04.2023

Create a new HTML page for the “Save for later” section, which allows the user to see what is in their folder. */

// Retrieve saved items from local storage
const savedItems = Object.keys(localStorage);

// Loop through saved items and create <li> elements
savedItems.forEach((item) => {
  const savedItem = document.createElement("a");
  const icon = document.createElement("i");
  savedItem.appendChild(document.createTextNode(item)); // add the text content of the item to the list item
  document.getElementById("savedItems").appendChild(savedItem);
});

// Create a form which allows a user to leave comments.
const commentForm = document.getElementById("commentForm");

commentForm.addEventListener("#submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the user's input values
  const nameInput = document.getElementById("#name");
  const emailInput = document.getElementById("#email");
  const commentInput = document.getElementById("#comment");
  const name = nameInput.value;
  const email = emailInput.value;
  const comment = commentInput.value;

  // Clear the input fields
  nameInput.value = "";
  emailInput.value = "";
  commentInput.value = "";

  // Log the user's input values to the console
  console.log(`Name: ${name}\nEmail: ${email}\nComment: ${comment}`);
});

//19/04/2023
// Animate comment form
function toggleCommentForm() {
  $(document).ready(function () {
    // Hide the contact form on page load
    $("#commentForm").hide();

    $("#commentH3").click(function () {
      if (!formSubmitted) {
        $("#commentForm").slideToggle(500, function () {
          // Scroll to the end of the contact form after it's done toggling
          if ($("#commentForm").is(":visible")) {
            $("html, body").animate(
              {
                scrollTop: $("#commentForm").offset().top,
              },
              500
            );
          }
        });
      }
    });
  });
}
toggleCommentForm();

// Form saves user details to localStorage, shows  message and closes after submission
function closeCommentForm() {
  // Save user info for later stage
  const userInfo = {
    name: $("#name").val(),
    email: $("#email").val(),
    comment: $("#comment").val(),
  };

  // Reset form fields
  $("#name").val("");
  $("#email").val("");
  $("#comment").val("");

  $("#commentSent").show();
  // Hide message after 1 sec
  setTimeout(function () {
    $("#commentSent").hide();
  }, 1000);

  setTimeout(function () {
    $("#commentForm").slideUp(1000);
  }, 2000);
}

// Animated text in savedItems.html
$(document).ready(function () {
  let changeColourBackground = $("#savedHeading");
  let fadeText = $("#fade-text");
  let counter = 0;

  function fadeSavedItems() {
    $(".fade-text").fadeOut(1000, function () {
      $(this).fadeIn(1000);
    });

    counter++;

    if (counter < 1) {
      setTimeout(fadeSavedItems, 1000);
    }
  }

  fadeSavedItems();
});

// Animating the list of Saved Items in savedItems.html
$(document).ready(function () {
  let animatedText = $("#savedItems a");
  animatedText.hover(
    function () {
      $(this).css({
        "font-size": "2em",
        color: "white",
        "background-color": "red",
      });
    },
    function () {
      $(this).css({
        "font-size": "1em",
        color: "white",
        "background-color": "white",
        display: "flex",
        "align-items": "center",
        padding: "10px",
        "margin-bottom": "5px",
        "background-color": "#389cff",
        "border-radius": "20px",
      });
    }
  );
});

// Animating the logo
$(document).ready(function () {
  const logo = $(".logo");
  const logoWidth = logo.width();
  const logoHeight = logo.height();

  setInterval(function () {
    logo.animate(
      {
        marginBottom: "20px",
      },
      500
    );

    logo.animate(
      {
        marginLeft: "20px",
      },
      500
    );

    logo.animate(
      {
        marginTop: "30px",
      },
      500
    );

    logo.animate({
      marginLeft: "0px",
      marginTop: "20px",
    });

    logo.animate(
      {
        marginTop: "0px",
      },
      500,
      function () {
        // Animation complete.
      }
    );
  }, 4000); // Set interval to sum of animation durations (in milliseconds)
});

// 17/04/2023
// Toggle the contact form on click of the Contact Us heading
let formSubmitted = false;

function toggleForm() {
  $(document).ready(function () {
    // Hide the contact form on page load
    $("#contactFormContainer").hide();

    $("#contactUsH3").click(function () {
      if (!formSubmitted) {
        $("#contactFormContainer").slideToggle(500, function () {
          // Scroll to the end of the contact form after it's done toggling
          if ($("#contactFormContainer").is(":visible")) {
            $("html, body").animate(
              {
                scrollTop: $("#contactFormContainer").offset().top,
              },
              500
            );
          }
        });
      }
    });
  });
}

toggleForm();

// Form saves user details to localStorage, shows thank you message and closes after submission
function closeForm() {
  // Save user info for later stage
  const userInfo = {
    name: $("#name").val(),
    email: $("#Email").val(),
    message: $("#Message").val(),
  };

  // Reset form fields
  $("#name").val("");
  $("#Email").val("");
  $("#Message").val("");

  $("#messageSent").show();
  // Hide thank you message after 1 sec
  setTimeout(function () {
    $("#messageSent").hide();
  }, 1000);

  setTimeout(function () {
    $("#contactFormContainer").slideUp(1000);
  }, 2000);
}
