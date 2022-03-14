export class ClubGames {
  public title: string;
  public description: string;
  public coverPath: string;
  public owner: string;

  constructor(name: string, desc: string, cover: string, owner: string) {
    this.title = name;
    this.description = desc;
    this.coverPath = cover;
    this.owner = owner;
  }
}
