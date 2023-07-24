/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {useGlobalConfigStore} from "../store/GlobalConfigStore";

export namespace Icons{
    const additionPath: string = process.env.REACT_APP_PACKAGE? `/${process.env.REACT_APP_PACKAGE}` : ''
    export const Exit = () => <img alt={'exit'} src={additionPath + '/images/common/icon_X.png'} style={{width: "24px", height: "24px"}}/>
    export const WhiteExit = () => <img alt={'exit'}src={additionPath + '/images/common/white_icon_X.png'}style={{width: "24px", height: "24px"}}/>
    export const FileDownload = () => <img alt={'fileDownload'} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASBAMAAACZcvICAAAAIVBMVEVHcEyCgoKCgoKCgoKDg4OAgICCgoKAgICCgoKCgoKCgoKEt9VbAAAACnRSTlMAwPGxSBBgMKDQytYozQAAAEVJREFUCNdjYGBgEGSAgFXk0CzLgHSWAwPLqoZVHKscGBiyVqzqWgaUYNdSWlQAUlG0Sh2snHVmAERfKAMSkFoFAgthNADq1hhxet3sJgAAAABJRU5ErkJggg==' style={{width: "14px", height: "18px",margin:"0 5px"}}/>
    export const Trash = () => <img alt={'trash'} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAHlBMVEVHcEyDg4OBgYGCgoKCgoKCgoKCgoKBgYGAgICCgoKja/cKAAAACXRSTlMAQIAtwNpkqRDkjWBIAAAAdklEQVQY02NgYGBInQkECQxgwARiz5wG4XBOBBKMU0FMZmPLycZAMNPYmIGhNHImFIQWMKQiOEAzOCdAtM4E65/QJGBuINQA5UgWaCpUCsA4DpoKnnTnFGQmwF3A2MDI0Ah16ESwoyFeZYJ6BxIIqhAONHjgAACInUC3uqG/GQAAAABJRU5ErkJggg==' style={{width: "24px", height: "24px"}} />
    export const Plus = () => <img alt={'plus'} src={additionPath + '/images/common/icon_plus.png'} style={{width: "24px", height: "24px"}} />
    export const CancelSquareOutline = () => <img alt={'cancel'} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAMFBMVEVHcExBYPBGZ+zO1/tNbu5LbO5EZuxAYO9AY+z////z9f5jf+/t8P6Tp/Tb4fyUp/QWdrhzAAAACHRSTlMAJe/0q+3zIE9rVBEAAACESURBVBjTY2AQ0eiAgCZHBgbG4JMzIWCOqQCD6EwECGRwRuKZMOgg8Q4xdCLxZmDy5v0Csta/hPLmdq+cOWvHTShv1o5dM1cDRaD6VnevAgrAeLN27AZJwcxc3bFrJg4eqkoUU1BtQLV93i2gqrUvsboaiYfqW9SQQA6lcLQQRApddwYA0QDAfyLONbAAAAAASUVORK5CYII=' style={{width: "26px", height: "26px"}} />
    export const PlusSquareFill = () => <img alt={'plus'} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAGFBMVEVHcExAY+xAYutAYuxAY+xAY+z///+ouPZzMyswAAAABXRSTlMASMDwv0IGr4MAAABDSURBVBjTY2B0DoWBEAEG0VAECGRQReKFMCBxQoNReKFE8MpReGnk8MLTQKAUK49cMzFcFkoiLxgllILQQpBRGSl0AWMJb405M4v9AAAAAElFTkSuQmCC' style={{width: "26px", height: "26px"}} />


    export const Instagram = () => <img alt={'instagram'} src={additionPath + '/images/common/icon_footer_instagram.png'} style={{width: "30px", height: "30px"}}/>
    export const Facebook = () => <img  alt={'facebook'} src={additionPath + '/images/common/icon_footer_facebook.png'} style={{width: "30px", height: "30px"}}/>
    export const Twitter = () => <img alt={'twitter'} src={additionPath + '/images/common/icon_footer_twitter.png'} style={{width: "30px", height: "30px"}}/>
    export const Youtube = () => <img alt={'twitter'} src={additionPath + '/images/common/icon_footer_youtube.png'} style={{width: "30px", height: "30px"}}/>
    export const Calendar = () => <img alt={'calender'} src={additionPath + '/images/common/icon_calendar.png'} style={{width: "23px", height: "25px"}}/>
    export const PortalDefault = () => <img alt={'defaultPortal'} src={additionPath + '/images/common/icon_portal.png'} style={{width: "100px", height: "100px"}}/>
    export const PortalSafezone = () => <img alt={'safezonePortal'} src={additionPath + '/images/common/icon_portal_safezone.png'} style={{width: "100px", height: "100px"}}/>
    export const FileDownloadColor = () => <img alt={'fileDownload'} src={additionPath + '/images/common/icon_download_color.png'} style={{width: "20px", height: "20px"}}/>
    export const Menu = (props: {white: boolean}) => <img alt={'menu'} src={additionPath + `/images/common/${props.white? 'icon_white_menu' : 'icon_menu'}.png`} style={{width: "24px", height: "24px"}}/>
    export const UpArrow = () => <img alt={'up'} src={additionPath + '/images/common/icon_up_arrow.png'} style={{width: "16px", height: "16px"}}/>
    export const DownArrow = () => <img alt={'down'} src={additionPath + '/images/common/icon_up_arrow.png'} style={{width: "16px", height: "16px", transform: 'rotate(180deg)' }}/>
    export const LeftArrow = () => <img alt={'left'} src={additionPath + '/images/common/icon_up_arrow.png'} style={{width: "24px", height: "24px", transform: 'rotate(-90deg)' }}/>
    export const RightArrow = () => <img alt={'right'} src={additionPath + '/images/common/icon_up_arrow.png'} style={{width: "16px", height: "16px", transform: 'rotate(90deg)' }}/>
    export const BlueRightArrow = () => <img alt={'right'} src={additionPath + '/images/common/icon_up_blueArrow.png'} style={{width: "16px", height: "12px"}}/>
    export const Home = () => <img alt={'home'} src={additionPath + '/images/common/icon_home.png'} style={{width: "16px", height: "16px"}}/>
    export const Complete = () => <img alt={'complete'} src={additionPath + '/images/common/icon_complete.png'} style={{width: "110px", height: "110px"}}/>

    export const USPPortal = () => <img alt={'usp'} src={additionPath + '/images/common/icon_usp_portal.png'} style={{width: "54.5px", height: "54.5px"}}/>
    export const TSPPortal = () => <img alt={'tsp'} src={additionPath + '/images/common/icon_tsp_portal.png'} style={{width: "54.5px", height: "54.5px"}}/>
    export const DXPPortal = () => <img alt={'dxp'} src={additionPath + '/images/common/icon_dxp_portal.png'} style={{width: "54.5px", height: "54.5px"}}/>
    export const SAZPortal = () => <img alt={'saz'} src={additionPath + '/images/common/icon_saz_portal.png'} style={{width: "54.5px", height: "54.5px"}}/>
    export const LMSPortal = () => <img alt={'lms'} src={additionPath + '/images/common/icon_lms_portal.png'} style={{width: "54.5px", height: "54.5px"}}/>
    export const OriginPortal = () => <img alt={'origin'} src={additionPath + '/images/common/icon_origin_portal.png'} style={{width: "54.5px", height: "54.5px"}}/>

    export const BookMark = () => <img alt={'bookmark'} src={additionPath + '/images/common/icon_bookmark.png'}  style={{width: "24px", height: "24px"}}/>
    export const Link = () => <img alt={'link'} src={additionPath + '/images/common/icon_link.png'} style={{width:'23px', height:'23px'}}/>

    export const SideArrow = () => <img alt={'side'} src={additionPath + '/images/common/icon_side_arrow.png'} style={{width: "24px", height: "24px"}}/>
    export const GNBSearch = () => <img alt={'search'} src={additionPath + '/images/common/icon_GNB_search.png'} style={{width: "30px", height: "30px"}}/>
}