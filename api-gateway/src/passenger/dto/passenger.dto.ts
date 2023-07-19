import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class PassengerDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
