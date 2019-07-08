import { BaseApi } from './api';

class Post extends BaseApi {
  getPosts(data) {
    return this.client.get('api/v1/user/posts', { params: data });
  }

  getPostDetail(id) {
    return this.client.get(`api/v1/user/posts/${id}`);
  }
}

export const PostApi = new Post();
