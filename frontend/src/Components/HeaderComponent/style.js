import styled from "styled-components";

export const HeaderWrapper = styled.header`
    background-color: rgb(0,0,0);
    color: white;
    width: 100%;
    z-index: 30;
    position: relative;
    background-size: cover;
    background-position: 50% 0;
    transition: background-color .3s, opacity .3s;
    box-sizing: border-box;
    align-items: center;
`

export const HeaderTop = styled.div`
    background-color: rgb(0, 0, 0);
    color: white;
    width: 100%;
    z-index: 30;
    position: relative;
    background-size: cover;
    background-position: 50% 0;
    transition: background-color .3s, opacity .3s;
    box-sizing: border-box;
    align-items: center;
    // unicode-bidi: isolate;
    border-bottom: 1px solid #333; /* Đường line phân biệt */

    /* CSS cho lớp header-top */
    &.header-top {
        background-color: rgb(0, 0, 0); !important;
        min-height: 40px;
        z-index: 11;
        position: relative;
        display: flex;
        align-items: center;
    };
    // /* CSS cho lớp hide-for-sticky */
    // &.hide-for-sticky {
    //     display: none; /* Ẩn phần tử khi cuộn trang */
    // }

    /* CSS cho lớp hide-for-medium */
    &.hide-for-medium {
        @media (max-width: 768px) { /* Ẩn phần tử trên các thiết bị có kích thước medium */
            display: none;
        }
    }
`


export const HeaderTopContainer = styled.div`
    box-sizing: border-box;

    &.flex-row {
        display: flex;
        height: 100%;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    };

    &.container {
        max-width: 1230px;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: auto;
        margin-right: auto;
    };
`

export const HeaderTopLeft = styled.div`
    // display: block;
    *:before, *:after {
        box-sizing: border-box;
    }

    &.flex-col {
        max-height: 100%;
    };

    &.flex-left {
        margin-right: auto;
    };
`

export const HeaderTopLeftContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: disc;
    *:before, *:after {
        box-sizing: border-box;
    }

    &.nav-left {
        justify-content: flex-start;
    };

    &.nav {
        width: 100%;
        position: relative;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }
`

export const HeaderTopRight = styled.div`
    *:before, *:after {
        box-sizing: border-box;
    }

    &.flex-col {
        max-height: 100%;
    };

    &.flex-right {
        margin-left: auto;
    };
`