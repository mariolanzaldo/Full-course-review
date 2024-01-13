
export interface Employee {
    id: string;
    name: string;
    "location-city": string;
    "location-state": string;
    exp: number;
    skills: Skill[];
    salary: number;
    category: string;
    subcategory: string;
    "work-authorization": string;
}


export interface Skill {
    skill: string;
}