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
    if params[:searchInput]
      @photos = Photo.where("lower(name) LIKE '%#{params[:searchInput].downcase}%'")
    else
      @photos = Photo.all
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:url, :user_id, :likes, :tag_list)
  end


end
