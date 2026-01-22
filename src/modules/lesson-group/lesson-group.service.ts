import { Injectable } from '@nestjs/common';
import { CreateLessonGroupDto } from './dto/create-lesson-group.dto';
import { UpdateLessonGroupDto } from './dto/update-lesson-group.dto';

@Injectable()
export class LessonGroupService {
  create(createLessonGroupDto: CreateLessonGroupDto) {
    return 'This action adds a new lessonGroup';
  }

  findAll() {
    return `This action returns all lessonGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lessonGroup`;
  }

  update(id: number, updateLessonGroupDto: UpdateLessonGroupDto) {
    return `This action updates a #${id} lessonGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} lessonGroup`;
  }
}
