import { describe, it, expect } from 'vitest';
import config from './git-cz-config';

describe('git-cz-config', () => {
  it('should have disableEmoji set to false', () => {
    expect(config.disableEmoji).toBe(false);
  });

  it('should have a specific format', () => {
    expect(config.format).toBe('{type}{scope}: {emoji}{subject}');
  });

  it('should have a list of commit types', () => {
    expect(config.list).toEqual([
      'feat',
      'fix',
      'docs',
      'style',
      'refactor',
      'perf',
      'test',
      'build',
      'ci',
      'chore',
      'revert',
    ]);
  });

  it('should have a list of questions', () => {
    expect(config.questions).toEqual([
      'type',
      'scope',
      'subject',
      'body',
      'breaking',
      'issues',
      'lerna',
    ]);
  });

  it('should have an empty scopes array', () => {
    expect(config.scopes).toEqual([]);
  });

  it('should have types with specific properties', () => {
    expect(config.types.feat).toEqual({
      description: 'A new feature',
      emoji: '✨',
      value: 'feat',
    });
    expect(config.types.fix).toEqual({
      description: 'A bug fix',
      emoji: '🐛',
      value: 'fix',
    });
    expect(config.types.docs).toEqual({
      description: 'Documentation only changes',
      emoji: '📝',
      value: 'docs',
    });
    expect(config.types.style).toEqual({
      description:
        'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
      emoji: '💄',
      value: 'style',
    });
    expect(config.types.refactor).toEqual({
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '♻️',
      value: 'refactor',
    });
    expect(config.types.perf).toEqual({
      description: 'A code change that improves performance',
      emoji: '⚡️',
      value: 'perf',
    });
    expect(config.types.test).toEqual({
      description: 'Adding missing tests or correcting existing tests',
      emoji: '🧪',
      value: 'test',
    });
    expect(config.types.build).toEqual({
      description:
        'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
      emoji: '🏗',
      value: 'build',
    });
    expect(config.types.ci).toEqual({
      description: 'CI related changes',
      emoji: '💚',
      value: 'ci',
    });
    expect(config.types.chore).toEqual({
      description: "Other changes that don't modify src or test files",
      emoji: '🤖',
      value: 'chore',
    });
    expect(config.types.revert).toEqual({
      description: 'Reverts a previous commit',
      emoji: '⏪️',
      value: 'revert',
    });
    expect(config.types.release).toEqual({
      description: 'Create a release commit',
      emoji: '🔖',
      value: 'release',
    });
  });

  it('should have messages with specific properties', () => {
    expect(config.types.messages).toEqual({
      type: "Select the type of change that you're committing:",
      customScope: 'Select the scope this component affects:',
      subject: 'Write a short, imperative mood description of the change:\n',
      body: 'Provide a longer description of the change:\n ',
      breaking: 'List any breaking changes:\n',
      footer: 'Issues this commit closes, e.g #123:',
      confirmCommit: 'The packages that this commit has affected\n',
    });
  });
});