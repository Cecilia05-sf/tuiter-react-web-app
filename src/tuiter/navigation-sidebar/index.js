import React from "react";
import {Link, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faHashtag, faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {faBell, faEnvelope, faBookmark, faListAlt, faUser, faCircle} from "@fortawesome/free-regular-svg-icons";


const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const [,,active] = pathname.split("/");
    const links = [
        {name: "home",icon: () => <FontAwesomeIcon icon={faHome} style={{width: '20px', marginRight: '10px', marginLeft: '4px'}}/>},
        {name: "explore", icon: () => <FontAwesomeIcon icon={faHashtag} style={{width: '20px', marginRight: '10px', marginLeft: '4px'}}/>},
        {name: "notifications", icon: () => <FontAwesomeIcon icon={faBell} style={{width: '20px', marginRight: '10px', marginLeft: '4px'}}/>},
        {name: "messages", icon: () => <FontAwesomeIcon icon={faEnvelope} style={{width: '20px', marginRight: '10px', marginLeft: '4px'}}/>},
        {name: "bookmarks", icon: () => <FontAwesomeIcon icon={faBookmark} style={{width: '20px', marginRight: '10px', marginLeft: '4px'}}/>},
        {name: "lists", icon: () => <FontAwesomeIcon icon={faListAlt} style={{width: '20px', marginRight: '10px', marginLeft: '4px'}}/>},
        {name: "profile", icon: () => <FontAwesomeIcon icon={faUser} style={{width: '20px', marginRight: '10px', marginLeft: '4px'}}/>},
        {name: "more" , icon: () => (
                <span className="fa-stack fa-xs" style={{marginRight:'5px'}}>
        <FontAwesomeIcon icon={faCircle} className="fa-stack-2x"  style={{ transform: 'scale(0.8)' }}/>
        <FontAwesomeIcon icon={faEllipsisH} className="fa-stack-1x"/>
      </span>
            )}];
    return (
        <div className="list-group">
            {links.map((link) =>
                <Link to={`/tuiter/${link.name}`}
                      className={`list-group-item text-capitalize ${active === link.name ? "active" : ""}`}>
                    {link.icon()}
                    {link.name}
                </Link>
            )}
        </div>
    );
};
export default NavigationSidebar;