import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/players')
export class PlayersController {

    @Post()
    async createPlayer(){
        return JSON.stringify({
            "name": "Example"
        })
    }

}
