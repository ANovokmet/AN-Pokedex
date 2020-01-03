export interface ApiResourceList {
    count: number;
    next: string;
    previous: string;
    results: ApiResource[];
}

export interface ApiResource {
    name: string;
    url: string;
}
