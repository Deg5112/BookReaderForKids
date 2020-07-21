// Import the react-native-sound module
var Sound = require('react-native-sound');

// Enable playback in silence mode
Sound.setCategory('Playback');

class SoundPlayer {
	player = null;
	soundFilePath = null;

	constructor(soundFilePath) {
			this.soundFilePath = soundFilePath;
	}

	playSound() {
		this.player = new Sound(this.soundFilePath, Sound.MAIN_BUNDLE, (error) => {
			if (error) {
				console.log('failed to load the sound', error);
				return;
			}
			// loaded successfully
			console.log('duration in seconds: ' + this.player.getDuration() + 'number of channels: ' + this.player.getNumberOfChannels());

			// Play the sound with an onEnd callback
			this.player.play((success) => {
				if (success) {
					console.log('successfully finished playing');
				} else {
					console.log('playback failed due to audio decoding errors');
				}
			});
		});
	}

	setAudioTrack(soundFilePath) {
		this.soundFilePath = soundFilePath;
	}

	setVolume(volume = 1) {
		this.player.setVolume(volume);
	}

	setPan(pan = 1) {
		// Position the sound to the full right in a stereo field
		this.player.setPan(pan);
	}

	setLoop() {
		// Loop indefinitely until stop() is called
		this.player.setNumberOfLoops(-1);
	}

	setCurrentTime(time = 2.5) {
		this.player.setCurrentTime(2.5);
	}

	getCurrentTime() {
		this.player.getCurrentTime((seconds) => console.log('at ' + seconds));
	}

	pause() {
		this.player.pause();
	}

	rewindeToBeginngin() {
		// Stop the sound and rewind to the beginning
		this.player.stop(() => {
			// Note: If you want to play a sound after stopping and rewinding it,
			// it is important to call play() in a callback.
			this.player.play();
		});
	}

	release() {
		// Release the audio player resource
		this.player.release();
	}

	log() {
    // Get properties of the player instance
		console.log('volume: ' + this.player.getVolume());
		console.log('pan: ' +   this.player.getPan());
		console.log('loops: ' + this.player.getNumberOfLoops());
	}
}

export default SoundPlayer;
