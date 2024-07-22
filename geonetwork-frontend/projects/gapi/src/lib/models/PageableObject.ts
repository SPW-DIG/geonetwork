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
import type { SortObject } from './SortObject';
import {
  SortObjectFromJSON,
  SortObjectFromJSONTyped,
  SortObjectToJSON,
} from './SortObject';

/**
 *
 * @export
 * @interface PageableObject
 */
export interface PageableObject {
  /**
   *
   * @type {number}
   * @memberof PageableObject
   */
  offset?: number;
  /**
   *
   * @type {number}
   * @memberof PageableObject
   */
  pageNumber?: number;
  /**
   *
   * @type {number}
   * @memberof PageableObject
   */
  pageSize?: number;
  /**
   *
   * @type {boolean}
   * @memberof PageableObject
   */
  paged?: boolean;
  /**
   *
   * @type {Array<SortObject>}
   * @memberof PageableObject
   */
  sort?: Array<SortObject>;
  /**
   *
   * @type {boolean}
   * @memberof PageableObject
   */
  unpaged?: boolean;
}

/**
 * Check if a given object implements the PageableObject interface.
 */
export function instanceOfPageableObject(
  value: object
): value is PageableObject {
  return true;
}

export function PageableObjectFromJSON(json: any): PageableObject {
  return PageableObjectFromJSONTyped(json, false);
}

export function PageableObjectFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PageableObject {
  if (json == null) {
    return json;
  }
  return {
    offset: json['offset'] == null ? undefined : json['offset'],
    pageNumber: json['pageNumber'] == null ? undefined : json['pageNumber'],
    pageSize: json['pageSize'] == null ? undefined : json['pageSize'],
    paged: json['paged'] == null ? undefined : json['paged'],
    sort:
      json['sort'] == null
        ? undefined
        : (json['sort'] as Array<any>).map(SortObjectFromJSON),
    unpaged: json['unpaged'] == null ? undefined : json['unpaged'],
  };
}

export function PageableObjectToJSON(value?: PageableObject | null): any {
  if (value == null) {
    return value;
  }
  return {
    offset: value['offset'],
    pageNumber: value['pageNumber'],
    pageSize: value['pageSize'],
    paged: value['paged'],
    sort:
      value['sort'] == null
        ? undefined
        : (value['sort'] as Array<any>).map(SortObjectToJSON),
    unpaged: value['unpaged'],
  };
}