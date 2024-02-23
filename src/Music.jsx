import { createSignal } from 'solid-js';

function AudioPlayer() {
  const [file, setFile] = createSignal(null);
  const [playing, setPlaying] = createSignal(false);
  const [currentTime, setCurrentTime] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  const [volume, setVolume] = createSignal(0.5);

  const audioRef = createRef(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      const audio = new Audio(reader.result);
      audioRef.current = audio;
      audio.onload = () => {
        setDuration(audio.duration);
      };
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const togglePlay = () => {
    playing.set(!playing.get());
    if (playing.get()) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  // ... other controls and logic

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={togglePlay}>{playing.get() ? 'Pause' : 'Play'}</button>
      <progress value={currentTime.get()} max={duration.get()} />
      {/* ... other UI elements */}
    </div>
  );
}

function Music({ src }) {
  return (
    <>
    <AudioPlayer/>
    </>
  );
}

export default Music
