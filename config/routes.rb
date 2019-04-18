Rails.application.routes.draw do
  root "user#index"

  get "admin/*other", to: "admin#index"
end