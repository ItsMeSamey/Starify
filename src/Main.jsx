import styles from './index.module.css';
import './index.css';
import { page } from './index'
import Setter from './index'
import { createSignal, createEffect } from 'solid-js'
import Music  from './Music'; 
import StarWarsSearch from './Serach'

const CryptoJS = require('crypto-js');

function Sidebar() {
  const buttonClasses = 'will-change-transform active:scale-[.93] select-none transition-all duration-200 flex items-center w-full p-3 leading-tight rounded-lg outline-none text-start hover:bg-[#3f1113] \ hover:bg-opacity-80 focus:text-blue-gray-900 active:bg-opacity-80 active:shadow-orange-500/50 shadow-2xl';
  return (
    <div
      class='relative flex h-[100%] w-full max-w-[16rem] flex-col rounded-xl  bg-clip-border p-4 shadow-xl shadow-blue-gray-900/5'>

      <div
        class="relative block text-5xl antialiased font-[150] leading-snug tracking-normal select-none items-center rounded-full bg-gradient-to-tr from-[#ffa20002] to-[#590608] mx-auto py-.5 px-2 uppercase text-white text-center gon">
        <span class="">STARIFY</span>
      </div>

      <br />

      <nav class='flex flex-col gap-1 p-2 font-sans text-base font-normal '>
        <div
          role='button'
          onClick={() => Setter('Main')}
          className={page() == 'Main' ? 'bg-[#3f1113]' : ''}
          class={buttonClasses}
        >
          <div class='grid mr-4 place-items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true' class='w-5 h-5'>
              <path fill-rule='evenodd' d='M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z' clip-rule='evenodd'></path>
            </svg>
          </div>zz
          Home
        </div>
        <div role='button'
          onClick={() => Setter('ser')}
          className={page() == 'ser' ? 'bg-[#3f1113]' : ''}

          class={buttonClasses}>
          <div class='grid mr-4 place-items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'
              class='w-5 h-5'>
              <path fill-rule='evenodd'
                d='M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z'
                clip-rule='evenodd'></path>
            </svg>
          </div>
          Search
        </div>

        <div role='button'
          onClick={() => Setter('play')}
          className={page() == 'play' ? 'bg-[#3f1113]' : ''}

          class={buttonClasses}>
          <div class='grid mr-4 place-items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'
              class='w-5 h-5'>
              <path fill-rule='evenodd'
                d='M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z'
                clip-rule='evenodd'></path>
            </svg>
          </div>
          Playlist
        </div>

        <br /><hr /> <br />
        <div role='button'
          onClick={() => {
            Setter('Login'); const token = gapi.client.getToken();
            if (token !== null) {
              google.accounts.oauth2.revoke(token.access_token);
              gapi.client.setToken('');
            }
          }}
          className={'bg-[#ff1e002d] hover:bg-[#ff1e004f] active:bg-[#ff1e008c] active:shadow-red-500/50 hover:shadow-xl hover:shadow-[#ff1e0052]'}
          class='will-change-transform active:scale-[.93] select-none transition-all duration-200 flex items-center w-full p-3 leading-tight rounded-lg outline-none text-start focus:text-blue-gray-900 active:bg-opacity-80 shadow-2xl'>
          <div class='grid mr-4 place-items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'
              class='w-5 h-5'>
              <path fill-rule='evenodd'
                d='M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z'
                clip-rule='evenodd'></path>
            </svg>
          </div>
          Log Out
        </div>
        <br />

        <div class="bg-[url('side.jpg')] h-[400px] top-0 opacity-50 bg-cover flex justify-center items-center"></div>
      </nav>
    </div>
  )
}


function Table() {
  const [musicFiles, setMusicFiles] = createSignal([]);

  createEffect(() => {
    const testFiles = [
      { name: 'Song 1', duration: 180, src: 'x.mp3' },
      { name: 'Song 2', duration: 240, src: 'audio/song2.mp3' },
      { name: 'Song 3', duration: 150, src: 'audio/song3.mp3' },
    ];
    setMusicFiles(testFiles);
  });

  const playAudio = (src) => {
    const modal = document.createElement('div');
    document.body.appendChild(modal);
    const close = () => {
      modal.remove();
    };
    render(() => <MusicPlayer src={src} />, modal);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div class='select-none w-full h-full overflow-scroll relative text-gray-100 bg-[#0c0c0e] bg-clip-border rounded-2xl'>
      <table class='subpixel-antialiased w-full text-left table-auto min-w-max'>
        <thead class='text-center justify-center w-full'>
          <tr class=''>
            <th class='p-4 border-b bg-[#141416] bg-[#111113]'>
              <p class='block font-sans text-m antialiased font-normal leading-none text-white opacity-70'>
                Name
              </p>
            </th>
            <th class='p-4 border-b bg-[#141416] bg-[#111113]'>
              <p class='block font-sans text-m antialiased font-normal leading-none text-white opacity-70'>
                Duration
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {musicFiles().map((file, index) => (
            <tr key={index} class='will-change-transform duration-50 hover:duration-100 active:duration-200 ease-in-out middle rounded-2xl text-center align-middle active:opacity-[0.8] active:scale-[.94] hover:rounded-full even:bg-[#121214] hover:scale-[.99] origin-center'>
              <td class='p-4'>
                <button class='focus:outline-none' onClick={() => playAudio(file.src)}>
                  {file.name}
                </button>
              </td>
              <td class='p-4'>
                <p class='block font-sans text-sm antialiased font-normal leading-normal'>
                  {formatTime(file.duration)}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function StarfallEffect() {
  const [stars, setStars] = createSignal([]);

  createEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        x: Math.random() * window.innerWidth,
        y: -20,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.5, // Adjust opacity to make some stars brighter
        animationDuration: Math.random() * 3 + 2,
      };
      setStars((prevStars) => [...prevStars, newStar]);

      // Remove stars that have fallen off the screen
      setStars((prevStars) => prevStars.filter((star) => star.y < window.innerHeight));
    }, 500);

    return () => clearInterval(interval);
  });

  return (
    <svg class="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
      {stars().map((star, index) => (
        <polygon
          key={index}
          points={`${star.x},${star.y} ${star.x + 2},${star.y + 2} ${star.x - 2},${star.y + 2}`} // Star shape
          fill="#FFF" // White color
          opacity={star.opacity}
        >
          <animate
            attributeName="points"
            from={`${star.x},${star.y} ${star.x + 2},${star.y + 2} ${star.x - 2},${star.y + 2}`}
            to={`${star.x},${window.innerHeight + 20} ${star.x + 2},${window.innerHeight + 22} ${star.x - 2},${window.innerHeight + 22}`}
            dur={`${star.animationDuration}s`}
            repeatCount="indefinite"
          />
        </polygon>
      ))}
    </svg>
  );
}

function Main() {
  return (
    <div class='flex absolute inset-y-0 inset-x-0'>
      <div class='flex flex-row transition-all w-full relative text-white'>
        <Sidebar />
        <StarfallEffect />
        <Show when={page() == 'Main'} fallback>
          <Table />
        </Show>

        <Show when={page() == 'ser'} fallback>
          <div class="search-container">
            <StarWarsSearch />
          </div>
        </Show>

        <Show when={page() == 'play'} fallback>
          <Music />
        </Show>
      </div>
    </div>
  );
}

export default Main
