import { ErrorObject } from '../shared/error-object.type';

export type EntityAttributeError<T extends string | number | symbol> = Record<
  T,
  { [key: string]: ErrorObject }
>;
