import { For, Show, createSignal } from 'solid-js';
import { createAudio, AudioState } from '@solid-primitives/audio';
import { Icon } from 'solid-heroicons';
import { play, pause } from 'solid-heroicons/solid';
import { speakerWave } from 'solid-heroicons/outline';


const formatTime = (time) =>
  new Date(time * 1000).toISOString().substr(14, 8);

function Music() {
  const [source, setSource] = createSignal(
    'https://github.com/solidjs-community/solid-primitives/blob/main/packages/audio/dev/sample1.mp3?raw=true'
  );
  const [playing, setPlaying] = createSignal(false);
  const [volume, setVolume] = createSignal(1);
  const [audio, { seek }] = createAudio(source, playing, volume);
  return (
    <div class="flex justify-center items-end box-border w-full h-screen overflow-hidden bg-gray-900">
      <div class="flex flex-col items-center">
        <div class="flex justify-center shadow items-center bg-black rounded-3xl px-5 py-3 w-[800px]">
          <button
            class="bg-transparent cursor-pointer flex border-none scale-200"
            disabled={audio.state == AudioState.ERROR}
            onClick={() =>
              setPlaying(audio.state == AudioState.PLAYING ? false : true)
            }
          >
            <Icon
              class="w-14 text-red-600 hover:text-red-700 transition"
              path={audio.state === AudioState.PLAYING ? pause : play}
            />
          </button>
          <div class=" min-w-32 ">
            <Show class="flex-row flex-1"
              fallback="Loading..."
              when={audio.state !== AudioState.LOADING}
            >
              {formatTime(audio.currentTime)} / {formatTime(audio.duration)}
            </Show>
          </div>
          <input
            onInput={(evt) => seek(evt.currentTarget.value)}
            type="range"
            min="0"
            step="0.1"
            max={audio.duration}
            value={audio.currentTime}
            class="cursor-pointer transition hover:bg-gray-900 w-[50%] px-5 form-range rounded-3xl appearance-none bg-gray-900 focus:outline-none focus:ring-0 "
          />
          
          <div class="flex px-2">
            <Icon class="w-6 text-red-600" path={speakerWave} />
            <input
              onInput={(evt) => setVolume(evt.currentTarget.value)}
              type="range"
              min="0"
              step="0.1"
              max={1}
              value={volume()}
              class="cursor w-20"
            />
          </div>
        </div>

        
        <div class="flex justify-center bg-red-500 rounded-b-xl bg">
          <For
            each={Object.entries({
              'Sample 1':
                'https://github.com/solidjs-community/solid-primitives/blob/main/packages/audio/dev/sample1.mp3?raw=true',
              'Sample 2':
                'https://github.com/solidjs-community/solid-primitives/blob/main/packages/audio/dev/sample2.mp3?raw=true',
              'Sample 3':
                'https://github.com/solidjs-community/solid-primitives/blob/main/packages/audio/dev/sample3.mp3?raw=true',
              'Sample 4':
                'https://cdn.transistor.fm/file/transistor/m/shows/36181/5f2db453d1bb193bd3c1a3475036f0c7.mp3',
            })}
          >
            {([label, url]) => (
              <button
                onClick={() => {
                  setSource(url);
                }}
                class="transition cursor-pointer bg-transparent px-4 py-3 border-none"
                classList={{
                  'text-black hover:text-gray-900': url != source(),
                  'text-red-800': url == source(),
                }}
              >
                {label}
              </button>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};


export default Music
