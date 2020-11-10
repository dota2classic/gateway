import {PartyId} from "../shared-types/party-id";

export class PartyDeletedEvent {
  constructor(public readonly id: PartyId) {
  }
}