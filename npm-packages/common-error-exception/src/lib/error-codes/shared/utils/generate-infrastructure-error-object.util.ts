import { errorTypeToHttpStatus } from '../constants/error-type-to-http-status.constant';
import { InfrastructureErrorType } from '../constants/infrastructure-error-type.constant';
import { ErrorObject } from '../error-object.type';

export const generateInfrastructureErrorObject = (
  region: string,
  errorType: InfrastructureErrorType,
  attribute?: string,
): ErrorObject => ({
  errorCode:
    attribute === undefined
      ? `E_${region}_${errorType}`
      : `E_${region}_${attribute}_${errorType}`,
  httpStatus: errorTypeToHttpStatus[errorType].httpStatus,
});
