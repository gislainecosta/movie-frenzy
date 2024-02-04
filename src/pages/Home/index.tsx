import { useState } from "react";
import { IoArrowUndoSharp } from "react-icons/io5";
import { IGenre, IListMovie } from "../../redux/reducers/movies/types";
import Genres from "../../components/Genres";
import MoviesList from "../../layouts/MoviesList";
import * as St from "./styles";

export default function Home() {
  const [genre, setGenre] = useState<IGenre>({
    id: 0,
    name: "",
  });

  const listGenres: IGenre[] = [
    {
      id: 28,
      name: "Ação",
    },
    {
      id: 12,
      name: "Aventura",
    },
    {
      id: 16,
      name: "Animação",
    },
    {
      id: 35,
      name: "Comédia",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentário",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Família",
    },
    {
      id: 14,
      name: "Fantasia",
    },
    {
      id: 36,
      name: "História",
    },
    {
      id: 27,
      name: "Terror",
    },
    {
      id: 10402,
      name: "Música",
    },
    {
      id: 9648,
      name: "Mistério",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Ficção científica",
    },
    {
      id: 10770,
      name: "Cinema TV",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "Guerra",
    },
    {
      id: 37,
      name: "Faroeste",
    },
  ];

  const listMovies: IListMovie[] = [
    {
      adult: false,
      backdrop_path: "/sdh76YtGseZHPk4WiOJjMzKKFSB.jpg",
      genre_ids: [16, 18],
      id: 1056803,
      original_language: "ja",
      original_title: "青春ブタ野郎はおでかけシスターの夢を見ない",
      overview:
        "Depois de um dezembro exaustivo, Sakuta está rapidamente se aproximando do final do segundo ano do ensino médio. Como Mai é uma estudante do terceiro ano, eles não têm muito tempo juntos antes da formatura. Enquanto isso, sua irmã, Kaede, está se aventurando lenta mas continuamente ao ar livre novamente. Assim que ela começa a se firmar, ela anuncia seu objetivo mais ambicioso até então: cursar o ensino médio de seu irmão! Sakuta sabe melhor do que ninguém o quão difícil isso será para Kaede e está pronto para apoiá-la como puder. Ele só não tem certeza se isso é o melhor para ela... ou o que ela realmente quer...",
      popularity: 43.743,
      poster_path: "/o3Yc0plKnzpck0SM3rQLjWBHel8.jpg",
      release_date: "2023-06-23",
      title: "Seishun Buta Yarou wa Dekake Sister no Yume wo Minai",
      video: false,
      vote_average: 7.964,
      vote_count: 14,
    },
    {
      adult: false,
      backdrop_path: "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
      genre_ids: [35, 10751, 14],
      id: 787699,
      original_language: "en",
      original_title: "Wonka",
      overview:
        "Um jovem Willy Wonka embarca em uma missão para espalhar alegria por meio de seu chocolate, que rapidamente se torna um fenômeno.",
      popularity: 2113.854,
      poster_path: "/5IiODXjfLhVk5OhBlAqueCB4GQv.jpg",
      release_date: "2023-12-06",
      title: "Wonka",
      video: false,
      vote_average: 7.227,
      vote_count: 1697,
    },
    {
      adult: false,
      backdrop_path: "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
      genre_ids: [16, 10751, 14, 12],
      id: 1022796,
      original_language: "en",
      original_title: "Wish",
      overview:
        "No reino mágico de Rosas, Asha é uma moça perspicaz que faz um desejo tão poderoso que é atendido por uma força cósmica: uma pequena esfera de energia ilimitada chamada Star. Juntas, Asha e Star enfrentam o Rei Magnifico pra salvar a comunidade e provar que, quando um ser humano se une à energia das estrelas, coisas maravilhosas podem acontecer.",
      popularity: 1486.152,
      poster_path: "/8WVxrnmtATdRYzn0cFJfsWPdraL.jpg",
      release_date: "2023-11-13",
      title: "Wish: O Poder dos Desejos",
      video: false,
      vote_average: 6.655,
      vote_count: 564,
    },
    {
      adult: false,
      backdrop_path: "/meyhnvssZOPPjud4F1CjOb4snET.jpg",
      genre_ids: [16, 12, 35, 10751, 28],
      id: 940551,
      original_language: "en",
      original_title: "Migration",
      overview:
        "A família Mallard está um pouco refém da rotina. Enquanto Mack, o pai, se contenta em manter sua família segura nos arredores de um lago da Nova Inglaterra para sempre, Pam, a mãe, está ansiosa para agitar as coisas e mostrar a seus filhos – o adolescente Dax e a patinha Gwen – o mundo inteiro. Quando uma família de patos migratórios aterrissa em seu lago com histórias emocionantes de lugares distantes, Pam convence Mack a embarcar em uma viagem em família, via Nova York, para a Jamaica tropical.",
      popularity: 1320.292,
      poster_path: "/2KPvdtGjeFT8IwxUkUWmifokXG0.jpg",
      release_date: "2023-12-06",
      title: "Patos!",
      video: false,
      vote_average: 7.782,
      vote_count: 417,
    },
    {
      adult: false,
      backdrop_path: "/tLxjbT5ROZRwYcpNT3nfQbqkApk.jpg",
      genre_ids: [878, 12, 28],
      id: 609681,
      original_language: "en",
      original_title: "The Marvels",
      overview:
        'Quando suas obrigações a levam a uma fenda espacial anômala ligada a um revolucionário Kree, os poderes de Carol Danvers, a Capitã Marvel, se entrelaçam aos de Kamala Khan, a Ms. Marvel, e aos da sobrinha de Carol, astronauta da S.A.B.E.R., Capitã Monica Rambeau. Juntas, esse trio improvável deve ser unir para salvar o universo como "As Marvels".',
      popularity: 1292.419,
      poster_path: "/gmtrDKIKXRFkChgHGALZTiKDVo0.jpg",
      release_date: "2023-11-08",
      title: "As Marvels",
      video: false,
      vote_average: 6.414,
      vote_count: 1343,
    },
    {
      adult: false,
      backdrop_path: "/unvtbkgxh47BewQ8pENvdOdme0r.jpg",
      genre_ids: [28, 18],
      id: 1212073,
      original_language: "de",
      original_title: "60 Minuten",
      overview:
        "Desesperado para não perder a guarda da filha, um lutador de MMA abandona uma luta importante e corre por Berlim para chegar à festa de aniversário da menina.",
      popularity: 942.754,
      poster_path: "/n5wjsuYh954HLagCnqrLpPT8xi7.jpg",
      release_date: "2024-01-19",
      title: "60 Minutos",
      video: false,
      vote_average: 6.911,
      vote_count: 180,
    },
    {
      adult: false,
      backdrop_path: "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
      genre_ids: [28, 53],
      id: 866398,
      original_language: "en",
      original_title: "The Beekeeper",
      overview:
        "Clay está em busca de vingança e não vai parar até acabar com o sistema criminoso responsável pela morte de sua amiga. O plano brutal de Clay, um ex-agente de uma organização secreta poderosa conhecida como “Beekeepers”, ganha dimensões nacionais envolvendo governos e as instituições mais influentes do mundo. Determinado a fazer justiça com suas próprias mãos, ele está disposto a tudo e não vai poupar ninguém para concluir seu plano.",
      popularity: 906.305,
      poster_path: "/cCGFvoxzaBbYM3I68s6F939fybN.jpg",
      release_date: "2024-01-10",
      title: "Beekeeper - Rede de Vingança",
      video: false,
      vote_average: 7.251,
      vote_count: 342,
    },
    {
      adult: false,
      backdrop_path: "/xCt3Ha6hhHep5pwiW2FSenC59Gn.jpg",
      genre_ids: [28, 10752],
      id: 965571,
      original_language: "ru",
      original_title: "Время патриотов",
      overview:
        "Os irmãos Sultan e Bekzat continuam a tradição familiar: o mais velho, Sultan, é um valente oficial de inteligência, o mais novo é um talentoso piloto de caça. O pai morreu no cumprimento do dever, mas a memória dele e do serviço é a única coisa que une os irmãos, que de forma alguma conseguem encontrar uma linguagem comum. Quando a segurança do país é ameaçada por um grupo terrorista internacional, os irmãos têm de se unir para salvar vidas humanas e perceber que a família, os entes queridos e a Pátria são o que têm de mais valioso.",
      popularity: 728.657,
      poster_path: "/ozHweLTPGEWRQyr1z4npGjm6ko0.jpg",
      release_date: "2022-04-28",
      title: "Irmãos de Guerra",
      video: false,
      vote_average: 9.025,
      vote_count: 20,
    },
    {
      adult: false,
      backdrop_path: "/p9DKeXp6FPJtAQ1k13Z4zPWrCbN.jpg",
      genre_ids: [18],
      id: 1058694,
      original_language: "en",
      original_title: "Radical",
      overview: "",
      popularity: 678.344,
      poster_path: "/eSatbygYZp8ooprBHZdb6GFZxGB.jpg",
      release_date: "2023-10-19",
      title: "Radical",
      video: false,
      vote_average: 8.588,
      vote_count: 154,
    },
    {
      adult: false,
      backdrop_path: "/ba9TgAO4I8RyA2LljzR3MspHaM9.jpg",
      genre_ids: [28, 878, 53],
      id: 799155,
      original_language: "hi",
      original_title: "Attack",
      overview:
        "Depois de perder tudo devido a um ataque terrorista, o ex-agente do governo Arjun Shergill participa de um projeto que o torna um supersoldado.",
      popularity: 674.544,
      poster_path: "/5jGKbYuZtdxSNOocI6ZziQeiY4n.jpg",
      release_date: "2022-04-01",
      title: "Missão Ataque",
      video: false,
      vote_average: 7.398,
      vote_count: 88,
    },
    {
      adult: false,
      backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
      genre_ids: [36, 10752, 18],
      id: 753342,
      original_language: "en",
      original_title: "Napoleon",
      overview:
        "Um olhar pessoal sobre as origens do líder militar francês e sua rápida e implacável ascensão a imperador. A história é vista através do prisma do relacionamento dependente e volátil de Napoleão com sua esposa e amor verdadeiro, Josefina.",
      popularity: 669.073,
      poster_path: "/oaUS0YJN3cHpvin1BMNmmnv0gRX.jpg",
      release_date: "2023-11-22",
      title: "Napoleão",
      video: false,
      vote_average: 6.527,
      vote_count: 1525,
    },
    {
      adult: false,
      backdrop_path: "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
      genre_ids: [28, 35, 80],
      id: 955916,
      original_language: "en",
      original_title: "Lift",
      overview:
        "Uma equipe internacional de ladrões liderada por Cyrus Whitaker corre contra o tempo para roubar 500 milhões de dólares em barras de ouro de um avião a mais de 12 mil metros de altitude.",
      popularity: 660.29,
      poster_path: "/ca74jjIYRVDdsnlWk8JzyVY49dE.jpg",
      release_date: "2024-01-10",
      title: "Lift: Roubo nas Alturas",
      video: false,
      vote_average: 6.514,
      vote_count: 625,
    },
    {
      adult: false,
      backdrop_path: "/1BFLsVxE1NzCIwicfOPtzzB4Kxh.jpg",
      genre_ids: [80, 53, 28],
      id: 982940,
      original_language: "en",
      original_title: "Due Justice",
      overview: "",
      popularity: 624.212,
      poster_path: "/35Uef7fz9ctYbJLXbJBCqvtttEQ.jpg",
      release_date: "2023-11-24",
      title: "Due Justice",
      video: false,
      vote_average: 6.8,
      vote_count: 10,
    },
    {
      adult: false,
      backdrop_path: "/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg",
      genre_ids: [28, 878, 18],
      id: 933131,
      original_language: "ko",
      original_title: "황야",
      overview:
        "Após um terremoto transformar Seul em uma terra sem lei, um caçador decide resgatar uma adolescente sequestrada por um médico insano.",
      popularity: 621.228,
      poster_path: "/vT3xahepzP796ei0NiZIZ6t8vsl.jpg",
      release_date: "2024-01-26",
      title: "Em Ruínas",
      video: false,
      vote_average: 7.049,
      vote_count: 103,
    },
    {
      adult: false,
      backdrop_path: "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
      genre_ids: [18, 36],
      id: 906126,
      original_language: "es",
      original_title: "La sociedad de la nieve",
      overview:
        "Em 13 de outubro de 1972, o voo 571 da Força Aérea Uruguaia, fretado para levar um time de rúgbi ao Chile, cai em uma geleira no coração da Cordilheira dos Andes.",
      popularity: 619.382,
      poster_path: "/7fQTmvKgVGxifieVryqqlxohkoW.jpg",
      release_date: "2023-12-13",
      title: "A Sociedade da Neve",
      video: false,
      vote_average: 8.092,
      vote_count: 1572,
    },
    {
      adult: false,
      backdrop_path: "/kWyQh9fCrgcMfhqZmqtp89Q0TrT.jpg",
      genre_ids: [35, 10749],
      id: 1072790,
      original_language: "en",
      original_title: "Anyone But You",
      overview:
        "Bea e Ben parecem o casal perfeito, mas depois de um primeiro encontro incrível, algo acontece que transforma sua atração ardente em gelo - até que eles se encontram inesperadamente juntos em um casamento na Austrália.  Então eles fazem o que dois adultos maduros fariam: fingem ser um casal.",
      popularity: 560.976,
      poster_path: "/f5e8cT4vBQ1ZRSXC658CvUnzzkl.jpg",
      release_date: "2023-12-21",
      title: "Todos Menos Você",
      video: false,
      vote_average: 7.402,
      vote_count: 178,
    },
    {
      adult: false,
      backdrop_path: "/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
      genre_ids: [878, 10749, 35],
      id: 792307,
      original_language: "en",
      original_title: "Poor Things",
      overview:
        "A jovem Bella Baxter é trazida de volta à vida pelo cientista Dr. Godwin Baxter. Querendo ver mais do mundo, ela foge com um advogado e viaja pelos continentes. Livre dos preconceitos de sua época, Bella exige igualdade e libertação.",
      popularity: 510.331,
      poster_path: "/8YPgNYhaXB70hc65ggrm6l9ftrE.jpg",
      release_date: "2023-12-07",
      title: "Pobres Criaturas",
      video: false,
      vote_average: 8.147,
      vote_count: 692,
    },
    {
      adult: false,
      backdrop_path: "/yl2GfeCaPoxChcGyM5p7vYp1CKS.jpg",
      genre_ids: [28, 35, 10749],
      id: 848187,
      original_language: "en",
      original_title: "Role Play",
      overview:
        "Emma e Dave apimentam seu aniversário de casamento com uma noite disfarçados em Nova York. Mas as coisas se tornam perigosas quando a vida secreta de Emma como assassina de aluguel, que Dave desconhece, é exposta por Bob, colocando sua família em risco. Emma terá que contar com suas habilidades letais e determinação para proteger a família a todo custo.",
      popularity: 455.229,
      poster_path: "/d9O2dIxU1X8Qc8s8kf9RFiiDMMB.jpg",
      release_date: "2023-12-14",
      title: "O Jogo do Disfarce",
      video: false,
      vote_average: 6.031,
      vote_count: 262,
    },
    {
      adult: false,
      backdrop_path: "/a0GM57AnJtNi7lMOCamniiyV10W.jpg",
      genre_ids: [16, 12, 14],
      id: 508883,
      original_language: "ja",
      original_title: "君たちはどう生きるか",
      overview:
        "Depois de perder a mãe durante a guerra, o jovem Mahito muda-se para a propriedade de sua família no campo. Lá, uma série de eventos misteriosos o levam a uma torre antiga e isolada, lar de uma travessa garça cinzenta. Quando a nova madrasta de Mahito desaparece, ele segue a garça até a torre e entra num mundo fantástico partilhado pelos vivos e pelos mortos. Ao embarcar em uma jornada épica com a garça como guia, Mahito deve descobrir os segredos deste mundo e a verdade sobre si mesmo.",
      popularity: 452.086,
      poster_path: "/qPNmxw9Ag66rmaYPKDpob9HIpth.jpg",
      release_date: "2023-07-14",
      title: "O Menino e a Garça",
      video: false,
      vote_average: 7.453,
      vote_count: 883,
    },
    {
      adult: false,
      backdrop_path: "/ycnO0cjsAROSGJKuMODgRtWsHQw.jpg",
      genre_ids: [18, 36],
      id: 872585,
      original_language: "en",
      original_title: "Oppenheimer",
      overview:
        "A história do físico americano J. Robert Oppenheimer, seu papel no Projeto Manhattan e no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial, e o quanto isso mudaria a história do mundo para sempre.",
      popularity: 446.574,
      poster_path: "/c0DCmfC7Et2K3URnIJ4ahJpeXR2.jpg",
      release_date: "2023-07-19",
      title: "Oppenheimer",
      video: false,
      vote_average: 8.115,
      vote_count: 6489,
    },
  ];

  const lastMovies: IListMovie[] = [
    {
      adult: false,
      backdrop_path: "/a0GM57AnJtNi7lMOCamniiyV10W.jpg",
      genre_ids: [16, 12, 14],
      id: 508883,
      original_language: "ja",
      original_title: "君たちはどう生きるか",
      overview:
        "Depois de perder a mãe durante a guerra, o jovem Mahito muda-se para a propriedade de sua família no campo. Lá, uma série de eventos misteriosos o levam a uma torre antiga e isolada, lar de uma travessa garça cinzenta. Quando a nova madrasta de Mahito desaparece, ele segue a garça até a torre e entra num mundo fantástico partilhado pelos vivos e pelos mortos. Ao embarcar em uma jornada épica com a garça como guia, Mahito deve descobrir os segredos deste mundo e a verdade sobre si mesmo.",
      popularity: 452.086,
      poster_path: "/qPNmxw9Ag66rmaYPKDpob9HIpth.jpg",
      release_date: "2023-07-14",
      title: "O Menino e a Garça",
      video: false,
      vote_average: 7.453,
      vote_count: 883,
    },
    {
      adult: false,
      backdrop_path: "/ycnO0cjsAROSGJKuMODgRtWsHQw.jpg",
      genre_ids: [18, 36],
      id: 872585,
      original_language: "en",
      original_title: "Oppenheimer",
      overview:
        "A história do físico americano J. Robert Oppenheimer, seu papel no Projeto Manhattan e no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial, e o quanto isso mudaria a história do mundo para sempre.",
      popularity: 446.574,
      poster_path: "/c0DCmfC7Et2K3URnIJ4ahJpeXR2.jpg",
      release_date: "2023-07-19",
      title: "Oppenheimer",
      video: false,
      vote_average: 8.115,
      vote_count: 6489,
    },
    {
      adult: false,
      backdrop_path: "/kWyQh9fCrgcMfhqZmqtp89Q0TrT.jpg",
      genre_ids: [35, 10749],
      id: 1072790,
      original_language: "en",
      original_title: "Anyone But You",
      overview:
        "Bea e Ben parecem o casal perfeito, mas depois de um primeiro encontro incrível, algo acontece que transforma sua atração ardente em gelo - até que eles se encontram inesperadamente juntos em um casamento na Austrália.  Então eles fazem o que dois adultos maduros fariam: fingem ser um casal.",
      popularity: 560.976,
      poster_path: "/f5e8cT4vBQ1ZRSXC658CvUnzzkl.jpg",
      release_date: "2023-12-21",
      title: "Todos Menos Você",
      video: false,
      vote_average: 7.402,
      vote_count: 178,
    },
    {
      adult: false,
      backdrop_path: "/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
      genre_ids: [878, 10749, 35],
      id: 792307,
      original_language: "en",
      original_title: "Poor Things",
      overview:
        "A jovem Bella Baxter é trazida de volta à vida pelo cientista Dr. Godwin Baxter. Querendo ver mais do mundo, ela foge com um advogado e viaja pelos continentes. Livre dos preconceitos de sua época, Bella exige igualdade e libertação.",
      popularity: 510.331,
      poster_path: "/8YPgNYhaXB70hc65ggrm6l9ftrE.jpg",
      release_date: "2023-12-07",
      title: "Pobres Criaturas",
      video: false,
      vote_average: 8.147,
      vote_count: 692,
    },
    {
      adult: false,
      backdrop_path: "/yl2GfeCaPoxChcGyM5p7vYp1CKS.jpg",
      genre_ids: [28, 35, 10749],
      id: 848187,
      original_language: "en",
      original_title: "Role Play",
      overview:
        "Emma e Dave apimentam seu aniversário de casamento com uma noite disfarçados em Nova York. Mas as coisas se tornam perigosas quando a vida secreta de Emma como assassina de aluguel, que Dave desconhece, é exposta por Bob, colocando sua família em risco. Emma terá que contar com suas habilidades letais e determinação para proteger a família a todo custo.",
      popularity: 455.229,
      poster_path: "/d9O2dIxU1X8Qc8s8kf9RFiiDMMB.jpg",
      release_date: "2023-12-14",
      title: "O Jogo do Disfarce",
      video: false,
      vote_average: 6.031,
      vote_count: 262,
    },
  ];

  return (
    <St.HomeContainer>
      <St.Navbar>
        {listGenres.map((movieGenre) => (
          <Genres
            key={movieGenre.id}
            genre={movieGenre}
            setGenre={setGenre}
            isSelected={movieGenre.name === genre.name}
          />
        ))}
      </St.Navbar>

      {genre.id === 0 ? (
        <St.MoviesList>
          <St.PageTitle>Visto por último</St.PageTitle>
          <MoviesList movies={lastMovies} />

          <St.PageTitle style={{ marginTop: "4rem" }}>
            Filmes em destaque
          </St.PageTitle>
          <MoviesList movies={listMovies} />
        </St.MoviesList>
      ) : (
        <St.MoviesList>
          <St.PageTitle>
            <IoArrowUndoSharp
              style={{ cursor: "pointer" }}
              onClick={() => setGenre({ id: 0, name: "" })}
            />
            <span>Filtrado por: {genre.name}</span>
          </St.PageTitle>
          <MoviesList movies={listMovies} />
        </St.MoviesList>
      )}
    </St.HomeContainer>
  );
}
