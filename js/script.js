document.addEventListener("DOMContentLoaded", () => {
  const donateBtn = document.getElementById("donateBtn");

  if (donateBtn) {
    donateBtn.addEventListener("click", () => {
      const proceed = confirm(
        "You are about to be redirected to the Savage Sisters secure donation page. Please add 'Wins' in the notes so your contribution can be added to the total! Thank you for supporting this fundraiser."
      );

      if (proceed) {
        window.location.href =
          "https://www.clover.com/pay-widgets/23cc109e-6d73-4fd5-b2c3-1c377420c4a2";
      }
    });
  }
});

