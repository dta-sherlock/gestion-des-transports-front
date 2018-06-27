class User {
  private _id: number ;
  private _email: string ;
  private _password: string;
  private _roles: string;
  private _IS_ACTIVE: boolean;
  private _firstName: string;
  private _lastName: string;


  constructor(id: number, email: string, password: string, roles: string, IS_ACTIVE: boolean, firstName: string, lastName: string) {
    this._id = id;
    this._email = email;
    this._password = password;
    this._roles = roles;
    this._IS_ACTIVE = IS_ACTIVE;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get roles(): string {
    return this._roles;
  }

  set roles(value: string) {
    this._roles = value;
  }

  get IS_ACTIVE(): boolean {
    return this._IS_ACTIVE;
  }

  set IS_ACTIVE(value: boolean) {
    this._IS_ACTIVE = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }
}
