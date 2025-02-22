import './index.scss'
import {AiOutlineEye} from "react-icons/ai";
import {IoIosCalendar, IoMdHeartEmpty} from "react-icons/io";

function Card() {
    return (
        <section id={"card"}>
            <div className={"left"}>
                <img
                    src={"https://www.hellojob.az/uploads/stores/2024/09/10/atb-bank-stores-66e0996c99a62-681bfc590cf1056ed51897169c162a0766e0996c99a6d-kcXblJxl6xH1l-r.jpg-100-100.webp"}
                    alt={"Image"}/>
                <div className={"info"}>
                    <h3>Tele Satış Operatoru</h3>
                    <p>HuCap Consulting</p>
                    <div className={"iconWrapper"}>
                        <IoIosCalendar className={"icon"}/>
                        <span>12 Fev</span>
                        <AiOutlineEye className={"icon"}/>
                        <span>4524</span>
                    </div>
                </div>
            </div>
            <div className={"right"}>
                <div className={"top"}>
                    <div className={"heart"}><IoMdHeartEmpty/></div>
                    <div className={"premium"}>Premium</div>
                </div>
                <div className={"bottom"}>
                    700 - 1000 AZN
                </div>
            </div>
        </section>
    );
}

export default Card;