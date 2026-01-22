import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { VerificationModule } from './verification/verification.module';
import { CourseCategoryModule } from './course-category/course-category.module';
import { CourseModule } from './course/course.module';
import { ProfileModule } from './profile/profile.module';
import { HomeworkModule } from './homework/homework.module';
import { MentorProfileModule } from './mentor-profile/mentor-profile.module';
import { LessonGroupModule } from './lesson-group/lesson-group.module';

@Module({
  imports: [UsersModule, VerificationModule, CourseCategoryModule, CourseModule, ProfileModule, HomeworkModule, MentorProfileModule, LessonGroupModule]
})
export class ModulesModule { }
