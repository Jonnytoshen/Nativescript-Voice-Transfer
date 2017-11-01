var VoiceTransfer = require("nativescript-voice-transfer").VoiceTransfer;
var voiceTransfer = new VoiceTransfer();

describe("greet function", function() {
    it("exists", function() {
        expect(voiceTransfer.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(voiceTransfer.greet()).toEqual("Hello, NS");
    });
});