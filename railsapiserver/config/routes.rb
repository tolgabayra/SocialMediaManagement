Rails.application.routes.draw do
  resources :users


  post '/login', to: 'authentication#login'
  post '/register', to: 'authentication#register'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
