class V1::Posts < Grape::API
  namespace :user do
    resources :posts do
      desc "Get posts list" do
        success V1::Entities::User::PostEntity
      end
      get do
        present Post.with_attached_image, with: V1::Entities::User::PostEntity
      end

      desc "Get post by id" do
        success V1::Entities::User::PostEntity
      end
      params do
        requires :id, type: Integer
      end
      get ":id" do
        post = Post.find params[:id]
        present post, with: V1::Entities::User::PostEntity
      end
    end
  end
end
