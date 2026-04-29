(function () {
  class KeySequenceListener {
    constructor(sequence = "cherylkim", eventName = "sequence:matched") {
      this.sequence = sequence.toLowerCase();
      this.eventName = eventName;
      this.buffer = "";
      this.maxBufferLength = this.sequence.length;

      this.init();
    }

    init() {
      window.addEventListener("keydown", this.handleKeyDown.bind(this));
    }

    handleKeyDown(e) {
      // Only process printable characters
      if (e.key.length !== 1) return;

      this.buffer += e.key.toLowerCase();

      // Trim buffer to max sequence length
      if (this.buffer.length > this.maxBufferLength) {
        this.buffer = this.buffer.slice(-this.maxBufferLength);
      }

      if (this.buffer === this.sequence) {
        this.triggerEvent();
        this.buffer = ""; // reset after match
      }
    }

    triggerEvent() {
      const event = new CustomEvent(this.eventName, {
        detail: {
          sequence: this.sequence,
          timestamp: Date.now()
        }
      });

      window.dispatchEvent(event);
    }

    setSequence(newSequence) {
      this.sequence = newSequence.toLowerCase();
      this.maxBufferLength = this.sequence.length;
      this.buffer = "";
    }
  }

  // Expose globally
  window.KeySequenceListener = KeySequenceListener;
})();

const listener = new KeySequenceListener("cherylkim");
window.addEventListener("sequence:matched", (e) => {
  console.log("Sequence detected!", e.detail);

  const container = document.getElementById("myDiv");
  const iframe = document.createElement("iframe");
  iframe.title = "vimeo-player";
  iframe.src = "https://player.vimeo.com/video/1187475176?h=5567718827";
  iframe.width = "640";
  iframe.height = "360";
  iframe.frameBorder = "5";
  iframe.classList.add("secret-unlocked");
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allow = "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share";
  iframe.allowFullscreen = true;
  container.appendChild(iframe);
  
//  document.body.appendChild(div);
});