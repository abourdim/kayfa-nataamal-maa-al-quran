/* كيف نتعامل مع القرآن — HOW TO DEAL WITH THE QURAN — app.js v1.0 */
/* Based on "Kayfa Nata'amal ma'a al-Quran" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'كيف نتعامل مع القرآن',
    splashSub: 'دليل التعامل مع كتاب الله للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة محمد ٤٧: ٢٤',
    tabHome: 'الرئيسية', tabTraits: 'الدروس', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'دروس التعامل مع القرآن',
    traitsDesc: 'مدارسة مع الشيخ الغزالي أجراها عمر عبيد حسنة — التدبر، العودة للقرآن، أسباب الأزمة، مناهج التفسير، النسخ، السنن الإلهية، التطبيق العملي، التعليم، والفهم العُمَري',
    quizTitle: '🏆 من سيصبح حافظاً؟',
    quizDesc: 'اختبر معلوماتك عن التعامل مع القرآن — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي القرآنية',
    progressDesc: 'تقدمك وإنجازاتك في رحلة فهم القرآن',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية لأهل القرآن',
    dailyLabel: '✨ درس اليوم',
    searchPlaceholder: 'ابحث في الدروس...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ درساً من كتاب كيف نتعامل مع القرآن',
      'مسابقة "من سيصبح حافظاً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'How to Deal with the Quran',
    splashSub: 'A guide to engaging with the Book of Allah for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Muhammad 47:24',
    tabHome: 'Home', tabTraits: 'Lessons', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Engaging with the Quran',
    traitsDesc: '15 lessons from Sheikh al-Ghazali — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Hafiz?',
    quizDesc: 'Test your knowledge about the Quran — 4 choices per question',
    progressTitle: 'My Quran Journey',
    progressDesc: 'Your progress and achievements in the Quran journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for the People of the Quran',
    dailyLabel: "✨ Today's Lesson",
    searchPlaceholder: 'Search lessons...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 lessons from How to Deal with the Quran',
      '"Who Wants to Be a Hafiz?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Comment Interagir avec le Coran',
    splashSub: "Guide d'interaction avec le Livre d'Allah pour les jeunes",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Muhammad 47:24',
    tabHome: 'Accueil', tabTraits: 'Lecons', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    traitsTitle: 'Interagir avec le Coran',
    traitsDesc: "15 lecons du livre du Sheikh al-Ghazali — chacune avec un verset, un hadith et une application pratique",
    quizTitle: '🏆 Qui Veut Devenir Hafiz ?',
    quizDesc: 'Testez vos connaissances sur le Coran — 4 choix par question',
    progressTitle: 'Mon Parcours Coranique',
    progressDesc: 'Vos progres et realisations dans le parcours coranique',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour les Gens du Coran',
    dailyLabel: '✨ Lecon du Jour',
    searchPlaceholder: 'Rechercher les lecons...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 lecons du livre Comment Interagir avec le Coran',
      'Quiz « Qui Veut Devenir Hafiz ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 QURAN LESSONS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'📖',
    ar:{title:'التدبر لا مجرد التلاوة',desc:'حجة الغزالي المركزية: المسلمون يركزون على إتقان التجويد وضبط المخارج بينما يهملون الفهم والتطبيق. الغاية من الإنزال هي التدبر لا الجمال الصوتي فقط.',verse:'كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِّيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ',verseRef:'ص ٢٩',hadith:'يقول الغزالي: نحن نزيّن أصواتنا بالقرآن لكننا لا نزيّن حياتنا به',action:'اقرأ اليوم آية واحدة بتدبر عميق — لا تمر عليها حتى تفهمها وتعمل بها',young:'القرآن ليس للحفظ فقط! افهم ما تقرأ وطبّقه في حياتك 📖'},
    en:{title:'Reflection, Not Just Recitation',desc:'Al-Ghazali\'s central argument: Muslims focus exclusively on perfecting recitation and pronunciation while neglecting comprehension and application. The purpose of revelation is deep reflection, not mere sonic beauty.',verse:'A blessed Book We have sent down to you, so that they may reflect upon its verses and so that those of understanding may remember.',verseRef:'Sad 29',hadith:'Al-Ghazali says: we beautify our voices with the Quran but we don\'t beautify our lives with it',action:'Read one verse today with deep reflection — don\'t move past it until you understand and can act on it',young:'The Quran is not just for memorizing! Understand what you read and apply it in your life 📖'},
    fr:{title:'Réflexion, Pas Seulement Récitation',desc:'L\'argument central d\'Al-Ghazali : les musulmans se concentrent exclusivement sur la perfection de la récitation et la prononciation tout en négligeant la compréhension et l\'application. Le but de la révélation est la réflexion profonde.',verse:'Un Livre béni que Nous avons fait descendre vers toi, afin qu\'ils méditent sur ses versets et que les doués d\'intelligence se rappellent.',verseRef:'Sad 29',hadith:'Al-Ghazali dit : nous embellissons nos voix avec le Coran mais nous n\'embellissons pas nos vies avec',action:'Lisez un verset aujourd\'hui avec réflexion profonde — ne passez pas avant de comprendre et d\'agir',young:'Le Coran n\'est pas que pour mémoriser ! Comprends ce que tu lis et applique-le 📖'}
  },
  {
    id:2, emoji:'🌍',
    ar:{title:'العودة إلى القرآن',desc:'الأمة ابتعدت عن مستوى الخطاب القرآني. المسلمون الأوائل ارتقوا إلى مستوى القرآن بينما المعاصرون يُنزلون القرآن إلى مستواهم. يجب أن يصبح القرآن طاقة متحركة في الحياة لا شيئاً محفوظاً في المتاحف.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا',verseRef:'محمد ٢٤',hadith:'القرآن صنع أناساً فاقوا عقول فارس والروم — فلنعد إلى منهجه',action:'اسأل نفسك: هل أرتقي إلى مستوى القرآن أم أنزله إلى مستواي؟',young:'القرآن غيّر العالم! دعونا نعود إليه ونغيّر حياتنا به 🌍'},
    en:{title:'Return to the Quran',desc:'The Ummah has fallen below the level of Quranic discourse. Early Muslims rose to the level of the Quran while contemporary Muslims drag it down to theirs. The Quran must become a living energy in life, not something stored in museums.',verse:'Do they not then reflect on the Quran, or are there locks upon their hearts?',verseRef:'Muhammad 24',hadith:'The Quran created people who surpassed the intellect of Persians and Romans — let us return to its method',action:'Ask yourself: do I rise to the level of the Quran or bring it down to my level?',young:'The Quran changed the world! Let\'s return to it and change our lives with it 🌍'},
    fr:{title:'Le Retour au Coran',desc:'La Oumma est tombée en dessous du niveau du discours coranique. Les premiers musulmans se sont élevés au niveau du Coran tandis que les contemporains le rabaissent au leur. Le Coran doit devenir une énergie vivante.',verse:'Ne méditent-ils pas sur le Coran, ou y a-t-il des verrous sur leurs coeurs ?',verseRef:'Muhammad 24',hadith:'Le Coran a créé des gens qui ont surpassé l\'intellect des Perses et des Romains',action:'Demandez-vous : est-ce que je m\'élève au niveau du Coran ou je le rabaisse au mien ?',young:'Le Coran a changé le monde ! Revenons à lui et changeons nos vies 🌍'}
  },
  {
    id:3, emoji:'🏛️',
    ar:{title:'أسباب الأزمة',desc:'يشخّص الغزالي أسباب تراجع الأمة: الاستبداد السياسي، انفصال العلم عن الحكم، تعطيل قانون السببية، الاعتماد على المرويات الضعيفة، وإغفال الفقه الحضاري.',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',verseRef:'الرعد ١١',hadith:'أمة يتحكم فيها مستبد لا يُوثق بقدرتها على الحياة والنهوض — الغزالي',action:'ابحث عن الأسباب الحقيقية لمشاكلك — لا تلقِ اللوم على القدر',young:'إذا أردت التغيير، ابدأ بنفسك! الله لا يغير حال قوم حتى يغيروا أنفسهم 🏛️'},
    en:{title:'Causes of the Crisis',desc:'Al-Ghazali diagnoses the Ummah\'s decline: political despotism, separation of knowledge from governance, disabling the law of causality, reliance on weak narrations, and neglecting civilizational jurisprudence.',verse:'Indeed, God does not change the condition of a people until they change what is in themselves.',verseRef:'Ar-Ra\'d 11',hadith:'A nation controlled by a despot cannot be trusted to be capable of life and progress — Al-Ghazali',action:'Search for the real causes of your problems — don\'t blame destiny',young:'If you want change, start with yourself! God doesn\'t change a people until they change themselves 🏛️'},
    fr:{title:'Causes de la Crise',desc:'Al-Ghazali diagnostique le déclin : despotisme politique, séparation du savoir et du pouvoir, désactivation de la loi de causalité, dépendance aux narrations faibles, et négligence de la jurisprudence civilisationnelle.',verse:'Dieu ne change pas l\'état d\'un peuple tant qu\'ils ne changent pas ce qui est en eux-mêmes.',verseRef:'Ar-Ra\'d 11',hadith:'Une nation contrôlée par un despote ne peut être fiable pour la vie et le progrès — Al-Ghazali',action:'Cherchez les vraies causes de vos problèmes — ne blâmez pas le destin',young:'Si tu veux le changement, commence par toi-même ! 🏛️'}
  },
  {
    id:4, emoji:'🔬',
    ar:{title:'مناهج التفسير',desc:'ينتقد الغزالي قصور مناهج التفسير القديمة والحديثة: العجز عن اكتشاف أدوات الفهم الصحيح، وإغفال السنن الإلهية، والتكلف في فهم القرآن. لكنه يقرّ بقيمة كل المدارس: الأصولية والفلسفية والصوفية والأدبية.',verse:'وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ',verseRef:'النحل ٨٩',hadith:'كل مدرسة تفسيرية تساهم بشيء — لكن لا واحدة منها تحتكر الفهم',action:'اقرأ تفسيرين مختلفين لنفس الآية — وقارن بينهما',young:'القرآن كنز! كلما قرأته بطريقة مختلفة اكتشفت معنىً جديداً 🔬'},
    en:{title:'Methodologies of Interpretation',desc:'Al-Ghazali critiques shortcomings in classical and modern exegesis: inability to discover tools for proper understanding, neglecting divine laws, and forced interpretations. But he acknowledges the value of all schools: legal, philosophical, Sufi, and literary.',verse:'And We have sent down to you the Book as clarification for all things.',verseRef:'An-Nahl 89',hadith:'Each interpretive school contributes something — but none monopolizes understanding',action:'Read two different interpretations of the same verse — and compare them',young:'The Quran is a treasure! Every time you read it differently you discover a new meaning 🔬'},
    fr:{title:'Méthodologies d\'Interprétation',desc:'Al-Ghazali critique les lacunes de l\'exégèse classique et moderne : incapacité à découvrir les outils de compréhension, négligence des lois divines, et interprétations forcées. Mais il reconnaît la valeur de toutes les écoles.',verse:'Et Nous avons fait descendre sur toi le Livre comme clarification de toute chose.',verseRef:'An-Nahl 89',hadith:'Chaque école interprétative contribue quelque chose — mais aucune ne monopolise la compréhension',action:'Lisez deux interprétations différentes du même verset — et comparez-les',young:'Le Coran est un trésor ! Chaque fois que tu le lis différemment tu découvres un nouveau sens 🔬'}
  },
  {
    id:5, emoji:'🚫',
    ar:{title:'رفض النسخ',desc:'من أكثر مواقف الغزالي إثارةً للجدل: يرفض تماماً أن تكون أي آية قرآنية منسوخة أو معطلة. يعتبر ذلك إهانة للقرآن. موقفه: كل آية يمكن أن تعمل — والحكمة في معرفة الظروف التي تعمل فيها كل آية.',verse:'لَا يَأْتِيهِ الْبَاطِلُ مِن بَيْنِ يَدَيْهِ وَلَا مِنْ خَلْفِهِ',verseRef:'فصلت ٤٢',hadith:'كل آية قابلة للعمل — لكن الحكيم يعرف الظروف التي تعمل فيها كل آية — الغزالي',action:'لا تسارع بالقول إن آية منسوخة — ابحث عن سياقها وظرفها',young:'كل آية في القرآن مهمة ولها معنى! لا تتجاهل أي آية 🚫'},
    en:{title:'Rejecting Abrogation',desc:'One of Al-Ghazali\'s most controversial positions: he completely rejects that any Quranic verse has been abrogated. He considers it an insult to the Quran. His position: every verse can be operative — wisdom lies in knowing when each verse applies.',verse:'Falsehood cannot approach it from before it or behind it.',verseRef:'Fussilat 42',hadith:'Every verse can work — the wise person knows the circumstances under which each verse operates — Al-Ghazali',action:'Don\'t rush to say a verse is abrogated — search for its context and circumstances',young:'Every verse in the Quran is important and has meaning! Don\'t ignore any verse 🚫'},
    fr:{title:'Rejet de l\'Abrogation',desc:'L\'une des positions les plus controversées d\'Al-Ghazali : il rejette complètement que tout verset coranique ait été abrogé. Il considère cela comme une insulte au Coran. Sa position : chaque verset peut fonctionner.',verse:'Le faux ne l\'atteint ni par devant ni par derrière.',verseRef:'Fussilat 42',hadith:'Chaque verset peut fonctionner — le sage connaît les circonstances dans lesquelles chaque verset s\'applique — Al-Ghazali',action:'Ne vous précipitez pas à dire qu\'un verset est abrogé — cherchez son contexte',young:'Chaque verset du Coran est important et a un sens ! N\'ignore aucun verset 🚫'}
  },
  {
    id:6, emoji:'⚡',
    ar:{title:'السنن الإلهية',desc:'القرآن يحتوي على سنن (قوانين) تحكم نهوض الحضارات وسقوطها: سنة التدافع، سنة التداول الحضاري، سنة التسخير، وسنة الأجل. فهم هذه السنن ضرورة للنهضة.',verse:'وَتِلْكَ الْأَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ',verseRef:'آل عمران ١٤٠',hadith:'بذور النهضة الحضارية موجودة في القرآن — كما أن أسباب السقوط مبينة فيه',action:'ابحث في القرآن عن قانون حضاري واحد — وطبّقه على واقعنا',young:'القرآن يعلمنا لماذا ترتفع الأمم ولماذا تسقط! تعلم من التاريخ ⚡'},
    en:{title:'Divine Laws',desc:'The Quran contains divine laws (sunan) governing the rise and fall of civilizations: the law of mutual struggle, civilizational rotation, harnessing resources, and appointed terms. Understanding these is essential for renaissance.',verse:'And these days We alternate among people.',verseRef:'Aal-Imran 140',hadith:'The seeds of civilizational revival exist in the Quran — as do the causes of decline',action:'Search the Quran for one civilizational law — and apply it to our reality',young:'The Quran teaches us why nations rise and why they fall! Learn from history ⚡'},
    fr:{title:'Les Lois Divines',desc:'Le Coran contient des lois divines (sunan) gouvernant l\'essor et la chute des civilisations : la loi de la lutte mutuelle, la rotation civilisationnelle, l\'exploitation des ressources, et les termes fixés.',verse:'Et ces jours, Nous les faisons alterner parmi les gens.',verseRef:'Aal-Imran 140',hadith:'Les graines du renouveau civilisationnel existent dans le Coran — ainsi que les causes du déclin',action:'Cherchez dans le Coran une loi civilisationnelle — et appliquez-la à notre réalité',young:'Le Coran nous apprend pourquoi les nations s\'élèvent et pourquoi elles tombent ! ⚡'}
  },
  {
    id:7, emoji:'🛡️',
    ar:{title:'القرآن والتطبيق العملي',desc:'يصر الغزالي على أن أوامر القرآن يجب أن تتحول إلى برامج عملية. آية "وأعدوا لهم ما استطعتم من قوة" يجب أن تتحول إلى خطط عسكرية واقتصادية حقيقية لا مجرد تأمل روحي.',verse:'وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ',verseRef:'الأنفال ٦٠',hadith:'الغزالي: لا يكفي أن نتلو القرآن — يجب أن نحوّله إلى مشاريع حقيقية',action:'اختر آية عملية اليوم وحوّلها إلى فعل ملموس في حياتك',young:'لا تكتفِ بقراءة القرآن — طبّقه! إذا قال الله ساعد الناس، ساعدهم فعلاً! 🛡️'},
    en:{title:'Quran and Practical Application',desc:'Al-Ghazali insists Quranic commands must translate into practical programs. The verse "prepare against them whatever you can of power" must become real military and economic plans, not just spiritual contemplation.',verse:'And prepare against them whatever you are able of power.',verseRef:'Al-Anfal 60',hadith:'Al-Ghazali: It is not enough to recite the Quran — we must turn it into real projects',action:'Choose a practical verse today and turn it into a concrete action in your life',young:'Don\'t just read the Quran — apply it! If God says help people, actually help them! 🛡️'},
    fr:{title:'Le Coran et l\'Application Pratique',desc:'Al-Ghazali insiste que les commandements coraniques doivent se traduire en programmes pratiques. Le verset « préparez contre eux tout ce que vous pouvez de force » doit devenir des plans réels.',verse:'Et préparez contre eux tout ce que vous pouvez de force.',verseRef:'Al-Anfal 60',hadith:'Al-Ghazali : Il ne suffit pas de réciter le Coran — nous devons le transformer en vrais projets',action:'Choisissez un verset pratique et transformez-le en action concrète dans votre vie',young:'Ne te contente pas de lire le Coran — applique-le ! Si Dieu dit aide les gens, aide-les vraiment ! 🛡️'}
  },
  {
    id:8, emoji:'🎓',
    ar:{title:'فشل التعليم',desc:'يحدد الغزالي فشل المؤسسات التعليمية في أن تكون جسراً بين الأجيال الجديدة والقرآن. الأطفال يحفظون بلا فهم. يروي قصته الشخصية كيف كان طفلاً يظن أن "ألزمناه طائره في عنقه" تعني طائراً حقيقياً!',verse:'وَكُلَّ إِنسَانٍ أَلْزَمْنَاهُ طَائِرَهُ فِي عُنُقِهِ',verseRef:'الإسراء ١٣',hadith:'الغزالي: كنت طفلاً أظن أن هناك طائراً مربوطاً في عنق كل إنسان!',action:'إذا كنت تعلّم القرآن، تأكد من أن المتعلم يفهم المعنى لا مجرد الحفظ',young:'افهم ما تحفظ! لا تحفظ القرآن بدون فهم — اسأل عن معنى كل آية 🎓'},
    en:{title:'Education Failure',desc:'Al-Ghazali identifies the failure of educational institutions to bridge new generations and the Quran. Children memorize without understanding. He tells his personal story of thinking as a child that "We have attached his bird to his neck" meant a literal bird!',verse:'And every person We have imposed their bird [fate] upon their neck.',verseRef:'Al-Isra 13',hadith:'Al-Ghazali: As a child I thought there was a literal bird tied around every person\'s neck!',action:'If you teach the Quran, ensure the learner understands the meaning, not just memorizes',young:'Understand what you memorize! Don\'t memorize the Quran without understanding — ask about every verse 🎓'},
    fr:{title:'L\'Échec de l\'Éducation',desc:'Al-Ghazali identifie l\'échec des institutions éducatives à servir de pont entre les nouvelles générations et le Coran. Les enfants mémorisent sans comprendre. Il raconte comment enfant il croyait que « Nous avons attaché son oiseau à son cou » signifiait un vrai oiseau !',verse:'Et à chaque homme Nous avons attaché son oiseau [destin] au cou.',verseRef:'Al-Isra 13',hadith:'Al-Ghazali : Enfant, je croyais qu\'il y avait un vrai oiseau attaché au cou de chaque personne !',action:'Si vous enseignez le Coran, assurez-vous que l\'apprenant comprend le sens, pas juste mémorise',young:'Comprends ce que tu mémorises ! Ne mémorise pas le Coran sans comprendre — demande le sens de chaque verset 🎓'}
  },
  {
    id:9, emoji:'⚖️',
    ar:{title:'الفرد والدولة',desc:'يميّز الغزالي أن بعض الأحكام القرآنية موجهة للأفراد وبعضها موجه للدولة. الخلط بينهما يؤدي إلى سوء فهم وتطبيق خاطئ للشريعة.',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'الشورى ٣٨',hadith:'بعض الأحكام للفرد وبعضها للدولة — والحكمة في التمييز بينهما',action:'عند قراءة حكم قرآني، اسأل: هل هذا موجه للفرد أم للمجتمع أم للدولة؟',young:'بعض الأحكام لك شخصياً وبعضها للحكومة — تعلّم الفرق! ⚖️'},
    en:{title:'Individual and State',desc:'Al-Ghazali distinguishes that some Quranic rulings are directed at individuals while others are directed at the state. Confusing the two leads to misunderstanding and misapplication of Sharia.',verse:'And their affairs are by consultation among them.',verseRef:'Ash-Shura 38',hadith:'Some rulings are for the individual and others for the state — wisdom is in distinguishing them',action:'When reading a Quranic ruling, ask: is this directed at the individual, society, or the state?',young:'Some rulings are for you personally and some are for the government — learn the difference! ⚖️'},
    fr:{title:'L\'Individu et l\'État',desc:'Al-Ghazali distingue que certains jugements coraniques s\'adressent aux individus tandis que d\'autres s\'adressent à l\'État. Confondre les deux mène à des malentendus et une mauvaise application de la Charia.',verse:'Et leurs affaires se règlent par consultation entre eux.',verseRef:'Ash-Shura 38',hadith:'Certains jugements sont pour l\'individu et d\'autres pour l\'État — la sagesse est de les distinguer',action:'En lisant un jugement coranique, demandez : est-ce adressé à l\'individu, la société, ou l\'État ?',young:'Certains jugements sont pour toi personnellement et d\'autres pour le gouvernement — apprends la différence ! ⚖️'}
  },
  {
    id:10, emoji:'🔭',
    ar:{title:'الإعجاز العلمي',desc:'يناقش الغزالي الإعجاز العلمي للقرآن وضوابطه. يحذر من المبالغة فيه بلا ضوابط كما يحذر من إهماله. القرآن فيه إشارات علمية لكنها ليست كتاب فيزياء.',verse:'سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ',verseRef:'فصلت ٥٣',hadith:'الإعجاز العلمي مهم لكن بضوابط — لا نحمّل القرآن ما لا يحتمل',action:'ابحث عن إشارة علمية في القرآن — لكن لا تبالغ في التفسير',young:'القرآن يحتوي على إشارات علمية مذهلة! لكن تذكر أنه كتاب هداية أولاً 🔭'},
    en:{title:'Scientific Miracles',desc:'Al-Ghazali discusses the scientific miraculousness of the Quran and its proper boundaries. He warns against both neglecting it and overextending it. The Quran has scientific references but it is not a physics textbook.',verse:'We will show them Our signs in the horizons and within themselves.',verseRef:'Fussilat 53',hadith:'Scientific miraculousness is important but with controls — don\'t overburden the Quran with what it cannot bear',action:'Search for a scientific reference in the Quran — but don\'t exaggerate in interpretation',young:'The Quran has amazing scientific references! But remember it is first a book of guidance 🔭'},
    fr:{title:'Les Miracles Scientifiques',desc:'Al-Ghazali discute le caractère miraculeux scientifique du Coran et ses limites. Il met en garde contre sa négligence comme contre son exagération. Le Coran a des références scientifiques mais n\'est pas un livre de physique.',verse:'Nous leur montrerons Nos signes dans les horizons et en eux-mêmes.',verseRef:'Fussilat 53',hadith:'Le miracle scientifique est important mais avec des limites — ne surchargez pas le Coran',action:'Cherchez une référence scientifique dans le Coran — mais n\'exagérez pas l\'interprétation',young:'Le Coran a des références scientifiques étonnantes ! Mais rappelle-toi que c\'est d\'abord un livre de guidance 🔭'}
  },
  {
    id:11, emoji:'🤔',
    ar:{title:'موطن الخلل',desc:'التفصيل الفقهي المفرط على حساب المبادئ القرآنية الكبرى أحد أسباب التراجع. نحن أمة استغرقت في التفصيلات الجزئية وأهملت الصورة الكبرى. الغزالي لا يعرف أمة أنفقت وقتاً على الجزئيات كالأمة الإسلامية.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَسْأَلُوا عَنْ أَشْيَاءَ إِن تُبْدَ لَكُمْ تَسُؤْكُمْ',verseRef:'المائدة ١٠١',hadith:'الغزالي: لا أعرف أمة أنفقت على التفاصيل الفقهية مثل أمتنا — على حساب المقاصد الكبرى',action:'ركّز على المقاصد الكبرى للقرآن — لا تغرق في التفاصيل الصغيرة',young:'لا تضع في التفاصيل الصغيرة وتنسى الأشياء المهمة الكبيرة! 🤔'},
    en:{title:'The Locus of Deficiency',desc:'Excessive jurisprudential detail at the expense of major Quranic principles is a cause of decline. We are a nation consumed by minutiae while neglecting the big picture. Al-Ghazali knows no nation that spent as much time on details as the Muslim Ummah.',verse:'O you who believe, do not ask about things which, if shown to you, would distress you.',verseRef:'Al-Maidah 101',hadith:'Al-Ghazali: I know no nation that spent on jurisprudential details like ours — at the expense of major objectives',action:'Focus on the major objectives of the Quran — don\'t drown in small details',young:'Don\'t get lost in small details and forget the big important things! 🤔'},
    fr:{title:'Le Lieu de la Déficience',desc:'Le détail juridique excessif au détriment des grands principes coraniques est une cause de déclin. Nous sommes une nation consumée par les minuties tout en négligeant la vue d\'ensemble.',verse:'Ô vous qui croyez, ne posez pas de questions sur des choses qui, si elles vous étaient montrées, vous affligeraient.',verseRef:'Al-Maidah 101',hadith:'Al-Ghazali : Je ne connais pas de nation qui a dépensé en détails juridiques comme la nôtre — aux dépens des grands objectifs',action:'Concentrez-vous sur les grands objectifs du Coran — ne vous noyez pas dans les petits détails',young:'Ne te perds pas dans les petits détails et n\'oublie pas les grandes choses importantes ! 🤔'}
  },
  {
    id:12, emoji:'💡',
    ar:{title:'أزمة فكر',desc:'نحن أمة أكلتها تقاليد صنعتها لنفسها ووضعت أغلالاً في طرقها بنفسها. أزمة المسلمين ليست في القرآن بل في طريقة تعاملهم معه. القرآن يحمل معاني متعددة — وهذا من إعجازه لا من عيوبه.',verse:'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ',verseRef:'القمر ١٧',hadith:'القرآن يحمل معاني متعددة — وهذا من إعجازه لا من عيوبه — الغزالي',action:'حرّر عقلك من القيود التي صنعتها أنت — وعد للقرآن بقلب مفتوح',young:'القرآن سهل وعميق في نفس الوقت! افتح قلبك وعقلك له 💡'},
    en:{title:'A Crisis of Thought',desc:'We are a nation consumed by traditions it made for itself, placing shackles on its own paths. The Muslim crisis is not in the Quran but in how they deal with it. The Quran bears multiple meanings — this is part of its miracle, not a defect.',verse:'And We have certainly made the Quran easy for remembrance, so is there any who will remember?',verseRef:'Al-Qamar 17',hadith:'The Quran bears multiple meanings — this is part of its miraculous nature, not a defect — Al-Ghazali',action:'Free your mind from self-imposed constraints — return to the Quran with an open heart',young:'The Quran is both easy and deep at the same time! Open your heart and mind to it 💡'},
    fr:{title:'Une Crise de Pensée',desc:'Nous sommes une nation consumée par des traditions qu\'elle s\'est faites, plaçant des chaînes sur ses propres chemins. La crise musulmane n\'est pas dans le Coran mais dans la façon de le traiter. Le Coran porte des sens multiples — c\'est son miracle.',verse:'Et Nous avons certes facilité le Coran pour le rappel, y a-t-il quelqu\'un pour se rappeler ?',verseRef:'Al-Qamar 17',hadith:'Le Coran porte des sens multiples — c\'est son caractère miraculeux, pas un défaut — Al-Ghazali',action:'Libérez votre esprit des contraintes auto-imposées — revenez au Coran avec un coeur ouvert',young:'Le Coran est facile et profond en même temps ! Ouvre ton coeur et ton esprit 💡'}
  },
  {
    id:13, emoji:'🧭',
    ar:{title:'الفهم العُمَري',desc:'يقدّم الغزالي نموذج عمر بن الخطاب في فهم القرآن وتطبيقه: فهم سياقي متحرك يراعي المقاصد ولا يتجمد عند الحرف. عمر أوقف سهم المؤلفة قلوبهم لتغيّر الظرف — وهذا فقه حي.',verse:'إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ',verseRef:'التوبة ٦٠',hadith:'عمر أوقف العمل بنص قرآني لأن الظرف تغير — هذا فقه لا تعطيل',action:'افهم القرآن في ضوء مقاصده — لا تتجمد عند الحرف',young:'عمر بن الخطاب كان يفهم القرآن بذكاء — تعلّم منه! 🧭'},
    en:{title:'The Omari Understanding',desc:'Al-Ghazali presents Omar ibn al-Khattab as a model for engaging Quranic interpretation: contextual, dynamic, attentive to objectives, never frozen at the letter. Omar suspended the share of "those whose hearts are to be reconciled" when circumstances changed — this is living jurisprudence.',verse:'Indeed, charity is for the poor and the needy.',verseRef:'At-Tawbah 60',hadith:'Omar suspended a Quranic provision because circumstances changed — this is jurisprudence, not suspension',action:'Understand the Quran in light of its objectives — don\'t freeze at the letter',young:'Omar ibn al-Khattab understood the Quran intelligently — learn from him! 🧭'},
    fr:{title:'La Compréhension Omarienne',desc:'Al-Ghazali présente Omar ibn al-Khattab comme modèle d\'interprétation coranique engagée : contextuelle, dynamique, attentive aux objectifs. Omar a suspendu la part des « dont les coeurs sont à réconcilier » quand les circonstances ont changé.',verse:'Les aumônes sont pour les pauvres et les nécessiteux.',verseRef:'At-Tawbah 60',hadith:'Omar a suspendu une disposition coranique car les circonstances avaient changé — c\'est de la jurisprudence vivante',action:'Comprenez le Coran à la lumière de ses objectifs — ne vous figez pas à la lettre',young:'Omar ibn al-Khattab comprenait le Coran intelligemment — apprends de lui ! 🧭'}
  },
  {
    id:14, emoji:'🌱',
    ar:{title:'من تجربتي الذاتية',desc:'يروي الغزالي تجربته الشخصية مع القرآن: كيف تحوّل من حافظ صغير لا يفهم ما يحفظ إلى مفكر يرى في القرآن مشروعاً حضارياً. رحلته نموذج للتحول من الحفظ الآلي إلى الفهم الحي.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١',hadith:'الغزالي: رحلتي مع القرآن بدأت بالحفظ وانتهت بالمشروع الحضاري',action:'شارك تجربتك مع القرآن — كيف غيّر حياتك؟',young:'الشيخ الغزالي حفظ القرآن صغيراً ثم فهمه كبيراً — ابدأ رحلتك أنت أيضاً! 🌱'},
    en:{title:'From My Personal Experience',desc:'Al-Ghazali tells his personal journey with the Quran: from a young memorizer who didn\'t understand what he memorized to a thinker who sees the Quran as a civilizational project. His journey models the transformation from mechanical memorization to living understanding.',verse:'Read in the name of your Lord who created.',verseRef:'Al-Alaq 1',hadith:'Al-Ghazali: My journey with the Quran began with memorization and ended with a civilizational project',action:'Share your experience with the Quran — how has it changed your life?',young:'Sheikh Al-Ghazali memorized the Quran as a child then understood it as an adult — start your journey too! 🌱'},
    fr:{title:'De Mon Expérience Personnelle',desc:'Al-Ghazali raconte son parcours personnel avec le Coran : d\'un jeune mémorisateur qui ne comprenait pas ce qu\'il mémorisait à un penseur qui voit le Coran comme un projet civilisationnel.',verse:'Lis au nom de ton Seigneur qui a créé.',verseRef:'Al-Alaq 1',hadith:'Al-Ghazali : Mon parcours avec le Coran a commencé par la mémorisation et s\'est terminé par un projet civilisationnel',action:'Partagez votre expérience avec le Coran — comment a-t-il changé votre vie ?',young:'Sheikh Al-Ghazali a mémorisé le Coran enfant puis l\'a compris adulte — commence ton parcours toi aussi ! 🌱'}
  },
  {
    id:15, emoji:'🔑',
    ar:{title:'القرآن رحمة للعالمين',desc:'القرآن ليس كتاباً للمسلمين فقط بل رسالة عالمية شاملة. شموليته وعالميته تجعله صالحاً لكل زمان ومكان. يجب أن نقدمه للعالم كمشروع حضاري لا كطقوس دينية.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧',hadith:'القرآن رسالة حضارية للبشرية كلها — لا لفئة دون فئة',action:'قدّم القرآن لشخص غير مسلم بأسلوب حضاري راقٍ',young:'القرآن للعالم كله! شاركه مع الجميع بأسلوب جميل وراقٍ 🔑'},
    en:{title:'The Quran: Mercy for All Worlds',desc:'The Quran is not a book for Muslims only but a universal comprehensive message. Its comprehensiveness and universality make it valid for all times and places. We must present it to the world as a civilizational project, not just religious rituals.',verse:'And We have not sent you except as a mercy to the worlds.',verseRef:'Al-Anbiya 107',hadith:'The Quran is a civilizational message for all of humanity — not for one group alone',action:'Present the Quran to a non-Muslim in a civilized and refined manner',young:'The Quran is for the whole world! Share it with everyone in a beautiful and refined way 🔑'},
    fr:{title:'Le Coran : Miséricorde pour les Mondes',desc:'Le Coran n\'est pas un livre pour les musulmans seulement mais un message universel complet. Son universalité le rend valide pour tous les temps et lieux. Nous devons le présenter au monde comme un projet civilisationnel.',verse:'Et Nous ne t\'avons envoyé qu\'en miséricorde pour les mondes.',verseRef:'Al-Anbiya 107',hadith:'Le Coran est un message civilisationnel pour toute l\'humanité — pas pour un seul groupe',action:'Présentez le Coran à un non-musulman de manière civilisée et raffinée',young:'Le Coran est pour le monde entier ! Partage-le avec tout le monde de manière belle et raffinée 🔑'}
  }
];

const QUIZ = [
  {
    ar:{q:'ما المعنى الحقيقي لـ "التدبر" في القرآن؟',opts:['القراءة السريعة','التأمل العميق في المعاني','الحفظ عن ظهر قلب','الاستماع فقط'],correct:1,hint:'هذا الفعل يتطلب التوقف والتفكير في كل آية',quran:'محمد ٢٤'},
    en:{q:'What is the true meaning of "tadabbur" in the Quran?',opts:['Speed reading','Deep reflection on meanings','Memorizing by heart','Just listening'],correct:1,hint:'This act requires stopping and thinking about every verse',quran:'Muhammad 24'},
    fr:{q:'Quel est le vrai sens du "tadabbur" dans le Coran ?',opts:['La lecture rapide','La reflexion profonde sur les sens','La memorisation par coeur','Juste ecouter'],correct:1,hint:'Cet acte necessite de s\'arreter et de reflechir a chaque verset',quran:'Muhammad 24'}
  },
  {
    ar:{q:'في أي سورة وردت: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ"؟',opts:['البقرة','القمر','الرحمن','يس'],correct:1,hint:'هذه السورة تتحدث عن يوم القيامة والعذاب',quran:'القمر ١٧'},
    en:{q:'In which surah does "We have made the Quran easy for remembrance" appear?',opts:['Al-Baqarah','Al-Qamar','Ar-Rahman','Yasin'],correct:1,hint:'This surah discusses the Day of Judgment and punishment',quran:'Al-Qamar 17'},
    fr:{q:'Dans quelle sourate apparait "Nous avons rendu le Coran facile pour la meditation" ?',opts:['Al-Baqarah','Al-Qamar','Ar-Rahman','Yasin'],correct:1,hint:'Cette sourate parle du Jour du Jugement et du chatiment',quran:'Al-Qamar 17'}
  },
  {
    ar:{q:'ماذا يقول الشيخ الغزالي عن حفظ القرآن بدون فهم؟',opts:['أفضل من عدم الحفظ','كالوعاء الفارغ','لا بأس به','هو الأهم'],correct:1,hint:'الشيخ يشبّه الحافظ بلا فهم بشيء بلا محتوى',quran:'العنكبوت ٤٩'},
    en:{q:'What does Sheikh al-Ghazali say about memorizing the Quran without understanding?',opts:['Better than not memorizing','Like an empty vessel','It is acceptable','It is the most important'],correct:1,hint:'The Sheikh compares a memorizer without understanding to something without content',quran:'Al-Ankabut 49'},
    fr:{q:'Que dit le Sheikh al-Ghazali sur la memorisation du Coran sans comprehension ?',opts:['Mieux que ne pas memoriser','Comme un vase vide','C\'est acceptable','C\'est le plus important'],correct:1,hint:'Le Sheikh compare un memorisateur sans comprehension a quelque chose sans contenu',quran:'Al-Ankabut 49'}
  },
  {
    ar:{q:'أكمل الحديث: "خيركم من تعلم القرآن و..."',opts:['حفظه','قرأه','علّمه','كتبه'],correct:2,hint:'هذا الحديث يربط بين التعلم ونشر العلم',quran:'البخاري'},
    en:{q:'Complete the hadith: "The best among you are those who learn the Quran and..."',opts:['Memorize it','Recite it','Teach it','Write it'],correct:2,hint:'This hadith links learning with spreading knowledge',quran:'Bukhari'},
    fr:{q:'Completez le hadith : « Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et... »',opts:['Le memorisent','Le recitent','L\'enseignent','L\'ecrivent'],correct:2,hint:'Ce hadith lie l\'apprentissage a la diffusion du savoir',quran:'Bukhari'}
  },
  {
    ar:{q:'ما رأي الشيخ الغزالي في العلاقة بين القرآن والعلم الحديث؟',opts:['متعارضان','لا علاقة بينهما','متكاملان','القرآن يرفض العلم'],correct:2,hint:'الشيخ يرى أن القرآن يحث على البحث والاكتشاف',quran:'يونس ١٠١'},
    en:{q:'What is Sheikh al-Ghazali\'s view on the relationship between the Quran and modern science?',opts:['They conflict','They are unrelated','They complement each other','The Quran rejects science'],correct:2,hint:'The Sheikh sees the Quran as encouraging research and discovery',quran:'Yunus 101'},
    fr:{q:'Quel est l\'avis du Sheikh al-Ghazali sur la relation entre le Coran et la science moderne ?',opts:['Ils sont en conflit','Ils n\'ont aucun rapport','Ils se completent','Le Coran rejette la science'],correct:2,hint:'Le Sheikh voit le Coran encourager la recherche et la decouverte',quran:'Yunus 101'}
  },
  {
    ar:{q:'لماذا ذُكرت القصص في القرآن حسب الشيخ الغزالي؟',opts:['للتسلية','للعبرة والتعلم','للتاريخ فقط','للأدب'],correct:1,hint:'القرآن نفسه يقول: "لقد كان في قصصهم عبرة"',quran:'يوسف ١١١'},
    en:{q:'Why are stories mentioned in the Quran according to Sheikh al-Ghazali?',opts:['For entertainment','For lessons and learning','For history only','For literature'],correct:1,hint:'The Quran itself says: "In their stories there is a lesson"',quran:'Yusuf 111'},
    fr:{q:'Pourquoi les recits sont-ils mentionnes dans le Coran selon le Sheikh al-Ghazali ?',opts:['Pour le divertissement','Pour les lecons et l\'apprentissage','Pour l\'histoire seulement','Pour la litterature'],correct:1,hint:'Le Coran lui-meme dit : « Dans leurs recits il y a une lecon »',quran:'Yusuf 111'}
  },
  {
    ar:{q:'ما الذي يحدث عندما يجتمع قوم يتلون كتاب الله؟',opts:['يزداد رزقهم','تنزل عليهم السكينة','يُغفر لهم','ترتفع درجاتهم'],correct:1,hint:'هذا الحديث يتحدث عن حالة نفسية تنزل على المجتمعين',quran:'مسلم'},
    en:{q:'What happens when people gather to recite the Book of Allah?',opts:['Their provision increases','Tranquility descends upon them','They are forgiven','Their ranks are elevated'],correct:1,hint:'This hadith describes a spiritual state that descends upon the group',quran:'Muslim'},
    fr:{q:'Que se passe-t-il quand des gens se reunissent pour reciter le Livre d\'Allah ?',opts:['Leur subsistance augmente','La serenite descend sur eux','Ils sont pardonnes','Leurs rangs sont eleves'],correct:1,hint:'Ce hadith decrit un etat spirituel qui descend sur le groupe',quran:'Muslim'}
  },
  {
    ar:{q:'كم حسنة في قراءة حرف واحد من القرآن؟',opts:['حسنة واحدة','خمس حسنات','عشر حسنات','مئة حسنة'],correct:2,hint:'الحسنة بعشر أمثالها كما في الحديث',quran:'الترمذي'},
    en:{q:'How many good deeds for reading one letter from the Quran?',opts:['One good deed','Five good deeds','Ten good deeds','One hundred good deeds'],correct:2,hint:'Each good deed is multiplied by ten as mentioned in the hadith',quran:'Tirmidhi'},
    fr:{q:'Combien de bonnes actions pour la lecture d\'une lettre du Coran ?',opts:['Une bonne action','Cinq bonnes actions','Dix bonnes actions','Cent bonnes actions'],correct:2,hint:'Chaque bonne action est multipliee par dix comme mentionne dans le hadith',quran:'Tirmidhi'}
  },
  {
    ar:{q:'ما المقصود بـ "هجر القرآن" عند الشيخ الغزالي؟',opts:['عدم القراءة فقط','ترك العمل به','القراءة والعمل معاً','الحفظ فقط'],correct:1,hint:'الهجر الأخطر هو أن تقرأ ولا تطبق',quran:'الفرقان ٣٠'},
    en:{q:'What does "abandoning the Quran" mean according to Sheikh al-Ghazali?',opts:['Not reading it only','Failing to act upon it','Both reading and acting','Only memorization'],correct:1,hint:'The most dangerous abandonment is reading without applying',quran:'Al-Furqan 30'},
    fr:{q:'Que signifie "abandonner le Coran" selon le Sheikh al-Ghazali ?',opts:['Ne pas le lire seulement','Ne pas agir selon lui','Lire et agir ensemble','Seulement la memorisation'],correct:1,hint:'L\'abandon le plus dangereux est de lire sans appliquer',quran:'Al-Furqan 30'}
  },
  {
    ar:{q:'أكمل الآية: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ ..."',opts:['الأنفس','الأرواح','القلوب','العقول'],correct:2,hint:'هذا العضو هو مركز الإيمان في الإنسان',quran:'الرعد ٢٨'},
    en:{q:'Complete the verse: "Verily, in the remembrance of Allah do ... find rest"',opts:['Souls','Spirits','Hearts','Minds'],correct:2,hint:'This organ is the center of faith in a person',quran:'Ar-Ra\'d 28'},
    fr:{q:'Completez le verset : « C\'est par le rappel d\'Allah que les ... se tranquillisent »',opts:['Ames','Esprits','Coeurs','Raisons'],correct:2,hint:'Cet organe est le centre de la foi chez l\'etre humain',quran:'Ar-Ra\'d 28'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء قبل قراءة القرآن',text:'اللَّهُمَّ افْتَحْ عَلَيَّ حِكْمَتَكَ وَانْشُرْ عَلَيَّ رَحْمَتَكَ وَذَكِّرْنِي مَا نَسِيتُ',tr:'دعاء مأثور'},
    en:{label:'Dua Before Reading the Quran',text:'اللَّهُمَّ افْتَحْ عَلَيَّ حِكْمَتَكَ وَانْشُرْ عَلَيَّ رَحْمَتَكَ وَذَكِّرْنِي مَا نَسِيتُ',tr:'O Allah, open for me Your wisdom and spread upon me Your mercy and remind me of what I have forgotten'},
    fr:{label:'Dua Avant la Lecture du Coran',text:'اللَّهُمَّ افْتَحْ عَلَيَّ حِكْمَتَكَ وَانْشُرْ عَلَيَّ رَحْمَتَكَ وَذَكِّرْنِي مَا نَسِيتُ',tr:'O Allah, ouvre-moi Ta sagesse, repands sur moi Ta misericorde et rappelle-moi ce que j\'ai oublie'} },
  { ar:{label:'دعاء حفظ القرآن',text:'اللَّهُمَّ ارْحَمْنِي بِالْقُرْآنِ وَاجْعَلْهُ لِي إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً',tr:'دعاء مأثور'},
    en:{label:'Dua for Memorizing the Quran',text:'اللَّهُمَّ ارْحَمْنِي بِالْقُرْآنِ وَاجْعَلْهُ لِي إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً',tr:'O Allah, have mercy on me through the Quran and make it for me a guide, a light, guidance, and mercy'},
    fr:{label:'Dua pour Memoriser le Coran',text:'اللَّهُمَّ ارْحَمْنِي بِالْقُرْآنِ وَاجْعَلْهُ لِي إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً',tr:'O Allah, aie pitie de moi par le Coran et fais-en pour moi un guide, une lumiere, une guidance et une misericorde'} },
  { ar:{label:'دعاء زيادة العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Increasing Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour Augmenter le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء عدم النسيان',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ وَمِنْ قَلْبٍ لَا يَخْشَعُ',tr:'رواه مسلم'},
    en:{label:'Dua Against Forgetting',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ وَمِنْ قَلْبٍ لَا يَخْشَعُ',tr:'O Allah, I seek refuge in You from knowledge that does not benefit and from a heart that does not humble itself — Muslim'},
    fr:{label:'Dua Contre l\'Oubli',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ وَمِنْ قَلْبٍ لَا يَخْشَعُ',tr:'O Allah, je cherche refuge aupres de Toi contre un savoir inutile et un coeur qui ne s\'humilie pas — Muslim'} },
  { ar:{label:'دعاء القرآن ربيع القلب',text:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلَاءَ حُزْنِي وَذَهَابَ هَمِّي',tr:'رواه أحمد'},
    en:{label:'Dua: Quran as Spring of the Heart',text:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلَاءَ حُزْنِي وَذَهَابَ هَمِّي',tr:'O Allah, make the Quran the spring of my heart, the light of my chest, the remover of my sadness and the dispeller of my worry — Ahmad'},
    fr:{label:'Dua : Le Coran Printemps du Coeur',text:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلَاءَ حُزْنِي وَذَهَابَ هَمِّي',tr:'O Allah, fais du Coran le printemps de mon coeur, la lumiere de ma poitrine, le dissipateur de ma tristesse et le chasseur de mon souci — Ahmad'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'quran-guide-xp';
const BADGES_KEY = 'quran-guide-badges';
const READ_KEY = 'quran-guide-read';
const STREAK_KEY = 'quran-guide-streak';
const MODE_KEY = 'quran-guide-mode';
const QUIZ_BEST_KEY = 'quran-guide-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme];
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabTraits').textContent = t.tabTraits;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabProgress').textContent = t.tabProgress;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('traitsTitle').textContent = t.traitsTitle;
  document.getElementById('traitsDesc').textContent = t.traitsDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle;
  document.getElementById('progressDesc').textContent = t.progressDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  // Render sections
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  // Grid
  document.getElementById('homeGrid').innerHTML = TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = document.getElementById('traitsContainer');
  // Search bar
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Hafiz?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  // Save best score
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20); // bonus for completing
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'حافظ حقيقي!':lang==='fr'?'Un vrai Hafiz !':'A True Hafiz!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  document.getElementById('quizContainer').innerHTML = '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  document.getElementById('progressContainer').innerHTML = `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'درس مقروء':lang==='fr'?'Lecons lues':'Lessons Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  // Quick update if progress panel is visible
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«كيف نتعامل مع القرآن» كتاب يعالج أزمة المسلمين مع كتابهم المقدس. يكشف الشيخ الغزالي كيف تحول القرآن عند كثيرين من دليل حياة إلى كتاب بركة فقط. يدعو إلى القراءة بفهم والتدبر والعمل بالقرآن ويرفض الحفظ بلا فهم والقراءة بلا تطبيق.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "كيف نتعامل مع القرآن" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود ومسند أحمد'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending rational engagement with Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"How to Deal with the Quran" addresses the crisis of Muslims with their sacred book. Sheikh al-Ghazali reveals how the Quran has become for many merely a book of blessings rather than a guide to life. He calls for reading with understanding, contemplation, and acting upon the Quran, rejecting memorization without comprehension and reading without application.',
      sourcesTitle: 'Sources',
      sources: ['"How to Deal with the Quran" (Kayfa Nata\'amal ma\'a al-Quran) — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi, Abu Dawud, and Musnad Ahmad'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"Comment Interagir avec le Coran" aborde la crise des musulmans avec leur livre sacre. Le Sheikh al-Ghazali revele comment le Coran est devenu pour beaucoup un simple livre de benediction plutot qu\'un guide de vie. Il appelle a la lecture avec comprehension, a la contemplation et a l\'action selon le Coran, rejetant la memorisation sans comprehension et la lecture sans application.',
      sourcesTitle: 'Sources',
      sources: ['"Comment Interagir avec le Coran" (Kayfa Nata\'amal ma\'a al-Quran) — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi, Abu Dawud et Musnad Ahmad'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي في التعامل مع القرآن بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "كيف نتعامل مع القرآن" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ درساً، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/kayfa-nataamal-maa-al-quran'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom on engaging with the Quran interactively.'},
      {title:'📚 Sources',body:'"How to Deal with the Quran" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 lessons, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/kayfa-nataamal-maa-al-quran'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali sur l\'interaction avec le Coran.'},
      {title:'📚 Sources',body:'"Comment Interagir avec le Coran" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 lecons, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/kayfa-nataamal-maa-al-quran'},
    ]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ درساً جديداً كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء عند قراءة القرآن','⭐ أكمل ١٥ درساً لتصبح خبيراً'],
    en: ['📖 Read a new lesson every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua when reading the Quran','⭐ Complete all 15 lessons to become an Expert'],
    fr: ['📖 Lisez une nouvelle lecon chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas en lisant le Coran','⭐ Completez les 15 lecons pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  // Re-init scroll reveal
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#1B5E20','#388E3C','#66BB6A','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  // Set age mode class
  document.body.classList.toggle('young-mode', ageMode === 'young');
  // Update streak
  updateStreak();
  // Init
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
