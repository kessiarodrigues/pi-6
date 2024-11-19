import { IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  userId: string;

  @IsString()
  establishmentId: string;

  @IsString()
  delivererId: string;
}
