import { Controller } from '@nestjs/common';
import { ConnectionService } from './connection.service';

@Controller('connection')
export class ConnectionController {
  constructor(private readonly connectionService: ConnectionService) {}
}
