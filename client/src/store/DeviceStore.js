import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
   constructor() {
      this._types = [
         {id: 1, name: 'Refrigerators'},
         {id: 2, name: 'Smartphones'},
      ]
      this._brands = [
         {id: 1, name: 'Samsung'},
         {id: 2, name: 'Apple'},
      ]
      this._devices = [         
         {id: 1, name: 'iPhone 12 pro silver', price: 1400, rating: 5, img: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/8/1/81c047ef7920c5d533f6593b05360bf30fafb024_228627_1.jpg'},       
         {id: 2, name: ' iPhone 11 Black', price: 900, rating: 4, img: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/e/1/e111ecadea363065034ca0ab4587cc2b58c4b31a_228936_1.jpg'},       
         {id: 3, name: 'Galaxy A52 Black', price: 400, rating: 5, img: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/b/4/b4e69e6a88aee7556e0d71189eab7dcb1e841377_241456_1.jpg'},       
         {id: 4, name: 'Galaxy A32 Black', price: 250, rating: 5, img: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/2/d/2d940ab121a4e42d601f71e89d818bf5b7e7fc03_236638_1.jpg'},
      ]
      makeAutoObservable(this)
   }

   setTypes(types) {
      this._types = types
   }

   setBrands(brands) {
      this._brands = brands
   }

   setDevices(devices) {
      this._devices = devices
   }

   get types() {
      return this._types
   }

   get brands() {
      return this._brands
   }

   get devices() {
      return this._devices
   }
}