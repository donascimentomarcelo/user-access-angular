export class ClientDto {
    constructor(
        public id?: string,
        public email?: string,
        public name?: string,
    ) { }

    static fromEntity(json: any): ClientDto {
        return Object.assign(new ClientDto(), json);
    }
}
