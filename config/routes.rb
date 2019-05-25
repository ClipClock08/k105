Rails.application.routes.draw do

  root "welcome#home"

  resources :specialties
  resources :education_programs
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
