import { ApiResource } from './api-resource-list';

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: ApiResource[];
    game_indices: any[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    sprites: PokemonSprites;
    species: ApiResource;
    stats: PokemonStat[];
    types: PokemonType[];
}

export interface PokemonAbility {
    is_hidden: true;
    slot: number;
    ability: ApiResource;
}

export interface PokemonType {
    slot: number;
    type: ApiResource;
}

export interface PokemonHeldItem {
    item: ApiResource;
    version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
    version: ApiResource;
    rarity: number;
}

export interface PokemonMove {
    move: ApiResource;
    version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
    move_learn_method: ApiResource;
    version_group: ApiResource;
    level_learned_at: number;
}

export interface PokemonStat {
    stat: ApiResource;
    effort: number;
    base_stat: number;
}

export interface PokemonSprites {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
}
