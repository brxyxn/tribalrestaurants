Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # get 'restaurants/index'
      # post 'restaurants/create'
      # get '/show/:id', to: 'restaurants#show'
      # delete '/destroy/:id', to: 'restaurants#destroy'
      resources :restaurants, only: [:index, :create, :show, :destroy]
      resources :comments, only: [:index, :create]
    end
  end
  
  root 'landingpage#index'
  get '/*path' => 'landingpage#index'
end