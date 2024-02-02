import * as St from "./styles";

export default function Movie() {
  const movie = {
    adult: false,
    backdrop_path: "/lVy5Zqcty2NfemqKYbVJfdg44rK.jpg",
    belongs_to_collection: {
      id: 2883,
      name: "Kill Bill: Coleção",
      poster_path: "/tf1nUtw3LJGUGv1EFFi23iz6ngr.jpg",
      backdrop_path: "/oCLKNACMNrEf4T1EP6BpMXDl5m1.jpg",
    },
    budget: 30000000,
    genres: [
      {
        id: 28,
        name: "Ação",
      },
      {
        id: 80,
        name: "Crime",
      },
    ],
    homepage: "",
    id: 24,
    imdb_id: "tt0266697",
    original_language: "en",
    original_title: "Kill Bill: Vol. 1",
    overview:
      'A ex-assassina conhecida apenas como "A Noiva" acorda de um coma de quatro anos decidida a se vingar de Bill, seu ex-amante e chefe, que tentou matá-la no dia do casamento. Ela está motivada a acertar as contas com cada uma das pessoas envolvidas com a perda da filha, da festa de casamento e dos quatro anos da sua vida. Na jornada, "A Noiva" é submetida a dores físicas agoniantes ao enfrentar a inescrupulosa gangue de Bill, o Esquadrão Assassino de Víboras Mortais.',
    popularity: 54.3,
    poster_path: "/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    production_companies: [
      {
        id: 14,
        logo_path: "/m6AHu84oZQxvq7n1rsvMNJIAsMu.png",
        name: "Miramax",
        origin_country: "US",
      },
      {
        id: 59,
        logo_path: "/yH7OMeSxhfP0AVM6iT0rsF3F4ZC.png",
        name: "A Band Apart",
        origin_country: "US",
      },
      {
        id: 39121,
        logo_path: null,
        name: "Super Cool ManChu",
        origin_country: "",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "2003-10-10",
    revenue: 180906076,
    runtime: 111,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
      {
        english_name: "Japanese",
        iso_639_1: "ja",
        name: "日本語",
      },
      {
        english_name: "French",
        iso_639_1: "fr",
        name: "Français",
      },
    ],
    status: "Released",
    tagline: "O som vibrante da vingança!",
    title: "Kill Bill: Volume 1",
    video: false,
    vote_average: 7.97,
    vote_count: 16554,
  };

  return (
    <St.Container>
      <St.Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <St.Details>
        <p>{movie.title}</p>
        <p>{movie.overview}</p>
      </St.Details>
    </St.Container>
  );
}
