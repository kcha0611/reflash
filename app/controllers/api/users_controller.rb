class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: { base: [@user.errors.full_messages] }, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    if params[:search_input]
      @users = User.where(first_name: params[:search_input])
    else
      @users = User.all
    end
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :password, :first_name, :last_name, :email)
  end

end
