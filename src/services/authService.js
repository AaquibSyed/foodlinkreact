import authData from "../data/auth.json";

const authService = {
  login: async (Id, password, userType) => {
    let user = {};
    if (userType === "donor") {
      user = authData.donors.find(
        (u) => u.donorId === Id && u.password === password
      );
    } else {
      user = authData.recipients.find(
        (u) => u.receiverId === Id && u.password === password
      );
    }

    if (user) {
      localStorage.setItem("auth", JSON.stringify(user));
      return true;
    }
    return false;
  },
  logout: () => {
    localStorage.removeItem("auth");
  },
  isAuthenticated: () => {
    const user = localStorage.getItem("auth");
    return !!user;
  },
};

export default authService;
