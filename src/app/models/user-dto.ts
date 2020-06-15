import { ClientDto } from './client-dto';

export class UserDto {
    constructor(
        public username?: string,
        public profiles?: string[],
        public client?: ClientDto,
    ) { }

    static fromEntity(json: any): UserDto {
        return Object.assign(new UserDto(), json);
    }
}
