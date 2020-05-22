// Login Page
export const APP_INIT = "APP_INIT";

// Login Page
export const HTTP_LOGIN_FETCHING = "HTTP_LOGIN_FETCHING";
export const HTTP_LOGIN_SUCCESS = "HTTP_LOGIN_SUCCESS";
export const HTTP_LOGIN_FAILED = "HTTP_LOGIN_FAILED";

// Register Page
export const HTTP_REGISTER_FETCHING = "HTTP_REGISTER_FETCHING";
export const HTTP_REGISTER_SUCCESS = "HTTP_REGISTER_SUCCESS";
export const HTTP_REGISTER_FAILED = "HTTP_REGISTER_FAILED";

// FindXYZ Page
export const HTTP_FINDXYZ_FETCHING = "HTTP_FINDXYZ_FETCHING";
export const HTTP_FINDXYZ_SUCCESS = "HTTP_FINDXYZ_SUCCESS";
export const HTTP_FINDXYZ_FAILED = "HTTP_FINDXYZ_FAILED";

// FindBC Page
export const HTTP_FINDBC_FETCHING = "HTTP_FINDXYZ_FETCHING";
export const HTTP_FINDBC_SUCCESS = "HTTP_FINDXYZ_SUCCESS";
export const HTTP_FINDBC_FAILED = "HTTP_FINDXYZ_FAILED";

// FindTheBestWay Page
export const HTTP_FINDTHEBESTWAY_FETCHING = "HTTP_FINDTHEBESTWAY_FETCHING";
export const HTTP_FINDTHEBESTWAY_SUCCESS = "HTTP_FINDTHEBESTWAY_SUCCESS";
export const HTTP_FINDTHEBESTWAY_FAILED = "HTTP_FINDTHEBESTWAY_FAILED";

export const SHOP_UPDATE_ORDER = "SHOP_UPDATE_ORDER";
export const SHOP_UPDATE_PAYMENT = "SHOP_UPDATE_PAYMENT";

// Error Code
export const E_PICKER_CANCELLED = 'E_PICKER_CANCELLED'
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR = 'E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR'
export const E_PERMISSION_MISSING = 'E_PERMISSION_MISSING'
export const E_PICKER_NO_CAMERA_PERMISSION = 'E_PICKER_NO_CAMERA_PERMISSION'
export const E_USER_CANCELLED = 'E_USER_CANCELLED'
export const E_UNKNOWN = 'E_UNKNOWN'
export const E_DEVELOPER_ERROR = 'E_DEVELOPER_ERROR'
export const TIMEOUT_NETWORK = 'ECONNABORTED' // request service timeout
export const NOT_CONNECT_NETWORK = 'NOT_CONNECT_NETWORK' 

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE = 'Cannot connect to server, Please try again.' 
export const NETWORK_TIMEOUT_MESSAGE = 'A network timeout has occurred, Please try again.'  
export const UPLOAD_PHOTO_FAIL_MESSAGE = 'An error has occurred. The photo was unable to upload.' 


export const apiUrl =  "http://localhost:9000";
export const imageUrl = "http://localhost:9000";

export const YES = 'YES'
export const NO = 'NO'
export const OK = 'ok'
export const NOK = 'nok'

export const GOOGLE_MAP_API_URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBq1zC7Zuy5PRBq3boANPCaHfU4yQC4-nA`

export const server = {    
    LOGIN_URL : `authen/login`,    
    REGISTER_URL : `authen/register`,  
    FINDXYZ_URL : `DOSCG/findXYZ`,    
    FINDBC_URL : `DOSCG/findBC`,
    FINDTHEBESTWAY_URL : `DOSCG/findTheBestWay`,
    PRODUCT_URL : `stock/product`,    
    TRANSACTION_URL : `transaction`,    
    REPORT_URL: `stock/report`,    
    LOGIN_PASSED : `yes`,
}

