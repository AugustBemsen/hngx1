(function updateDateTime() {
  // Select the HTML elements with specific data-testid attributes
  const currentDay = document.querySelector(
    "[data-testid='currentDayOfTheWeek']"
  );
  const currentUTC = document.querySelector("[data-testid='currentUTCTime']");

  // Define an array of days of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the current date and time
  const now = new Date();

  // Determine the day of the week using the daysOfWeek array
  const dayOfWeek = daysOfWeek[now.getUTCDay()];

  // Define options for formatting the local time based on the user's timezone
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const options = {
    timeZone: userTimeZone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  // Format the current time in the user's timezone
  const localTime = now.toLocaleTimeString([], options);

  // Update the displayed day of the week and UTC time
  currentDay.textContent = dayOfWeek;
  currentUTC.textContent = `${localTime} UTC`;

  // Use setTimeout to refresh the time every 1000 milliseconds (1 second)
  setTimeout(updateDateTime, 1000);
})();
