import axios from "axios";
const baseurl = "http://localhost:5000/api/v1";

const server_side = axios.create({ baseURL: `${baseurl}` });

export default server_side;
