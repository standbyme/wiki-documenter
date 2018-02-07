import { Either, Left, Option, Right } from 'funfix-core'

export function map_getter(map: Map<string, string>, key: string): Option<string> {
    return Option.of(map.get(key))
}

export function converter(map: Map<string, string>, original_mapping__list: [[string, string]]): Array<Either<string, [string, string]>> {
    const result = original_mapping__list.map(([key, value]) => {
        const new_mapping = map_getter(map, key).map((new_key: string): [string, string] => [new_key, value])
        return new_mapping.map(Right).getOrElse(Left(key))
    })
    return result
}
