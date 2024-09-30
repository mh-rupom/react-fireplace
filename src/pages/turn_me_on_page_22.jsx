import React from 'react';
import resetIcon from '../assets/images/reset_icon.svg';
import loveIcon from '../assets/images/love_soft_icon.svg';
import locationIcon from '../assets/images/location_small_icon.svg';
import whatsappIcon from '../assets/images/whatsapp_icon.svg';
import facebookIcon from '../assets/images/facebook_icon.svg';
import socialIcon from '../assets/images/social_icon.svg';
import faxIcon from '../assets/images/fax_icon.svg';
import mailIcon from '../assets/images/mail_icon.svg';
import shareIcon from '../assets/images/share_icon.svg';
import loveSoftIcon from '../assets/images/love_icon.svg';
import quoteIcon from '../assets/images/quote_icon.svg';
import { Link } from 'react-router-dom';

export default function TurnMeOnPage22() {
  return (
    <div className="frp_container">
      {/* sidebar */}
      <div className="frp_sidebar">
        <div className="frp_sidebar_logo">
          <img src="https://placehold.co/170x60/png" alt="Logo" />
          <div className="frp_text_after_logo">
            <span>Design your perfect fireplace</span>
          </div>
        </div>
        <div className="frp_sidebar_option frp_sidebar_reset">
          <img src={resetIcon} alt="Reset Icon" /><span>Reset</span>
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
        <Link to={"/burner"}>
        <div className="frp_sidebar_option">
          <span>BURNER</span>
          <div className="frp_option_count count_inactive">
            <span>4</span>
          </div>
          <div className="frp_triangle_right"></div>
          <div className="frp_triangle_left"></div>
        </div>
        </Link>
        <Link to={"/media"}>
        <div className="frp_sidebar_option">
          <span>MEDIA</span>
          <div className="frp_option_count count_inactive">
            <span>5</span>
          </div>
          <div className="frp_triangle_right"></div>
          <div className="frp_triangle_left"></div>
        </div>
        </Link>
        <Link to={"/room"}>
        <div className="frp_sidebar_option">
          <span>ROOM SCENE</span>
          <div className="frp_option_count count_inactive">
            <span>6</span>
          </div>
          <div className="frp_triangle_right"></div>
          <div className="frp_triangle_left"></div>
        </div>
        </Link>
        <div className="frp_sidebar_option">
          <span className="turn_on_text">TURN ME ON</span>
          <div className="frp_option_count">
            <span>7</span>
          </div>
        </div>
      </div>
      {/* content */}
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
              <div className="frp_header_menu_item menu_inactive_background">
                <span>Burner</span>
              </div>
              <div className="frp_header_menu_item menu_inactive_background">
                <span>Media</span>
              </div>
              <div className="frp_header_menu_item menu_inactive_background">
                <span>Room Scene</span>
              </div>
              <div className="frp_header_menu_item">
                <span>Turn me on</span>
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
          <div className="frp_choose_content content_turn_on_me">
            <div className="frp_turn_on_me_background_img">
              {/* Background image can be added here */}
            </div>
            <div className="frp_turn_on_me_fire_img">
              <img src="https://placehold.co/150x120/png" alt="Fire Image" />
            </div>
          </div>
          <div className="frp_right_side_content frp_right_content_room_scene_or_turn_me_on">
            <div className="frp_room_scene_turn_me_on_right_content_img">
              <img src="https://placehold.co/150x200/png" alt="Room Scene" />
            </div>
            <div className="frp_room_scene_or_turn_on_right_content_data_table">
              <table>
                <thead>
                  <tr>
                    <th>TYPE</th>
                    <th>SELECTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MODEL</td>
                    <td>Front</td>
                  </tr>
                  <tr>
                    <td>SIZE</td>
                    <td>Clear 150</td>
                  </tr>
                  <tr>
                    <td>BURNER</td>
                    <td>Flat BURNER</td>
                  </tr>
                  <tr>
                    <td>MEDIA</td>
                    <td>Stones</td>
                  </tr>
                  <tr>
                    <td>BACKGROUND</td>
                    <td>Black Panel</td>
                  </tr>
                  <tr>
                    <td>ROOM SCENE</td>
                    <td>Tile Wall</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="frp_save_wishlist_get_quote_find_dealer">
              <div className="frp_wishlist_quote_dealer frp_save_wishlist">
                <span>SAVE MY WISHLIST</span>
                <span><img src={loveSoftIcon} alt="Wishlist Icon" /></span>
              </div>
              <div className="frp_wishlist_quote_dealer frp_get_quote">
                <span>GET A QUOTE</span>
                <span><img src={quoteIcon} alt="Quote Icon" /></span>
              </div>
              <div className="frp_wishlist_quote_dealer frp_find_dealer">
                <span>FIND YOUR DEALER</span>
                <span><img src={locationIcon} alt="Location Icon" /></span>
              </div>
            </div>
            <div className="frp_right_content_room_scene_or_turn_on_icons">
              <div className="room_scene_or_turn_on_icon">
                <span><img src={whatsappIcon} alt="WhatsApp" /></span>
              </div>
              <div className="room_scene_or_turn_on_icon">
                <span><img src={facebookIcon} alt="Facebook" /></span>
              </div>
              <div className="room_scene_or_turn_on_icon">
                <span><img src={socialIcon} alt="Social" /></span>
              </div>
              <div className="room_scene_or_turn_on_icon">
                <span><img src={faxIcon} alt="Fax" /></span>
              </div>
              <div className="room_scene_or_turn_on_icon">
                <span><img src={mailIcon} alt="Mail" /></span>
              </div>
              <div className="room_scene_or_turn_on_icon share_icon_text">
                <span><img src={shareIcon} alt="Share" /></span>
                <span className="share_design_text">SHARE YOUR DESIGN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
