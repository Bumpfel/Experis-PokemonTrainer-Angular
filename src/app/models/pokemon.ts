export interface Pokemon {
    name: string
    imgUrl: string

    types?: string[]
    baseStats?: { [key: string]: number }
    height?: number
    weight?: number
    abilities?: string[]
    baseXP?: number
    moves?: string[]
}
