import { BookItem } from "./bookItem";

export type CartBook = BookItem & {
  quantity: number;
};