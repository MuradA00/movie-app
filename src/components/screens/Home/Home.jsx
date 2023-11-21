import Banner from "../../Banner/Banner";
import { connect } from "react-redux";
import Search from "../../Search/Search";

const Home = () => {

    const mapStateToProps = state => {
        console.log(mapStateToProps, state);

    }

    return (
        <main>
            <Search/>
            <Banner/>
        </main>
    )
}

export default Home;