import React from 'react';
import './Header.scss';
import { Navbar,  Link } from 'framework7-react';
import SearchDialog from '../SearchDialog/SearchDialog';
import { useState } from 'react';
import { ROUTE_PATH } from '../../../constants/constant';
const Header = ({ title }) => {
  const [isShowSearchDialog, setIsShowSearchDialog] = useState(false);

  const handleCloseSearchDialog = () => {
    setIsShowSearchDialog(!isShowSearchDialog);
  };

  return (
    <Navbar>
      {/* <div>
        <img src="Logo.png" alt="" className="Logo_Image " />
      </div> */}
      {title.map((e) => (
        <div onClick={() => {f7.view.main.router.navigate(ROUTE_PATH.introduce)}} className="color-theme-black title_text" key={e.id}>
          {e.name}
        </div>
      ))}
      {/* <span>|</span>

      <div href="https://www.facebook.com/thong.khuat.583/" external>
        <img src="fb.png" alt="" className="fb_Image " />
      </div>
      <div external href="https://www.tiktok.com/@cuboy2001">
        <img src="tiktok.png" alt="" className="fb_Image" />
      </div>

      <div>
        <img src="search.png" alt="" className="fb_Image" onClick={handleCloseSearchDialog} />
      </div> */}

      {isShowSearchDialog && <SearchDialog handleCloseSearchDialog={handleCloseSearchDialog} />}
    </Navbar>
  );
};

export default Header;
