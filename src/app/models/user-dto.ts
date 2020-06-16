import { ClientDto } from './client-dto';

export class UserDto {
    constructor(
        public id?: string,
        public username?: string,
        public password?: string,
        public profiles?: string[],
        public client?: ClientDto,
    ) { }

    static fromEntity(json: any): UserDto {
        return Object.assign(new UserDto(), json);
    }
}
