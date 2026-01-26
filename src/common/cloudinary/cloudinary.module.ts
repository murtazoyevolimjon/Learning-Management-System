import { Module } from '@nestjs/common';
import { CloudinaryUploadService } from './cloudinary.uploads';

@Module({
    providers: [CloudinaryUploadService],
    exports: [CloudinaryUploadService],
})
export class CloudinaryModule { }