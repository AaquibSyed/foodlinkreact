import donorData from "../data/donors.json";
import recipientData from "../data/recipients.json";

const dataService = {
  SignUp: async (user, type) => {
    if (type === "donor") {
      donorData.push(user);
    } else {
      recipientData.push(user);
    }
  },
};

export default dataService;
