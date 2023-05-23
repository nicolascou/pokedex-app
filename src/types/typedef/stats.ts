import type { APIResource, Name, NamedAPIResource } from "./utility";

export interface Stat {
    id: number;
    name: string;
    game_index: number;
    is_battle_only: boolean;
    affecting_moves: MoveStatAffectSets;
    affecting_natures: NatureStatAffectSets;
    characteristics: APIResource[];
    move_damage_class: NamedAPIResource;
    names: Name[];
}

export interface MoveStatAffectSets {
    increase: MoveStatAffect[];
    decrease: MoveStatAffect[];
}

export interface MoveStatAffect {
    change: number;
    move: NamedAPIResource;
}

export interface NatureStatAffectSets {
    increase: NamedAPIResource[];
    decrease: NamedAPIResource[];
}
