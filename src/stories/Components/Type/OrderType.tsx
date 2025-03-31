// src/types/orderTypes.ts

export interface Location {
  id: string;
  name: string;
  description: string;
  slug: string;
  photo: {
    id: string;
    url: string;
    __typename: string;
  };
  country: {
    name: string;
    __typename: string;
  };
  __typename: string;
}

export interface Buddy {
  name: string;
  code: string;
  id: string;
  photos: {
    id: string;
    sm: string;
    __typename: string;
  }[];
  __typename: string;
}

export interface BuddySpot {
  id: string;
  address: string;
  fullDayPrice: string;
  halfDayPrice: string;
  intro: string;
  __typename: string;
}

export interface TravellerUser {
  fullName: string;
  __typename: string;
}

export interface Source {
  __typename: string;
  id: string;
  sessionDuration: string;
  fromDate: string;
  toDate: string;
  status: string;
  currency: string;
  depositAmount: string;
  note: string;
  location: Location;
  buddy: Buddy;
  buddySpot: BuddySpot;
  travellerUser: TravellerUser;
}

export interface OrderItem {
  id: string;
  name: string;
  currency: string;
  price: string;
  total: string;
  quantity: number;
  sourceType: string;
  sourceId: string;
  source: Source | null;
  __typename: string;
}

export interface OrderData {
  id: string;
  status: string;
  expiredAt: string;
  availableActions: string[];
  total: string;
  currency: string;
  items: OrderItem[];
  __typename: string;
}
