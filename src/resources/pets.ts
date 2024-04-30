// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'https://github.com/davidovjacob/stainless/core';
import { APIPromise } from 'https://github.com/davidovjacob/stainless/core';
import { APIResource } from 'https://github.com/davidovjacob/stainless/resource';
import { isRequestOptions } from 'https://github.com/davidovjacob/stainless/core';
import { type Response } from 'https://github.com/davidovjacob/stainless/_shims/index';
import * as PetsAPI from 'https://github.com/davidovjacob/stainless/resources/pets';

export class Pets extends APIResource {

}

export interface Pet {
  id: number;

  name: string;

  tag?: string;
}

export namespace Pets {
  export import Pet = PetsAPI.Pet;
}
