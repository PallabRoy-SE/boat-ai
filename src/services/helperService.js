import moment from "moment";
import mockData from "../assets/mock-db/mockData.json";

export function getSuggestions() {
  return [...mockData].slice(40, 44).map((suggestion) => suggestion.question);
}

export function getRelativeAnswer(question) {
  const foundObj = mockData.find(
    (md) =>
      md.question
        .toLowerCase()
        .trim()
        .indexOf(question.toLowerCase().trim()) !== -1
  );
  if (foundObj) {
    return foundObj.response;
  }
  return `Sorry, I don't know the answer of ${question}. Please ask any other question.`;
}

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
