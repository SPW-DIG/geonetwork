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
import type { FCRelatedElement } from './FCRelatedElement';
import {
  FCRelatedElementFromJSON,
  FCRelatedElementFromJSONTyped,
  FCRelatedElementToJSON,
} from './FCRelatedElement';

/**
 *
 * @export
 * @interface AttributeTable
 */
export interface AttributeTable {
  /**
   *
   * @type {Array<FCRelatedElement>}
   * @memberof AttributeTable
   */
  element?: Array<FCRelatedElement>;
}

/**
 * Check if a given object implements the AttributeTable interface.
 */
export function instanceOfAttributeTable(
  value: object
): value is AttributeTable {
  return true;
}

export function AttributeTableFromJSON(json: any): AttributeTable {
  return AttributeTableFromJSONTyped(json, false);
}

export function AttributeTableFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AttributeTable {
  if (json == null) {
    return json;
  }
  return {
    element:
      json['element'] == null
        ? undefined
        : (json['element'] as Array<any>).map(FCRelatedElementFromJSON),
  };
}

export function AttributeTableToJSON(value?: AttributeTable | null): any {
  if (value == null) {
    return value;
  }
  return {
    element:
      value['element'] == null
        ? undefined
        : (value['element'] as Array<any>).map(FCRelatedElementToJSON),
  };
}
