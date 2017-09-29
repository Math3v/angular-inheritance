export class Thing {
  name: string;
  starred: boolean;
  created_at: Date;

  constructor({ name, starred, created_at }) {
    this.name = name;
    this.starred = (starred === 'true');
    this.created_at = new Date(created_at);
  }
}
