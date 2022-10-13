import React from "react";

class SearchResult extends React.PureComponent {
  render() {
    const { ganres = [], serachString } = this.props;
    const results = ganres.filter((ganre) =>
      ganre.toLowerCase().includes(serachString.toLowerCase())
    );
    const resultList = (
      <ul>
        {results.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    );
    return resultList;
  }
}
const SearchBar = ({ searchFn }) => {
  return (
    <input
      type="text"
      className="input"
      onChange={(e) => searchFn(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default () => {
  const ganres = ["horror", "docs", "scyfy", "fantasy", "action", "arthouse"];
  const [search, setSearch] = React.useState("");
  return (
    <div className="SearchForm">
      <h2>i'm searchBar</h2>
      <SearchBar searchFn={setSearch} />
      <SearchResult ganres={ganres} serachString={search} />
    </div>
  );
};
