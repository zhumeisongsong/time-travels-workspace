export const entityErrorType = {
  DUPLICATED: 'DUPLICATED',
  NOT_FOUND: 'NOT_FOUND',
} as const satisfies { [key: string]: string };

export type EntityErrorType =
  (typeof entityErrorType)[keyof typeof entityErrorType];
