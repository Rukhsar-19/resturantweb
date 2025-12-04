import { IMenu, IRestaurant } from "../@types/ApiResponse";
import { ApiNames } from "../constants/ApiNames";
import { apiRequest } from "./NetworkService";

export const restaurantService = async () => {
  let endPoint = ApiNames.Restaurant;
  let { data }: { data: IRestaurant[]} = await apiRequest(endPoint, "GET");
  return data;
};

export const restMenuService = async () => {
  let endPoint = ApiNames.Menu;
  let { data }: { data: IMenu[] } = await apiRequest(endPoint, "GET");
  return data;
};
