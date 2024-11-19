import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Delivery } from './entities/delivery.entity';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository(Delivery)
    private readonly deliveryRepository: Repository<Delivery>,
  ) {}
  async create(createDeliveryDto: CreateDeliveryDto) {
    return await this.deliveryRepository.insert({
      ...createDeliveryDto,
      delivererId: '1',
    });
  }

  async findAll() {
    return await this.deliveryRepository.find({ where: { deletedAt: null } });
  }

  async findOne(id: number) {
    return await this.deliveryRepository.findOne({
      where: { id, deletedAt: null },
    });
  }

  async update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    return await this.update(id, updateDeliveryDto);
  }

  async remove(id: number) {
    return await this.deliveryRepository.softDelete(id);
  }
}
