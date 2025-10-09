import Company from "../components/Company"
import InformationBox from "../components/InformationBox"
import cooperationPng from "../assets/cooperationPng.png"
import brand from "../assets/brand.png"
import cooperationPngTwo from "../assets/cooperationPng2.png"


const AboutUs = () => {
    return (
        <main className="main">
            <Company revers={true}/>
            <section className="cooperation">
                <div className="container">
                    <InformationBox title="Сотрудничество" image={cooperationPng} revers={false} />
                </div>
            </section>
            <section className="brand">
                <div className="container">
                    <InformationBox title="О бренде" image={brand} revers={true} />
                </div>
            </section>
            <section className="cooperation">
                <div className="container">
                    <InformationBox title="Сотрудничество" image={cooperationPngTwo} revers={false} />
                </div>
            </section>
        </main>
    )
} 

export default AboutUs