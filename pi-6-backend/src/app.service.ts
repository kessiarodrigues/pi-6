import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('ORDER_SERVICE') private orderClient: ClientProxy,
    @Inject('DELIVERY_SERVICE') private deliveryClient: ClientProxy,
  ) {}
  async createOrder({ address, ...order }) {
    try {
      const { id } = await firstValueFrom(
        this.orderClient.send('createOrder', order),
      );

      await this.deliveryClient.emit('createDelivery', {
        orderId: id,
        address,
      });
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  createDelivery() {
    try {
      this.deliveryClient.emit('createDelivery', {
        userId: 1,
        delivererId: 1,
        address: 'Endereço teste',
        orderId: 1,
      });
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
