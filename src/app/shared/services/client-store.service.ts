import { clientStoreConfig } from '../../client-store.config';
import { Injectable } from '@angular/core';
import * as localforage from 'localforage';
@Injectable({
  providedIn: 'root'
})
export class ClientStoreService {

  public store: any;

  constructor() {
    this.store = localforage.config(clientStoreConfig);
  }

  setItem = (key: string, value: any, serialise = (data: any) => data) => {
    localforage.setItem(key, JSON.parse(JSON.stringify(serialise(value))));
  }

  getItem = async (key: any, deserialise = (data: any) => data) => {
    const value = await localforage.getItem(key);
    return deserialise(value);
  }

  removeItem = async (key: any) => {
    const data = await this.getItem(key);
    if (data) {
      await localforage.removeItem(key);
    }
  }
}
