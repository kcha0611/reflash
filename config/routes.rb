Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users
    resources :photos
    resources :collections
    patch 'like/photos', to: 'photos#like'
    patch 'unlike/photos', to: 'photos#unlike'
  end
end
