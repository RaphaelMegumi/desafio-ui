export class Binario{
  public id?: number;
  public numero1?: string;
  public numero2?: string;
  public operacao?: string;

  static fromJson(data: any){
    return Object.assign(new Binario(), data);
  }
}
