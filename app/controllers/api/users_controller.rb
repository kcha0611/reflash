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
    if params[:search_input] && current_user
      @users = User.where("lower(user_name) LIKE '%#{params[:search_input].downcase}%'")
    elsif params[:search_input] && !current_user
      @users = User.where("lower(user_name) LIKE '%#{params[:search_input].downcase}%'")
    else
      @users = User.all
    end
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :password, :first_name, :last_name, :email)
  end

end
