import server_side from "./BaseUrl";

export const getAllIncome = async () => {
  try {
    const { data } = await server_side.get("/transaction/getAllIncome");
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};

export const getAllExpense = async () => {
  try {
    const { data } = await server_side.get("/transaction/getAllExpense");
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};

export const postAddIncome = async (obj) => {
  try {
    const { data } = await server_side.post("/transaction/add-income", obj);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};

export const postAddExpense = async (obj) => {
  try {
    const { data } = await server_side.post("/transaction/add-expense", obj);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};

export const postDeleteItem = async (id) => {
  try {
    const { data } = await server_side.delete(
      `/transaction/deleteIncome/${id}`
    );
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};

export const postDeleteExpense = async (id) => {
  try {
    const { data } = await server_side.delete(
      `/transaction/deleteExpense/${id}`
    );
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;
    return { error: error.message || error };
  }
};
