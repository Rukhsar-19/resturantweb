export interface IRestaurant {
  restaurantID: number;
  restaurantName: string;
  address: string;
  type: string;
  parkingLot: boolean;
}

export interface IMenu {
  itemID: number;
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  restaurantName: string;
  restaurantID: number;
  imageUrl: string;
}
