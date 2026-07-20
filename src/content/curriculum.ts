export type CurriculumLessonStatus = "published" | "planned";
export type CurriculumTrack = "core" | "comparative";

export type CurriculumLesson = {
  id: string;
  title: string;
  focus: string;
  status: CurriculumLessonStatus;
  href?: string;
};

export type CurriculumStage = {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  purpose: string;
  outcomes: readonly string[];
  concepts: readonly string[];
  track: CurriculumTrack;
  lessons: readonly CurriculumLesson[];
};

export type CurriculumCycle = {
  id: string;
  order: number;
  title: string;
  description: string;
  stages: readonly CurriculumStage[];
};

const planned = (
  id: string,
  title: string,
  focus: string,
): CurriculumLesson => ({ id, title, focus, status: "planned" });

export const curriculumCycles: readonly CurriculumCycle[] = [
  {
    id: "orientacion",
    order: 1,
    title: "Orientación y fundamentos",
    description:
      "Establece el propósito del estudio, el vocabulario inicial y el lugar del Advaita dentro de la tradición védica.",
    stages: [
      {
        id: "comenzar",
        order: 1,
        title: "Cómo comenzar el camino",
        subtitle: "Orientación para estudiar con claridad y autonomía",
        purpose:
          "Comprender qué propone la escuela, cómo utilizar los videos y qué diferencia existe entre información, práctica y conocimiento de sí.",
        outcomes: [
          "Usar la plataforma y registrar el propio avance.",
          "Distinguir una pregunta filosófica de una afirmación doctrinal.",
          "Formular una intención de estudio realista.",
        ],
        concepts: ["adhikāritva", "mumukṣutva", "indagación", "fuentes"],
        track: "core",
        lessons: [
          {
            id: "bienvenida",
            title: "Bienvenida al recorrido",
            focus: "Plataforma, videos, Zoom, acceso libre y progreso personal.",
            status: "published",
            href: "/aprender/fundamentos/bienvenida",
          },
          planned(
            "yo-soy",
            "¿Qué es el Vedanta Advaita?",
            "Introducción al significado, propósito y enfoque no dual del Vedanta Advaita.",
          ),
          planned(
            "pregunta-quien-soy",
            "La pregunta fundamental: ¿quién soy?",
            "Diferenciar identidad biográfica, experiencia y presencia consciente.",
          ),
          planned(
            "tat-tvam-asi",
            "Tat Tvam Asi: una brújula para toda la ruta",
            "Presentación inicial del mahāvākya sin adelantar su demostración.",
          ),
          planned(
            "informacion-experiencia-conocimiento",
            "Información, experiencia y conocimiento",
            "Distinguir acumulación conceptual, estados pasajeros y comprensión liberadora.",
          ),
          planned(
            "como-estudiar-vedanta",
            "Cómo estudiar Vedanta sin acumular creencias",
            "Escucha, reflexión, práctica y verificación personal.",
          ),
          planned(
            "mapa-completo-ruta",
            "Mapa completo del aprendizaje",
            "Ciclos, evaluaciones, fuentes y criterio de avance.",
          ),
        ],
      },
      {
        id: "tradicion-fuentes",
        order: 2,
        title: "Tradición, textos y contexto",
        subtitle: "Del Sanātana Dharma al Vedanta Advaita",
        purpose:
          "Ubicar la enseñanza dentro de un universo plural y aprender a distinguir fuente, comentario, maestro y formulación contemporánea.",
        outcomes: [
          "Diferenciar Sanātana Dharma, Veda, Vedanta y Advaita.",
          "Reconocer el Prasthānatrayī y la función del comentario.",
          "Identificar el canal de Parabrahman como enseñanza contemporánea.",
        ],
        concepts: ["śruti", "smṛti", "sampradāya", "Prasthānatrayī"],
        track: "core",
        lessons: [
          planned("sanatana-dharma", "¿Qué es Sanātana Dharma?", "Marco tradicional plural y formas de vida."),
          planned("cuatro-vedas", "Los cuatro Vedas y sus cuatro estratos", "Secuencia textual: Saṃhitās → Brāhmaṇas → Āraṇyakas → Upaniṣads."),
          planned("que-es-vedanta", "Vedanta: final y finalidad del Veda", "Textos, preguntas y escuelas interpretativas."),
          planned("que-es-advaita", "Advaita: el sentido de no dualidad", "Alcance y límites de la palabra advaita."),
          planned("prasthanatrayi", "El triple fundamento del Vedanta", "Upaniṣads, Bhagavad Gītā y Brahma Sūtras."),
          planned("shankara-linaje", "Śaṅkara y la tradición de enseñanza", "Comentarios, método y atribuciones responsables."),
          planned("transmision-contemporanea", "Del linaje tradicional a la enseñanza contemporánea", "Continuidades, adaptaciones modernas y lugar de Parabrahman."),
        ],
      },
      {
        id: "preparacion",
        order: 3,
        title: "Preparación de la mente",
        subtitle: "Condiciones para que el conocimiento sea asimilable",
        purpose:
          "Mostrar por qué el Advaita no se reduce a una conclusión intelectual y cómo acción, valores y madurez preparan la investigación.",
        outcomes: [
          "Comprender las cuatro cualificaciones tradicionales.",
          "Relacionar karma yoga con ecuanimidad y responsabilidad.",
          "Diseñar una práctica cotidiana sin promesas mágicas.",
        ],
        concepts: ["sādhana-catuṣṭaya", "viveka", "vairāgya", "karma yoga"],
        track: "core",
        lessons: [
          planned("cuatro-cualificaciones", "Las cuatro cualificaciones del estudiante", "Discernimiento, desapego, disciplina y deseo de libertad."),
          planned("viveka-vairagya", "Viveka y vairāgya", "Distinguir lo permanente y revisar dependencias."),
          planned("seis-disciplinas", "Las seis disciplinas internas", "Śama, dama, uparati, titikṣā, śraddhā y samādhāna."),
          planned("karma-yoga", "Karma yoga: actuar sin quedar atado", "Acción, actitud, resultado y crecimiento."),
          planned("dharma-valores", "Dharma y valores para el autoconocimiento", "No daño, veracidad, responsabilidad y coherencia."),
          planned("upasana-meditacion", "Upāsanā y meditación preparatoria", "Atención, devoción y estabilidad al servicio del conocimiento."),
          planned("plan-preparacion", "Diseñar una preparación cotidiana", "Integrar valores, acción consciente, contemplación y revisión personal."),
        ],
      },
    ],
  },
  {
    id: "persona-experiencia",
    order: 2,
    title: "Persona, mente y experiencia",
    description:
      "Analiza cómo se construye la identidad individual y separa la conciencia de los instrumentos que ella ilumina.",
    stages: [
      {
        id: "observador-observado",
        order: 4,
        title: "El observador y lo observado",
        subtitle: "Primer discernimiento sistemático",
        purpose:
          "Investigar todo lo que puede ser conocido como objeto y reconocer que el conocedor no aparece del mismo modo.",
        outcomes: [
          "Aplicar dṛg-dṛśya-viveka a cuerpo, sentidos y pensamientos.",
          "Diferenciar testigo consciente de vigilancia mental.",
          "Detectar identificaciones sin negar la experiencia.",
        ],
        concepts: ["dṛg", "dṛśya", "sākṣin", "cidābhāsa"],
        track: "core",
        lessons: [
          planned("drg-drsya", "Lo que ve y lo que es visto", "Regla de discernimiento entre sujeto y objeto."),
          planned("cuerpo-observado", "El cuerpo como experiencia conocida", "Sensación, imagen corporal e identidad."),
          planned("mente-observada", "Pensamientos y emociones también son conocidos", "Cambio mental y continuidad del conocer."),
          planned("testigo", "Sākṣin: la conciencia testigo", "Uso pedagógico y límites de la metáfora del testigo."),
          planned("reflejo-conciencia", "Cidābhāsa: conciencia reflejada", "Cómo aparece el conocedor individual."),
          planned("conocedor-no-objeto", "El conocedor no es un objeto", "Investigar por qué la conciencia no aparece entre las cosas conocidas."),
          planned("practica-observador", "Laboratorio de observador y observado", "Aplicar el discernimiento a cuerpo, sentidos, emociones y pensamientos."),
        ],
      },
      {
        id: "tres-cuerpos-cinco-envolturas",
        order: 5,
        title: "Tres cuerpos y cinco envolturas",
        subtitle: "Mapas de la individualidad aparente",
        purpose:
          "Organizar la experiencia humana mediante modelos pedagógicos tradicionales sin convertirlos en entidades rígidas.",
        outcomes: [
          "Reconocer cuerpo denso, sutil y causal.",
          "Recorrer las cinco kośas como ejercicio de discernimiento.",
          "Relacionar los modelos sin confundirlos.",
        ],
        concepts: ["sthūla", "sūkṣma", "kāraṇa", "pañca-kośa"],
        track: "core",
        lessons: [
          planned("tres-cuerpos", "Los tres cuerpos", "Cuerpo denso, sutil y causal."),
          planned("annamaya", "Annamaya-kośa: la envoltura física", "Materia, alimento y cuerpo."),
          planned("pranamaya", "Prāṇamaya-kośa: vitalidad y función", "Prāṇa y organización vital."),
          planned("manomaya", "Manomaya-kośa: emoción y pensamiento", "Mente reactiva y experiencia subjetiva."),
          planned("vijnanamaya", "Vijñānamaya-kośa: intelecto y decisión", "Discernimiento, agencia y sentido del yo."),
          planned("anandamaya", "Ānandamaya-kośa: causalidad y quietud", "Gozo condicionado y confusión con Brahman."),
          planned("integrar-cuerpos-koshas", "Integrar los tres cuerpos y las cinco envolturas", "Correspondencias, diferencias y uso conjunto de ambos mapas."),
        ],
      },
      {
        id: "antahkarana",
        order: 6,
        title: "Antaḥkaraṇa: el instrumento interno",
        subtitle: "Mente, intelecto, memoria y sentido del yo",
        purpose:
          "Comprender la psicología funcional del Vedanta y su relación con sentidos, acción, prāṇa y conciencia.",
        outcomes: [
          "Distinguir las cuatro funciones del instrumento interno.",
          "Relacionar indriyas, prāṇas y mente.",
          "Evitar identificar conciencia con una función psicológica.",
        ],
        concepts: ["manas", "buddhi", "citta", "ahaṃkāra", "indriya", "prāṇa"],
        track: "core",
        lessons: [
          planned("antahkarana-introduccion", "¿Qué es antaḥkaraṇa?", "El instrumento interno y sus funciones."),
          planned("manas", "Manas: duda, asociación y respuesta", "Procesamiento sensible y oscilación."),
          planned("buddhi", "Buddhi: comprensión y determinación", "Decisión, discernimiento y error."),
          planned("ahamkara", "Ahaṃkāra: el constructor del yo", "Apropiación de cuerpo, rol y acción."),
          planned("citta", "Citta: memoria, huella y continuidad", "Recuerdo, hábito y disponibilidad mental."),
          planned("sentidos-pranas", "Sentidos, órganos de acción y cinco prāṇas", "La arquitectura funcional del cuerpo sutil."),
          planned("antahkarana-conciencia", "Antaḥkaraṇa no es conciencia", "Distinguir el instrumento cambiante de aquello que lo ilumina."),
        ],
      },
    ],
  },
  {
    id: "cosmologia-orden",
    order: 3,
    title: "Cosmología, naturaleza y orden",
    description:
      "Presenta los modelos relativos del universo y la persona antes de mostrar por qué no constituyen la conclusión final del Advaita.",
    stages: [
      {
        id: "gunas-maya-karma",
        order: 7,
        title: "Los tres guṇas, māyā y karma",
        subtitle: "La dinámica de la experiencia condicionada",
        purpose:
          "Comprender cómo sattva, rajas y tamas describen cualidades de prakṛti y cómo se relacionan con mente, acción y conocimiento.",
        outcomes: [
          "Reconocer los guṇas sin etiquetar rígidamente a las personas.",
          "Diferenciar māyā de una simple ilusión psicológica.",
          "Comprender karma, causalidad y libertad relativa.",
        ],
        concepts: ["sattva", "rajas", "tamas", "māyā", "karma"],
        track: "core",
        lessons: [
          planned("tres-gunas", "Los tres guṇas: una visión general", "Equilibrio, actividad e inercia."),
          planned("sattva", "Sattva: claridad sin idealización", "Transparencia, armonía y conocimiento."),
          planned("rajas", "Rajas: movimiento, deseo y proyección", "Actividad, inquietud y transformación."),
          planned("tamas", "Tamas: estabilidad, inercia y ocultamiento", "Materia, resistencia y confusión."),
          planned("maya", "Māyā: poder de proyección y ocultamiento", "Estatus pedagógico y orden empírico."),
          planned("karma-causalidad", "Karma y la red de causalidad", "Acción, resultado, saṃskāra y responsabilidad."),
          planned("trascender-gunas", "Reconocer y trascender los guṇas", "Observación cotidiana sin identidad rígida ni juicio moralista."),
        ],
      },
      {
        id: "tattvas-cosmologia",
        order: 8,
        title: "Tattvas y despliegue de la manifestación",
        subtitle: "Categorías para comprender el orden relativo",
        purpose:
          "Estudiar tattva como principio o categoría, aclarando que las enumeraciones cambian entre Sāṃkhya, Yoga, Śaiva y manuales vedánticos.",
        outcomes: [
          "Evitar hablar de una única lista universal de tattvas.",
          "Comprender cinco elementos sutiles y densos.",
          "Relacionar microcosmos, macrocosmos y pañcīkaraṇa.",
        ],
        concepts: ["tattva", "tanmātra", "mahābhūta", "pañcīkaraṇa", "prakṛti"],
        track: "core",
        lessons: [
          planned("que-es-tattva", "¿Qué significa tattva?", "Principio, realidad y variación entre escuelas."),
          planned("mapas-tattvas", "Por qué existen distintos mapas de tattvas", "Sāṃkhya, Yoga, Śaiva y uso vedántico."),
          planned("cinco-elementos-sutiles", "Los cinco elementos sutiles", "Espacio, aire, fuego, agua y tierra en su aspecto sutil."),
          planned("cinco-elementos-densos", "Los cinco elementos densos", "Experiencia sensible y mundo manifestado."),
          planned("panchikarana", "Pañcīkaraṇa: combinación y manifestación", "Modelo tradicional de densificación."),
          planned("micro-macrocosmos", "Individuo y universo: microcosmos y macrocosmos", "Jīva, Hiraṇyagarbha, Virāṭ y orden total."),
          planned("veinticinco-tattvas", "Los 25 tattvas del Sāṃkhya", "Puruṣa, prakṛti y las categorías del despliegue comparadas con el uso vedántico."),
        ],
      },
      {
        id: "siete-centros",
        order: 9,
        title: "Siete centros y niveles de experiencia",
        subtitle: "Especialización comparativa de Parabrahman",
        purpose:
          "Explorar una correspondencia pedagógica entre chakras, niveles de experiencia y desarrollo de conciencia sin presentarla como el canon de Śaṅkara ni reemplazar la Māṇḍūkya Upaniṣad.",
        outcomes: [
          "Diferenciar el modelo yóguico-tántrico del análisis Advaita.",
          "Usar las correspondencias como símbolos de observación, no como anatomía demostrada.",
          "Integrar el mapa sin confundir niveles experienciales con ātman.",
        ],
        concepts: ["chakra", "símbolo", "nivel de experiencia", "integración comparativa"],
        track: "comparative",
        lessons: [
          planned("siete-mapa-metodo", "Cómo leer el mapa de siete centros", "Origen comparativo, alcance y límites."),
          planned("muladhara", "Mūlādhāra: encarnación y seguridad", "Base corporal, estabilidad y supervivencia."),
          planned("svadhisthana", "Svādhiṣṭhāna: deseo y sensibilidad", "Afectividad, placer y movimiento."),
          planned("manipura", "Maṇipūra: voluntad y transformación", "Agencia, poder y disciplina."),
          planned("anahata", "Anāhata: vínculo y apertura", "Relación, compasión y amplitud emocional."),
          planned("vishuddha", "Viśuddha: expresión y discernimiento", "Palabra, escucha y verdad."),
          planned("ajna-sahasrara", "Ājñā y Sahasrāra: visión y trascendencia", "Integración simbólica y diferencia respecto de mokṣa."),
        ],
      },
    ],
  },
  {
    id: "brahman-conocimiento",
    order: 4,
    title: "Brahman, conciencia y conocimiento",
    description:
      "Desarrolla el corazón metafísico del Advaita: órdenes de realidad, estados de experiencia, identidad y método de enseñanza.",
    stages: [
      {
        id: "estados-experiencia",
        order: 10,
        title: "Estados de experiencia y Turīya",
        subtitle: "La investigación de la Māṇḍūkya Upaniṣad",
        purpose:
          "Investigar vigilia, sueño y sueño profundo, y comprender por qué Turīya no es simplemente un cuarto estado pasajero.",
        outcomes: [
          "Distinguir los tres estados mutuamente excluyentes.",
          "Reconocer la continuidad de la conciencia.",
          "Separar este análisis del modelo comparativo de siete niveles.",
        ],
        concepts: ["jāgrat", "svapna", "suṣupti", "turīya", "Oṃ"],
        track: "core",
        lessons: [
          planned("tres-estados", "Los tres estados de experiencia", "Vigilia, sueño y sueño profundo."),
          planned("vigilia-vaisvanara", "Jāgrat y Vaiśvānara", "Experiencia externa e identidad corporal."),
          planned("sueno-taijasa", "Svapna y Taijasa", "Mundo interno y mente creadora."),
          planned("profundo-prajna", "Suṣupti y Prājña", "Resolución de la dualidad y causalidad."),
          planned("turiya", "Turīya: no un estado más", "La conciencia no dual presente en toda experiencia."),
          planned("om-mandukya", "Oṃ y los cuatro pādas", "A, U, M y el silencio como enseñanza."),
          planned("continuidad-conciencia", "La continuidad a través de los tres estados", "Indagación guiada sobre cambio, ausencia aparente y presencia consciente."),
        ],
      },
      {
        id: "brahman-ishvara-jiva",
        order: 11,
        title: "Brahman, Īśvara, jīva y jagat",
        subtitle: "La arquitectura metafísica del Advaita",
        purpose:
          "Precisar los términos centrales y mostrar cómo cambia su sentido según el punto de vista empírico o absoluto.",
        outcomes: [
          "Distinguir Brahman nirguṇa y saguṇa sin postular dos absolutos.",
          "Comprender jīva, Īśvara y jagat en el orden empírico.",
          "Usar Parabrahman siempre unido y con precisión terminológica.",
        ],
        concepts: ["Brahman", "Parabrahman", "nirguṇa", "saguṇa", "Īśvara", "jīva", "jagat"],
        track: "core",
        lessons: [
          planned("brahman", "Brahman: realidad, conciencia y plenitud", "Sat-cit-ānanda como indicación, no suma de propiedades."),
          planned("parabrahman", "Parabrahman: «más allá» sin un segundo Brahman", "Uso tradicional, lenguaje apofático e identidad institucional."),
          planned("nirguna-saguna", "Nirguṇa y saguṇa Brahman", "Absoluto sin atributos y realidad considerada como causa."),
          planned("ishvara", "Īśvara: inteligencia y orden total", "Causa, ley, devoción y mundo empírico."),
          planned("jiva", "Jīva: el individuo aparente", "Conciencia, cuerpo sutil y limitación."),
          planned("jagat", "Jagat: ¿real, irreal o dependiente?", "Mithyā y dependencia ontológica."),
          planned("tres-ordenes-realidad", "Tres órdenes de realidad", "Prātibhāsika, vyāvahārika y pāramārthika."),
        ],
      },
      {
        id: "mahavakyas",
        order: 12,
        title: "Mahāvākyas y la identidad no dual",
        subtitle: "El significado de «Tú eres Eso»",
        purpose:
          "Desplegar la identidad entre ātman y Brahman mediante contexto, análisis lingüístico y eliminación de significados incompatibles.",
        outcomes: [
          "Conocer cuatro mahāvākyas representativos.",
          "Comprender lakṣaṇā y bhāga-tyāga-lakṣaṇā.",
          "Evitar convertir las frases en afirmaciones motivacionales.",
        ],
        concepts: ["ātman", "mahāvākya", "lakṣaṇā", "akhaṇḍārtha"],
        track: "core",
        lessons: [
          planned("mahavakya-metodo", "Qué es un mahāvākya", "Contexto upaniṣádico y función reveladora."),
          planned("prajnanam-brahma", "Prajñānam Brahma", "La conciencia es Brahman."),
          planned("aham-brahmasmi", "Aham Brahmāsmi", "Yo soy Brahman y el problema del yo empírico."),
          planned("tat-tvam-asi-profundizacion", "Tat Tvam Asi en profundidad", "Eso, tú y la identidad indicada."),
          planned("ayam-atma-brahma", "Ayam Ātmā Brahma", "Este sí mismo es Brahman."),
          planned("bhaga-tyaga", "Bhāga-tyāga-lakṣaṇā", "Abandono de atributos incompatibles y significado común."),
          planned("mahavakyas-integracion", "Integrar los cuatro mahāvākyas", "Una visión única expresada desde cuatro contextos upaniṣádicos."),
        ],
      },
    ],
  },
  {
    id: "metodo-realizacion",
    order: 5,
    title: "Método, textos e integración",
    description:
      "Consolida el modo de conocer, la lectura guiada de las fuentes y las consecuencias de la libertad en la vida cotidiana.",
    stages: [
      {
        id: "metodo-ensenanza",
        order: 13,
        title: "Cómo enseña el Advaita",
        subtitle: "Medios de conocimiento y eliminación del error",
        purpose:
          "Comprender por qué la enseñanza utiliza palabras, razonamiento y métodos provisionales para remover una confusión presente.",
        outcomes: [
          "Distinguir experiencia extraordinaria de conocimiento estable.",
          "Comprender śravaṇa, manana y nididhyāsana.",
          "Reconocer los principales métodos pedagógicos.",
        ],
        concepts: ["pramāṇa", "adhyāropa-apavāda", "neti neti", "śravaṇa", "manana", "nididhyāsana"],
        track: "core",
        lessons: [
          planned("conocimiento-experiencia", "Conocimiento y experiencia", "Por qué una experiencia comienza y termina."),
          planned("vedanta-pramana", "Vedanta como medio de conocimiento", "El papel específico de las Upaniṣads."),
          planned("adhyaropa-apavada", "Adhyāropa-apavāda", "Superposición y posterior negación pedagógica."),
          planned("neti-neti", "Neti neti: no esto, no esto", "Negación de límites y error de nihilismo."),
          planned("sravana", "Śravaṇa: escuchar la visión completa", "Exposición sistemática y contexto."),
          planned("manana", "Manana: resolver dudas mediante razón", "Coherencia, objeciones y asimilación."),
          planned("nididhyasana", "Nididhyāsana: integración contemplativa", "Disolver hábitos contrarios al conocimiento."),
        ],
      },
      {
        id: "lectura-textos",
        order: 14,
        title: "Lectura guiada de los textos fundamentales",
        subtitle: "De la introducción al comentario tradicional",
        purpose:
          "Aplicar el vocabulario y los métodos adquiridos a una secuencia de obras, evitando citas descontextualizadas.",
        outcomes: [
          "Reconocer el propósito de cada texto.",
          "Leer una selección con fuente y comentario.",
          "Distinguir texto raíz, bhāṣya y manual introductorio.",
        ],
        concepts: ["Upaniṣad", "Gītā", "Brahma Sūtra", "bhāṣya", "prakaraṇa-grantha"],
        track: "core",
        lessons: [
          planned("tattva-bodha", "Tattva Bodha: mapa introductorio", "Categorías básicas y preparación terminológica."),
          planned("atma-bodha", "Ātma Bodha y Vivekacūḍāmaṇi", "Discernimiento del sí mismo, práctica pedagógica y debate responsable de atribución."),
          planned("drg-drsya-texto", "Dṛg-Dṛśya-Viveka: lectura guiada", "Observador, observado y conciencia reflejada."),
          planned("mandukya-karika", "Māṇḍūkya Upaniṣad y Kārikā", "Estados, Oṃ, no dualidad y ajāti."),
          planned("gita-seleccion", "Bhagavad Gītā: acción, conocimiento y libertad", "Selección progresiva de capítulos."),
          planned("upanishads-seleccion", "Grandes pasajes de las Upaniṣads", "Īśa, Kena, Katha, Taittirīya, Chāndogya y Bṛhadāraṇyaka."),
          planned("brahma-sutras-intro", "Introducción a los Brahma Sūtras", "Estructura, propósito y comentario de Śaṅkara."),
        ],
      },
      {
        id: "libertad-integracion",
        order: 15,
        title: "Libertad, vida e integración",
        subtitle: "Las consecuencias del conocimiento no dual",
        purpose:
          "Examinar mokṣa, jīvanmukti y la vida cotidiana sin convertir la realización en una identidad espiritual o una promesa de perfección psicológica.",
        outcomes: [
          "Diferenciar libertad de estados emocionales permanentes.",
          "Comprender jīvanmukti y prārabdha en su contexto.",
          "Integrar estudio, relación, acción y servicio.",
        ],
        concepts: ["mokṣa", "jīvanmukti", "prārabdha", "sahaja", "integración"],
        track: "core",
        lessons: [
          planned("moksha", "Mokṣa: libertad de la limitación", "Qué termina y qué no necesita producirse."),
          planned("jivanmukti", "Jīvanmukti: libertad en vida", "Conocimiento, cuerpo-mente y continuidad funcional."),
          planned("prarabdha", "Prārabdha y continuidad de la experiencia", "La explicación tradicional tras el conocimiento."),
          planned("errores-no-dualidad", "Errores frecuentes sobre la no dualidad", "Nihilismo, bypass espiritual y absolutización del ego."),
          planned("relaciones-accion", "Relaciones y acción desde la comprensión", "Responsabilidad sin apropiación rígida."),
          planned("integracion-final", "Integración final: vivir lo comprendido", "Revisión de toda la ruta y plan de continuidad."),
          planned("servicio-continuidad", "Servicio, comunidad y continuidad del estudio", "Compartir sin imponer, seguir aprendiendo y cuidar la transmisión."),
        ],
      },
    ],
  },
] as const;

export const curriculumStages = curriculumCycles.flatMap((cycle) => cycle.stages);

export const lessonsPerCurriculumStage = 7;

const invalidCurriculumStage = curriculumStages.find(
  (stage) => stage.lessons.length !== lessonsPerCurriculumStage,
);

if (invalidCurriculumStage) {
  throw new Error(
    `La etapa ${invalidCurriculumStage.id} debe tener exactamente ${lessonsPerCurriculumStage} lecciones.`,
  );
}

export const curriculumLessons = curriculumStages.flatMap((stage) =>
  stage.lessons.map((lesson) => ({
    ...lesson,
    stageId: stage.id,
    stageOrder: stage.order,
    stageTitle: stage.title,
    track: stage.track,
  })),
);

export const curriculumSummary = {
  cycles: curriculumCycles.length,
  stages: curriculumStages.length,
  lessons: curriculumLessons.length,
  published: curriculumLessons.filter((lesson) => lesson.status === "published").length,
} as const;

export function findCurriculumLesson(lessonId: string | undefined) {
  if (!lessonId) return undefined;
  return curriculumLessons.find((lesson) => lesson.id === lessonId);
}
