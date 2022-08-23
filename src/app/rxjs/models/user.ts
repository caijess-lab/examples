import { Post } from './post';
import { Todo } from './todo';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: UserCompany;
  todos: Todo[];
  posts: Post[];
}

export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressGeo;
}

export interface AddressGeo {
  lat: string;
  lng: string;
}
