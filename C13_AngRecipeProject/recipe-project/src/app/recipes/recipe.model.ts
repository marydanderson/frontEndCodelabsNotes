export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  //built in funciton every class that executes when a new class is created
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}


//model is a blueprint for objects we create
