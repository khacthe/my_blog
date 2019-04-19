Rails.application.routes.draw do
  devise_for :admins

  root "user#index"

  get "admin/*other", to: "admin#index"
end