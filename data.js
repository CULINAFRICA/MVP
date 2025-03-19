
export const africanDishes = [ 
    "Alloco", "Brik", "Claclo", "Dibi", "Egusi", "FouFou", "Garri", 
    "Hawawshi", "Injera", "Jollof", "Kedjenou", "Lafidi", "Mafe", 
    "Ndole", "Ojja", "Pastilla", "Qatayef", "Ragout", "Suya",
    "Tajine", "Ugali", "Vindaye", "Wot", "Xalwo", "Yassa", "Zaalouk"
    
];


export const africanDishesDescription = africanDishes.flatMap((dish, index) => [
    { id: index, name: dish },
    // { id: index, name: dish + "-D" } commented out to text fr descriptions
    { id: index, name: dish + "-D" }
]);

export const africanDishesEnglish = africanDishes.flatMap((dish, index) => [
    { id: index, name: dish },
    { id: index, name: dish + "_en" }
]);

export const africanDishesFrench = africanDishes.flatMap((dish, index) => [
    { id: index, name: dish },
    { id: index, name: dish + "_fr" }
]);
african


export const africanDishesFunFacts = [
    { id: 0, name: "Alloco", funFact: "Les plantains, base de l'Alloco, sont riches en vitamine A, essentielle pour la santé des yeux et du système immunitaire. Ils sont également une excellente source de potassium, qui aide à réguler la tension artérielle."},
    { id: 1, name: "Brik", funFact: "Le Brik, souvent farci au thon, est une excellente source d'oméga-3, des acides gras essentiels qui favorisent la santé cardiaque et cérébrale."},
    { id: 2, name: "Claclo", funFact: "Le Claclo, un plat à base de bananes plantains frites, est riche en potassium, un minéral essentiel pour réguler la pression artérielle et maintenir une bonne santé cardiaque. Les plantains sont également une excellente source de vitamine A, qui soutient la vision et le système immunitaire."},
    { id: 3, name: "Dibi", funFact: "L'agneau, utilisé dans le Dibi, est une excellente source de protéines et de fer, essentiel pour prévenir l'anémie et maintenir un bon niveau d'énergie."},
    { id: 4, name: "Egusi", funFact: "Les graines d'Egusi sont riches en protéines végétales et en acides gras insaturés, bénéfiques pour la santé cardiovasculaire. Elles contiennent également des antioxydants qui aident à combattre les radicaux libres."},
    { id: 5, name: "FouFou", funFact: "Le Foufou, à base de manioc ou d'igname, est une source d'énergie durable grâce à sa teneur élevée en glucides complexes. Il est également sans gluten, ce qui en fait une option idéale pour les personnes intolérantes."},
    { id: 6, name: "Garri", funFact: "Le Garri, fabriqué à partir de manioc fermenté et séché, est une source d'énergie rapide grâce à sa teneur élevée en glucides. Il est également riche en fibres, ce qui favorise une bonne digestion et aide à prévenir la constipation. Le processus de fermentation du manioc augmente également sa teneur en probiotiques, bénéfiques pour la santé intestinale. "},
    { id: 7, name: "Hawawshi", funFact: "Le Hawawshi, souvent garni de viande hachée et d'épices, est une bonne source de protéines et de fer. Les épices comme le cumin et la coriandre ont des propriétés anti-inflammatoires."},
    { id: 8, name: "Injera", funFact: "L'Injera, fabriqué à partir de teff, est riche en fibres, en fer et en calcium. Le teff est également sans gluten, ce qui en fait une excellente alternative pour les personnes atteintes de la maladie cœliaque."},
    { id: 9, name: "Jollof", funFact: "Le riz Jollof, souvent accompagné de légumes et de tomates, est une excellente source de lycopène, un antioxydant qui peut réduire le risque de maladies cardiaques et de certains cancers."},
    { id: 10, name: "Kedjenou", funFact: "Le Kedjenou, cuit lentement avec du poulet et des légumes, préserve les nutriments essentiels. Le poulet est une excellente source de protéines maigres, tandis que les légumes apportent des vitamines et des minéraux."},
    { id: 11, name: "Lafidi", funFact: "Le Lafidi, à base de riz et de gombo, est riche en fibres solubles, qui aident à réguler la digestion et à maintenir un taux de cholestérol sain."},
    { id: 12, name: "Mafe", funFact: "Le Mafe, souvent préparé avec de la viande et des légumes dans une sauce à base d'arachides, est une excellente source de protéines et de graisses saines. Les arachides sont également riches en vitamine E, un antioxydant puissant."},
    { id: 13, name: "Ndole", funFact: "Le Ndole, à base de feuilles de ndolé (amarante), est riche en fer, en calcium et en vitamine C. Ces nutriments sont essentiels pour renforcer le système immunitaire et maintenir des os solides."},
    { id: 14, name: "Ojja", funFact: "L'Ojja, souvent préparé avec des œufs et des tomates, est une excellente source de protéines et de lycopène. Les œufs sont également riches en choline, un nutriment important pour la santé du cerveau."},
    { id: 15, name: "Pastilla", funFact: "La Pastilla, souvent garnie de poulet et d'amandes, est une excellente source de protéines et de graisses saines. Les amandes sont riches en vitamine E et en magnésium, bénéfiques pour la santé cardiaque."},
    { id: 16, name: "Qatayef", funFact: "Le Qatayef, souvent farci de fromage ou de viande, est une bonne source de calcium et de protéines. Le fromage apporte également des probiotiques, bénéfiques pour la santé intestinale."},
    { id: 17, name: "Ragout", funFact: "Le Ragout, mijoté lentement avec des viandes et des légumes, est une excellente source de nutriments essentiels. Les légumes apportent des vitamines et des minéraux, tandis que la viande fournit des protéines et du fer."},
    { id: 18, name: "Suya", funFact: "Le Suya, une brochette de viande épicée, est souvent préparé avec des épices comme le gingembre, l'ail et le piment, qui ont des propriétés anti-inflammatoires et antioxydantes. La viande, généralement du bœuf ou du poulet, est une excellente source de protéines et de fer, essentiels pour maintenir l'énergie et prévenir l'anémie."},
    { id: 19, name: "Tajine", funFact: "Le Tajine, cuit lentement avec des légumes et des épices, est riche en antioxydants et en fibres. Les épices comme le curcuma et le cumin ont des propriétés anti-inflammatoires."},
    { id: 20, name: "Ugali", funFact: "L'Ugali, à base de maïs, est une excellente source d'énergie grâce à sa teneur élevée en glucides complexes. Il est également sans gluten, ce qui en fait une option idéale pour les personnes intolérantes."},
    { id: 21, name: "Vindaye", funFact: "Le Vindaye, souvent préparé avec du poisson mariné, est une excellente source d'oméga-3, bénéfiques pour la santé cardiaque et cérébrale."},
    { id: 22, name: "Wot", funFact: "Le Wot, souvent préparé avec des légumes et des épices, est riche en antioxydants et en fibres. Les épices comme le piment et le gingembre ont des propriétés anti-inflammatoires."},
    { id: 23, name: "Xalwo", funFact: "Le Xalwo, un dessert somalien, est souvent préparé avec de la cardamome et du safran, des épices connues pour leurs propriétés digestives et anti-inflammatoires."},
    { id: 24, name: "Yassa", funFact: "Le Yassa, mariné avec des oignons et du citron, est riche en vitamine C et en antioxydants. Les oignons ont également des propriétés anti-inflammatoires et antibactériennes."},
    { id: 25, name: "Zaalouk", funFact: "Le Zaalouk, à base d'aubergines et de tomates, est riche en fibres et en antioxydants. Les aubergines sont également connues pour leur teneur en nasunine, un antioxydant bénéfique pour la santé cérébrale."}
]