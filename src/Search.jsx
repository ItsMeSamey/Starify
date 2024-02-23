import { createSignal, onCleanup } from 'solid-js';
import Setter from './index';

function StarWarsSearch() {
  const [searchTerm, setSearchTerm] = createSignal('');
  const [searchResults, setSearchResults] = createSignal([]);
  const [isDialogOpen, setDialogOpen] = createSignal(false);

  async function fetchData(searchTerm) {
    try {
      const apiKey = 'AiujhgosuhfouwehfouefououhAUWFGUWFGU'; // Replace with your actual API key
      const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${searchTerm}&type=video&videoCategoryId=10');
      const data = await response.json();
      setSearchResults(data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function handleSearchInput(event) {
    setSearchTerm(event.target.value);
    fetchData(event.target.value);
  }

  function handleSearchResultClick(videoId) {
    console.log('Clicked on video with ID:', videoId);
  }

  function handleSearchIconClick() {
    setDialogOpen(true);
  }

  function handleCloseDialog() {
    Setter('ser');
    setDialogOpen(false);
  }


  onCleanup(() => {
    setSearchResults([]);
  });

  return (
    <>
      <div>
        <input type="text" class='mt-7 mx-3 w-[900px] py-3 rounded-2xl px-4 ml-12 bg-[#380402d4]' value={searchTerm()} placeholder="Search for songs..." />
        <div class={isDialogOpen() ? 'block' : 'hidden'}>
          <div>
            <button onClick={handleCloseDialog}>×</button>
            <ul>
              {searchResults().map((item, index) => (
                <li key={index} onClick={() => handleSearchResultClick(item.id.videoId)}>
                  <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
                  <span>{item.snippet.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button class='mt-5 px-10 py-3 rounded-2xl bg-[#380402d4] hover:bg-red-900 transition-all hover:text-black'>Search</button>
      </div>


    </>
  );
}

export default StarWarsSearch;