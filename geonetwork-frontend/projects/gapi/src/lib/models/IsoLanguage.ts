/* tslint:disable */
/* eslint-disable */
/**
 * GeoNetwork 4.4.5 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.4.5
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface IsoLanguage
 */
export interface IsoLanguage {
  /**
   *
   * @type {string}
   * @memberof IsoLanguage
   */
  code?: string;
  /**
   *
   * @type {number}
   * @memberof IsoLanguage
   */
  id?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof IsoLanguage
   */
  label?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof IsoLanguage
   */
  shortCode?: string;
}

/**
 * Check if a given object implements the IsoLanguage interface.
 */
export function instanceOfIsoLanguage(value: object): value is IsoLanguage {
  return true;
}

export function IsoLanguageFromJSON(json: any): IsoLanguage {
  return IsoLanguageFromJSONTyped(json, false);
}

export function IsoLanguageFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IsoLanguage {
  if (json == null) {
    return json;
  }
  return {
    code: json['code'] == null ? undefined : json['code'],
    id: json['id'] == null ? undefined : json['id'],
    label: json['label'] == null ? undefined : json['label'],
    shortCode: json['shortCode'] == null ? undefined : json['shortCode'],
  };
}

export function IsoLanguageToJSON(value?: IsoLanguage | null): any {
  if (value == null) {
    return value;
  }
  return {
    code: value['code'],
    id: value['id'],
    label: value['label'],
    shortCode: value['shortCode'],
  };
}
