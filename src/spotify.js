// A data obedece uma ordem em linha e coluna.
// cada linha (1,2,3,4...) tem sua foto respectiva e cada coluna (1,2,3,4...) também possui uma foto respectiva
// Para alterar uma foto, deve ir em assets/images/(nome da coluna)/{número da imagem}.jpg e substitui-la.
// Um exemplo: Quero alterar a primera foto da primeira coluna (Recomendados), devo substituir a primeira foto
// da pasta charts com outra foto de tamanho igual.

// O mesmo exemplo vale para todas as outras imagens.
const data = [
  {
    id: 1,
    title: "Recomendado",
    cards: [
      {
        image: "row_1_1",
        label: "Viral São Paulo",
        description: "Sua atualização diária dos mais escutados...", //Pedro Henrique Lira disse...
      },
      {
        image: "row_1_2",
        label: "Matuê",
        description: "O melhor do Brasil para o mundo",
      },
    ],
  },
  {
    id: 2,
    title: "Essenciais do Hip Hop",
    cards: [
      {
        image: "row_2_1",
        label: "I Love My '90s Hi...",
        description: "Música de rap real da Era de Ouro",
      },
      {
        image: "row_2_2",
        label: "Gold School",
        description: "Pegando de volta. Capa: 50 Cent",
      },
      {
        image: "row_2_3",
        label: "RapCaviar",
        description: "Música de Lil Durk, Playboi Carti e KiD...",
      },
      {
        image: "row_2_4",
        label: "Get Turnt",
        description: "Mode: Turnt",
      },
      {
        image: "row_2_5",
        label: "Signed XOXO",
        description: "Atravessando como Alien I. Capa: Lil Tjay",
      },
      {
        image: "row_2_6",
        label: "Call Fire",
        description: "Holdin'it down for the west side. Cover:...",
      },
      {
        image: "row_2_7",
        label: "Feelin'Myself",
        description: "When you feel like you're 100% that b**...",
      },
      {
        image: "row_2_8",
        label: "Most Necessary",
        description: "A voz oficial da próxima geração. Cov...",
      },
    ],
  },
  {
    id: 3,
    subtitle: "Podcasts que achamos que você vai gostar...",
    title: "Para escutar na ida ao trabalho",
    cards: [
      {
        image: "row_3_2",
        label: "Flow Podcast",
        description: "Flow Podcast",
      },
      {
        image: "row_3_3",
        label: "À Deriva",
        description: "À Deriva",
      },
      {
        image: "row_3_5",
        label: "Motivação Fitness",
        description: "BODY BUILDING",
      },
      {
        image: "row_3_7",
        label: "Podpah",
        description: "Podpah",
      },
      {
        image: "row_3_8",
        label: "7 Good Minutes D...",
        description: "Clyde Lee Dennis",
      },
    ],
  },
  {
    id: 4,
    title: "Vibes calmas",
    cards: [
      {
        image: "row_4_1",
        label: "Jazz Vibes",
        description: "Chill instrumental beats. Artwork: Gize...",
      },
      {
        image: "row_4_2",
        label: "Lo-Fi Beats",
        description: "Beats to relax, study and focus",
      },
      {
        image: "row_4_3",
        label: "Mellow Beats",
        description: "Stay relaxed with these low-key beats and",
      },
      {
        image: "row_4_4",
        label: "Lush Lofi",
        description: "Talha Anjum",
      },
      {
        image: "row_4_5",
        label: "Chill Instrumental...",
        description: "Instrumental beats to chill to.",
      },
      {
        image: "row_4_6",
        label: "Lo-Fi Cafe",
        description: "Chill beats for cool coffeehouse vibes.",
      },
      {
        image: "row_4_7",
        label: "Sunny Beats",
        description: "Chill, Tropical vibes only.",
      },
      {
        image: "row_4_8",
        label: "Moonlight Bumps",
        description: "Moody beats for sleepless nights.",
      },
    ],
  },
  {
    id: 5,
    title: "Mood",
    subtitle: "Playlists que batem com seu mood",
    cards: [
      {
        image: "row_5_1",
        label: "Mood Booster",
        description: "Fique feliz com a dose de bem-estar de hoje...",
      },
      {
        image: "row_5_2",
        label: "Alone Again",
        description: "Quando tudo é solitário, eu posso ser meu ser...",
      },
      {
        image: "row_5_3",
        label: "Life Sucks",
        description: "Sentindo que tudo simplesmente é uma merda?",
      },
      {
        image: "row_5_4",
        label: "Feelin' Good",
        description: "Sinta-se bem com isso positivamente atemporal...",
      },
      {
        image: "row_5_5",
        label: "Heart Beats",
        description: "Música de dança para o coração <3",
      },
      {
        image: "row_5_6",
        label: "Dark & Stormy",
        description: "Lindas faixas sombrias e dramáticas.",
      },
      {
        image: "row_5_8",
        label: "Feel Good Piano",
        description: "Música clássica positiva",
      },
    ],
  },
  {
    id: 6,
    title: "Músicas para ouvir em casa",
    cards: [
      {
        image: "row_6_1",
        label: "Today's Top Hits",
        description: "Justin Bieber is on top 50!",
      },
      {
        image: "row_6_6",
        label: "Sono REM",
        description:
          "Obtenha as ondas de sono do seu cérebro da maneira certa!",
      },
      {
        image: "row_6_7",
        label: "Dil Se, Thank you.",
        description: "Um tributo musical.",
      },
    ],
  },
  {
    id: 7,
    title: "Focus",
    subtitle: "Música para te ajudar a se concentrar",
    cards: [
      {
        image: "row_7_1",
        label: "Lo-Fi Beats",
        description: "Beats para relaxar, estudar e se concentrar.",
      },
      {
        image: "row_7_2",
        label: "Piano da Paz",
        description: "Relaxe e delicie-se com belas peças de piano",
      },
      {
        image: "row_7_3",
        label: "Masssima Concent...",
        description: "Per quei momenti in cui non sono...",
      },
      {
        image: "row_7_4",
        label: "Intense Studying",
        description: "Piano que melhora o foco para sua sessão de estudo.",
      },
      {
        image: "row_7_5",
        label: "Instrumental Study",
        description: "Um pano de fundo musical suave para o seu estudo.",
      },
      {
        image: "row_7_6",
        label: "Chilli Lofi Study B...",
        description: "O estudo perfeito bate, 24h de...",
      },
      {
        image: "row_7_7",
        label: "Deep Focus",
        description: "mantenha a calma e o foco com ambiente e pos...",
      },
      {
        image: "row_7_8",
        label: "Meditazione",
        description: "Entra in contatto con la tua pace interiore.",
      },
    ],
  },
];

export { data };
