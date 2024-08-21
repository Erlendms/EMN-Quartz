import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Uten tittel",
    description: "Ingen beskrivelse gitt.",
  },
  components: {
    callout: {
      note: "Notat",
      abstract: "Sammendrag",
      info: "Informasjon",
      todo: "Gjøremål",
      tip: "Tips",
      success: "Suksess",
      question: "Spørsmål",
      warning: "Advarsel",
      failure: "Fiasko",
      danger: "Fare",
      bug: "Feil",
      example: "Eksempel",
      quote: "Sitat",
    },
    backlinks: {
      title: "Tilbakelenker",
      noBacklinksFound: "Ingen tilbakelenker funnet",
    },
    themeToggle: {
      lightMode: "Lysmodus",
      darkMode: "Mørkmodus",
    },
    explorer: {
      title: "Utforsker",
    },
    footer: {
      createdWith: "Skapt med",
    },
    graph: {
      title: "Grafvisning",
    },
    recentNotes: {
      title: "Ferske notater",
      seeRemainingMore: ({ remaining }) => `See ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Innlemming av ${targetSlug}`,
      linkToOriginal: "Lenke til original",
    },
    search: {
      title: "Søk",
      searchBarPlaceholder: "Søk etter noe",
    },
    tableOfContents: {
      title: "Innholdsfortegnelse",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} minutters lesning`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Ferske notater",
      lastFewNotes: ({ count }) => `De ${count} siste notatene`,
    },
    error: {
      title: "Ikke funnet",
      notFound: "Enten er denne sida privat, eller så finnes den ikke.",
      home: "Gå tilbake til hjemmesida",
    },
    folderContent: {
      folder: "Mappe",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "Ett element i denne mappa." : `${count} elementer i denne mappa.`,
    },
    tagContent: {
      tag: "Knagg",
      tagIndex: "Knaggindex",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 elementer med denne knaggen." : `${count} elementer med denne knaggen.`,
      showingFirst: ({ count }) => `Vis de ${count} første knaggene.`,
      totalTags: ({ count }) => `Fant totalt ${count} knagger.`,
    },
  },
} as const satisfies Translation
