import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toggleLike} from '../reducers/tuits-reducer';
import {FaRegComment, FaRetweet, FaHeart, FaShareSquare, FaThumbsDown} from 'react-icons/fa';
import { updateTuitThunk } from "../services/tuits-thunks";


const TuitStats = ({id}) => {
    const tuit = useSelector(state =>
        state.tuits.tuits.find(t => t._id === id));
    const dispatch = useDispatch();

    const onLikeClick = () => {
        dispatch(toggleLike(id));
    }

    return (
        <div className="row">
            <div className="col">
                <FaRegComment/>
                <span>{tuit.replies}</span>
            </div>
            <div className="col">
                <FaRetweet/>
                <span>{tuit.retuits}</span>
            </div>
            <div className="col">
                <FaHeart
                    className="text-danger"
                    onClick={() =>
                        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                    }
                />
                <span className="ms-2">{tuit.likes}</span>
            </div>
            <div className="col">
                <FaThumbsDown
                    onClick={() =>
                        dispatch(updateTuitThunk({...tuit, dislikes: (tuit.dislikes || 0) + 1}))
                    }
                />
                <span className="ms-2">{tuit.dislikes || 0}</span>
            </div>
            <div className="col">
                <FaShareSquare/>
            </div>
        </div>
    );
};

export default TuitStats;
