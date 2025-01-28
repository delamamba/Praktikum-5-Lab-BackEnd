import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    JwtModule.register({
      secret: "12122003",
      global: true,

    }),
    AuthModule,
    ProfileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
