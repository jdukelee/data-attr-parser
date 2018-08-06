# Reference Sheet
## Custom data attributes used in automated tests.
This document defines the values used for the `data-test` attribute for respective HTML elements. This attribute will be used by automated tests to interact with page elements.


### Reference Organization
Each attribute value will be listed under the web page or web page component where it would be visually rendered.

[General](https://github.com/weareenvoy/qa-data-attr#general)

&nbsp;&nbsp;&nbsp;&nbsp;[Header](https://github.com/weareenvoy/qa-data-attr#header)

&nbsp;&nbsp;&nbsp;&nbsp;[Navigation](https://github.com/weareenvoy/qa-data-attr#navigation)

&nbsp;&nbsp;&nbsp;&nbsp;[Notification Sign Up Form](https://github.com/weareenvoy/qa-data-attr#notification-sign-up-formsign-up-form)

[Login Page](https://github.com/weareenvoy/qa-data-attr#login-page)

[Create Account Page](https://github.com/weareenvoy/qa-data-attr#create-account-page)

[Checkout Page](https://github.com/weareenvoy/qa-data-attr#checkout-page)

&nbsp;&nbsp;&nbsp;&nbsp;[Billing Form](https://github.com/weareenvoy/qa-data-attr#billing-form)

&nbsp;&nbsp;&nbsp;&nbsp;[Credit Card Form](https://github.com/weareenvoy/qa-data-attr#credit-card-form)
<br>

### General

#### Header
Element          | Data attribute  
---------------- | ----------------
Announcement banner close | data-test="announcementBannerClose"  


#### Navigation

Element          | Data attribute  
---------------- | ----------------
Navigation logo | data-test="navLogo"
Login button | data-test="navLogin"
Cart icon | data-test="navCart"

#### Footer
Element          | Data attribute  
---------------- | ----------------
Footer link contact us     | data-test="footerLinkContact"
Footer link FAQ | data-test="footerLinkFAQ"
Footer email signup input | data-test="footerInputSignup"

#### Notification Sign Up Form

Element          | Data attribute  
---------------- | ----------------
Email signup form input | data-test="formInputSignup"
Email signup form submit button | data-test="formBtnSignup"
<br>

### Login Page

Element          | Data attribute  
---------------- | ----------------
Login username input     | data-test="loginInputUsername"
Login password input     | data-test="loginInputPass"  
Login submit | data-test="loginBtnSubmit"
Create account button | data-test="createAccountLink"
<br>

### Create Account Page

Element          | Data attribute  
---------------- | ----------------
Account firstname input | data-test="createAccountInputFirstname"
Account lastname input | data-test="createAccountInputLastname"
Account email input | data-test="createAccountInputEmail"
Account password input | data-test="createAccountInputPass"
Create submit       | data-test="createAccountBtnSubmit"
<br>

### Checkout Page

#### Billing Form

Element          | Data attribute  
---------------- | ----------------
Firstname input | data-test="checkoutFirst"
Lastname input | data-test="checkoutLast"
Address input | data-test="checkoutAddress"
City input | data-test="checkoutCity"
Postal code | data-test="checkoutPostal"

#### Credit Card Form
Element          | Data attribute  
---------------- | ----------------
CC number input | data-test="checkoutInputCC"
Exp month dropdown | data-test="checkoutSelectExpMonth"
Exp year dropdown | data-test="checkoutSelectExpYr"
CC security code | data-test="checkoutInputCSV"
<br>
