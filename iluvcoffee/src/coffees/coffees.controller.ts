import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'List of coffee flavors';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Single coffee flavor with ID: ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body
  }
}
