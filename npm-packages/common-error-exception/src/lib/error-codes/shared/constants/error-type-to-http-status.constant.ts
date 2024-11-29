import { StatusCodes } from 'http-status-codes';

import { ApplicationErrorType } from './application-error-type.constant';
import {
  EntityErrorType,
  EntityAttributeErrorType,
} from './entity-error-type.constant';
import { InfrastructureErrorType } from './infrastructure-error-type.constant';

export type ErrorType =
  | ApplicationErrorType
  | EntityErrorType
  | EntityAttributeErrorType
  | InfrastructureErrorType;

export const errorTypeToHttpStatus: Record<
  ErrorType,
  { httpStatus: StatusCodes }
> = {
  // application error
  UNAUTHORIZED: { httpStatus: StatusCodes.UNAUTHORIZED },
  NOT_ALLOWED_REQUEST: { httpStatus: StatusCodes.BAD_REQUEST },
  // entity error
  DUPLICATED: { httpStatus: StatusCodes.CONFLICT },
  NOT_FOUND: { httpStatus: StatusCodes.NOT_FOUND },
  // attribute error
  REQUIRED: { httpStatus: StatusCodes.BAD_REQUEST },
  INVALID_FORMAT: { httpStatus: StatusCodes.BAD_REQUEST },
  INVALID_VALUE: { httpStatus: StatusCodes.BAD_REQUEST },
  SIZE_MAX_EXCEEDED: { httpStatus: StatusCodes.BAD_REQUEST },
  SIZE_MIN_LESS_THAN_ZERO: { httpStatus: StatusCodes.BAD_REQUEST },
  LENGTH_MAX_EXCEEDED: { httpStatus: StatusCodes.BAD_REQUEST },
  LENGTH_MIN_EXCEEDED: { httpStatus: StatusCodes.BAD_REQUEST },
  PARSE_EXCEPTION: { httpStatus: StatusCodes.BAD_REQUEST },
};
