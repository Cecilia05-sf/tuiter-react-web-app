import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCertificate, faCheck} from '@fortawesome/free-solid-svg-icons';
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks";
import 'bootstrap-icons/font/bootstrap-icons.css';

const TuitItem = (
    {
        tuit = {
            "_id": "123",
            "topic": "Space",
            "username": "SpaceX",
            "handle": "@spacex",
            "time": "2h",
            "image": "spacex.png",
            "title": "SpaceX's Mission",
            "liked": true,
            "likes": 2345,
            "replies": 123,
            "retuits": 432,
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        },
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-end rounded-circle" src={`/images/${tuit.image}`} alt=""/>
                </div>
                <div className="col-10">
                    <div><i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                        {tuit.userName} <span className="fa-stack fa-xs">
        <FontAwesomeIcon icon={faCertificate} className="fa-stack-2x" style={{color: "blue"}}/>
        <FontAwesomeIcon icon={faCheck} className="fa-stack-1x" style={{color: "white"}}/>
      </span> {tuit.handle} . {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                    <TuitStats id={tuit._id}/>
                </div>

            </div>
        </li>
    );
};
export default TuitItem;

