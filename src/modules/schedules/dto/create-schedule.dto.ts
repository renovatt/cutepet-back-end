import { Breed, Pet, Status } from '../entities/schedules-type';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsString,
} from 'class-validator';

export class CreateScheduleDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(Pet)
  pet: Pet;

  @IsNotEmpty()
  @IsString()
  petname: string;

  @IsNotEmpty()
  @IsObject()
  breed: Breed;

  @IsNotEmpty()
  @IsString()
  age: string;

  @IsNotEmpty()
  @IsString()
  sex: string;

  @IsNotEmpty()
  @IsString()
  weight: string;

  @IsNotEmpty()
  @IsString()
  service: string;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsString()
  observation: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(Status)
  status: Status;
}
