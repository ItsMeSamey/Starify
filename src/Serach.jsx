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
      <div class="flex justify-center fixed w-[70%] mt-10 text-white">
        <input type="text" class="bg-red-950 w-[60%] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" value={searchTerm()} onInput={handleSearchInput} placeholder="Search for songs..." />
        <div class={`absolute top-full right-0 w-72 bg-black text-white rounded-lg overflow-hidden shadow-lg ${isDialogOpen() ? 'block' : 'hidden'}`}>
          <div class="p-4">
            <button class="absolute top-2 right-2 text-white hover:text-gray-400 focus:outline-none" onClick={handleCloseDialog}>×</button>
            <ul class="overflow-y-auto max-h-48">
              {searchResults().map((result, index) => (
                <li key={index} onClick={() => handleSearchResultClick(result)} class="cursor-pointer py-2 px-4 hover:bg-gray-700">{result}</li>
              ))}
            </ul>
          </div>
        </div>
        <button class='px-11 bg-red-950 mx-6 rounded-xl hover:bg-red-800 transition-all'>Search</button>
      </div>
    </>
  );
}

export default StarWarsSearch