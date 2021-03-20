Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'restaurants/index'
      get 'restaurants/create'
      get 'restaurants/show'
      get 'restaurants/destroy'
    end
  end
  root 'landingpage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
