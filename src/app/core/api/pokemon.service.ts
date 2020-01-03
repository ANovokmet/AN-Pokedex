import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ApiResourceList } from '../models/api-resource-list';
import { Pokemon } from '../models/pokemon';

@Injectable()
export class PokemonService {

    constructor(
        private http: HttpClient
    ) { }

    getAll(limit: number = 20, offset: number = 0) {
        const params: any = {
            limit,
            offset
        };

        return this.http.get<ApiResourceList>(`${environment.apiUrl}/pokemon`, { params });
    }

    get(name: string) {
        return this.http.get<Pokemon>(`${environment.apiUrl}/pokemon/${name}`);
    }
}
