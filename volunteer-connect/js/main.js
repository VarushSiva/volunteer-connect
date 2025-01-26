/*
 * Name:        Varush Sivalingam   Farhat Rahman
 * Student ID:  100661860           100953269
 * Date:        January 25th 2025
 */

"use strict";

// IIFE - Immediately Invoked Function Expression
(function () {
  function DisplayHomePage() {
    console.log("Calling DisplayHomePage()...");

    let opportunitiesBtn = document.getElementById("OpportunitiesBtn");
    opportunitiesBtn.addEventListener("click", () => {
      location.href = "opportunities.html";
    });
  }

  function DisplayOpportunitiesPage() {
    console.log("Calling DisplayOpportunitiesPage()...");

    // Change Opportunities Link Text to Volunteer Only when on Opportunities Page

    // console.log("Changing Opportunites Link text to Volunteer Now");
    // let currentNav = document.querySelector(".active");
    // currentNav.innerHTML = `Volunteer Now`;
    // console.log("Link Text has now been changed.");

    let opportunities = [
      "Opportunity #1, Planting Trees, January 25th 8:30am - 10:30am",
      "Opportunity #2, Cleaning Parks, January 27th 9:30am - 11:30am",
      "Opportunity #3, Planting Plants, January 29th 10:30am - 12:30am",
    ];

    let opportunitiesList = document.getElementById("opportunitiesList");
    let data = "";

    let index = 1;
    for (let i = 0; i < opportunities.length; i++) {
      let opportunityData = opportunities[i];

      opportunityData = opportunityData.split(",");
      let title = opportunityData[0];
      let description = opportunityData[1];
      let dateTime = opportunityData[2];

      data += `<tr><th scope="row" class="text-center">${index}</th>
                 <td>${title}</td>
                 <td>${description}</td>
                 <td>${dateTime}</td>
                 </tr>`;
      index++;
    }
    opportunitiesList.innerHTML = data;

    let volunteerBtn = document.getElementById("volunteerBtn");
    let confirmation = document.getElementById("confirmation");
    let resetModal = document.getElementById("resetModal");

    // If submit button is clicked in modal --> Add a confirmation msg inside the p tag.
    volunteerBtn.addEventListener("click", (event) => {
      event.preventDefault();
      let form = document.querySelector("form");
      let fullName = document.getElementById("fullName");
      if (form.checkValidity()) {
        let volunteerName = fullName.value;
        form.reset();

        let confirmationMsg = `<p id="confirmationMsg" class="mb-3">Thank you for Signing Up - ${volunteerName}</p>`;
        confirmation.innerHTML = confirmationMsg;
      } else {
        form.reportValidity();
      }
    });

    resetModal.addEventListener("click", () => {
      confirmation.innerHTML = "";
    });
  }

  function DisplayEventsPage() {
    console.log("Calling DisplayEventsPage()...");
  }

  function DisplayContactPage() {
    console.log("Calling DisplayContactPage()...");

    let sendButton = document.getElementById("sendButton");
    let form = document.querySelector("form");

    sendButton.addEventListener("click", (event) => {
      event.preventDefault();

      // If form is valid, open Modal for confirmation msg and then redirect user to home page.
      if (form.checkValidity()) {
        let modalForm = document.querySelector("#confirmationModal");
        const modal = new bootstrap.Modal(modalForm); // Bootstrap Documentation
        modal.show();

        setInterval(() => {
          window.location.href = "index.html";
        }, 5000);
      } else {
        form.reportValidity();
      }
    });
  }

  function DisplayAboutPage() {
    console.log("Calling DisplayAboutPage()...");
  }

  function DisplayPrivacyPage() {
    console.log("Calling DisplayPrivacyPage()...");
  }

  function DisplayToSPage() {
    console.log("Calling DisplayToSPage()...");
  }

  function DisplayDonatePage() {
    console.log("Calling DisplayDonatePage()...");
    // active" aria-current="page"
    let donate = document.querySelector(".donate");
    donate.classList.add("active");
    donate.setAttribute("aria-current", "page");
  }

  function Start() {
    console.log("Starting Assignment 1...");

    // Dynamically Add Donate Link text to NavBar when page loads.
    console.log("Adding 'Donate' link to NavBar");
    let navbar = document.querySelector(".navbar-nav");
    let donateNav = document.createElement("li");
    donateNav.classList.add("nav-item");
    donateNav.innerHTML = `<a class="nav-link donate" href="donate.html">Donate</a>`;
    navbar.appendChild(donateNav);

    let navLinks = document.querySelectorAll("a");
    navLinks.forEach((navLink) => {
      if (navLink.innerHTML == "Opportunities") {
        navLink.innerHTML = "Volunteer Now";
      }
    });

    // Back to Top Logic
    let backToTop = document.getElementById("btn-back-to-top");
    backToTop.addEventListener("click", () => {
      console.log("click -> Scroll to Top");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

    switch (document.title) {
      case "Home":
        DisplayHomePage();
        break;
      case "Opportunities":
        DisplayOpportunitiesPage();
        break;
      case "Events":
        DisplayEventsPage();
        break;
      case "Contact Us":
        DisplayContactPage();
        break;
      case "About Us":
        DisplayAboutPage();
        break;
      case "Privacy Policy":
        DisplayPrivacyPage();
        break;
      case "Terms of Service":
        DisplayToSPage();
        break;
      case "Donate":
        DisplayDonatePage();
        break;
    }
  }
  window.addEventListener("load", Start);
})();
