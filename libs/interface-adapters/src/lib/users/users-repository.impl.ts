import { Client } from 'urql/core';
import { graphql } from 'graphql-code-generator';

import { UserEntity, UsersRepository } from '@users/domain';
import { UsersAdapter } from './users.adapter';

const UserQuery = graphql(`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      name
    }
  }
`);

// TODO: move to infrastructure
const client = new Client({
  url: `${process.env['GRAPHQL_API_URL'] || 'http://localhost:3333'}/graphql`,
  exchanges: [],
});

export class UsersRepositoryImpl implements UsersRepository {
  async getUser(id: string): Promise<UserEntity | null> {
    const result = await client.query(UserQuery, { id }).toPromise();

    if (result.error) {
      throw result.error;
    }

    if (!result.data?.getUser) {
      return null;
    }
    return UsersAdapter.toUser(result.data?.getUser);
  }
}
