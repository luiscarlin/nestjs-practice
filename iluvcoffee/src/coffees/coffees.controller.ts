import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `List of coffee flavors with limit: ${limit} and offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Single coffee flavor with ID: ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Update coffee flavor with ID: ${id} with body: ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Delete coffee flavor with ID: ${id}`;
  }
}
