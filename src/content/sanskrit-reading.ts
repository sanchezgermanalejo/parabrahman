export type GrammarTable = {
  id: string;
  title: string;
  level: string;
  purpose: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  notes: readonly string[];
};

export type SanskritToken = {
  form: string;
  lemma: string;
  grammar: string;
  meaning: string;
};

export type SanskritReading = {
  id: string;
  period: string;
  collection: string;
  title: string;
  reference: string;
  devanagari: string;
  iast: string;
  translation: string;
  focus: string;
  tokens: readonly SanskritToken[];
  sourceUrl: string;
  sourceLabel: string;
  caution?: string;
};

export const grammarTables: readonly GrammarTable[] = [
  {
    id: "cases",
    title: "Los ocho casos y los tres números",
    level: "Morfología nominal",
    purpose: "Reconocer la función de una palabra por su terminación, sin depender del orden español.",
    headers: ["Caso", "Función frecuente", "Singular", "Dual", "Plural"],
    rows: [
      ["1. Nominativo", "sujeto / atributo", "devaḥ", "devau", "devāḥ"],
      ["2. Acusativo", "objeto / destino", "devam", "devau", "devān"],
      ["3. Instrumental", "medio / compañía", "devena", "devābhyām", "devaiḥ"],
      ["4. Dativo", "destinatario / finalidad", "devāya", "devābhyām", "devebhyaḥ"],
      ["5. Ablativo", "origen / causa", "devāt", "devābhyām", "devebhyaḥ"],
      ["6. Genitivo", "relación / pertenencia", "devasya", "devayoḥ", "devānām"],
      ["7. Locativo", "lugar / ámbito", "deve", "devayoḥ", "deveṣu"],
      ["8. Vocativo", "llamado", "deva", "devau", "devāḥ"],
    ],
    notes: [
      "Paradigma modelo: deva-, masculino en -a. No todas las palabras usan estas terminaciones.",
      "El dual es una categoría gramatical propia: designa exactamente dos.",
    ],
  },
  {
    id: "pronouns",
    title: "Pronombres decisivos en Vedānta",
    level: "Morfología y referencia",
    purpose: "Distinguir quién conoce, qué se señala y cómo se construyen los mahāvākyas.",
    headers: ["Base", "Masculino", "Neutro", "Valor de lectura", "Ejemplo"],
    rows: [
      ["tad", "saḥ", "tat", "eso / aquello", "tat tvam asi"],
      ["idam", "ayam", "idam", "esto, presente ante nosotros", "idaṃ sarvam"],
      ["asmad", "aham", "—", "yo, primera persona", "ahaṃ brahmāsmi"],
      ["yuṣmad", "tvam", "—", "tú, segunda persona", "tvam asi"],
      ["kim", "kaḥ", "kim", "qué / quién", "kasya svid dhanam"],
    ],
    notes: ["Las formas pronominales son irregulares y deben estudiarse como paradigmas propios."],
  },
  {
    id: "nominal-themes",
    title: "Temas nominales comparados",
    level: "Morfología nominal",
    purpose: "Reconocer que la declinación depende de la terminación del tema, el género y el número.",
    headers: ["Tipo", "Nominativo sg.", "Acusativo sg.", "Genitivo sg.", "Modelo"],
    rows: [
      ["Masculino en -a", "devaḥ", "devam", "devasya", "deva · dios"],
      ["Neutro en -a", "phalam", "phalam", "phalasya", "phala · fruto"],
      ["Femenino en -ā", "vidyā", "vidyām", "vidyāyāḥ", "vidyā · conocimiento"],
      ["Masculino en -i", "agniḥ", "agnim", "agneḥ", "agni · fuego"],
      ["Masculino en -ṛ", "kartā", "kartāram", "kartuḥ", "kartṛ · hacedor"],
      ["Consonántico en -n", "ātmā", "ātmānam", "ātmanaḥ", "ātman · Sí mismo"],
    ],
    notes: [
      "En los neutros, nominativo y acusativo coinciden; en plural suelen terminar en -āni.",
      "La forma de diccionario permite identificar el tema que gobierna el paradigma.",
    ],
  },
  {
    id: "verbs",
    title: "Presente: √bhū, √as y √gam",
    level: "Morfología verbal",
    purpose: "Identificar persona y número en tres raíces de altísima frecuencia.",
    headers: ["Persona", "√bhū · ser/llegar a ser", "√as · ser", "√gam · ir"],
    rows: [
      ["3.ª singular", "bhavati", "asti", "gacchati"],
      ["3.ª dual", "bhavataḥ", "staḥ", "gacchataḥ"],
      ["3.ª plural", "bhavanti", "santi", "gacchanti"],
      ["2.ª singular", "bhavasi", "asi", "gacchasi"],
      ["1.ª singular", "bhavāmi", "asmi", "gacchāmi"],
    ],
    notes: [
      "La raíz puede cambiar al formar el tema: √gam → gaccha-.",
      "asmi y asi permiten reconocer ahaṃ brahmāsmi y tat tvam asi.",
    ],
  },
  {
    id: "verbal-systems",
    title: "Tiempos y modos esenciales",
    level: "Sistema verbal",
    purpose: "Distinguir una afirmación, una orden, una posibilidad, un relato pasado y una proyección futura.",
    headers: ["Sistema", "Valor principal", "Ejemplo √bhū", "Lectura"],
    rows: [
      ["Presente · laṭ", "acción actual o general", "bhavati", "es / llega a ser"],
      ["Imperfecto · laṅ", "pasado narrativo", "abhavat", "era / llegó a ser"],
      ["Futuro · lṛṭ", "acción futura", "bhaviṣyati", "será / llegará a ser"],
      ["Imperativo · loṭ", "orden o exhortación", "bhavatu", "que sea"],
      ["Optativo · liṅ", "posibilidad, deseo o prescripción", "bhavet", "podría/debería ser"],
      ["Perfecto · liṭ", "pasado completado o remoto", "babhūva", "llegó a ser"],
    ],
    notes: [
      "Los diez lakāras tradicionales se estudian progresivamente; este cuadro reúne los más frecuentes para comenzar a leer.",
      "El aoristo y las formas védicas reciben tratamiento específico cuando aparecen en el corpus.",
    ],
  },
  {
    id: "non-finite",
    title: "Participios y formas no personales",
    level: "Morfología verbal aplicada",
    purpose: "Resolver oraciones condensadas que no usan un verbo personal como núcleo explícito.",
    headers: ["Forma", "Marca frecuente", "Ejemplo", "Valor orientativo"],
    rows: [
      ["Participio presente activo", "-ant / -at", "bhavat", "que es / siendo"],
      ["Participio pasado pasivo", "-ta / -na", "jñāta", "conocido"],
      ["Participio futuro pasivo", "-tavya / -anīya / -ya", "jñātavya", "que debe ser conocido"],
      ["Absolutivo", "-tvā / -ya", "jñātvā", "habiendo conocido"],
      ["Infinitivo", "-tum", "jñātum", "para conocer"],
      ["Nombre de agente", "-tṛ", "jñātṛ", "conocedor"],
    ],
    notes: ["Una forma en -ta puede funcionar como participio o adjetivo; caso, género y contexto deciden su relación."],
  },
  {
    id: "sandhi",
    title: "Sandhi de alta frecuencia",
    level: "Fonología aplicada",
    purpose: "Deshacer las uniones sonoras para recuperar las palabras del diccionario.",
    headers: ["Encuentro", "Resultado usual", "Ejemplo unido", "Segmentación"],
    rows: [
      ["a/ā + a/ā", "ā", "brahmāsmi", "brahma + asmi"],
      ["a/ā + i/ī", "e", "naiva", "na + eva"],
      ["a/ā + u/ū", "o", "tatropadeśaḥ", "tatra + upadeśaḥ"],
      ["aḥ + vocal sonora", "o / r / pérdida contextual", "namo namaḥ", "namaḥ + namaḥ"],
      ["m final ante consonante", "anusvāra frecuente", "idaṃ sarvam", "idam + sarvam"],
      ["t + c", "cc", "saccit", "sat + cit"],
    ],
    notes: [
      "El sandhi no es decoración ortográfica: registra ajustes fonéticos regulares.",
      "Las reglas de visarga dependen del sonido siguiente; se enseñan por familias, no con una sola fórmula.",
    ],
  },
  {
    id: "compounds",
    title: "Samāsa: cómo se condensan las ideas",
    level: "Composición nominal",
    purpose: "Expandir compuestos antes de traducirlos como una unidad opaca.",
    headers: ["Tipo", "Relación", "Ejemplo", "Expansión orientativa"],
    rows: [
      ["Tatpuruṣa", "un miembro depende del otro", "ātmajñānam", "ātmanaḥ jñānam · conocimiento del Sí mismo"],
      ["Karmadhāraya", "aposición o cualidad", "paramātman", "paramaḥ ātmā · el Sí mismo supremo"],
      ["Dvandva", "coordinación", "nāmarūpe", "nāma ca rūpaṃ ca · nombre y forma"],
      ["Bahuvrīhi", "describe algo externo", "jitendriyaḥ", "jitāni indriyāṇi yena · aquel cuyos sentidos están dominados"],
      ["Avyayībhāva", "primer miembro indeclinable", "yathāśakti", "śaktim anatikramya · según la capacidad"],
    ],
    notes: ["La expansión es una hipótesis de análisis que debe confirmarse por contexto."],
  },
  {
    id: "syntax",
    title: "Sintaxis y pares correlativos",
    level: "Construcción de la oración",
    purpose: "Reconstruir relaciones lógicas aunque el orden de palabras sea flexible.",
    headers: ["Construcción", "Primer miembro", "Correlato", "Sentido"],
    rows: [
      ["Relativo-demostrativo", "yaḥ / yat", "saḥ / tat", "quien/lo que… ese/eso"],
      ["Temporal", "yadā", "tadā", "cuando… entonces"],
      ["Modal", "yathā", "tathā", "como… así"],
      ["Causal", "yasmāt", "tasmāt", "porque/de donde… por eso"],
      ["Condicional", "yadi", "tarhi", "si… entonces"],
      ["Negación", "na", "mā", "no declarativo… no prohibitivo"],
    ],
    notes: [
      "La cópula asti puede omitirse en una oración nominal: tat satyam puede leerse ‘eso [es] verdad’.",
      "iti cierra una cita, pensamiento, denominación o explicación y debe analizarse antes de puntuar en español.",
    ],
  },
  {
    id: "vedic-classical",
    title: "Sánscrito védico y clásico: no son idénticos",
    level: "Historia de la lengua",
    purpose: "Evitar aplicar mecánicamente una gramática clásica a formas arcaicas del Veda.",
    headers: ["Aspecto", "Védico", "Clásico", "Consecuencia práctica"],
    rows: [
      ["Acento", "udātta, anudātta, svarita", "normalmente no se escribe", "consultar edición acentuada para recitación"],
      ["Sistema verbal", "subjuntivo e injuntivo productivos", "sistema más regularizado", "algunas formas no aparecen en manuales básicos"],
      ["Infinitivos", "varias formaciones", "principalmente -tum", "analizar el pasaje con gramática védica"],
      ["Orden y partículas", "más libre y arcaico", "usos más estabilizados", "no forzar el orden del español"],
      ["Texto oral", "acentuación y tradición de recitación centrales", "lectura literaria predominante", "sonido y fuente importan tanto como la escritura"],
    ],
    notes: ["La plataforma enseña primero el sistema clásico como instrumento y añade alertas específicas en cada lectura védica."],
  },
] as const;

export const translationMethod = [
  { step: "1", title: "Transcribir", description: "Pasar de devanāgarī a IAST sin traducir ni normalizar sonidos." },
  { step: "2", title: "Segmentar", description: "Deshacer sandhi y separar compuestos de manera provisional." },
  { step: "3", title: "Lematizar", description: "Recuperar tema nominal o raíz verbal para consultar el diccionario." },
  { step: "4", title: "Analizar", description: "Marcar caso, número, género, persona, tiempo y relación sintáctica." },
  { step: "5", title: "Traducir", description: "Construir una versión literal y después un español legible sin borrar términos técnicos." },
  { step: "6", title: "Interpretar", description: "Distinguir lo que dice la gramática de lo que explica la tradición comentarial." },
] as const;

export const sanskritReadings: readonly SanskritReading[] = [
  {
    id: "rigveda-1-164-46",
    period: "Védico temprano",
    collection: "Ṛgveda",
    title: "Lo real nombrado de muchas maneras",
    reference: "Ṛgveda 1.164.46",
    devanagari: "इन्द्रं मित्रं वरुणमग्निमाहुरथो दिव्यः स सुपर्णो गरुत्मान् । एकं सद्विप्रा बहुधा वदन्त्यग्निं यमं मातरिश्वानमाहुः ॥",
    iast: "indraṃ mitraṃ varuṇam agnim āhur atho divyaḥ sa suparṇo garutmān | ekaṃ sad viprā bahudhā vadanty agniṃ yamaṃ mātariśvānam āhuḥ ||",
    translation: "Lo llaman Indra, Mitra, Varuṇa y Agni; también es el celeste alado Garutmān. Lo real es uno: los sabios lo nombran de muchas maneras; lo llaman Agni, Yama y Mātariśvan.",
    focus: "Acusativos coordinados, sandhi verbal y el neutro ekaṃ sat.",
    tokens: [
      { form: "ekam", lemma: "eka", grammar: "acusativo neutro singular", meaning: "uno" },
      { form: "sat", lemma: "sat", grammar: "participio presente neutro de √as", meaning: "lo que es, lo real" },
      { form: "viprāḥ", lemma: "vipra", grammar: "nominativo masculino plural", meaning: "los sabios inspirados" },
      { form: "bahudhā", lemma: "bahudhā", grammar: "adverbio indeclinable", meaning: "de muchas maneras" },
      { form: "vadanti", lemma: "√vad", grammar: "presente, 3.ª plural", meaning: "dicen, llaman" },
    ],
    sourceUrl: "https://sanskritdocuments.org/doc_veda/rigveda.html",
    sourceLabel: "Sanskrit Documents · Ṛgveda",
    caution: "La traducción contextual no convierte el himno completo en una formulación técnica de Advaita; primero se estudia el verso en su contexto védico.",
  },
  {
    id: "samaveda-1",
    period: "Védico litúrgico",
    collection: "Sāmaveda",
    title: "Invocación a Agni",
    reference: "Sāmaveda, Pūrvārcika 1",
    devanagari: "अग्न आ याहि वीतये गृणानो हव्यदातये । नि होता सत्सि बर्हिषि ॥",
    iast: "agna ā yāhi vītaye gṛṇāno havyadātaye | ni hotā satsi barhiṣi ||",
    translation: "Oh Agni, ven al convite, celebrado, para recibir la ofrenda; siéntate como oficiante sobre la hierba sagrada.",
    focus: "Vocativo, imperativos y dativos de finalidad.",
    tokens: [
      { form: "agna", lemma: "agni", grammar: "vocativo masculino singular", meaning: "oh Agni" },
      { form: "yāhi", lemma: "√yā", grammar: "imperativo, 2.ª singular", meaning: "ven, dirígete" },
      { form: "vītaye", lemma: "vīti", grammar: "dativo femenino singular", meaning: "para el convite ritual" },
      { form: "hotā", lemma: "hotṛ", grammar: "nominativo masculino singular", meaning: "el sacerdote invocador" },
      { form: "barhiṣi", lemma: "barhis", grammar: "locativo neutro singular", meaning: "sobre la hierba sacrificial" },
    ],
    sourceUrl: "https://sanskritdocuments.org/doc_veda/samaveda-kauthuma.pdf",
    sourceLabel: "Sanskrit Documents · Sāmaveda Kauthuma",
    caution: "El Sāmaveda es una tradición cantada: el texto sin notación ni maestro no sustituye el aprendizaje de su recitación.",
  },
  {
    id: "isha-1",
    period: "Upaniṣádico",
    collection: "Śukla Yajurveda",
    title: "Todo está habitado por el Señor",
    reference: "Īśāvāsya Upaniṣad 1",
    devanagari: "ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् । तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥",
    iast: "īśāvāsyam idaṃ sarvaṃ yat kiñca jagatyāṃ jagat | tena tyaktena bhuñjīthā mā gṛdhaḥ kasyasvid dhanam ||",
    translation: "Todo esto —cuanto se mueve en este mundo cambiante— ha de ser habitado por el Señor. Disfruta o protégete mediante la renuncia; no codicies la riqueza de nadie.",
    focus: "Compuesto gerundivo īśa-vāsyam, instrumental y prohibición con mā.",
    tokens: [
      { form: "īśāvāsyam", lemma: "īśa + √vas", grammar: "gerundivo neutro singular en compuesto", meaning: "ha de ser habitado/revestido por el Señor" },
      { form: "idam", lemma: "idam", grammar: "nominativo/acusativo neutro singular", meaning: "esto" },
      { form: "sarvam", lemma: "sarva", grammar: "nominativo/acusativo neutro singular", meaning: "todo" },
      { form: "tyaktena", lemma: "tyakta", grammar: "instrumental neutro singular", meaning: "mediante lo renunciado / la renuncia" },
      { form: "mā gṛdhaḥ", lemma: "√gṛdh", grammar: "prohibición védica", meaning: "no codicies" },
    ],
    sourceUrl: "https://sanskritdocuments.org/doc_upanishhat/Ishaa_bhaashhya_Shankar.html",
    sourceLabel: "Sanskrit Documents · Īśāvāsya Upaniṣad",
    caution: "Se muestran dos posibilidades de bhuñjīthā porque la elección final depende de la lectura comentarial.",
  },
  {
    id: "mandukya-1",
    period: "Upaniṣádico",
    collection: "Atharvaveda",
    title: "Oṃ y la totalidad del tiempo",
    reference: "Māṇḍūkya Upaniṣad 1",
    devanagari: "ॐ इत्येतदक्षरमिदं सर्वं तस्योपव्याख्यानं भूतं भवद्भविष्यदिति सर्वमोङ्कार एव । यच्चान्यत् त्रिकालातीतं तदप्योङ्कार एव ॥",
    iast: "oṃ ity etad akṣaram idaṃ sarvaṃ tasyopavyākhyānaṃ bhūtaṃ bhavad bhaviṣyad iti sarvam oṅkāra eva | yac cānyat trikālātītaṃ tad apy oṅkāra eva ||",
    translation: "Oṃ: esta sílaba es todo esto. Su explicación es: lo pasado, lo presente y lo futuro; todo es ciertamente Oṃ. Y aquello que trasciende los tres tiempos también es Oṃ.",
    focus: "Sandhi, participios temporales y compuesto trikālātīta.",
    tokens: [
      { form: "akṣaram", lemma: "akṣara", grammar: "nominativo neutro singular", meaning: "sílaba; lo imperecedero" },
      { form: "bhūtam", lemma: "√bhū", grammar: "participio pasado neutro", meaning: "lo que fue" },
      { form: "bhavat", lemma: "√bhū", grammar: "participio presente neutro", meaning: "lo que es" },
      { form: "bhaviṣyat", lemma: "√bhū", grammar: "participio futuro neutro", meaning: "lo que será" },
      { form: "trikālātītam", lemma: "tri-kāla-atīta", grammar: "compuesto, neutro singular", meaning: "trascendente de los tres tiempos" },
    ],
    sourceUrl: "https://sanskritdocuments.org/doc_upanishhat/maandu.html",
    sourceLabel: "Sanskrit Documents · Māṇḍūkya Upaniṣad",
  },
  {
    id: "gita-2-16",
    period: "Épico",
    collection: "Bhagavad Gītā",
    title: "Discernir sat y asat",
    reference: "Bhagavad Gītā 2.16",
    devanagari: "नासतो विद्यते भावो नाभावो विद्यते सतः । उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः ॥",
    iast: "nāsato vidyate bhāvo nābhāvo vidyate sataḥ | ubhayor api dṛṣṭo 'ntas tv anayos tattvadarśibhiḥ ||",
    translation: "De lo irreal no hay ser; de lo real no hay ausencia. Quienes ven la verdad han comprendido el límite de ambos.",
    focus: "Genitivos, negación, pasiva impersonal y compuesto tattva-darśin.",
    tokens: [
      { form: "asataḥ", lemma: "asat", grammar: "genitivo singular", meaning: "de lo no-real" },
      { form: "vidyate", lemma: "√vid", grammar: "presente medio, 3.ª singular", meaning: "se encuentra, existe" },
      { form: "bhāvaḥ", lemma: "bhāva", grammar: "nominativo masculino singular", meaning: "ser, existencia" },
      { form: "sataḥ", lemma: "sat", grammar: "genitivo singular", meaning: "de lo real" },
      { form: "tattvadarśibhiḥ", lemma: "tattva-darśin", grammar: "instrumental masculino plural", meaning: "por quienes ven la verdad" },
    ],
    sourceUrl: "https://sanskritdocuments.org/doc_giitaa/bhagvadnew.html",
    sourceLabel: "Sanskrit Documents · Bhagavad Gītā",
  },
  {
    id: "vivekachudamani-11",
    period: "Advaita clásico",
    collection: "Vivekacūḍāmaṇi",
    title: "La joya del discernimiento",
    reference: "Vivekacūḍāmaṇi 11",
    devanagari: "चित्तस्य शुद्धये कर्म न तु वस्तूपलब्धये । वस्तुसिद्धिर्विचारेण न किञ्चित्कर्मकोटिभिः ॥",
    iast: "cittasya śuddhaye karma na tu vastūpalabdhaye | vastusiddhir vicāreṇa na kiñcit karmakoṭibhiḥ ||",
    translation: "La acción sirve para la purificación de la mente, no para el conocimiento de la realidad. La realidad se reconoce mediante la indagación, no mediante incontables acciones.",
    focus: "Dativos de finalidad, instrumental de medio y compuestos nominales.",
    tokens: [
      { form: "cittasya", lemma: "citta", grammar: "genitivo neutro singular", meaning: "de la mente" },
      { form: "śuddhaye", lemma: "śuddhi", grammar: "dativo femenino singular", meaning: "para la purificación" },
      { form: "karma", lemma: "karman", grammar: "nominativo neutro singular", meaning: "la acción" },
      { form: "vicāreṇa", lemma: "vicāra", grammar: "instrumental masculino singular", meaning: "mediante la indagación" },
      { form: "karmakoṭibhiḥ", lemma: "karma-koṭi", grammar: "instrumental plural", meaning: "mediante millones de acciones" },
    ],
    sourceUrl: "https://sanskritdocuments.org/doc_z_misc_shankara/viveknew.html",
    sourceLabel: "Sanskrit Documents · Vivekacūḍāmaṇi",
    caution: "La atribución autoral del texto se presenta de forma diversa en la investigación moderna; aquí se estudia la obra dentro de la tradición advaita.",
  },
  {
    id: "drig-drishya-1",
    period: "Advaita pedagógico",
    collection: "Dṛg-Dṛśya-Viveka",
    title: "El discernimiento entre veedor y visto",
    reference: "Dṛg-Dṛśya-Viveka 1",
    devanagari: "रूपं दृश्यं लोचनं दृक् तद्दृश्यं दृक्तु मानसम् । दृश्याधीवृत्तयः साक्षी दृगेव न तु दृश्यते ॥",
    iast: "rūpaṃ dṛśyaṃ locanaṃ dṛk tad dṛśyaṃ dṛk tu mānasam | dṛśyā dhīvṛttayaḥ sākṣī dṛg eva na tu dṛśyate ||",
    translation: "La forma es lo visto y el ojo es quien ve; el ojo es visto y la mente es quien ve. Las modificaciones mentales son vistas; el testigo es el veedor mismo y nunca es visto.",
    focus: "Predicación nominal, participios pasivos y cadena de sujeto-objeto.",
    tokens: [
      { form: "rūpam", lemma: "rūpa", grammar: "nominativo neutro singular", meaning: "la forma" },
      { form: "dṛśyam", lemma: "√dṛś", grammar: "gerundivo neutro singular", meaning: "lo visible, lo visto" },
      { form: "locanam", lemma: "locana", grammar: "nominativo neutro singular", meaning: "el ojo" },
      { form: "sākṣī", lemma: "sākṣin", grammar: "nominativo masculino singular", meaning: "el testigo" },
      { form: "dṛśyate", lemma: "√dṛś", grammar: "presente pasivo, 3.ª singular", meaning: "es visto" },
    ],
    sourceUrl: "https://sanskritdocuments.org/doc_z_misc_major_works/drigdrishyaviveka.html",
    sourceLabel: "Sanskrit Documents · Dṛg-Dṛśya-Viveka",
  },
  {
    id: "upadesha-saram-1",
    period: "Advaita moderno",
    collection: "Upadeśa Sāram",
    title: "La acción y su fruto",
    reference: "Upadeśa Sāram 1 · Ramana Maharshi",
    devanagari: "कर्तुराज्ञया प्राप्यते फलम् । कर्म किं परं कर्म तज्जडम् ॥",
    iast: "kartur ājñayā prāpyate phalam | karma kiṃ paraṃ karma taj jaḍam ||",
    translation: "Por mandato del Hacedor se obtiene el fruto. ¿Es suprema la acción? La acción es inerte.",
    focus: "Genitivo de agente, instrumental y pasiva.",
    tokens: [
      { form: "kartuḥ", lemma: "kartṛ", grammar: "genitivo masculino singular", meaning: "del hacedor" },
      { form: "ājñayā", lemma: "ājñā", grammar: "instrumental femenino singular", meaning: "por el mandato" },
      { form: "prāpyate", lemma: "pra-√āp", grammar: "presente pasivo, 3.ª singular", meaning: "es obtenido" },
      { form: "phalam", lemma: "phala", grammar: "nominativo neutro singular", meaning: "el fruto" },
      { form: "jaḍam", lemma: "jaḍa", grammar: "nominativo neutro singular", meaning: "inerte, no consciente" },
    ],
    sourceUrl: "https://sanskritdocuments.org/doc_z_misc_major_works/upadeshasAram.html",
    sourceLabel: "Sanskrit Documents · Upadeśa Sāram",
    caution: "Esta obra permite cerrar la ruta con sánscrito advaita del siglo XX sin atribuir sánscrito a maestros que enseñaron en otras lenguas.",
  },
] as const;
