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

import * as runtime from '../runtime';
import type { MetadataIdentifierTemplate } from '../models/index';
import {
  MetadataIdentifierTemplateFromJSON,
  MetadataIdentifierTemplateToJSON,
} from '../models/index';

export interface AddIdentifierRequest {
  metadataIdentifierTemplate: MetadataIdentifierTemplate;
}

export interface DeleteIdentifierRequest {
  identifier: number;
}

export interface GetIdentifiersRequest {
  userDefinedOnly?: boolean;
}

export interface UpdateIdentifierRequest {
  identifier: number;
  metadataIdentifierTemplate: MetadataIdentifierTemplate;
}

/**
 *
 */
export class IdentifiersApi extends runtime.BaseAPI {
  /**
   * Add an identifier template
   */
  async addIdentifierRaw(
    requestParameters: AddIdentifierRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<number>> {
    if (requestParameters['metadataIdentifierTemplate'] == null) {
      throw new runtime.RequiredError(
        'metadataIdentifierTemplate',
        'Required parameter "metadataIdentifierTemplate" was null or undefined when calling addIdentifier().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/identifiers`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: MetadataIdentifierTemplateToJSON(
          requestParameters['metadataIdentifierTemplate']
        ),
      },
      initOverrides
    );

    if (this.isJsonMime(response.headers.get('content-type'))) {
      return new runtime.JSONApiResponse<number>(response);
    } else {
      return new runtime.TextApiResponse(response) as any;
    }
  }

  /**
   * Add an identifier template
   */
  async addIdentifier(
    requestParameters: AddIdentifierRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<number> {
    const response = await this.addIdentifierRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Remove an identifier template
   */
  async deleteIdentifierRaw(
    requestParameters: DeleteIdentifierRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['identifier'] == null) {
      throw new runtime.RequiredError(
        'identifier',
        'Required parameter "identifier" was null or undefined when calling deleteIdentifier().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/identifiers/{identifier}`.replace(
          `{${'identifier'}}`,
          encodeURIComponent(String(requestParameters['identifier']))
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Remove an identifier template
   */
  async deleteIdentifier(
    requestParameters: DeleteIdentifierRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.deleteIdentifierRaw(requestParameters, initOverrides);
  }

  /**
   * Identifier templates are used to create record UUIDs havind a particular structure. The template will be used when user creates a new record. The template identifier to use is defined in the administration > settings.
   * Get identifier templates
   */
  async getIdentifiersRaw(
    requestParameters: GetIdentifiersRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<MetadataIdentifierTemplate>>> {
    const queryParameters: any = {};

    if (requestParameters['userDefinedOnly'] != null) {
      queryParameters['userDefinedOnly'] = requestParameters['userDefinedOnly'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/identifiers`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(MetadataIdentifierTemplateFromJSON)
    );
  }

  /**
   * Identifier templates are used to create record UUIDs havind a particular structure. The template will be used when user creates a new record. The template identifier to use is defined in the administration > settings.
   * Get identifier templates
   */
  async getIdentifiers(
    requestParameters: GetIdentifiersRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<MetadataIdentifierTemplate>> {
    const response = await this.getIdentifiersRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Update an identifier template
   */
  async updateIdentifierRaw(
    requestParameters: UpdateIdentifierRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['identifier'] == null) {
      throw new runtime.RequiredError(
        'identifier',
        'Required parameter "identifier" was null or undefined when calling updateIdentifier().'
      );
    }

    if (requestParameters['metadataIdentifierTemplate'] == null) {
      throw new runtime.RequiredError(
        'metadataIdentifierTemplate',
        'Required parameter "metadataIdentifierTemplate" was null or undefined when calling updateIdentifier().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/identifiers/{identifier}`.replace(
          `{${'identifier'}}`,
          encodeURIComponent(String(requestParameters['identifier']))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: MetadataIdentifierTemplateToJSON(
          requestParameters['metadataIdentifierTemplate']
        ),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Update an identifier template
   */
  async updateIdentifier(
    requestParameters: UpdateIdentifierRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.updateIdentifierRaw(requestParameters, initOverrides);
  }
}
