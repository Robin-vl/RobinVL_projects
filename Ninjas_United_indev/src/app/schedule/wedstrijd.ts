export class Wedstrijd {
  constructor(
    public title?: string,
    public startTime?: string,
    public endTime?: string,
    public id?: string,
    public scoreUit?: number,
    public thuisploeg?: string,
    public uitploeg?: string,
  ) {}
}
