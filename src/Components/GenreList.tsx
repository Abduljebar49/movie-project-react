import useGenres from '../hooks/useGenre'

const GenreList = () => {
    const {genres} = useGenres();

  return (
    <ul>
        {genres.map(ele=> <li key={ele.id}>{ele.name}</li>)}
    </ul>
  )
}

export default GenreList