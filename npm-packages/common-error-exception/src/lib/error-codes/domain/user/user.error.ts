import { generateEntityErrorObject } from '../../shared/utils/generate-entity-error-object.util';
import {
  entityAttributeErrorType,
  entityErrorType,
} from '../../shared/constants/entity-error-type.constant';
import { EntityAttribute } from '../entity-attribute.type';

const region = 'USER';
const attribute = {
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
  FIRST_NAME: 'FIRST_NAME',
  LAST_NAME: 'LAST_NAME',
} as const satisfies EntityAttribute;

export const userError = {
  NOT_FOUND: generateEntityErrorObject(region, entityErrorType.NOT_FOUND),
  DUPLICATED: generateEntityErrorObject(region, entityErrorType.DUPLICATED),
};

export const userAttributeError = {
  EMAIL: {
    REQUIRED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.REQUIRED,
      attribute.EMAIL,
    ),
    INVALID_FORMAT: generateEntityErrorObject(
      region,
      entityAttributeErrorType.INVALID_FORMAT,
      attribute.EMAIL,
    ),
    MAX_LENGTH_EXCEEDED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.LENGTH_MAX_EXCEEDED,
      attribute.EMAIL,
    ),
  },
  PASSWORD: {
    REQUIRED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.REQUIRED,
      attribute.PASSWORD,
    ),
    MIN_LENGTH_EXCEEDED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.LENGTH_MIN_EXCEEDED,
      attribute.PASSWORD,
    ),
  },
  FIRST_NAME: {
    MAX_LENGTH_EXCEEDED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.LENGTH_MAX_EXCEEDED,
      attribute.FIRST_NAME,
    ),
  },
  LAST_NAME: {
    MAX_LENGTH_EXCEEDED: generateEntityErrorObject(
      region,
      entityAttributeErrorType.LENGTH_MAX_EXCEEDED,
      attribute.LAST_NAME,
    ),
  },
};
