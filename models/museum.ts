export interface Museum {
    info:    Info;
    records: Record[];
}

export interface Info {
    totalrecordsperquery: number;
    totalrecords:         number;
    pages:                number;
    page:                 number;
    next:                 string;
    responsetime:         string;
}

export interface Record {
    gender:        Gender;
    displaydate:   null | string;
    objectcount:   number;
    roles:         Role[];
    wikidata_id?:  string;
    dateend:       number;
    url:           string;
    viaf_id?:      string;
    names?:        Name[];
    birthplace:    null;
    wikipedia_id?: string;
    datebegin:     number;
    culture:       null;
    displayname:   string;
    alphasort:     string;
    ulan_id?:      string;
    personid:      number;
    deathplace:    null;
    id:            number;
    lastupdate:    string;
    lcnaf_id?:     string;
}

export enum Gender {
    Male = "male",
    Unknown = "unknown",
}

export interface Name {
    displayname: string;
    type:        string;
}

export interface Role {
    role:      string;
    context:   Context;
    frequency: number;
}

export enum Context {
    Object = "object",
    Publication = "publication",
}
