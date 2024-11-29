export const entityErrorType = {
  DUPLICATED: 'DUPLICATED',
  NOT_FOUND: 'NOT_FOUND',
} as const satisfies { [key: string]: string };

export type EntityErrorType =
  (typeof entityErrorType)[keyof typeof entityErrorType];

export const entityAttributeErrorType = {
  REQUIRED: 'REQUIRED',
  INVALID_FORMAT: 'INVALID_FORMAT',
  INVALID_VALUE: 'INVALID_VALUE',
  LENGTH_MAX_EXCEEDED: 'LENGTH_MAX_EXCEEDED',
  LENGTH_MIN_EXCEEDED: 'LENGTH_MIN_EXCEEDED',
} as const satisfies { [key: string]: string };

export type EntityAttributeErrorType =
  (typeof entityAttributeErrorType)[keyof typeof entityAttributeErrorType];
