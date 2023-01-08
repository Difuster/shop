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
    {id: 1, name: "RS54N3003EF", price: 94999, rating: 5, img: "https://omsk.rbt.ru/cat/kuhonnaya_tehnika/holodilniki/samsung_rs54n3003ef/#"},
    {id: 2, name: "RB37A5000SA/WT", price: 53999, rating: 5, img: "https://omsk.rbt.ru/cat/kuhonnaya_tehnika/holodilniki/samsung_rb37a5000sa_wt/#"},
    {id: 3, name: "GA-B419SQGL", price: 49990, rating: 5, img: "https://omsk.rbt.ru/cat/kuhonnaya_tehnika/holodilniki/lg_ga-b419sqgl/#"},
    {id: 4, name: "UE50AU7140UXRU", price: 52650, rating: 5, img: "https://omsk.rbt.ru/cat/tele-video-audio/televizory/samsung_ue50au7140uxru/#"},
    {id: 5, name: "50UQ75006LF", price: 57990, rating: 5, img: "https://omsk.rbt.ru/cat/tele-video-audio/televizory/lg_50uq75006lf_pi/#"},
    {id: 6, name: "65UP77506LA", price: 77990, rating: 5, img: "https://omsk.rbt.ru/cat/tele-video-audio/televizory/lg_65up77506la_i760459/#"},
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
