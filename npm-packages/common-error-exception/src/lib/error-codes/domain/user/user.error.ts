import { generateDomainErrorObject } from '../../shared/utils/generate-domain-error-object.util';
import {
  entityAttributeErrorType,
  entityErrorType,
} from '../../shared/constants/entity-error-type.constant';
import { DomainAttribute } from '../domain-attribute.type';

const region = 'USER';
const attribute = {
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
  FIRST_NAME: 'FIRST_NAME',
  LAST_NAME: 'LAST_NAME',
} as const satisfies DomainAttribute;

export const userError = {
  USER_NOT_FOUND: generateDomainErrorObject(region, entityErrorType.NOT_FOUND),
};

export const userAttributeError = {
  EMAIL: {
    REQUIRED: generateDomainErrorObject(
      region,
      entityAttributeErrorType.REQUIRED,
      attribute.EMAIL,
    ),
    INVALID_FORMAT: generateDomainErrorObject(
      region,
      entityAttributeErrorType.INVALID_FORMAT,
      attribute.EMAIL,
    ),
    MAX_LENGTH_EXCEEDED: generateDomainErrorObject(
      region,
      entityAttributeErrorType.LENGTH_MAX_EXCEEDED,
      attribute.EMAIL,
    ),
  },
  PASSWORD: {
    REQUIRED: generateDomainErrorObject(
      region,
      entityAttributeErrorType.REQUIRED,
      attribute.PASSWORD,
    ),
    MIN_LENGTH_EXCEEDED: generateDomainErrorObject(
      region,
      entityAttributeErrorType.LENGTH_MIN_EXCEEDED,
      attribute.PASSWORD,
    ),
  },
  FIRST_NAME: {
    MAX_LENGTH_EXCEEDED: generateDomainErrorObject(
      region,
      entityAttributeErrorType.LENGTH_MAX_EXCEEDED,
      attribute.FIRST_NAME,
    ),
  },
  LAST_NAME: {
    MAX_LENGTH_EXCEEDED: generateDomainErrorObject(
      region,
      entityAttributeErrorType.LENGTH_MAX_EXCEEDED,
      attribute.LAST_NAME,
    ),
  },
};
