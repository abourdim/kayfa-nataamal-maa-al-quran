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
    traitsDesc: '١٥ درساً من كتاب الشيخ محمد الغزالي — كل درس بآية وحديث وتطبيق عملي',
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
    id:1, emoji:'🌿',
    ar:{title:'القرآن دليل حياة',desc:'القرآن ليس كتاباً للمتاحف أو الأرفف، بل هو دليل حياة يومي. نزل ليُعاش لا ليُحفظ فقط. الشيخ الغزالي يؤكد أن القرآن جاء ليحرك الأمة ويبني حضارة، لا ليكون زينة في البيوت.',verse:'كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ',verseRef:'ص ٢٩',hadith:'اقرأوا القرآن فإنه يأتي يوم القيامة شفيعاً لأصحابه — رواه مسلم',action:'افتح المصحف اليوم واقرأ صفحة واحدة بتمعن وتفكر في معناها',young:'القرآن صديقك اليومي! افتحه كل يوم واقرأ ولو آية واحدة بتمعن 🌿'},
    en:{title:'The Quran: A Living Guide',desc:'The Quran is not a book for museums or shelves. It was revealed to be lived, not just memorized. Sheikh al-Ghazali emphasizes that the Quran came to move the Ummah and build a civilization, not to be a decoration in homes.',verse:'A blessed Book We have revealed to you so that they may reflect upon its verses and that those of understanding may remember',verseRef:'Sad 29',hadith:'Read the Quran, for it will come as an intercessor for its companions on the Day of Judgment — Muslim',action:'Open the Quran today and read one page thoughtfully, reflecting on its meaning',young:'The Quran is your daily friend! Open it every day and read even one verse thoughtfully 🌿'},
    fr:{title:'Le Coran : Un Guide Vivant',desc:"Le Coran n'est pas un livre de musee ou d'etagere. Il a ete revele pour etre vecu, pas seulement memorise. Le Sheikh al-Ghazali souligne que le Coran est venu pour mobiliser la Oumma et batir une civilisation, pas pour etre une decoration dans les maisons.",verse:'Un Livre beni que Nous avons fait descendre vers toi, afin qu\'ils meditent ses versets et que les doues d\'intelligence reflechissent',verseRef:'Sad 29',hadith:'Lisez le Coran, car il viendra comme intercesseur pour ses compagnons le Jour du Jugement — Muslim',action:"Ouvrez le Coran aujourd'hui et lisez une page en reflechissant a son sens",young:"Le Coran est ton ami quotidien ! Ouvre-le chaque jour et lis meme un seul verset attentivement 🌿"}
  },
  {
    id:2, emoji:'🧠',
    ar:{title:'القراءة بفهم',desc:'المشكلة ليست في ترك القرآن بل في قراءته بلا فهم. كثيرون يقرأون ولا يعقلون ما يقرأون. الشيخ الغزالي يرفض القراءة الببغائية ويدعو إلى إعمال العقل مع كل آية.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَى قُلُوبٍ أَقْفَالُهَا',verseRef:'محمد ٢٤',hadith:'خيركم من تعلم القرآن وعلمه — رواه البخاري',action:'اقرأ اليوم ١٠ آيات مع تفسيرها المبسط — لا تمر على آية إلا وأنت تفهمها',young:'لا تقرأ القرآن بسرعة! توقف عند كل آية واسأل: ماذا يقول لي ربي هنا؟ 🧠'},
    en:{title:'Reading with Understanding',desc:'The problem is not abandoning the Quran but reading it without understanding. Many read without comprehending what they recite. Sheikh al-Ghazali rejects parrot-like reading and calls for engaging the mind with every verse.',verse:'Do they not reflect upon the Quran, or are there locks upon their hearts?',verseRef:'Muhammad 24',hadith:'The best among you are those who learn the Quran and teach it — Bukhari',action:'Read 10 verses today with their simple explanation — do not pass a verse without understanding it',young:'Do not rush through the Quran! Stop at each verse and ask: what is Allah telling me here? 🧠'},
    fr:{title:'Lire avec Comprehension',desc:"Le probleme n'est pas d'abandonner le Coran mais de le lire sans comprendre. Beaucoup lisent sans saisir ce qu'ils recitent. Le Sheikh al-Ghazali rejette la lecture mecanique et appelle a engager l'esprit avec chaque verset.",verse:'Ne meditent-ils pas sur le Coran, ou y a-t-il des verrous sur leurs coeurs ?',verseRef:'Muhammad 24',hadith:'Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et l\'enseignent — Bukhari',action:"Lisez 10 versets aujourd'hui avec leur explication simple — ne passez pas un verset sans le comprendre",young:"Ne lis pas le Coran a la hate ! Arrete-toi a chaque verset et demande : que me dit Allah ici ? 🧠"}
  },
  {
    id:3, emoji:'🔍',
    ar:{title:'المنهج الموضوعي',desc:'القرآن له وحدة موضوعية في كل سورة. كل سورة لها محور تدور حوله آياتها. الشيخ الغزالي يدعو إلى دراسة السورة كوحدة متكاملة لا آيات مبعثرة.',verse:'اللَّهُ نَزَّلَ أَحْسَنَ الْحَدِيثِ كِتَابًا مُتَشَابِهًا مَثَانِيَ',verseRef:'الزمر ٢٣',hadith:'إن هذا القرآن أنزل على سبعة أحرف فاقرأوا ما تيسر منه — متفق عليه',action:'اختر سورة قصيرة اليوم واقرأها كاملة — ثم حاول أن تجد الموضوع الرئيسي فيها',young:'كل سورة لها موضوع واحد كبير! اقرأ سورة كاملة وحاول تكتشف موضوعها 🔍'},
    en:{title:'The Thematic Approach',desc:'The Quran has thematic unity in every surah. Each surah has a central theme around which its verses revolve. Sheikh al-Ghazali calls for studying each surah as a complete unit, not scattered verses.',verse:'Allah has sent down the best discourse, a Book consistent with itself, repeating',verseRef:'Az-Zumar 23',hadith:'This Quran was revealed in seven modes, so recite whatever is easy for you — Agreed upon',action:'Choose a short surah today and read it completely — then try to find its main theme',young:'Every surah has one big topic! Read a whole surah and try to discover its theme 🔍'},
    fr:{title:"L'Approche Thematique",desc:"Le Coran a une unite thematique dans chaque sourate. Chaque sourate a un theme central autour duquel ses versets tournent. Le Sheikh al-Ghazali appelle a etudier chaque sourate comme une unite complete, pas des versets disperses.",verse:'Allah a fait descendre le plus beau des recits, un Livre dont les parties se ressemblent et se repetent',verseRef:'Az-Zumar 23',hadith:'Ce Coran a ete revele en sept modes, alors recitez ce qui vous est facile — Unanimement reconnu',action:"Choisissez une courte sourate aujourd'hui et lisez-la entierement — puis trouvez son theme principal",young:"Chaque sourate a un grand theme ! Lis une sourate entiere et essaie de decouvrir son theme 🔍"}
  },
  {
    id:4, emoji:'💭',
    ar:{title:'التدبر والتأمل',desc:'التدبر هو مفتاح الانتفاع بالقرآن. ليس مجرد قراءة عابرة بل تأمل عميق في كل كلمة وما وراءها. الشيخ الغزالي يرى أن دقائق معدودة من التدبر خير من ساعات من القراءة السريعة.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ وَلَوْ كَانَ مِنْ عِنْدِ غَيْرِ اللَّهِ لَوَجَدُوا فِيهِ اخْتِلَافًا كَثِيرًا',verseRef:'النساء ٨٢',hadith:'ما اجتمع قوم في بيت من بيوت الله يتلون كتاب الله ويتدارسونه بينهم إلا نزلت عليهم السكينة — رواه مسلم',action:'اجلس اليوم ١٠ دقائق مع آية واحدة — اقرأها وكررها وتأمل كل كلمة فيها',young:'خذ آية واحدة وفكر فيها بعمق! ماذا تعني؟ ماذا يريد الله أن تفعل؟ 💭'},
    en:{title:'Contemplation (Tadabbur)',desc:'Contemplation is the key to benefiting from the Quran. It is not a quick read but a deep reflection on every word and what lies behind it. Sheikh al-Ghazali believes a few minutes of tadabbur are better than hours of speed-reading.',verse:'Do they not reflect upon the Quran? If it had been from other than Allah, they would have found within it much contradiction',verseRef:'An-Nisa 82',hadith:'No people gather in a house of Allah reciting and studying the Quran together except that tranquility descends upon them — Muslim',action:'Sit for 10 minutes today with one verse — read it, repeat it, and reflect on every word in it',young:'Take one verse and think deeply about it! What does it mean? What does Allah want you to do? 💭'},
    fr:{title:'La Contemplation (Tadabbur)',desc:"La contemplation est la cle pour tirer profit du Coran. Ce n'est pas une lecture rapide mais une reflexion profonde sur chaque mot et ce qui se cache derriere. Le Sheikh al-Ghazali croit que quelques minutes de tadabbur valent mieux que des heures de lecture rapide.",verse:'Ne meditent-ils pas sur le Coran ? S\'il provenait d\'un autre qu\'Allah, ils y trouveraient beaucoup de contradictions',verseRef:'An-Nisa 82',hadith:'Aucun groupe ne se reunit dans une maison d\'Allah pour reciter et etudier le Coran ensemble sans que la serenite descende sur eux — Muslim',action:"Asseyez-vous 10 minutes aujourd'hui avec un seul verset — lisez-le, repetez-le et reflechissez a chaque mot",young:"Prends un verset et penses-y profondement ! Que signifie-t-il ? Que veut Allah que tu fasses ? 💭"}
  },
  {
    id:5, emoji:'⚡',
    ar:{title:'العمل بالقرآن',desc:'القرآن ليس للبركة وحدها بل للعمل. الصحابة كانوا لا يتجاوزون عشر آيات حتى يعملوا بها. الشيخ الغزالي يحذر من الهجر العملي للقرآن حيث نقرأه ولا نطبقه.',verse:'الَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يَتْلُونَهُ حَقَّ تِلَاوَتِهِ أُولَئِكَ يُؤْمِنُونَ بِهِ',verseRef:'البقرة ١٢١',hadith:'اقرأوا القرآن واعملوا به ولا تجفوا عنه ولا تغلوا فيه — رواه أحمد',action:'اختر آية واحدة اليوم وطبقها فعلياً في حياتك — اجعل القرآن منهج عمل',young:'القرآن ليس للقراءة فقط! اختر آية وطبقها اليوم في حياتك ⚡'},
    en:{title:'Acting on the Quran',desc:'The Quran is not just for blessings but for action. The Companions would not go beyond ten verses until they had acted upon them. Sheikh al-Ghazali warns against practical abandonment of the Quran — reading it but never applying it.',verse:'Those to whom We gave the Book recite it as it should be recited; they believe in it',verseRef:'Al-Baqarah 121',hadith:'Read the Quran and act upon it; do not abandon it and do not go to extremes with it — Ahmad',action:'Choose one verse today and actually apply it in your life — make the Quran your action plan',young:'The Quran is not just for reading! Pick a verse and apply it in your life today ⚡'},
    fr:{title:'Agir selon le Coran',desc:"Le Coran n'est pas seulement pour la benediction mais pour l'action. Les Compagnons ne depassaient pas dix versets avant de les mettre en pratique. Le Sheikh al-Ghazali met en garde contre l'abandon pratique du Coran — le lire sans jamais l'appliquer.",verse:'Ceux a qui Nous avons donne le Livre le recitent comme il se doit ; ceux-la y croient',verseRef:'Al-Baqarah 121',hadith:'Lisez le Coran et agissez selon lui ; ne l\'abandonnez pas et n\'exagerez pas — Ahmad',action:"Choisissez un verset aujourd'hui et appliquez-le reellement dans votre vie — faites du Coran votre plan d'action",young:"Le Coran n'est pas que pour la lecture ! Choisis un verset et applique-le dans ta vie aujourd'hui ⚡"}
  },
  {
    id:6, emoji:'🌍',
    ar:{title:'القرآن والتحديات المعاصرة',desc:'القرآن ليس كتاب تاريخ بل هو صالح لكل زمان ومكان. الشيخ الغزالي يرى أن مشكلة المسلمين ليست في القرآن بل في بُعدهم عنه. القرآن يحمل حلولاً لكل تحدٍّ معاصر.',verse:'مَا فَرَّطْنَا فِي الْكِتَابِ مِنْ شَيْءٍ',verseRef:'الأنعام ٣٨',hadith:'تركت فيكم ما إن تمسكتم به لن تضلوا بعدي أبداً: كتاب الله — رواه مسلم',action:'فكر في مشكلة تواجهك اليوم ثم ابحث عن آية تتعلق بها في القرآن',young:'القرآن فيه حلول لكل مشكلة! إذا واجهتك مشكلة، ابحث عن إجابة في القرآن 🌍'},
    en:{title:'The Quran and Modern Challenges',desc:'The Quran is not a history book but is relevant for all times and places. Sheikh al-Ghazali believes the problem of Muslims is not the Quran but their distance from it. The Quran holds solutions for every modern challenge.',verse:'We have not neglected anything in the Book',verseRef:'Al-An\'am 38',hadith:'I have left among you that which if you hold onto, you will never go astray: the Book of Allah — Muslim',action:'Think of a problem you face today, then search for a verse related to it in the Quran',young:'The Quran has solutions for every problem! If you face a challenge, look for an answer in the Quran 🌍'},
    fr:{title:'Le Coran et les Defis Modernes',desc:"Le Coran n'est pas un livre d'histoire mais est pertinent pour tous les temps et tous les lieux. Le Sheikh al-Ghazali croit que le probleme des musulmans n'est pas le Coran mais leur eloignement de celui-ci. Le Coran contient des solutions pour chaque defi moderne.",verse:"Nous n'avons rien omis dans le Livre",verseRef:"Al-An'am 38",hadith:'Je vous ai laisse ce qui, si vous vous y accrochez, ne vous egarera jamais : le Livre d\'Allah — Muslim',action:"Pensez a un probleme que vous rencontrez aujourd'hui, puis cherchez un verset lie dans le Coran",young:"Le Coran a des solutions pour chaque probleme ! Si tu fais face a un defi, cherche une reponse dans le Coran 🌍"}
  },
  {
    id:7, emoji:'📝',
    ar:{title:'الحفظ مع الفهم',desc:'الحفظ بلا فهم كالوعاء الفارغ. الشيخ الغزالي يدعو إلى الجمع بين الحفظ والفهم. لا خير في حافظ لا يفقه ما يحفظ، ولا خير في فاهم لا يحفظ ما يفهم.',verse:'بَلْ هُوَ آيَاتٌ بَيِّنَاتٌ فِي صُدُورِ الَّذِينَ أُوتُوا الْعِلْمَ',verseRef:'العنكبوت ٤٩',hadith:'يقال لصاحب القرآن اقرأ وارتق ورتل كما كنت ترتل في الدنيا — رواه أبو داود',action:'احفظ اليوم ٣ آيات جديدة مع فهم معناها — لا تحفظ كلمات بلا معنى',young:'احفظ آيات جديدة كل يوم! لكن الأهم أن تفهم ماذا تعني 📝'},
    en:{title:'Memorization WITH Comprehension',desc:'Memorization without understanding is like an empty vessel. Sheikh al-Ghazali calls for combining memorization with comprehension. There is no benefit in a memorizer who does not understand what they memorize, nor in one who understands but does not memorize.',verse:'Rather, it is clear verses preserved in the chests of those who have been given knowledge',verseRef:'Al-Ankabut 49',hadith:'It will be said to the companion of the Quran: Read and ascend and recite as you used to recite in the world — Abu Dawud',action:'Memorize 3 new verses today while understanding their meaning — do not memorize words without meaning',young:'Memorize new verses every day! But the most important thing is to understand what they mean 📝'},
    fr:{title:'La Memorisation AVEC la Comprehension',desc:"La memorisation sans comprehension est comme un vase vide. Le Sheikh al-Ghazali appelle a combiner memorisation et comprehension. Il n'y a pas de bien dans un memorisateur qui ne comprend pas ce qu'il memorise, ni dans celui qui comprend mais ne memorise pas.",verse:'Ce sont plutot des versets clairs dans les poitrines de ceux a qui le savoir a ete donne',verseRef:'Al-Ankabut 49',hadith:'Il sera dit au compagnon du Coran : Lis, monte et recite comme tu recitais dans le monde — Abu Dawud',action:"Memorisez 3 nouveaux versets aujourd'hui en comprenant leur sens — ne memorisez pas des mots sans signification",young:"Memorise de nouveaux versets chaque jour ! Mais le plus important est de comprendre ce qu'ils veulent dire 📝"}
  },
  {
    id:8, emoji:'🔬',
    ar:{title:'القرآن والعلم',desc:'القرآن يدعو إلى العلم والتفكر في الكون. الشيخ الغزالي يرفض التعارض المزعوم بين القرآن والعلم. القرآن ليس كتاب علوم تجريبية لكنه يحث على البحث والاكتشاف.',verse:'قُلِ انْظُرُوا مَاذَا فِي السَّمَاوَاتِ وَالْأَرْضِ',verseRef:'يونس ١٠١',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'اقرأ اليوم آية كونية في القرآن ثم ابحث عن الاكتشاف العلمي المرتبط بها',young:'القرآن يشجعك على اكتشاف الكون! اقرأ آية عن الطبيعة وابحث عنها 🔬'},
    en:{title:'The Quran and Science',desc:'The Quran calls for knowledge and reflection on the universe. Sheikh al-Ghazali rejects the alleged conflict between the Quran and science. The Quran is not a textbook of experimental science, but it encourages research and discovery.',verse:'Say: Look at what is in the heavens and the earth',verseRef:'Yunus 101',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Read a cosmic verse in the Quran today, then look up the scientific discovery related to it',young:'The Quran encourages you to explore the universe! Read a verse about nature and look it up 🔬'},
    fr:{title:'Le Coran et la Science',desc:"Le Coran appelle au savoir et a la reflexion sur l'univers. Le Sheikh al-Ghazali rejette le conflit pretendu entre le Coran et la science. Le Coran n'est pas un manuel de sciences experimentales, mais il encourage la recherche et la decouverte.",verse:'Dis : Regardez ce qui est dans les cieux et sur la terre',verseRef:'Yunus 101',hadith:'Quiconque emprunte un chemin a la recherche du savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',action:"Lisez un verset cosmique dans le Coran aujourd'hui, puis cherchez la decouverte scientifique liee",young:"Le Coran t'encourage a explorer l'univers ! Lis un verset sur la nature et fais des recherches 🔬"}
  },
  {
    id:9, emoji:'📖',
    ar:{title:'القصص القرآني عبرة لا تسلية',desc:'قصص القرآن ليست للتسلية بل للاعتبار والتعلم. كل قصة فيها درس لحياتنا اليوم. الشيخ الغزالي يؤكد أن القصص القرآني يربي القيم ويبني الشخصية ويعلم دروس الحياة.',verse:'لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِأُولِي الْأَلْبَابِ',verseRef:'يوسف ١١١',hadith:'حدثوا عن بني إسرائيل ولا حرج — رواه البخاري',action:'اقرأ اليوم قصة نبي من القرآن واستخرج منها ٣ دروس لحياتك',young:'قصص القرآن مليئة بالدروس! اقرأ قصة نبي واكتشف ماذا تعلمنا 📖'},
    en:{title:'Stories as Lessons, Not Entertainment',desc:'The stories in the Quran are not for entertainment but for lessons and learning. Every story has a lesson for our lives today. Sheikh al-Ghazali emphasizes that Quranic stories cultivate values, build character, and teach life lessons.',verse:'There was certainly in their stories a lesson for those of understanding',verseRef:'Yusuf 111',hadith:'Narrate from the Children of Israel and there is no harm — Bukhari',action:'Read a story of a prophet from the Quran today and extract 3 lessons for your life',young:'The stories of the Quran are full of lessons! Read a prophet\'s story and discover what it teaches us 📖'},
    fr:{title:'Les Recits : Des Lecons, Pas du Divertissement',desc:"Les recits du Coran ne sont pas pour le divertissement mais pour les lecons et l'apprentissage. Chaque recit contient une lecon pour nos vies aujourd'hui. Le Sheikh al-Ghazali souligne que les recits coraniques cultivent les valeurs et enseignent des lecons de vie.",verse:'Il y avait certes dans leurs recits une lecon pour les doues d\'intelligence',verseRef:'Yusuf 111',hadith:'Racontez des enfants d\'Israel et il n\'y a pas de mal — Bukhari',action:"Lisez l'histoire d'un prophete dans le Coran aujourd'hui et tirez-en 3 lecons pour votre vie",young:"Les recits du Coran sont pleins de lecons ! Lis l'histoire d'un prophete et decouvre ce qu'elle nous enseigne 📖"}
  },
  {
    id:10, emoji:'⚖️',
    ar:{title:'آيات الأحكام في سياقها',desc:'آيات الأحكام لا تُفهم بمعزل عن سياقها. الشيخ الغزالي يحذر من اجتزاء الآيات وتطبيقها بلا فهم لمقاصد الشريعة. الحكم القرآني يراعي الزمان والمكان والحال.',verse:'يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ',verseRef:'البقرة ١٨٥',hadith:'يسروا ولا تعسروا وبشروا ولا تنفروا — متفق عليه',action:'عندما تقرأ آية حكم اليوم، اقرأ ما قبلها وما بعدها لتفهم السياق كاملاً',young:'كل آية لها قصة! اقرأ ما قبل الآية وما بعدها لتفهمها جيداً ⚖️'},
    en:{title:'Legal Verses in Context',desc:'Legal verses cannot be understood in isolation from their context. Sheikh al-Ghazali warns against taking verses out of context and applying them without understanding the objectives of Islamic law. Quranic rulings consider time, place, and circumstance.',verse:'Allah intends for you ease and does not intend for you hardship',verseRef:'Al-Baqarah 185',hadith:'Make things easy and do not make them difficult; give glad tidings and do not drive people away — Agreed upon',action:'When you read a legal verse today, read what comes before and after it to understand the full context',young:'Every verse has a story! Read what comes before and after a verse to understand it well ⚖️'},
    fr:{title:'Les Versets Juridiques en Contexte',desc:"Les versets juridiques ne peuvent etre compris isolement de leur contexte. Le Sheikh al-Ghazali met en garde contre l'extraction de versets hors contexte et leur application sans comprendre les objectifs de la loi islamique. Les regles coraniques tiennent compte du temps, du lieu et des circonstances.",verse:'Allah veut pour vous la facilite et ne veut pas la difficulte',verseRef:'Al-Baqarah 185',hadith:'Facilitez et ne rendez pas les choses difficiles ; annoncez la bonne nouvelle et ne repoussez pas — Unanimement reconnu',action:"Quand vous lisez un verset juridique aujourd'hui, lisez ce qui vient avant et apres pour comprendre le contexte complet",young:"Chaque verset a une histoire ! Lis ce qui vient avant et apres un verset pour bien le comprendre ⚖️"}
  },
  {
    id:11, emoji:'❤️',
    ar:{title:'القرآن والقلب',desc:'القرآن شفاء للقلوب قبل أن يكون شفاء للأبدان. الشيخ الغزالي يؤكد أن القرآن يزيل الهم والحزن ويملأ القلب بالسكينة والطمأنينة. من قرأ القرآن بقلب حاضر وجد فيه دواء كل علة.',verse:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',verseRef:'الرعد ٢٨',hadith:'ما أصاب عبداً هم ولا حزن فقال: اللهم إني عبدك... وأن القرآن ربيع قلبي إلا أذهب الله همه — رواه أحمد',action:'إذا شعرت بالحزن أو القلق اليوم، اجلس واقرأ سورة الرحمن بتمعن',young:'القرآن يفرح قلبك! إذا كنت حزيناً، اقرأ القرآن وستشعر بالراحة ❤️'},
    en:{title:'The Quran and the Heart',desc:'The Quran is a cure for hearts before it is a cure for bodies. Sheikh al-Ghazali affirms that the Quran removes worry and sadness and fills the heart with tranquility and peace. Whoever reads the Quran with a present heart finds in it a remedy for every ailment.',verse:'Verily, in the remembrance of Allah do hearts find rest',verseRef:'Ar-Ra\'d 28',hadith:'No servant is afflicted with worry or grief and says: O Allah I am Your servant... and the Quran is the spring of my heart — except that Allah removes his grief — Ahmad',action:'If you feel sad or anxious today, sit and read Surah Ar-Rahman thoughtfully',young:'The Quran makes your heart happy! If you are feeling sad, read the Quran and you will feel peace ❤️'},
    fr:{title:'Le Coran et le Coeur',desc:"Le Coran est un remede pour les coeurs avant d'etre un remede pour les corps. Le Sheikh al-Ghazali affirme que le Coran dissipe l'inquietude et la tristesse et remplit le coeur de serenite et de paix. Quiconque lit le Coran avec un coeur present y trouve un remede a tout mal.",verse:'C\'est par le rappel d\'Allah que les coeurs se tranquillisent',verseRef:'Ar-Ra\'d 28',hadith:'Aucun serviteur n\'est frappe d\'inquietude ou de chagrin et dit : O Allah je suis Ton serviteur... et le Coran est le printemps de mon coeur — sauf qu\'Allah dissipe son chagrin — Ahmad',action:"Si vous vous sentez triste ou anxieux aujourd'hui, asseyez-vous et lisez la Sourate Ar-Rahman attentivement",young:"Le Coran rend ton coeur heureux ! Si tu es triste, lis le Coran et tu te sentiras en paix ❤️"}
  },
  {
    id:12, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'تعليم القرآن للأطفال',desc:'تعليم الأطفال القرآن مسؤولية عظيمة. الشيخ الغزالي يدعو إلى تعليم القرآن بحب لا بإكراه، وبفهم لا بتلقين. اجعل القرآن صديقاً لطفلك لا عبئاً عليه.',verse:'وَأْمُرْ أَهْلَكَ بِالصَّلَاةِ وَاصْطَبِرْ عَلَيْهَا',verseRef:'طه ١٣٢',hadith:'من قرأ القرآن وعمل بما فيه أُلبس والداه تاجاً يوم القيامة — رواه أبو داود',action:'اجلس مع طفل اليوم واقرأ معه آية واحدة واشرحها له بطريقة ممتعة',young:'علّم القرآن لأصدقائك وإخوتك! شارك معهم آية جميلة تعلمتها 👨‍👩‍👧‍👦'},
    en:{title:'Teaching the Quran to Children',desc:'Teaching children the Quran is a great responsibility. Sheikh al-Ghazali calls for teaching the Quran with love not force, and with understanding not rote learning. Make the Quran a friend to your child, not a burden.',verse:'And command your family to pray and be patient about it',verseRef:'Taha 132',hadith:'Whoever reads the Quran and acts upon it, their parents will be crowned on the Day of Judgment — Abu Dawud',action:'Sit with a child today and read one verse together, explaining it in a fun way',young:'Teach the Quran to your friends and siblings! Share a beautiful verse you learned with them 👨‍👩‍👧‍👦'},
    fr:{title:'Enseigner le Coran aux Enfants',desc:"Enseigner le Coran aux enfants est une grande responsabilite. Le Sheikh al-Ghazali appelle a enseigner le Coran avec amour et non par la force, avec comprehension et non par repetition mecanique. Faites du Coran un ami pour votre enfant, pas un fardeau.",verse:'Et ordonne a ta famille la priere et sois patient en cela',verseRef:'Taha 132',hadith:'Quiconque lit le Coran et agit selon lui, ses parents seront couronnes le Jour du Jugement — Abu Dawud',action:"Asseyez-vous avec un enfant aujourd'hui et lisez un verset ensemble en l'expliquant de facon amusante",young:"Enseigne le Coran a tes amis et freres et soeurs ! Partage un beau verset que tu as appris 👨‍👩‍👧‍👦"}
  },
  {
    id:13, emoji:'☀️',
    ar:{title:'القرآن في الحياة اليومية',desc:'القرآن ليس كتاب مناسبات بل كتاب حياة يومية. الشيخ الغزالي يدعو إلى جعل القرآن رفيق الصباح والمساء، في العمل والبيت، في الفرح والحزن. اجعل له ورداً يومياً لا تفرط فيه.',verse:'إِنَّ الَّذِينَ يَتْلُونَ كِتَابَ اللَّهِ وَأَقَامُوا الصَّلَاةَ وَأَنْفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً يَرْجُونَ تِجَارَةً لَنْ تَبُورَ',verseRef:'فاطر ٢٩',hadith:'من قرأ حرفاً من كتاب الله فله به حسنة والحسنة بعشر أمثالها — رواه الترمذي',action:'حدد ورداً يومياً من القرآن — ولو صفحة واحدة — والتزم به من اليوم',young:'اجعل القرآن عادتك اليومية! اقرأ كل صباح ولو آية واحدة ☀️'},
    en:{title:'The Quran in Daily Life',desc:'The Quran is not a book for occasions but a book for daily life. Sheikh al-Ghazali calls for making the Quran a companion of morning and evening, at work and home, in joy and sorrow. Set a daily portion and never miss it.',verse:'Those who recite the Book of Allah and establish prayer and spend from what We have provided them secretly and publicly — they hope for a transaction that will never fail',verseRef:'Fatir 29',hadith:'Whoever reads a letter from the Book of Allah earns a good deed, and each good deed is multiplied by ten — Tirmidhi',action:'Set a daily Quran portion — even one page — and commit to it starting today',young:'Make the Quran your daily habit! Read every morning, even just one verse ☀️'},
    fr:{title:'Le Coran dans la Vie Quotidienne',desc:"Le Coran n'est pas un livre pour les occasions mais un livre pour la vie quotidienne. Le Sheikh al-Ghazali appelle a faire du Coran un compagnon du matin et du soir, au travail et a la maison, dans la joie et la tristesse. Fixez une portion quotidienne et ne la manquez jamais.",verse:'Ceux qui recitent le Livre d\'Allah, accomplissent la priere et depensent de ce que Nous leur avons accorde secretement et publiquement — esperent un commerce qui ne perira jamais',verseRef:'Fatir 29',hadith:'Quiconque lit une lettre du Livre d\'Allah gagne une bonne action, et chaque bonne action est multipliee par dix — Tirmidhi',action:"Fixez une portion quotidienne du Coran — meme une seule page — et engagez-vous a la lire des aujourd'hui",young:"Fais du Coran ton habitude quotidienne ! Lis chaque matin, meme un seul verset ☀️"}
  },
  {
    id:14, emoji:'🚫',
    ar:{title:'تصحيح المفاهيم الخاطئة',desc:'كثير من المفاهيم الخاطئة تحيط بالقرآن: أنه صعب الفهم، أو أنه للعلماء فقط، أو أن قراءته بلا فهم كافية. الشيخ الغزالي يفند هذه المفاهيم ويؤكد أن القرآن للجميع.',verse:'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ',verseRef:'القمر ١٧',hadith:'بلّغوا عني ولو آية — رواه البخاري',action:'صحح مفهوماً خاطئاً عن القرآن عند شخص اليوم — القرآن ميسر للجميع',young:'القرآن سهل وليس صعباً! الله يسّره لك فلا تخف منه أبداً 🚫'},
    en:{title:'Correcting Common Misunderstandings',desc:'Many misconceptions surround the Quran: that it is hard to understand, only for scholars, or that reading without understanding is sufficient. Sheikh al-Ghazali refutes these misconceptions and affirms that the Quran is for everyone.',verse:'And We have certainly made the Quran easy for remembrance, so is there any who will remember?',verseRef:'Al-Qamar 17',hadith:'Convey from me even if it is one verse — Bukhari',action:'Correct a misconception about the Quran that someone holds today — the Quran is made easy for all',young:'The Quran is easy, not difficult! Allah made it easy for you, so never be afraid of it 🚫'},
    fr:{title:'Corriger les Malentendus Courants',desc:"Beaucoup de malentendus entourent le Coran : qu'il est difficile a comprendre, reserve aux savants, ou que le lire sans comprendre suffit. Le Sheikh al-Ghazali refute ces malentendus et affirme que le Coran est pour tout le monde.",verse:'Et Nous avons certes rendu le Coran facile pour la meditation. Y a-t-il quelqu\'un pour reflechir ?',verseRef:'Al-Qamar 17',hadith:'Transmettez de moi, ne serait-ce qu\'un seul verset — Bukhari',action:"Corrigez un malentendu sur le Coran chez quelqu'un aujourd'hui — le Coran est rendu facile pour tous",young:"Le Coran est facile, pas difficile ! Allah l'a rendu facile pour toi, alors n'en aie jamais peur 🚫"}
  },
  {
    id:15, emoji:'🕊️',
    ar:{title:'القرآن رحمة للعالمين',desc:'القرآن رسالة رحمة وهداية للبشرية جمعاء. الشيخ الغزالي يرى أن القرآن لم يُنزل لأمة واحدة بل للإنسانية كلها. هو نور يضيء ظلمات الجهل والظلم والفساد في كل مكان.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧',hadith:'إن هذا القرآن مأدبة الله فاقبلوا مأدبته ما استطعتم — رواه الحاكم',action:'شارك آية جميلة من القرآن مع شخص غير مسلم اليوم — أظهر رحمة القرآن للجميع',young:'القرآن رحمة لكل الناس! شارك جمال القرآن مع كل من حولك 🕊️'},
    en:{title:'The Quran: A Mercy to Mankind',desc:'The Quran is a message of mercy and guidance for all humanity. Sheikh al-Ghazali sees the Quran as revealed not for one nation but for all of humanity. It is a light that illuminates the darkness of ignorance, injustice, and corruption everywhere.',verse:'And We have not sent you except as a mercy to the worlds',verseRef:'Al-Anbiya 107',hadith:'This Quran is the banquet of Allah, so partake of His banquet as much as you can — Al-Hakim',action:'Share a beautiful verse from the Quran with a non-Muslim today — show the mercy of the Quran to all',young:'The Quran is mercy for all people! Share the beauty of the Quran with everyone around you 🕊️'},
    fr:{title:'Le Coran : Une Misericorde pour l\'Humanite',desc:"Le Coran est un message de misericorde et de guidance pour toute l'humanite. Le Sheikh al-Ghazali voit le Coran comme revele non pas pour une seule nation mais pour toute l'humanite. C'est une lumiere qui illumine les tenebres de l'ignorance, de l'injustice et de la corruption partout.",verse:"Et Nous ne t'avons envoye qu'en misericorde pour les mondes",verseRef:'Al-Anbiya 107',hadith:'Ce Coran est le banquet d\'Allah, alors participez a Son banquet autant que vous le pouvez — Al-Hakim',action:"Partagez un beau verset du Coran avec un non-musulman aujourd'hui — montrez la misericorde du Coran a tous",young:"Le Coran est une misericorde pour tous ! Partage la beaute du Coran avec tous ceux qui t'entourent 🕊️"}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Hafiz?) ═══════════════
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
