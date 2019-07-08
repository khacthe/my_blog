Rails.application.routes.draw do
  get 'users_controller/show'
  get 'users_controller/new'
  get 'users_controller/create'
  devise_for :admins

  root "user#index"

  namespace :admin do
    resources :users
  end

  mount API => "/"

  get "/*other", to: 'user#index'
end
