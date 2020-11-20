export class GameServerInfo {
  public readonly watchURL: string;
  constructor(public readonly url: string) {
    this.watchURL = this.getWatchURL();
  }

  private getWatchURL() {
    const host = this.url.split(':')[0];
    const port = parseInt(this.url.split(':')[1]);
    return `${host}:${port + 5}`;
  }
}
