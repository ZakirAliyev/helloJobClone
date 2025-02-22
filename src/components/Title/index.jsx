import './index.scss'

function Title({title}) {
    return (
        <section id={"title"}>
            <div className={"container"}>
                <div className={"wrapper"}>
                    <div className={"line"}></div>
                    <div className={"text"}>
                        {title}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Title;