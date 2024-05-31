import styles from "./Clock.module.css";

export const Clock = ({ timezone }) => {
  console.log(`timezone passed into:`, timezone);
  function getTimeInfo(timezoneOffsetInSeconds) {
    // Calculate the timezone offset in minutes
    const timezoneOffsetInMinutes = timezoneOffsetInSeconds / 60;

    // Create a new Date object and adjust it for the timezone offset
    const now = new Date(new Date().getTime() + timezoneOffsetInSeconds * 1000);

    // Format the time in 24-hour format
    const hours = String(now.getUTCHours()).padStart(2, "0");
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");
    const seconds = String(now.getUTCSeconds()).padStart(2, "0");
    const time24HourFormat = `${hours}:${minutes}:${seconds}`;

    // Get the day of the week
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = daysOfWeek[now.getUTCDay()];

    // Get the date components
    const year = now.getUTCFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[now.getUTCMonth()]; // Months are zero-indexed
    const date = now.getUTCDate();

    // Determine the ordinal suffix for the day
    const getOrdinalSuffix = (n) => {
      if (n > 3 && n < 21) return "th"; // special case for 11th to 20th
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    const dateWithSuffix = `${date}${getOrdinalSuffix(date)}`;

    // Format the full date string
    const formattedDate = `${day}, ${dateWithSuffix} ${month} ${year}`;

    // Store the information in an object
    const timeInfo = {
      time: time24HourFormat,
      day: day,
      date: formattedDate,
    };

    return timeInfo;
  }

  const timeInfo = getTimeInfo(timezone);
  console.log(timeInfo);

  return (
    <div>
      <p className={styles.dateContainer}>{timeInfo.date}</p>
    </div>
  );
};
