// src/items/items.service.ts
import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { AxiosResponse } from 'axios';
import axios from 'axios';

@Injectable()
export class ItemsService {
  private readonly itemsUrl = 'http://localhost:3001/items';

  async findAll(): Promise<Item[]> {
    console.log("findAll");
    const response: AxiosResponse<Item[]> = await axios.get(this.itemsUrl);
    return response.data;
  }

  async findOne(id: string): Promise<Item> {
    console.log("findOne");
    const response: AxiosResponse<Item> = await axios.get(`${this.itemsUrl}/${id}`);
    return response.data;
  }

  async create(item: Item): Promise<Item> {
    console.log("create");
    const response: AxiosResponse<Item> = await axios.post(this.itemsUrl, item);
    return response.data;
  }

  async update(id: string, item: Item): Promise<Item> {
    const response: AxiosResponse<Item> = await axios.put(`${this.itemsUrl}/${id}`, item);
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await axios.delete(`${this.itemsUrl}/${id}`);
  }
}
