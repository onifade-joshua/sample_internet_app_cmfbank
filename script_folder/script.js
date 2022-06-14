"use strict";
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
//Show sidebar
menuBtn.addEventListener("click", () => {
        sideMenu.style.display = "block";
    })
    //Close Sidebar
closeBtn.addEventListener("click", () => {
        sideMenu.style.display = "none";
    })
    //Change theme
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
});
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle(".dark-theme-variables");

    themeToggler.querySelector("i:nth-child(1)").classList.toggle("active");

    themeToggler.querySelector("i:nth-child(2)").classList.toggle("active");
})

//Fill Transaction history in table
History.forEach(transactionHistory => {
    const tr = document.createElement("tr");
    const trContent = `
    <td>${transactionHistory.accountName}</td>
    <td>${transactionHistory.accountNumber}</td>
    <td>${transactionHistory.bankName}</td>
    <td>${transactionHistory.amount}</td>
    <td class="${transactionHistory.paymentStatus === "Declined" ? "danger" : transactionHistory.paymentStatus === "pending" ? "warning" : "primary" }"> ${transactionHistory.paymentStatus}</td>
    <td class="details">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
})