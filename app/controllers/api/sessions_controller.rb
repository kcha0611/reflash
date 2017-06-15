class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:userName], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: { base: ['Invalid credentials'] }, status: 401
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: { base: ['not logged in!'] }, status: 404
    end
  end

end
