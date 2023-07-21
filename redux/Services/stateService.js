import { authHeader } from "redux/authHeader";
import api from "../api";

export const stateService = {
  getStateList,
};

async function getStateList(pageData) {
  return await api.get(
    `state/?page=${pageData?.pagination?.page || 1}&page_size=${
      pageData?.pagination?.pageSize || 300000000000
    }`,
    {
      headers: authHeader(),
    }
  );
}
