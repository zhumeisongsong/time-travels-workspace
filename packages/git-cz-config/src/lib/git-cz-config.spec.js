import { gitCzConfig } from './git-cz-config';
describe('gitCzConfig', () => {
  it('should work', () => {
    expect(gitCzConfig()).toEqual('git-cz-config');
  });
});
