import React from 'react'
import { 
    HeaderWrapper, 
    HeaderTop, HeaderTopContainer, HeaderTopLeft, HeaderTopLeftContainer, HeaderTopRight, 
    HeaderMain, HeaderMainContainer, LogoWrapper, SearchWrapper, CartWrapper,
    HeaderBottom, HeaderBottomContainer, Menu, MenuItem } from './style';
import Logo from '../Assets/logo-omega.png'
import { 
    EnvironmentOutlined, 
    PhoneOutlined, 
    FacebookOutlined, 
    InstagramOutlined, 
    TwitterOutlined, 
    BellOutlined, 
    QuestionCircleFilled, 
    UserAddOutlined, 
    TruckOutlined, 
    ShoppingCartOutlined 
} from '@ant-design/icons'
import { Input } from 'antd';

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

const HeaderComponent = () => {
    return (
        <HeaderWrapper className="header-wrapper">
            <HeaderTop id="top-bar" className="header-top hide-for-sticky hide-for-medium">
                <HeaderTopContainer className="flex-row container">
                    <HeaderTopLeft className="flex-col hide-for-medium flex-left">
                        <HeaderTopLeftContainer className="nav nav-left medium-nav-center nav-small  nav-divided">
                            <li className="html custom html_topbar_left">
                                <span className="icon-header"><EnvironmentOutlined /></span><span className="address">322/22 Mỹ Đình, Nam Từ Liêm, Hà Nội</span>
                                {/* <p></p> */}
                            </li>
                            <li className="html custom html_topbar_between">
                                <span className="icon-header"><PhoneOutlined /></span><span className="hotline">0397188885</span>
                                {/* <p></p> */}
                            </li>
                            <li className="html custom html_topbar_right">
                                <span className="icon-header"><FacebookOutlined /><InstagramOutlined /><TwitterOutlined /></span>
                                {/* <p></p> */}
                            </li>
                        </HeaderTopLeftContainer>
                    </HeaderTopLeft>
                    <HeaderTopRight className="flex-col hide-for-medium flex-right">
                        <ul>
                            <li>
                                <span className="icon-header"><BellOutlined /></span><span className="notification">Thông báo</span>
                                {/* <p></p> */}
                            </li>
                            <li>
                                <span className="icon-header"><QuestionCircleFilled /></span><span className="support">Hỗ trợ</span>
                                {/* <p></p> */}
                            </li>
                            <li>
                                <span className="icon-header"><UserAddOutlined /></span><span className="log-in">Đăng nhập</span>        
                                {/* <p></p> */}
                            </li>
                        </ul>
                    </HeaderTopRight>
                </HeaderTopContainer>
            </HeaderTop>
            <div id="masthead" className="header-main hide-for-sticky nav-dark">
                <div className="header-inner flex-row container logo-left medium-logo-center" role="navigation">
                    <div id="logo" className="flex-col logo">
                        <div className="logo-wrapper">
                            {/* <a href=""></a> */}
                            <img src={Logo} alt="Logo" className="logo-img" />
                        </div>
                    </div>
                    <div className="flex-col show-for-medium flex-left">
                        <div className="search-wrapper">
                            <Search classname="search" placeholder="Tìm sản phẩm, thương hiệu,..." onSearch={onSearch} enterButton />
                            {/* <a href=""></a> */}
                        </div>
                    </div>
                    <div className="flex-col hide-for-medium flex-right">
                        <div className="cart-wrapper">
                            <span className="icon-header"><TruckOutlined /></span>
                            <span className="icon-header"><ShoppingCartOutlined /></span>
                        </div>
                    </div>
                </div>
            </div>
            <nav></nav>
        </HeaderWrapper>
    )
};

export default HeaderComponent

/*         <HeaderWrapper>
            <HeaderTop>
                <HeaderTopLeft>
                        <span className="icon-header"><EnvironmentOutlined /></span><span className="address">322/22 Mỹ Đình, Nam Từ Liêm, Hà Nội</span>
                        <span className="icon-header"><PhoneOutlined /></span><span className="hotline">0397188885</span>
                        <span className="icon-header"><FacebookOutlined /><InstagramOutlined /><TwitterOutlined /></span>
                </HeaderTopLeft>
                <HeaderTopRight>
                        <span className="icon-header"><BellOutlined /></span><span className="notification">Thông báo</span>
                        <span className="icon-header"><QuestionCircleFilled /></span><span className="support">Hỗ trợ</span>
                        <span className="icon-header"><UserAddOutlined /></span><span className="log-in">Đăng nhập</span>
                </HeaderTopRight>
            </HeaderTop>
            <HeaderMain>
                <LogoWrapper>
                    <img src={Logo} alt="Logo" className="logo-img" />
                </LogoWrapper>
                <SearchWrapper>
                    <Search classname="search" placeholder="Tìm sản phẩm, thương hiệu,..." onSearch={onSearch} enterButton />
                </SearchWrapper>
                <CartWrapper >
                    <span className="icon-header"><TruckOutlined /></span>
                    <span className="icon-header"><ShoppingCartOutlined /></span>
                </CartWrapper>
            </HeaderMain>
            <HeaderBottom>
                <Menu>
                    <MenuItem>TRANG CHỦ</MenuItem>
                    <MenuItem>GIỚI THIỆU</MenuItem>
                    <MenuItem>ĐỒNG HỒ NAM</MenuItem>
                    <MenuItem>ĐỒNG HỒ NỮ</MenuItem>
                    <MenuItem>PHỤ KIỆN</MenuItem>
                    <MenuItem>TIN TỨC</MenuItem>
                </Menu>
            </HeaderBottom>
        </HeaderWrapper> */