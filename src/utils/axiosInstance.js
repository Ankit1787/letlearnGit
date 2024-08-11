import axios from "axios";
import { backendUri } from "../config";

const Axios =axios.create({
    baseURL: backendUri,


})

export default Axios;

