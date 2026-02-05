import { Controller, Post, Req } from '@nestjs/common';
import { odersService } from './oders.service';

@Controller('orders')
export class odersController {
  constructor(private readonly odersService: odersService) {}

  @Post()
  create(@Req() req: Request) {
    return this.odersService.create(req.body);
  }
}
