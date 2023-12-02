import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((ele) => (
        <li key={ele.id}>{ele.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
