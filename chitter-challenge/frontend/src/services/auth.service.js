import axios from 'axios';

const API_URL = `http://localhost:4000/api/auth`;

const signup = async (firstname, lastname, username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      firstname,
      lastname,
      username,
      password,
      email,
    });
    const data = await response.data;

    return data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, {
      email,
      password,
    });
    const data = await response.data;
    console.log(data);
    if (data.accessToken) {
      localStorage.setItem(`user`, JSON.stringify(response.data));
    }

    return data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

const logout = () => {
  localStorage.removeItem(`user`);
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem(`user`));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
