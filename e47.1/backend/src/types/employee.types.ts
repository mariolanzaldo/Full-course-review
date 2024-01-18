
export interface Employee {
    id: string;
    name: string;
    // "location-city": string;
    // "location-state": string;
    location_city: string;
    location_state: string;
    exp: number;
    skills: Skill[];
    salary: number;
    category: string;
    subcategory: string;
    work_authorization: string;
    // "work-authorization": string;
}


export interface Skill {
    skill: string;
}