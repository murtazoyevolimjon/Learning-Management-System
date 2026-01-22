import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LessonGroupService } from './lesson-group.service';
import { CreateLessonGroupDto } from './dto/create-lesson-group.dto';
import { UpdateLessonGroupDto } from './dto/update-lesson-group.dto';

@Controller('lesson-group')
export class LessonGroupController {
  constructor(private readonly lessonGroupService: LessonGroupService) {}

  @Post()
  create(@Body() createLessonGroupDto: CreateLessonGroupDto) {
    return this.lessonGroupService.create(createLessonGroupDto);
  }

  @Get()
  findAll() {
    return this.lessonGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLessonGroupDto: UpdateLessonGroupDto) {
    return this.lessonGroupService.update(+id, updateLessonGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonGroupService.remove(+id);
  }
}
