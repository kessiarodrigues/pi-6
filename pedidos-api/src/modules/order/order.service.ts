import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/Order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    console.log('here');
    const { raw } = await this.orderRepository.insert(createOrderDto);

    return raw[0];
  }

  async findAll() {
    return await this.orderRepository.find({ where: { deletedAt: null } });
  }

  async findOne(id: number) {
    return await this.orderRepository.findOne({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.update(id, updateOrderDto);
  }

  async remove(id: number) {
    return await this.orderRepository.softDelete(id);
  }
}
