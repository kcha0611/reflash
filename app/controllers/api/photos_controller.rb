class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      render json: { base: [@photo.errors.full_messages] }, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def index
    if params[:search_input] && current_user
      @photos = Photo.where(user_id: current_user.id)
      @photos = Photo.where("lower(description) LIKE '%#{params[:search_input].downcase}%'")
    elsif params[:search_input] && !current_user
      @photos = Photo.where("lower(description) LIKE '%#{params[:search_input].downcase}%'")
    else
      @photos = Photo.all
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:url, :user_id, :likes, :tag_list)
  end

end
