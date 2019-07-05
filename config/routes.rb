Rails.application.routes.draw do
  devise_for :admins

  root "user#index"

  namespace :admin do
    resources :users
  end

  mount API => "/"
end
