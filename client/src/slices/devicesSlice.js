import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: [
    {id: 1, name: "Холодильник"},
    {id: 2, name: "Телевизор"},
    {id: 3, name: "Ноутбук"},
    {id: 4, name: "Смартфон"},
  ],
  brands: [
    {id: 1, name: "Samsung"},
    {id: 2, name: "LG"},
    {id: 3, name: "Asus"},
    {id: 4, name: "Haier"},
    {id: 5, name: "Lenovo"},
    {id: 6, name: "Apple"},
    {id: 7, name: "Toshiba"},
  ],
  devices: [
    {id: 1, name: "RS54N3003EF", price: 94999, rating: 5, img: "https://cdn.rbt.ru/images/gen/item_image/image/5694/24/569327_r4350.jpg"},
    {id: 2, name: "RB37A5000SA/WT", price: 53999, rating: 5, img: "https://cdn.rbt.ru/images/gen/item_image/image/8326/24/832557_r1752.jpg"},
    {id: 3, name: "GA-B419SQGL", price: 49990, rating: 5, img: "https://cdn.rbt.ru/images/gen/item_image/image/6737/24/673652_r8557.jpg"},
    {id: 4, name: "UE50AU7140UXRU", price: 52650, rating: 5, img: "https://cdn.rbt.ru/images/gen/item_image/image/8657/24/865670_r9539.jpg"},
    {id: 5, name: "50UQ75006LF", price: 57990, rating: 5, img: "https://cdn.rbt.ru/images/gen/item_image/image/9730/24/972944_r5213.jpg"},
    {id: 6, name: "65UP77506LA", price: 77990, rating: 5, img: "https://cdn.rbt.ru/images/gen/item_image/image/8652/24/865183_r9063.jpg"},
  ],
  selectedType: {},
  selectedBrand: {},
};

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    }
  }
});

export const {actions} = devicesSlice;
export default devicesSlice.reducer;
