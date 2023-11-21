// import { headerLogo } from "../../variables/images";
import { Link } from "react-router-dom";
import { headerLogo } from "../../variables/images";
import { useDispatch } from "react-redux";
import { display } from "../../store/searchSlice";

const Header = () => {

    const dispatch = useDispatch();

    const handleDisplay = () => {
        dispatch(display(false));
    }

    return (
        <header className="absolute top-0 left-0 w-full py-4 bg-headerGradient">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to={'/'}>
                            <img src={headerLogo} alt="" />
                        </Link>
                    </div>
                    <div>
                        <button onClick={handleDisplay}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_5_403)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_5_403">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
