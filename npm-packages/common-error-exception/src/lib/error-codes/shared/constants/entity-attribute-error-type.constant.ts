export const entityAttributeErrorType = {
  REQUIRED: 'REQUIRED',
  INVALID_FORMAT: 'INVALID_FORMAT',
  INVALID_VALUE: 'INVALID_VALUE',
  LENGTH_MAX_EXCEEDED: 'LENGTH_MAX_EXCEEDED',
} as const satisfies { [key: string]: string };

export type EntityAttributeErrorType =
  (typeof entityAttributeErrorType)[keyof typeof entityAttributeErrorType];
