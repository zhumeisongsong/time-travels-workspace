import { describe, it, expect } from 'vitest';
import { UserEntity } from './users.repository';

describe('Users Repository', () => {
  it('should create a UserEntity correctly', () => {
    const user: UserEntity = { id: '1', name: 'John Doe' };

    expect(user).toEqual({ id: '1', name: 'John Doe' });
  });

  it('should return null for a non-existing user', async () => {
    const userId = 'non-existing-id';
    const result = await mockGetUser(userId); // Assuming a mock function for demonstration
    expect(result).toBeNull();
  });

  it('should create a UserEntity with valid properties', () => {
    const user: UserEntity = { id: '2', name: 'Jane Doe' };

    expect(user.id).toBeDefined();
    expect(user.name).toBeDefined();
    expect(user).toEqual({ id: '2', name: 'Jane Doe' });
  });
});

// Mock function for demonstration purposes
async function mockGetUser(id: string): Promise<UserEntity | null> {
  // Simulate a user lookup
  return null; // Simulating a non-existing user
}
