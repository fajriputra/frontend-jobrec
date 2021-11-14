import axios from "helpers/axios";
import { GETDATAWORKER } from "../constans";

export const getDataWorker = (data) => {
	return {
		type: GETDATAWORKER,
		payload: axios.get(`/worker/get-worker/${data}`),
	};
};
