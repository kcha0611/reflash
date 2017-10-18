class Api::CollectionsController < ApplicationController

  def create
    @collection = Collection.new(collection_params)
    @collection.user_id = current_user.id
    if @collection.save
      render :show
    else
      render json: { base: [@collection.errors.full_messages] }, status: 422
    end
  end

  def show
    @collection = Collection.find(params[:id])
  end

  def index
    @collections = Collection.where(user_id: current_user.id)
    if params[:search_input]
      @collections = Collection.where("lower(name) LIKE '%#{params[:search_input].downcase}%'")
    else
      @collections
    end
  end

  def update
    @collection = Collection.find(params[:id])
    if params[:photo_id]
      @photo = Photo.find(params[:photo_id])
      if @collection.photos.include?(@photo)
        @collection.photos.delete(@photo)
        photos = @collection.photos
      else
        photos = @collection.photos.push(@photo)
      end
      if @collection.update_attributes(photos: photos)
        render :show
      else
        # errors for adding photo go here
      end
    end
  end

  private

  def collection_params
    params.require(:collection).permit(:name, :description)
  end

end
