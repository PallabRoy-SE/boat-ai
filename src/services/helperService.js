import moment from "moment";

export function getDateStringFromNow(date) {
  const mDate = moment(date);
  const dateDiff = moment().diff(mDate, "day");
  switch (dateDiff) {
    case 0:
      return "Today";
    case 1:
      return "Tomorrow";
    default:
      return mDate.format("DD MMM, YYYY");
  }
}
