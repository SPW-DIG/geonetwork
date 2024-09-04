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

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface Entry
 */
export interface Entry {
  /**
   *
   * @type {string}
   * @memberof Entry
   */
  code: string;
  /**
   *
   * @type {string}
   * @memberof Entry
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof Entry
   */
  hideInEditMode?: string;
  /**
   *
   * @type {string}
   * @memberof Entry
   */
  label: string;
}

/**
 * Check if a given object implements the Entry interface.
 */
export function instanceOfEntry(value: object): value is Entry {
  if (!('code' in value) || value['code'] === undefined) return false;
  if (!('description' in value) || value['description'] === undefined)
    return false;
  if (!('label' in value) || value['label'] === undefined) return false;
  return true;
}

export function EntryFromJSON(json: any): Entry {
  return EntryFromJSONTyped(json, false);
}

export function EntryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Entry {
  if (json == null) {
    return json;
  }
  return {
    code: json['code'],
    description: json['description'],
    hideInEditMode:
      json['hideInEditMode'] == null ? undefined : json['hideInEditMode'],
    label: json['label'],
  };
}

export function EntryToJSON(value?: Entry | null): any {
  if (value == null) {
    return value;
  }
  return {
    code: value['code'],
    description: value['description'],
    hideInEditMode: value['hideInEditMode'],
    label: value['label'],
  };
}
