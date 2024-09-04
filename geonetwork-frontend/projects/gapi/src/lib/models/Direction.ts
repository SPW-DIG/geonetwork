/* tslint:disable */
/* eslint-disable */
/**
 * GeoNetwork 4.4.6 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.4.6
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 */
export const Direction = {
  Up: 'up',
  Down: 'down',
} as const;
export type Direction = (typeof Direction)[keyof typeof Direction];

export function instanceOfDirection(value: any): boolean {
  for (const key in Direction) {
    if (Object.prototype.hasOwnProperty.call(Direction, key)) {
      if (Direction[key as keyof typeof Direction] === value) {
        return true;
      }
    }
  }
  return false;
}

export function DirectionFromJSON(json: any): Direction {
  return DirectionFromJSONTyped(json, false);
}

export function DirectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Direction {
  return json as Direction;
}

export function DirectionToJSON(value?: Direction | null): any {
  return value as any;
}
