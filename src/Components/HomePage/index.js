import { Component } from "react";
import FilterGroups from '../FilterGroups'
import ProductGrid from "../ProductGrid";
import { MdKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import './index.css'

class Homepage extends Component {
    state = {
        showFilter:true,
        showFilterMobile:false,
        count:0
    };

    onclickfilter = () => {
        console.log('button')
        this.setState(prevState => ({
            showFilter:!prevState.showFilter
        }))
    }
    onclickfilterMobile = () => {
        console.log('button')
        this.setState(prevState => ({
            showFilterMobile:!prevState.showFilterMobile
        }))
    }

    productCountChange = (count) => {
        this.setState({count:count})
      };

    render(){
        const {showFilter,showFilterMobile,count} = this.state
    return(
        <div className='ecommerceWebsite'>
            <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1712435447/Grey_Strip_pgm56g.png' className='greyStrip' alt='Grey Strip' />
            <div className='Header'>
                <div className='HeaderSection1 desktop'>
                    <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1712433216/Logo_ds3qht.png' className='logo' alt='Website logo'/>
                    <h1 className='logo'>
                        LOGO
                    </h1>
                    <div className='iconsAndLanguageContainer'>
                        <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1712434376/search-normal_evybtx.png' className='icon' alt='search'/>
                        <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1712434340/heart_xworkq.png' className='icon' alt='hearct'/>
                        <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1712434301/shopping-bag_uea3ca.png' className='icon' alt='shopping bag'/>
                        <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1712434435/profile_imxycz.png' className='icon' alt='profile'/>
                        <select className='languageDropDown'>
                            <option value = 'ENG'>ENG</option>
                            <option value = 'TAM'>TAM</option>
                            <option value = 'TEL'>TEL</option>
                        </select>
                    </div>
                </div>
                <div className='HeaderSection1mobile'>
                    <div className="hamburgerAndLogo">
                    <GiHamburgerMenu />
                    <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1712433216/Logo_ds3qht.png' className='logo' alt='Website logo'/>
                    </div>
                    <h1 className='logo'>
                        LOGO
                    </h1>
                    <div className='iconsAndLanguageContainer'>
                        <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1712434376/search-normal_evybtx.png' className='icon' alt='search'/>
                        <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1712434340/heart_xworkq.png' className='icon' alt='hearct'/>
                        <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1712434301/shopping-bag_uea3ca.png' className='icon' alt='shopping bag'/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="websiteTitleAndDescription">
                <h1>DISCOVER OUR PRODUCTS</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                </p>
            </div>
            <hr/>
            <div className="itemsCountHideFilterAndRecommendedContainer">
                <div className="productsCountAndHideFilter">
                    <p className="count">
                        {count} ITEMS
                    </p>
                    {showFilter ? <button type = 'button' className='hideFilterButton' onClick = {this.onclickfilter}>
                    <MdKeyboardArrowLeft /> 
                    HIDE FILTER
                    </button> : <button type = 'button' className='hideFilterButton' onClick = {this.onclickfilter}>
                    <MdOutlineKeyboardArrowRight /> 
                    SHOW FILTER
                    </button>}    
                </div>
                <select className='sortBy'>
                    <option value = 'RECOMMENDED'>RECOMMENDED</option>
                    <option value = 'NEWEST FIRST'>NEWEST FIRST</option>
                    <option value = 'POPULAR'>POPULAR</option>
                    <option value = 'PRICE: HIGH TO LOW'>PRICE: HIGH TO LOW</option>
                    <option value = 'PRICE: LOW TO HIGH'>PRICE: LOW TO HIGH</option>
                </select>
            </div>
            <div className="FilterAndRecommendedContainerMobile">
                    <button type = 'button' className='hideFilterButton' onClick = {this.onclickfilterMobile}>
                    FILTER
                    </button> 
                    <select className='sortBy'>
                    <option value = 'RECOMMENDED'>RECOMMENDED</option>
                    <option value = 'NEWEST FIRST'>NEWEST FIRST</option>
                    <option value = 'POPULAR'>POPULAR</option>
                    <option value = 'PRICE: HIGH TO LOW'>PRICE: HIGH TO LOW</option>
                    <option value = 'PRICE: LOW TO HIGH'>PRICE: LOW TO HIGH</option>
                </select>
            </div>
            <hr/>
            <div className="contentContainerMobile">
            {showFilterMobile && <FilterGroups/>}
                <ProductGrid onProductCountChange={this.productCountChange} />
            </div>
            <div className="contentContainerDesktop">
                {showFilter && <FilterGroups/>}
                <ProductGrid onProductCountChange={this.productCountChange} />
            </div>
            <div className="footerDesktop">
                <div className="footerSection1">
                    <div className="footerSection1Left">
                        <h2 className="footerHeadingText">BE THE FIRST TO KNOW</h2>
                        <h3>Sign up for update from metta muse.</h3>
                        <div className="subscribeContainer">
                            <input placeholder="Enter your email" type="text" className="footerEmailInput"/>
                            <button type="button" className="subscribeButton">SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className="footerSection1Right">
                        <h2>
                            CONTACT US
                        </h2>
                        <p className="footerContact">+44 221 133 5360</p>
                        <p className="footerContact">customercare@mettamuse.com</p>
                        <h2>CURRENCY</h2>
                        <div className="footerLanguage">
                            <img src = 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1712508144/United_States_of_America_US_giq48o.png' alt="US Flag" className="USFlag"/>
                            <li>USD</li>
                        </div>
                        <p style={{ fontSize: '12px' }}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
                <hr/>
                <div className="footerSection2">
                    <div className="footerSection2Links">
                        <h2>mettā muse</h2>
                        <ul className="linksList">
                            <li className="link">About Us</li>
                            <li className="link">Stories</li>
                            <li className="link">Artisans</li>
                            <li className="link">Boutiques</li>
                            <li className="link">Contact Us</li>
                            <li className="link">EU Compliances Docs</li>
                        </ul>
                    </div>
                    <div className="QuickLinks">
                        <h2>QUICK LINKS</h2>
                        <ul className="linksList">
                            <li className="link">Orders & Shipping</li>
                            <li className="link">Join/Login as a Seller</li>
                            <li className="link">Payments & Pricing</li>
                            <li className="link">Returns & Refunds</li>
                            <li className="link">FAQs</li>
                            <li className="link">Privacy Policy</li>
                            <li className="link">Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className="footerSection2Part3">
                        <h2>FOLLOW US</h2>
                        <img src="https://res.cloudinary.com/dhs1xv9et/image/upload/v1712509989/Frame_28_lnn6yi.png" alt = 'Follow US' className="followUs"/>
                        <h2>mettā muse Accepts</h2>
                        <img src = 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1712509789/Frame_136278_ifnpvr.png' alt = 'payments Medthod' className="paymentMethods"/> 
                    </div>
                </div>
            </div>
            <div className="footerMobile">
                    <div className="footerSection1Mobile">
                        <h2 className="footerHeadingText">BE THE FIRST TO KNOW</h2>
                        <h3>Sign up for update from metta muse.</h3>
                        <div className="subscribeContainerMobile">
                            <input placeholder="Enter your email" type="text" className="footerEmailInput"/>
                            <button type="button" className="subscribeButton">SUBSCRIBE</button>
                        </div>
                    </div>
                    <hr className="lineMobile"/>
                    <div className="footerSection2Mobile">
                        <h2>
                            CALL US
                        </h2>
                        <ul className="numberAndEmailMobile">
                            <li className="number">+44 221 133 5360</li>
                            <li className="footerContact">customercare@mettamuse.com</li>
                        </ul>
                    </div>
                    <hr className="lineMobile"/>
                    <div className="footerSection3Mobile">
                        <h2>CURRENCY</h2>
                        <div className="footerLanguage">
                            <img src = 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1712508144/United_States_of_America_US_giq48o.png' alt="US Flag" className="USFlag"/>
                            <li>USD</li>
                        </div>
                    </div>
                    <hr className="lineMobile"/>
                    <div className="footerSection4Mobile">
                        <h2>mettā muse</h2>
                        <FaChevronDown />
                    </div>
                    <hr className="lineMobile"/>
                    <div className="footerSection5Mobile">
                        <h2>QUICK LINKS</h2>
                        <FaChevronDown />
                    </div>
                    <hr className="lineMobile"/>
                    <div className="footerSection6Mobile">
                        <h2>FOLLOW US</h2>
                        <FaChevronDown />
                    </div>
                    <hr className="lineMobile"/>
                    <div className="footerSection7Mobile">
                        <h2>mettā muse Accepts</h2>
                        <img src = 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1712509789/Frame_136278_ifnpvr.png' alt = 'payments Medthod' className="paymentMethods"/> 
                    </div>
                    <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>

        </div>
    )
}  
}

export default Homepage
