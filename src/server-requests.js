import axios from "axios";

export const serverRequest = async ({ url, dataPayload, requestMethod }) => {
  switch (requestMethod) {
    case "GET":
      try {
        const res = await axios.get(url);
        return { response: res };
      } catch (err) {
        throw err;
      }
    case "POST":
      try {
        const red = await axios.post(url, dataPayload);
        return { response: res };
      } catch (err) {
        throw err;
      }

    default:
      console.log("in the default");
      break;
  }
};
