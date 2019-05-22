class V1::Posts < Grape::API
  namespace :user do
    resources :posts do
      desc "Get posts list" do
      end
      get do
        present Post.all, with: V1::Entities::User::PostEntity
      end
    end
  end
end
