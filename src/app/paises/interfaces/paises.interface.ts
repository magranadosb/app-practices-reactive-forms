export interface PaisesSmall {
    translations: Translations;
    cca3:         string;
}

export interface Pais {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc:         string;
    independent:  boolean;
    status:       string;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    languages:    Languages;
    translations: Translations;
    latlng:       number[];
    landlocked:   boolean;
    borders:      string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini:         Gini;
    fifa:         string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  string;
    capitalInfo:  CapitalInfo;
    postalCode:   PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  string;
}

export interface CoatOfArms {
    png: string;
    svg: string;
}

export interface Currencies {
    MXN: Mxn;
}

export interface Mxn {
    name:   string;
    symbol: string;
}

export interface Demonyms {
    eng: Eng;
    fra: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Gini {
    "2018": number;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    spa: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    spa: Ara;
}

export interface Ara {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export interface Translations {
    ara: Ara;
    bre: Ara;
    ces: Ara;
    cym: Ara;
    deu: Ara;
    est: Ara;
    fin: Ara;
    fra: Ara;
    hrv: Ara;
    hun: Ara;
    ita: Ara;
    jpn: Ara;
    kor: Ara;
    nld: Ara;
    per: Ara;
    pol: Ara;
    por: Ara;
    rus: Ara;
    slk: Ara;
    spa: Ara;
    srp: Ara;
    swe: Ara;
    tur: Ara;
    urd: Ara;
    zho: Ara;
}