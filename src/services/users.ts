import { IUser } from "../types/user";
import api from "./api";

let savedUsers: IUser[] = [];

export const getUsers = async () => {
  const users = await api.get("/?seed=reactassessment&results=100");
  savedUsers = users.data.results;
  return users.data.results;
};

//simulate a request to get a user by id
export const getUserById = async (userId: string) => {
  const user = savedUsers.find((user: IUser) => user.login.uuid === userId);
  return user || null;
};
