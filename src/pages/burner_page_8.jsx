import React from 'react';
import resetIcon from '../assets/images/reset_icon.svg';
import loveIcon from '../assets/images/love_soft_icon.svg';
import locationIcon from '../assets/images/location_small_icon.svg';
import { Link } from 'react-router-dom';

export default function BurnerPage8() {
  return (
    <div className="frp_container">
      {/* Sidebar */}
      <div className="frp_sidebar">
        <div className="frp_sidebar_logo">
          <img src="https://placehold.co/170x60/png" alt="logo" />
          <div className="frp_text_after_logo">
            <span>Design your perfect fireplace</span>
          </div>
        </div>
        <div className="frp_sidebar_option frp_sidebar_reset">
          <img src={resetIcon} alt="Reset" />
          <span>Reset</span>
        </div>
        <Link to={"/"}>
        <div className="frp_sidebar_option frp_sidebar_choose_model">
          <span>CHOOSE A MODEL</span>
          <div className="frp_option_count count_inactive">
            <span>1</span>
          </div>
          <div className="frp_triangle_right"></div>
          <div className="frp_triangle_left"></div>
        </div>
        </Link>
        <Link to={"/size"}>
        <div className="frp_sidebar_option">
          <span>CHOOSE SIZE</span>
          <div className="frp_option_count count_inactive">
            <span>2</span>
          </div>
          <div className="frp_triangle_right"></div>
          <div className="frp_triangle_left"></div>
        </div>
        </Link>
        <Link to={"/background"}>
        <div className="frp_sidebar_option">
          <span>BACKGROUND</span>
          <div className="frp_option_count count_inactive">
            <span>3</span>
          </div>
          <div className="frp_triangle_right"></div>
          <div className="frp_triangle_left"></div>
        </div>
        </Link>
        <div className="frp_sidebar_option">
          <span>BURNER</span>
          <div className="frp_option_count">
            <span>4</span>
          </div>
          <div className="frp_triangle_right"></div>
          <div className="frp_triangle_left"></div>
        </div>
      </div>
      {/* Content */}
      <div className="frp_content frp_content_with_header">
        <div className="frp_content_header">
          <div className="frp_header_menu_with_love_img">
            <div className="frp_header_list_menus">
              <div className="frp_header_menu_item menu_inactive_background">
                <span>Model</span>
              </div>
              <div className="frp_header_menu_item menu_inactive_background">
                <span>Size</span>
              </div>
              <div className="frp_header_menu_item menu_inactive_background">
                <span>Background</span>
              </div>
              <div className="frp_header_menu_item">
                <span>Burner</span>
              </div>
            </div>
            <div className="frp_content_header_love_img">
              <img src={loveIcon} alt="Love" />
            </div>
          </div>
          <div className="frp_content_header_find_dealer">
            <img src={locationIcon} alt="Location" />
            <span>FIND DEALER</span>
          </div>
        </div>
        <div className="frp_main_content">
          <div className="frp_choose_content">
            <div className="frp_choose_text">
              <span>Choose Your Burner</span>
            </div>
            <div className="frp_choose_fields frp_choose_burner">
              <div className="frp_burner">
                <img src="https://placehold.co/300x80/png" alt="Burner" />
                <label htmlFor="frp_burner_field_1">
                  <input type="checkbox" id="frp_burner_field_1" />
                  <span>FLAT BURNER</span>
                </label>
              </div>
              <div className="frp_burner">
                <img src="https://placehold.co/300x80/png" alt="Burner" />
                <label htmlFor="frp_burner_field_2">
                  <input type="checkbox" id="frp_burner_field_2" />
                  <span>WILDERNESS</span>
                </label>
              </div>
            </div>
          </div>
          <div className="frp_right_side_content">
            <div className="frp_you_are_designing_text">
              <span>You are designing:</span>
            </div>
            <div className="frp_product_details">
              <p>
                <span className="frp_data_title">MODEL NO - </span>
                <span>FRONT</span>
              </p>
              <p>
                <span className="frp_data_title">LINEAR FIREPLACE - </span>
                <span>Clear 110H</span>
              </p>
              <p>
                <span className="frp_data_title">BACKGROUND - </span>
                <span>Standard Panel</span>
              </p>
              <p>
                <span className="frp_data_title">BURNER - </span>
                <span>FLAT BURNER</span>
              </p>
            </div>
            <div className="frp_product_image">
              <img src="https://placehold.co/330x210/png" alt="Product" />
            </div>
            <div className="frp_btns">
              <Link to={"/background"}><button className="frp_back_btn">BACK</button></Link>
              <Link to={"/media"}><button className="frp_next_btn">NEXT</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
