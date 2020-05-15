import Product from '../models/Product';

export default class ProductRepository {
  private products: Array<Product>;

  constructor() {
    this.products = [];
  }

  public findAll(): Array<Product> {
    return this.products;
  }

  public findByCode(code: number): Product | undefined {
    return this.products.find(v => v.code === code);
  }

  //Adiciona os métodos delete e put

  public deleteByCode(code: number) {
    const index = this.products.findIndex(index => index.code === code);

    if (index === -1) {
      throw Error('Erro!');
    }

    this.products.splice(index, 1);
    return this.products;
  }

  public att(
    id: string,

    code: number,

    description: string,

    buyPrice: number,

    sellPrice: number,

    tags: Array<Product>,

  ): Product {
    const index = this.products.find(obj => obj.code === code);

    if (!index) {
      throw Error('Erro!');
    }

    index.code = code;
    index.description = description;
    index.buyPrice = buyPrice;
    index.sellPrice = sellPrice;
    index.tags = tags;

    return index;
  }

  public save({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Product): Product {
    const product = new Product({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
    });
    this.products.push(product);
    return product;
  }
}
