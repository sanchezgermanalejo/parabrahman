export type PronunciationExercise = {
  id: string;
  devanagari: string;
  iast: string;
  syllables: string;
  focus: string;
  guidance: string;
  accepted: readonly string[];
};

export const pronunciationExercises: readonly PronunciationExercise[] = [
  {
    id: "om",
    devanagari: "ॐ",
    iast: "oṃ",
    syllables: "o · ṃ",
    focus: "Vocal larga y resonancia final",
    guidance: "Sostén la vocal sin convertir el final en una consonante m explosiva.",
    accepted: ["ॐ", "ओम्", "om", "oṃ", "aum"],
  },
  {
    id: "atman",
    devanagari: "आत्मन्",
    iast: "ātman",
    syllables: "āt · man",
    focus: "Contraste a / ā y grupo tm",
    guidance: "La primera ā es larga; conserva t y m sin insertar una vocal entre ambas.",
    accepted: ["आत्मन्", "आत्मन", "आत्मा", "ātman", "aatman", "atman"],
  },
  {
    id: "brahman",
    devanagari: "ब्रह्मन्",
    iast: "brahman",
    syllables: "brah · man",
    focus: "Grupo br y aspiración h",
    guidance: "Evita decir bramán: deja oír la h del grupo brah y mantén breve la primera a.",
    accepted: ["ब्रह्मन्", "ब्रह्मन", "ब्रह्म", "brahman", "bráhman"],
  },
  {
    id: "shanti",
    devanagari: "शान्तिः",
    iast: "śāntiḥ",
    syllables: "śān · tiḥ",
    focus: "Palatal ś, ā larga y visarga",
    guidance: "Ś no es una s dental; al final, el visarga es una suave salida de aire, no una j española.",
    accepted: ["शान्तिः", "शांति", "शान्ति", "śāntiḥ", "shanti", "shaanti"],
  },
  {
    id: "tat-tvam-asi",
    devanagari: "तत् त्वम् असि",
    iast: "tat tvam asi",
    syllables: "tat · tvam · a · si",
    focus: "Grupos finales y ritmo de tres palabras",
    guidance: "No borres la t de tat ni separes tv como si tuviera una vocal intermedia.",
    accepted: ["तत् त्वम् असि", "तत्त्वमसि", "tat tvam asi", "tattvamasi", "tatvam asi"],
  },
  {
    id: "aham-brahmasmi",
    devanagari: "अहं ब्रह्मास्मि",
    iast: "ahaṃ brahmāsmi",
    syllables: "a · haṃ · brah · mās · mi",
    focus: "Anusvāra, ā larga y grupo sm",
    guidance: "Mantén la nasal de ahaṃ y la ā larga producida por brahma + asmi.",
    accepted: ["अहं ब्रह्मास्मि", "अहम् ब्रह्मास्मि", "ahaṃ brahmāsmi", "aham brahmasmi", "aham brahma asmi"],
  },
] as const;
