const englishUnicode = [
    '\u0061', // a
    '\u0062', // b
    '\u0063', // c
    '\u0064', // d
    '\u0065', // e
    '\u0066', // f
    '\u0067', // g
    '\u0068', // h
    '\u0069', // i
    '\u006A', // j
    '\u006B', // k
    '\u006C', // l
    '\u006D', // m
    '\u006E', // n
    '\u006F', // o
    '\u0070', // p
    '\u0071', // q
    '\u0072', // r
    '\u0073', // s
    '\u0074', // t
    '\u0075', // u
    '\u0076', // v
    '\u0077', // w
    '\u0078', // x
    '\u0079', // y
    '\u007A'  // z
];

const engToHindiMap = new Map([
    ['\u0061', '\u0905'], // a -> अ
    ['\u0062', '\u092C'], // b -> ब
    ['\u0063', '\u092E'], // c -> म
    ['\u0064', '\u0926'], // d -> द
    ['\u0065', '\u0921'], // e -> ड
    ['\u0066', '\u0924'], // f -> त
    ['\u0067', '\u0917'], // g -> ग
    ['\u0068', '\u0905'], // h -> अ
    ['\u0069', '\u092B'], // i -> फ
    ['\u006A', '\u0907'], // j -> इ
    ['\u006B', '\u0909'], // k -> उ
    ['\u006C', '\u090F'], // l -> ए
    ['\u006D', '\u0928'], // m -> न
    ['\u006E', '\u0935'], // n -> व
    ['\u006F', '\u0930'], // o -> र
    ['\u0070', '\u091A'], // p -> च
    ['\u0071', '\u0914'], // q -> औ
    ['\u0072', '\u0915'], // r -> क
    ['\u0073', '\u0938'], // s -> स
    ['\u0074', '\u091F'], // t -> ट
    ['\u0075', '\u0928'], // u -> न
    ['\u0076', '\u092A'], // v -> प
    ['\u0077', '\u0906'], // w -> आ
    ['\u0078', '\u0937'], // x -> ष
    ['\u0079', '\u0932'], // y -> ल
    ['\u007A', '\u092F']  // z -> य
]);

const engToHindiList = [
    { eng: 'a', hindi: 'अ', unicodeEng: '\u0061', unicodeHindi: '\u0905' },
    { eng: 'b', hindi: 'ब', unicodeEng: '\u0062', unicodeHindi: '\u092C' },
    { eng: 'c', hindi: 'म', unicodeEng: '\u0063', unicodeHindi: '\u092E' },
    { eng: 'd', hindi: 'द', unicodeEng: '\u0064', unicodeHindi: '\u0926' },
    { eng: 'e', hindi: 'ड', unicodeEng: '\u0065', unicodeHindi: '\u0921' },
    { eng: 'f', hindi: 'त', unicodeEng: '\u0066', unicodeHindi: '\u0924' },
    { eng: 'g', hindi: 'ग', unicodeEng: '\u0067', unicodeHindi: '\u0917' },
    { eng: 'h', hindi: 'अ', unicodeEng: '\u0068', unicodeHindi: '\u0905' },
    { eng: 'i', hindi: 'फ', unicodeEng: '\u0069', unicodeHindi: '\u092B' },
    { eng: 'j', hindi: 'इ', unicodeEng: '\u006A', unicodeHindi: '\u0907' },
    { eng: 'k', hindi: 'उ', unicodeEng: '\u006B', unicodeHindi: '\u0909' },
    { eng: 'l', hindi: 'ए', unicodeEng: '\u006C', unicodeHindi: '\u090F' },
    { eng: 'm', hindi: 'न', unicodeEng: '\u006D', unicodeHindi: '\u0928' },
    { eng: 'n', hindi: 'व', unicodeEng: '\u006E', unicodeHindi: '\u0935' },
    { eng: 'o', hindi: 'र', unicodeEng: '\u006F', unicodeHindi: '\u0930' },
    { eng: 'p', hindi: 'च', unicodeEng: '\u0070', unicodeHindi: '\u091A' },
    { eng: 'q', hindi: 'औ', unicodeEng: '\u0071', unicodeHindi: '\u0914' },
    { eng: 'r', hindi: 'क', unicodeEng: '\u0072', unicodeHindi: '\u0915' },
    { eng: 's', hindi: 'स', unicodeEng: '\u0073', unicodeHindi: '\u0938' },
    { eng: 't', hindi: 'ट', unicodeEng: '\u0074', unicodeHindi: '\u091F' },
    { eng: 'u', hindi: 'न', unicodeEng: '\u0075', unicodeHindi: '\u0928' },
    { eng: 'v', hindi: 'प', unicodeEng: '\u0076', unicodeHindi: '\u092A' },
    { eng: 'w', hindi: 'आ', unicodeEng: '\u0077', unicodeHindi: '\u0906' },
    { eng: 'x', hindi: 'ष', unicodeEng: '\u0078', unicodeHindi: '\u0937' },
    { eng: 'y', hindi: 'ल', unicodeEng: '\u0079', unicodeHindi: '\u0932' },
    { eng: 'z', hindi: 'य', unicodeEng: '\u007A', unicodeHindi: '\u092F' }
];
