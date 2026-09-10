function bookService(serviceName) {
  document.getElementById("service").value = serviceName;

  document.getElementById("appointment").scrollIntoView({
    behavior: "smooth",
  });
}

function bookAppointment(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;

  let service = document.getElementById("service").value;

  let date = document.getElementById("date").value;

  let time = document.getElementById("time").value;

  alert(
    "Thank you " +
      name +
      "!\n\nYour appointment has been requested." +
      "\nService: " +
      service +
      "\nDate: " +
      date +
      "\nTime: " +
      time,
  );
}
