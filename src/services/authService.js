import authData from '../data/auth.json';

const authService = {
  login: async (donorId, password) => {
    const user = authData.find((u) => u.donorId === donorId && u.password === password);
    if (user) {
      localStorage.setItem('auth', JSON.stringify(user));
      return true;
    }
    return false;
  },
  logout: () => {
    localStorage.removeItem('auth');
  },
  isAuthenticated: () => {
    const user = localStorage.getItem('auth');
    return !!user;
  }
};

export default authService;
