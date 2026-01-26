import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { HomeworkModule } from './homework/homework.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { CourseModule } from './course/course.module';
import { ProfileModule } from './profile/profile.module';
import { MentorProfileModule } from './mentor-profile/mentor-profile.module';
import { CourseCategoryModule } from './course-category/course-category.module';
import { LessonGroupModule } from './lesson-group/lesson-group.module';
import { JwtStrategy } from 'src/common/stratigies/jwt.strategy';
import { AssignedCourseModule } from './assigned-course/assigned-course.module';
import { LessonModule } from './lesson/lesson.module';
import { RatingModule } from './rating/rating.module';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    UsersModule,
    HomeworkModule,
    MentorProfileModule,
    CourseModule,
    CourseCategoryModule,
    LessonGroupModule,
    ProfileModule,
    AssignedCourseModule,
    LessonModule,
    RatingModule,
  ],
  providers: [JwtStrategy],
})
export class ModulesModule { }