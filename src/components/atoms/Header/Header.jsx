import React from 'react';
import './Header.scss';
import { Navbar, Link, f7 } from 'framework7-react';
import SearchDialog from '../SearchDialog/SearchDialog';
import { useState } from 'react';
import { ROUTE_PATH } from '../../../constants/constant';
const Header = ({ title, LoginForm }) => {
  const [isShowSearchDialog, setIsShowSearchDialog] = useState(false);

  const handleCloseSearchDialog = () => {
    setIsShowSearchDialog(!isShowSearchDialog);
  };

  return (
    <div className="wrapper_header">
      <Link>
        <img src="Logo.png" alt="" className="item_logo" />
      </Link>
      {title.map((e) => (
        <div
          onClick={() => {
            f7.view.main.router.navigate(e.routerName);
          }}
          className="color-theme-black title_text"
          key={e.id}>
          {e.name}
        </div>
      ))}
      <span>|</span>

      <div className="wrapper_fb">
        <Link href="https://www.youtube.com/" external target="_blank">
          <img src="fb.png" alt="" className="fb_Image " />
        </Link>
        <Link>
          <img src="tiktok.png" alt="" className="fb_Image" />
        </Link>
        <Link>
          <img src="search.png" alt="" className="fb_Image" onClick={handleCloseSearchDialog} />
        </Link>
      </div>
      <div className="wrapper_login">
        <button className=" button button-fill color-red " onClick={LoginForm}>
          Đăng Nhập
        </button>
        <button className=" button button-fill color-red" onClick={LoginForm}>
          Đăng Ký
        </button>
      </div>
      {isShowSearchDialog && <SearchDialog handleCloseSearchDialog={handleCloseSearchDialog} />}
    </div>
  );
};

export default Header;
