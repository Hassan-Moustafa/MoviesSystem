export interface IMovieCredits {
    id: number;
    cast: ICreditsCast[];
    crew: ICreditsCrew[];
}

export interface ICreditsCast {
    cast_id?: number;
    character?: string;
    credit_id?: string;
    gender?: number;
    id?: number;
    name?: string;
    order?: number;
    profile_path?: string;
}

export interface ICreditsCrew {
    credit_id?: string;
    department?: string;
    gender?: number;
    id?: number;
    job?: string;
    name?: string;
    profile_path?: string;
}