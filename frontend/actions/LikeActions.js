import LikeConstants from '../constants/LikeConstants';
import LikeApiUtil from '../utils/LikeApiUtil';
import Dispatcher from '../dispatcher/dispatcher';

const LikeActions = {
  likePhoto(id) {
    LikeApiUtil.likePhoto(id, this.receiveLike)
  },
  unlikePhoto(photoID, error) {
    LikeApiUtil.unlikePhoto(photoID, this.removeLike)
  },
  receiveLike(like) {
    Dispatcher.dispatch({
      actionType: LikeConstants.RECEIVE_LIKE,
      like: like
    })
  },
  removeLike(like) {
    Dispatcher.dispatch({
      actionType: LikeConstants.REMOVE_LIKE,
      like: like
    })
  }
}

module.exports = LikeActions;
