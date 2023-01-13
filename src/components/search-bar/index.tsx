interface ISearchBarComponentProps {
  searchTerm: string,
  onSearchChange(searchText?: React.ChangeEvent<HTMLInputElement>): void
}

const SearchBarComponent = ({ searchTerm, onSearchChange }: ISearchBarComponentProps) => {
  return (
    <div className='search-bar-wrapper' data-testid="search-bar-wrapper">
      <input type='text' value={searchTerm} onChange={onSearchChange} placeholder="Search" className="w-full border-2 border-gray-400 h-12 rounded p-1 mt-5 shadow-lg" />
    </div>
  )
}

export default SearchBarComponent;