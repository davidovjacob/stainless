// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'https://github.com/davidovjacob/stainless/core';
import { APIPromise } from 'https://github.com/davidovjacob/stainless/core';
import { APIResource } from 'https://github.com/davidovjacob/stainless/resource';
import { isRequestOptions } from 'https://github.com/davidovjacob/stainless/core';
import { type Response } from 'https://github.com/davidovjacob/stainless/_shims/index';
import * as PetsAPI from 'https://github.com/davidovjacob/stainless/resources/pets';
import * as Pets1API from 'https://github.com/davidovjacob/stainless/resources/pets1';
import { type Pets1, Pets1ListParams, Pets1ListResponse } from 'https://github.com/davidovjacob/stainless/resources/pets1';

export class Pets1 extends APIResource {
  /**
   * Create a pet
   */
  create(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/pets1', { ...options, headers: { 'Accept': '*/*', ...options?.headers } });
  }

  /**
   * Info for a specific pet
   */
  retrieve(petId1: string, options?: Core.RequestOptions): Core.APIPromise<Pet> {
    return this._client.get(`/pet1/${petId1}`, options);
  }

  /**
   * List all pets
   */
  list(query?: Pets1API.Pets1ListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>
  list(query: Pets1API.Pets1ListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/pets1', { query, ...options });
  }
}

export interface Pet {
  id: number;

  name: string;

  tag?: string;
}

export type Pets1ListResponse = unknown

export interface Pets1ListParams {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number;
}

export namespace Pets1 {
  export import Pet = Pets1API.Pet;
  export import Pets1ListResponse = Pets1API.Pets1ListResponse;
  export import Pets1ListParams = Pets1API.Pets1ListParams;
}
