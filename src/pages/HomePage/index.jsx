import Navbar from "../../components/Navbar/index.jsx";
import Line from "../../components/Line/index.jsx";
import SearchInput from "../../components/SearchInput/index.jsx";
import Title from "../../components/Title/index.jsx";
import CardWrapper from "../../components/CardWrapper/index.jsx";

function HomePage() {

    return (
        <section id={"homePage"}>
            <Navbar/>
            <Line/>
            <Line/>
            <SearchInput/>
            <Title title={"Vakansiyalar"}/>
            <CardWrapper/>
        </section>
    );
}

export default HomePage;