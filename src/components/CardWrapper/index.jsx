import './index.scss'
import Card from "../Card/index.jsx";
import MiniCard from "../MiniCard/index.jsx";

function CardWrapper() {

    const cardArr = new Array(12).fill(0)

    return (
        <section id={"cardWrapper"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-8"}>
                        {cardArr && cardArr.map((item, index) => (
                            <div className={"p-0-16-0-0 col-12"} key={index}>
                                <Card key={index}/>
                            </div>
                        ))}
                    </div>
                    <div className={"p-0-0-0-16 col-4"}>
                        <img
                            src={"https://www.hellojob.az/uploads/banners/2024/08/13/kbig1x1-banner-66bb93aa53a04-139bbfaed1695eedcfdd90c53543a80866bb93aa53a14-7olx7Ss4X6l1-UI.jpg"}
                            alt={"Image"}/>
                        {cardArr && cardArr.map((item, index) => (
                            <div className={"col-12"} key={index}>
                                <MiniCard key={index}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardWrapper;