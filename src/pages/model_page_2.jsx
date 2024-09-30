import React from 'react';
import resetIcon from '../assets/images/reset_icon.svg';
import loveIcon from '../assets/images/love_soft_icon.svg';
import locationIcon from '../assets/images/location_small_icon.svg';
import { Link } from 'react-router-dom';

export default function ModelPage2() {
  return (
    <div className="frp_container">
      {/* sidebar */}
      <div className="frp_sidebar frp_model_sidebar">
        <div className="frp_sidebar_logo">
          <img src="https://placehold.co/170x60/png" alt="Logo" />
          <div className="frp_text_after_logo">
            <span>Design your perfect fireplace</span>
          </div>
        </div>
        <div className="frp_sidebar_option frp_sidebar_reset">
          <img src={resetIcon} alt="Reset Icon" /><span>Reset</span>
        </div>
        <div className="frp_sidebar_option frp_sidebar_choose_model">
          <span>CHOOSE A MODEL</span>
          <div className="frp_option_count">
            <span>1</span>
          </div>
          <div className="frp_triangle_right"></div>
          <div className="frp_triangle_left"></div>
        </div>
      </div>

      {/* model content */}
      <div className="frp_content frp_model_content">
        <div className="frp_content_header">
          <div className="frp_header_menu_with_love_img">
            <div className="frp_header_list_menus">
              <div className="frp_header_menu_item">
                <span>Model</span>
              </div>
            </div>
            <div className="frp_content_header_love_img">
              <img src={loveIcon} alt="Love Icon" />
            </div>
          </div>
          <div className="frp_content_header_find_dealer">
            <img src={locationIcon} alt="Location Icon" />
            <span>FIND DEALER</span>
          </div>
        </div>

        <div className="frp_choose_content frp_choose_your_model_content">
          <div className="frp_choose_your_model_text">
            <span>Choose Your Model</span>
          </div>
          <div className="frp_choose_model_options">
            <div className="frp_model">
              <img src="https://placehold.co/250x230/png" alt="Model Traditional" />
              <label htmlFor="frp_model_field_1">
                <input type="checkbox" id="frp_model_field_1" />
                <span>TRADITIONAL</span>
              </label>
            </div>
            <div className="frp_model">
              <img src="https://placehold.co/250x230/png" alt="Model Front" />
              <label htmlFor="frp_model_field_2">
                <input type="checkbox" id="frp_model_field_2" />
                <span>FRONT</span>
              </label>
            </div>
            <div className="frp_model">
              <img src="https://placehold.co/250x230/png" alt="Model Three Sided" />
              <label htmlFor="frp_model_field_3">
                <input type="checkbox" id="frp_model_field_3" />
                <span>THREE SIDED</span>
              </label>
            </div>
            <div className="frp_model">
              <img src="https://placehold.co/250x230/png" alt="Model Corner RS" />
              <label htmlFor="frp_model_field_4">
                <input type="checkbox" id="frp_model_field_4" />
                <span>CORNER RS</span>
              </label>
            </div>
            <div className="frp_model">
              <img src="https://placehold.co/250x230/png" alt="Model Corner LS" />
              <label htmlFor="frp_model_field_5">
                <input type="checkbox" id="frp_model_field_5" />
                <span>CORNER LS</span>
              </label>
            </div>
          </div>
          <div className="frp_next_btn frp_model_next_btn">
            <Link to={"/size"}><button>NEXT</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
