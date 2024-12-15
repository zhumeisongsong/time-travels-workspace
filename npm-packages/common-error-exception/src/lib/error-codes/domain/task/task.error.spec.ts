import { taskError, taskAttributeError } from './task.error';

describe('taskError', () => {
  it('should have NOT_FOUND error', () => {
    expect(taskError.NOT_FOUND).toEqual({
      errorCode: 'E_TASK_RESOURCE_NOT_FOUND',
      httpStatus: 404
    });
  });

  it('should have DUPLICATED error', () => {
    expect(taskError.DUPLICATED).toEqual({
      errorCode: 'E_TASK_RESOURCE_DUPLICATED',
      httpStatus: 409
    });
  });
});

describe('taskAttributeError', () => {
  describe('TITLE', () => {
    it('should have REQUIRED error', () => {
      expect(taskAttributeError.TITLE.REQUIRED).toEqual({
        errorCode: 'E_TASK_TITLE_REQUIRED',
        httpStatus: 400
      });
    });

    it('should have MAX_LENGTH_EXCEEDED error', () => {
      expect(taskAttributeError.TITLE.MAX_LENGTH_EXCEEDED).toEqual({
        errorCode: 'E_TASK_TITLE_LENGTH_MAX_EXCEEDED',
        httpStatus: 400
      });
    });
  });

  describe('DESCRIPTION', () => {
    it('should have MAX_LENGTH_EXCEEDED error', () => {
      expect(taskAttributeError.DESCRIPTION.MAX_LENGTH_EXCEEDED).toEqual({
        errorCode: 'E_TASK_DESCRIPTION_LENGTH_MAX_EXCEEDED',
        httpStatus: 400
      });
    });
  });
});
