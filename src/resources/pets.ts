// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'https://github.com/davidovjacob/stainless/core';
import { APIPromise } from 'https://github.com/davidovjacob/stainless/core';
import { APIResource } from 'https://github.com/davidovjacob/stainless/resource';
import { isRequestOptions } from 'https://github.com/davidovjacob/stainless/core';
import { type Response } from 'https://github.com/davidovjacob/stainless/_shims/index';
import * as PetsAPI from 'https://github.com/davidovjacob/stainless/resources/pets';

export class Pets extends APIResource {
  /**
   * Create a pet
   */
  create(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/pets', { ...options, headers: { 'Accept': '*/*', ...options?.headers } });
  }

  /**
   * List all pets
   */
  list(query?: PetListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>
  list(query: PetListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/pets', { query, ...options });
  }
}

export interface Pet {
  id: number;

  name: string;

  tag?: string;
}

export type PetListResponse = unknown

export interface PetListParams {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number;
}

export namespace Pets {
  export import Pet = PetsAPI.Pet;
  export import PetListResponse = PetsAPI.PetListResponse;
  export import PetListParams = PetsAPI.PetListParams;
}
