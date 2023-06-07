import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLike } from '../reducers/tuits-reducer';
import { FaRegComment, FaRetweet, FaRegHeart, FaHeart, FaShareSquare } from 'react-icons/fa';

const TuitStats = ({ id }) => {
    const tuit = useSelector(state => state.tuits.find(t => t._id === id));
    const dispatch = useDispatch();

    const onLikeClick = () => {
        dispatch(toggleLike(id));
    }

    return (
        <div className="row">
            <div className="col">
                <FaRegComment />
                <span>{tuit.replies}</span>
            </div>
            <div className="col">
                <FaRetweet />
                <span>{tuit.retuits}</span>
            </div>
            <div className="col" onClick={onLikeClick}>
                {tuit.liked ? <FaHeart color="red" /> : <FaRegHeart />}
                <span>{tuit.likes}</span>
            </div>
            <div className="col">
                <FaShareSquare />
            </div>
        </div>
    );
};

export default TuitStats;
