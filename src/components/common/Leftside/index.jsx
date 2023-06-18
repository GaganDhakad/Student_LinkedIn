import React from 'react'
import "./index.scss";
import { useNavigate } from "react-router-dom";

export default function Leftside() {
  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  return (
    <div>
      <div className="container">
        <div className='ArtCard'>
          <div className='UserInfo'>
            <div className='CardBackground' />
            <a>
              < div className='Photo' />
              <p className='Link'>Welcome, there !</p>
            </a>
            <a>
              <div className='AddPhotoText'>Add a photo</div>
            </a>
          </div>
          <div className='Widget'>
            <a>
              <div>
                <span>Connections</span>
                <span>Grow your network</span>
              </div>
              <img src="/images/widget-icon.svg" alt="" 
                  onClick={() => goToRoute("/connections")}
              />
            </a>
          </div>
          <div className='Item'>
            <span>
              <img src="/images/item-icon.svg" alt="" />
              My Items
            </span>
          </div>
        </div>
        <div className='CommunityCard'>
          <a>
            <span>Groups</span>
          </a>
          <a>
            <span>
              Events
              <img src="/images/plus-icon.svg" alt="" />
            </span>
          </a>
          <a>
            <span>Follow Hashtags</span>
          </a>
          <a>
            <span>Discover more</span>
          </a>
        </div>
      </div>
    </div>
  )
}
