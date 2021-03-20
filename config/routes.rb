Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'restaurants/index'
      post 'restaurants/create'
      get '/show/:id', to: 'restaurants#show'
      delete '/destroy/:id', to: 'restaurants#destroy'
    end
  end
  
  root 'landingpage#index'
  get '/*path' => 'landingpage#index'
end