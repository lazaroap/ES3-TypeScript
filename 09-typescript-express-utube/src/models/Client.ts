export default class Client {
  name: string;
  cpf: string;
  email: string;
  money: number;
  code: number;
  constructor({name, cpf, email, money, code}) {
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.money = money;
    this.code = code;
  }
}
