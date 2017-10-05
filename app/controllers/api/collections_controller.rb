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
  end

  private

  def collection_params
    params.require(:collection).permit(:name, :user_id, :description)
  end

end
