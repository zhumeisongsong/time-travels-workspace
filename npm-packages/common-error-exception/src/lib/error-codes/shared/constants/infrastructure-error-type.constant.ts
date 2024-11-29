export const infrastructureErrorType = {
  REQUIRED: 'REQUIRED',
  SIZE_MAX_EXCEEDED: 'SIZE_MAX_EXCEEDED',
  SIZE_MIN_LESS_THAN_ZERO: 'SIZE_MIN_LESS_THAN_ZERO',
  LENGTH_MAX_EXCEEDED: 'LENGTH_MAX_EXCEEDED',
  PARSE_EXCEPTION: 'PARSE_EXCEPTION',
} as const satisfies { [key: string]: string };

export type InfrastructureErrorType =
  (typeof infrastructureErrorType)[keyof typeof infrastructureErrorType];