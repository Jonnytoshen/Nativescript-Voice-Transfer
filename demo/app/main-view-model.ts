import { Observable } from 'tns-core-modules/data/observable';
import { VoiceTransfer } from 'nativescript-voice-transfer';

export class HelloWorldModel extends Observable {
  public message: string;
  private voiceTransfer: VoiceTransfer;

  constructor() {
    super();

    this.voiceTransfer = new VoiceTransfer();
    this.message = this.voiceTransfer.message;
  }
}
