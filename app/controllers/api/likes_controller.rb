class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      render 'api/photos/like'
    else
      render json: {}
    end
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id, photo_id: params[:photo_id])
    if @like.destroy
      render 'api/photos/like'
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :photo_id)
  end

end
