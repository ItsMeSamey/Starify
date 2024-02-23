import { createSignal } from 'solid-js';


function StarWarsSearch() {
  const [searchTerm, setSearchTerm] = createSignal('');
  const [searchResults, setSearchResults] = createSignal([]);
  const [isDialogOpen, setDialogOpen] = createSignal(false);

  function handleSearchInput(event) {
    setSearchTerm(event.target.value);
    const dummyResults = ['Song 1', 'Song 2', 'Song 3']; // Dummy search results
    setSearchResults(dummyResults.filter(result => result.toLowerCase().includes(searchTerm().toLowerCase())));
  }

  function handleSearchResultClick(result) {
    console.log('Clicked on search result:', result);
  }

  function handleSearchIconClick() {
    setDialogOpen(true);
  }

  function handleCloseDialog() {
    setDialogOpen(false);
  }

  return (
    <>
      <div>
        <input type="text" class='mt-7 mx-3 w-[900px] py-3 rounded-2xl px-4 ml-12 bg-[#380402d4]' value={searchTerm()} onInput={handleSearchInput} placeholder="Search for songs..." />
        <div class={isDialogOpen() ? 'block' : 'hidden'}>
          <div>
            <button onClick={handleCloseDialog}>×</button>
            <ul>
              {searchResults().map((result, index) => (
                <li key={index} onClick={() => handleSearchResultClick(result)}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
        <button class='mt-5 px-10 py-3 rounded-2xl bg-[#380402d4] hover:bg-red-900 transition-all hover:text-black'>Search</button>
      </div>
    </>
  );
}


export default StarWarsSearch