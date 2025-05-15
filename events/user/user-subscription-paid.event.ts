export class UserSubscriptionPaidEvent {
  constructor(public readonly steamId: string, public readonly days: number) {
  }
}
