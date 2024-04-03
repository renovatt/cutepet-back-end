import { Breed, Pet, Status } from '../entities/schedules-type';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsString,
} from 'class-validator';

export class CreateScheduleDto {
  /**
   * O id do usuário que está criando o agendamento.
   * @example "5f4e3f3f-4b7d-4b7d-8b4d-3f4e5f6d7e8f"
   */
  @IsNotEmpty()
  @IsString()
  userId: string;

  /**
   * O tipo de animal que será atendido.
   * @example "DOG | CAT"
   */
  @IsNotEmpty()
  @IsString()
  @IsEnum(Pet)
  pet: Pet;

  /**
   * O nome do animal que será atendido.
   * @example "Rex"
   */
  @IsNotEmpty()
  @IsString()
  petname: string;

  /**
   * A raça do animal que será atendido.
   * @example { id: egeu, name: Egeu, image: { url: 'https://example.com/egeu.jpg' } }
   */
  @IsNotEmpty()
  @IsObject()
  breed: Breed;

  /**
   * A idade do animal que será atendido.
   * @example "1a - 2a"
   */
  @IsNotEmpty()
  @IsString()
  age: string;
  /**
   * O sexo do animal que será atendido.
   * @example "M | F"
   */
  @IsNotEmpty()
  @IsString()
  sex: string;

  /**
   * O peso do animal que será atendido.
   * @example "5kg"
   */
  @IsNotEmpty()
  @IsString()
  weight: string;

  /**
   * O serviço que será prestado.
   * @example "Banho"
   */
  @IsNotEmpty()
  @IsString()
  service: string;

  /**
   * O horário que o serviço será prestado.
   * @example "08:00"
   */
  @IsNotEmpty()
  @IsString()
  time: string;

  /**
   * A data que o serviço será prestado.
   * @example "2021-03-01T00:00:00.000Z"
   */
  @IsNotEmpty()
  @IsDateString()
  date: string;

  /**
   * Observações sobre o serviço.
   * @example "O animal é agressivo."
   */
  @IsNotEmpty()
  @IsString()
  observation: string;

  /**
   * O status do agendamento.
   * @example "PENDING | FINISHED | CANCELED"
   */
  @IsNotEmpty()
  @IsString()
  @IsEnum(Status)
  status: Status;
}
