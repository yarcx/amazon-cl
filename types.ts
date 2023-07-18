export interface ProductProps {
  brand: string;
  category: string;
  description: string;
  image: string;
  isName?: boolean;
  oldPrice: number;
  price: number;
  title: string;
  isNew: string;
  _id: number;
}

export interface StoreProduct {
  brand: string;
  category: string;
  description: string;
  image: string;
  isName?: boolean;
  oldPrice: number;
  price: number;
  title: string;
  isNew: string;
  _id: number;
  quantity: number;
}

export interface StateProps {
  productData: [];
  favoriteData: [];
  userInfo: null | string;
  next: any;
}
