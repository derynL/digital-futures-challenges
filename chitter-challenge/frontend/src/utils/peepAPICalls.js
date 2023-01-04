import axios from 'axios';

export const getPeeps = async () => {
  try {
    const res = await axios.get('http://localhost:4000');
    if (Array.isArray(res.data) && res.data?.length > 0)
      return { peeps: res.data, status: res.status };
    throw new Error(`All is quiet on the Peep-Deck. Have your say.`);
  } catch (e) {
    return {
      peeps: [],
      status: e.response?.status ?? 204,
      error: {
        type: `get`,
        message: `Data not available from the server: ${
          e.message ?? e.response.message
        }`,
      },
    };
  }
};

export const submitPeep = async (peep) => {
  try {
    const res = await axios.post(`${'http://localhost:4000'}/post`, peep);
    return { peep: res.data, status: res.status };
  } catch (e) {
    return {
      status: e.response?.status,
      error: {
        type: `post`,
        message: e.response?.message,
      },
    };
  }
};
export const addUser = async (user) => {
  try {
    const res = await axios.post(`${'http://localhost:4000'}/signup`, user);
    return { user: res.data.user, status: res.status };
  } catch (e) {
    return {
      status: e.response?.status,
      error: {
        type: `post`,
        data: e.response?.data.error,
      },
    };
  }
};

export const login = async (user) => {
  try {
    const res = await axios.post(`${'http://localhost:4000'}/login`, user);
    return { user: res.data.user, status: res.status };
  } catch (e) {
    return {
      status: e.response?.status,
      error: {
        type: `post`,
        data: e.response?.data.error,
      },
    };
  }
};
