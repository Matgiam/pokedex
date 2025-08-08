function SearchFilter({onSearch}){
    return(
<div className="searchFilter">
<input type="text" placeholder="search pokemon" onChange={(e) => onSearch(e.target.value)}/>
</div>
    )
}

export default SearchFilter;