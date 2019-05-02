import { BaseApi } from './api';

class Post extends BaseApi {
  getPosts() {
    return this.client.get('api/v1/user/posts');
  }
}

export const PostApi = new Post();