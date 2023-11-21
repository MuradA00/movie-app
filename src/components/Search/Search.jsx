import { display } from "../../store/searchSlice";
import { searchIcon } from "../../variables/images";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {

    const displayState = useSelector((state) => state.displaySearch.isHidden); 
    const dispatch = useDispatch();
    
    const handleDisplay = () => {
        dispatch(display(true));
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') dispatch(display(true)); 
    })

    return (
        <div className={`fixed top-0 left-0 bg-[rgba(0,0,0,0.75)] w-full h-full z-10 flex justify-center items-center ${displayState ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`} style={{transition: 'all 300ms ease'}}>
            <div className="w-full min-h-[400px] max-w-[700px] relative flex justify-center items-center">
                <button className="absolute right-0 top-4" onClick={handleDisplay}>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 320.591 320.591" xmlSpace="preserve"><g><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" fill="#fff" opacity="1"></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" fill="#fff" opacity="1" ></path></g></svg>
                </button>
                <div style={{transition: 'all 300ms ease 300ms'}} className={`relative w-full ${displayState ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                    <input type="search" placeholder="Enter a movie" className="w-full rounded-sm min-h-[48px] bg-white font-medium px-4 outline-none"/>
                    <button className="absolute right-4 top-1/2 -translate-y-1/2">
                        <img src={searchIcon} className="block w-5 h-5" alt="searchIcon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search;