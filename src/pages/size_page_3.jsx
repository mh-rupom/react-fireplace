import React from 'react';
import resetIcon from '../assets/images/reset_icon.svg';
import loveIcon from '../assets/images/love_soft_icon.svg';
import locationIcon from '../assets/images/location_small_icon.svg';
import { Link } from 'react-router-dom';

export default function SizePage3() {
  return (
        <div className="frp_container">
            {/* sidebar */}
            <div className="frp_sidebar ">
                <div className="frp_sidebar_logo">
                    <img src="https://placehold.co/170x60/png" alt=""/>
                    <div className="frp_text_after_logo">
                        <span>Design your perfect fireplace</span>
                    </div>
                </div>
                <div className="frp_sidebar_option frp_sidebar_reset">
                    <img src={resetIcon} alt="reset icon" /><span>Reset</span>
                </div>
                <Link to={"/"}>
                <div className="frp_sidebar_option frp_sidebar_choose_model">
                    <span style={{  }}>CHOOSE A MODEL</span>
                    <div className="frp_option_count count_inactive">
                        <span>1</span>
                    </div>
                    <div className="frp_triangle_right"></div>
                    <div className="frp_triangle_left"></div>
                </div>
                </Link>
                <div className="frp_sidebar_option ">
                    <span>CHOOSE SIZE</span>
                    <div className="frp_option_count">
                        <span>2</span>
                    </div>
                    <div className="frp_triangle_right"></div>
                    <div className="frp_triangle_left"></div>
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
                            <div className="frp_header_menu_item">
                                <span>Size</span>
                            </div>
                        </div>
                        <div className="frp_content_header_love_img">
                            <img src={loveIcon} alt=""/>
                        </div>
                    </div>
                    <div className="frp_content_header_find_dealer">
                        <img src={locationIcon} alt=""/>
                        <span>FIND DEALER</span>
                    </div>
                </div>
                <div className="frp_main_content">
                    <div className="frp_choose_content frp_choose_your_size_content">
                        <div className="frp_choose_text frp_choose_your_size_text">
                            <span>Choose Your Size</span>
                        </div>
                        <div className="frp_choose_size_options">
                            <section>
                                <div className="frp_size_fields">
                                    <label for="">
                                        <input type="checkbox" name="" id=""/>
                                        <span>Front 75</span>
                                    </label>
                                    <label for="">
                                        <input type="checkbox" name="" id=""/>
                                        <span>Front 75H</span>
                                    </label>
                                </div>
                                <div className="frp_size_images">
                                    <img src="https://placehold.co/100x80/png" alt=""/>
                                    <img src="https://placehold.co/100x80/png" alt=""/>
                                </div>
                            </section>
                            <section>
                                <div className="frp_size_fields">
                                    <label for="">
                                        <input type="checkbox" name="" id=""/>
                                        <span>Front 110</span>
                                    </label>
                                    <label for="">
                                        <input type="checkbox" name="" id=""/>
                                        <span>Front 110 H</span>
                                    </label>
                                    <label for="">
                                        <input type="checkbox" name="" id=""/>
                                        <span>Front 110 HH</span>
                                    </label>
                                </div>
                                <div className="frp_size_images">
                                    <img src="https://placehold.co/100x80/png" alt=""/>
                                    <img src="https://placehold.co/100x80/png" alt=""/>
                                    <img src="https://placehold.co/100x80/png" alt=""/>
                                </div>
                            </section>
                            <section>
                                <div className="frp_size_fields">
                                    <label for="">
                                        <input type="checkbox" name="" id=""/>
                                        <span>Front 130</span>
                                    </label>
                                    <label for="">
                                        <input type="checkbox" name="" id=""/>
                                        <span>Front 130H</span>
                                    </label>
                                    <label for="">
                                        <input type="checkbox" name="" id=""/>
                                        <span>Front 130HH</span>
                                    </label>
                                </div>
                                <div className="frp_size_images">
                                    <img src="https://placehold.co/100x80/png" alt=""/>
                                    <img src="https://placehold.co/100x80/png" alt=""/>
                                    <img src="https://placehold.co/100x80/png" alt=""/>
                                </div>
                            </section>
                            <section>
                                <div className="frp_size_fields">
                                    <label for="">
                                        <input type="checkbox" name="" id=""/>
                                        <span>Front 150</span>
                                    </label>
                                    <label for="">
                                        <input type="checkbox" name="" id=""/>
                                        <span>Front 150H</span>
                                    </label>
                                    <label for="">
                                        <input type="checkbox" name="" id=""/>
                                        <span>Front 150HH</span>
                                    </label>
                                </div>
                                <div className="frp_size_images">
                                    <img src="https://placehold.co/100x80/png" alt=""/>
                                    <img src="https://placehold.co/100x80/png" alt=""/>
                                    <img src="https://placehold.co/100x80/png" alt=""/>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="frp_right_side_content">
                        <div className="frp_you_are_designing_text">
                            <span>You are designing:</span>
                        </div>
                        <div className="frp_product_details">
                            <p>
                                <span className="frp_data_title">MODEL NO - </span><span>FRONT</span>
                            </p>
                            <p>
                                <span className="frp_data_title">LINEAR FIREPLACE - </span><span>Clear 110H</span>
                            </p>
                        </div>
                        <div className="frp_product_image">
                            <img src="https://placehold.co/150x120/png" alt=""/>
                        </div>
                        <div className="frp_btns ">
                            <Link to={"/"}><button className="frp_back_btn">BACK</button></Link>
                            <Link to={"/background"}><button className="frp_next_btn">NEXT</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
