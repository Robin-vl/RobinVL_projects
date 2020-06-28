export class Wedstrijd {
  constructor(
    public datum?: string,
    public locatie?: string,
    public scoreThuis?: number,
    public scoreUit?: number,
    public thuisploeg?: string,
    public uitploeg?: string,
    public id?: string
  ) {}
}
