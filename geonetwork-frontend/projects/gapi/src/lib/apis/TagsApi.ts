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

import * as runtime from '../runtime';
import type { MetadataCategory } from '../models/index';
import {
  MetadataCategoryFromJSON,
  MetadataCategoryToJSON,
} from '../models/index';

export interface DeleteTagRequest {
  tagIdentifier: number;
}

export interface GetTagRequest {
  tagIdentifier: number;
}

export interface PutTagRequest {
  metadataCategory: MetadataCategory;
}

export interface UpdateTagRequest {
  tagIdentifier: number;
  metadataCategory: MetadataCategory;
}

/**
 *
 */
export class TagsApi extends runtime.BaseAPI {
  /**
   * Remove a tag
   */
  async deleteTagRaw(
    requestParameters: DeleteTagRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['tagIdentifier'] == null) {
      throw new runtime.RequiredError(
        'tagIdentifier',
        'Required parameter "tagIdentifier" was null or undefined when calling deleteTag().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/tags/{tagIdentifier}`.replace(
          `{${'tagIdentifier'}}`,
          encodeURIComponent(String(requestParameters['tagIdentifier']))
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
   * Remove a tag
   */
  async deleteTag(
    requestParameters: DeleteTagRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.deleteTagRaw(requestParameters, initOverrides);
  }

  /**
   * Get a tag
   */
  async getTagRaw(
    requestParameters: GetTagRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<MetadataCategory>> {
    if (requestParameters['tagIdentifier'] == null) {
      throw new runtime.RequiredError(
        'tagIdentifier',
        'Required parameter "tagIdentifier" was null or undefined when calling getTag().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/tags/{tagIdentifier}`.replace(
          `{${'tagIdentifier'}}`,
          encodeURIComponent(String(requestParameters['tagIdentifier']))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      MetadataCategoryFromJSON(jsonValue)
    );
  }

  /**
   * Get a tag
   */
  async getTag(
    requestParameters: GetTagRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<MetadataCategory> {
    const response = await this.getTagRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Get tags
   */
  async getTagsRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<MetadataCategory>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/tags`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(MetadataCategoryFromJSON)
    );
  }

  /**
   * Get tags
   */
  async getTags(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<MetadataCategory>> {
    const response = await this.getTagsRaw(initOverrides);
    return await response.value();
  }

  /**
   * If labels are not defined, a default label is created with the category name for all languages.
   * Create a tag
   */
  async putTagRaw(
    requestParameters: PutTagRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<number>> {
    if (requestParameters['metadataCategory'] == null) {
      throw new runtime.RequiredError(
        'metadataCategory',
        'Required parameter "metadataCategory" was null or undefined when calling putTag().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/tags`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: MetadataCategoryToJSON(requestParameters['metadataCategory']),
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
   * If labels are not defined, a default label is created with the category name for all languages.
   * Create a tag
   */
  async putTag(
    requestParameters: PutTagRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<number> {
    const response = await this.putTagRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Update a tag
   */
  async updateTagRaw(
    requestParameters: UpdateTagRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['tagIdentifier'] == null) {
      throw new runtime.RequiredError(
        'tagIdentifier',
        'Required parameter "tagIdentifier" was null or undefined when calling updateTag().'
      );
    }

    if (requestParameters['metadataCategory'] == null) {
      throw new runtime.RequiredError(
        'metadataCategory',
        'Required parameter "metadataCategory" was null or undefined when calling updateTag().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/tags/{tagIdentifier}`.replace(
          `{${'tagIdentifier'}}`,
          encodeURIComponent(String(requestParameters['tagIdentifier']))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: MetadataCategoryToJSON(requestParameters['metadataCategory']),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Update a tag
   */
  async updateTag(
    requestParameters: UpdateTagRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.updateTagRaw(requestParameters, initOverrides);
  }
}
