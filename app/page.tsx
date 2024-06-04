import type {Metadata} from "next";
import Link from "next/link";
import data from "./blog/data";
import Page from "./components/Page";
import Czech from "./components/Czech";
import TypingAnimation from "./components/TypingAnimation";

export const metadata: Metadata = {
    title: "Tomáš Wróbel | Domů",
    description: "Jsem student, který má potenciál jak na právníka, tak programátora. Vytvářím webové stránky a aplikace, zároveň se snažím bojovat za svá práva."
};

export default async function Home() {
    return (
        <Page current="root">
            <section className="pp-section pp-scrollable">
                <div className="home-banner">
                    <div className="container">
                        <div className="row full-screen align-items-center">
                            <div className="col-lg-6">
                                <div className="type-box">
                                    <h6>Zdraví vás</h6>
                                    <h1>Tomáš Wróbel</h1>
                                    <p className="lead">
                                        Věnuji se <TypingAnimation strings={["webovému vývoji", "studiu", "právním bojům"]} />
                                    </p>
                                    <p className="desc">
                                        Student, který se věnuje vývoji webových
                                        aplikací. Zároveň se právně pře
                                        s mnoha institucemi a organizacemi.
                                        Právník či vývojář? Proč ne obojí?
                                    </p>
                                    <div className="btn-bar">
                                        <Link
                                            className="px-btn px-btn-theme"
                                            href="/certificates"
                                        >
                                            Prohlédnout si certifikáty
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hb-img">
                                    <img src="/img/intro.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="pp-section pp-scrollable">
                <div className="container">
                    <div className="title">
                        <h3>O mně</h3>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 m-15px-tb">
                            <div className="about-me">
                                <div className="img">
                                    <div className="img-in">
                                        <img src="/img/code.png" title="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 m-15px-tb">
                            <div className="about-info">
                                <div className="about-text">
                                    <h3>Úžasný programátor</h3>
                                    <p>
                                        Hello World v Javě jsem napsal, když mi bylo 11.
                                        Již ve 12 jsem přičichl k <a href="/certificates/html/doc.pdf">webu</a>.
                                        Dnes vyvíjím open-source webové nebo Flutter aplikace, přičemž
                                        tento web je <a href="https://github.com/tomas-wrobel/website">jednou z nich</a>.
                                        Aktuálně studuji na Wichterlově gymnáziu.
                                    </p>
                                    <br />
                                    <h3>Právně posedlý?</h3>
                                    <p>
                                        Podal jsem jen tři stížnosti a jedno trestní oznámení, ale to
                                        jen pro to, že jsem nechtěl začít soudní spor s nemocnicí. Nechávám tedy
                                        na České republice, aby pomohla. Pokud ne, obrátím se na Evropský soud pro lidská práva.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="fights" className="pp-section pp-scrollable">
                <div className="container">
                    <div className="title">
                        <h3>Právní boje</h3>
                    </div>
                    <div className="resume-box">
                        <div className="resume-row">
                            <div className="row">
                                <div className="col-sm-3 col-md-3 col-xl-2">
                                    <div className="rb-left">
                                        <img src="/fights/ddhavirov.jpg" title="" alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-9 col-md-9 col-xl-10">
                                    <input type="checkbox" aria-hidden name="mobile" id="ddhavirov" />
                                    <div className="rb-right">
                                        <h6>Dětský domov Havířov</h6>
                                        <span>Dítě | Veřejný ochránce práv | 17. 2. 2023</span>
                                        <label htmlFor="ddhavirov">Pochybení zjištěno</label>
                                        <p>
                                            Proti dětskému domovu jsem brojil poté, co
                                            jsem se nedovolal pomoci. Nelíbilo se mi,
                                            že do chlapecké sprchy mohou i dívky
                                            a že sprchy se nedají zamykat. Také, že
                                            jsem první měsíc nemohl ven. Veřejný
                                            ochránce práv tyto body uznal. Ředitelka
                                            dětského domova obratem chyby uznala
                                            a napravila je.
                                            Zprávu o šetření lze nalézt na <a href="https://deti.ochrance.cz/aktualne/prispeli_jsme_ke_zruseni_plosnych_zakazu_vychazek_v_detskem_domove/" target="_blank">stránkách ombudsmana</a> nebo <a href="/fights/ddhavirov.pdf" target="_blank">zde</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="resume-row">
                            <div className="row">
                                <div className="col-sm-3 col-md-3 col-xl-2">
                                    <div className="rb-left">
                                        <img src="/fights/nemhav.svg" title="" alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-9 col-md-9 col-xl-10">
                                    <input type="checkbox" aria-hidden name="mobile" id="nemhav" />
                                    <div className="rb-right">
                                        <h6>Nemocnice Havířov</h6>
                                        <span>Stěžovatel | Nemocnice Havířov | Krajský úřad Moravskoslezského kraje | 15. 4. 2023</span>
                                        <label htmlFor="nemhav">Důvodné</label>
                                        <p>
                                            Psychiatrii jsem vytkl, že mě opakovaně bez
                                            mého souhlasu hospitalizovala. Jen kvůli tvrzením
                                            dětského domova, které nebyly pravdivé. Ohradil jsem se
                                            proti šestidennímu připoutání k lůžku kvůli
                                            mému pokusu o útěk (z ilegální hospitalizace).
                                            Nemocnice se za pozdní hlášení soudu v jednom
                                            případě omluvila, v dalším případě, kdy soud
                                            ani nekontaktovala, nesdělila své stanovisko.
                                            Krajský úřad Moravskoslezského kraje nad to
                                            uznal, že o omezovacích prostředcích nevěděl
                                            soud, ale uzavřel, že to bylo medicínsky v pořádku.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="resume-row">
                            <div className="row">
                                <div className="col-sm-3 col-md-3 col-xl-2">
                                    <div className="rb-left">
                                        <img src="/fights/msk.svg" title="" alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-9 col-md-9 col-xl-10">
                                    <input type="checkbox" aria-hidden name="mobile" id="msk" />
                                    <div className="rb-right">
                                        <h6>Krajský úřad <br />Moravskoslezského kraje</h6>
                                        <span>Stěžovatel | Veřejný ochránce práv | 13. 10. 2023</span>
                                        <label htmlFor="msk">Pochybení zjištěno</label>
                                        <p>
                                            Nesouhlasil jsem, jak Krajský úřad stížnost na
                                            nemocnici vyřídil. Trval jsem, že hospitalizace
                                            byly výslovně nezákonné a omezovací prostředky
                                            neměly ani důvod (tedy nebyly ani medicínsky v pořádku).
                                            Veřejný ochránce práv nezákonnost uznal, ale důvod ponechal
                                            nepřezkoumatelný (tvrzení × tvrzení). To ale nic
                                            nemění na tom, že jsem byl připoutaný příliš dlouho
                                            a důvody (pokud byly) mezitím prokazatelně pominuly.
                                            Zprávu o šetření lze nalézt <a href="/fights/nemhav.pdf" target="_blank">zde</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="resume-row">
                            <div className="row">
                                <div className="col-sm-3 col-md-3 col-xl-2">
                                    <div className="rb-left">
                                        <Czech />
                                    </div>
                                </div>
                                <div className="col-sm-9 col-md-9 col-xl-10">
                                    <input type="checkbox" aria-hidden name="mobile" id="mmo" />
                                    <div className="rb-right">
                                        <h6>Soudní řízení o péči &ndash; <br />přemístění v rámci nařízené ústavní výchovy</h6>
                                        <span>Nezletilý | Okresní soud v Ostravě | 13. 12. 2023</span>
                                        <label htmlFor="mmo">Jednání odvoláno</label>
                                        <p>
                                            Magistrát města Ostravy vyhodnotil ze závěru Nemocnice Havířov,
                                            faktu, že si stěžuji na dětský domov jakožto i jiných názorů,
                                            že bude nejlepší, když půjdu do výchovného ústavu. Podal návrh soudu;
                                            ten zatím nerozhodl, ale jiný návrh (totožného požadavku) soud již dne
                                            16. 3. 2023 zamítl. Tento návrh však má od počátku velký potenciál,
                                            protože má mnoho argumentů, které se mi nepodaří vyvrátit (byť přímo
                                            neodůvodňují výchovný ústav, upozornila moje kolizní opatrovnice).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="resume-row">
                            <div className="row">
                                <div className="col-sm-3 col-md-3 col-xl-2">
                                    <div className="rb-left">
                                        <Czech />
                                    </div>
                                </div>
                                <div className="col-sm-9 col-md-9 col-xl-10">
                                    <input type="checkbox" aria-hidden name="mobile" id="__" />
                                    <div className="rb-right">
                                        <h6>Soudní řízení o péči &ndash; <br />přiznání svéprávnosti</h6>
                                        <span>Navrhovatel | Okresní soud v Ostravě | Krajský soud v Ostravě | 28. 12. 2023</span>
                                        <label htmlFor="__">Jednání odvoláno</label>
                                        <p>
                                            Za účelem získat výhodu časovou i argumentační jsem podal
                                            jediný typ soudního návrhu, který mi zákon jako nezletilému
                                            v dané situaci umožňoval &ndash; přiznání svéprávnosti (zplnoletnění).
                                            Plán fungoval více než skvěle. Soud totiž řízení o péči spojil.
                                            A jednání bylo díky zahlcení soudu, kterému jsem nemálo přispěl, nařízeno až na 14. května
                                            (více než půl roku po podání návrhu magistrátem). Nad to jsem shledal závažnou chybu
                                            v usnesení o ustanovení opatrovníka, proti kterému jsem se odvolal. (Soud mi totiž opatrovníka
                                            jmenovat ani neměl.) Jednání na okresním soudu se nemohlo konat (okresní soud nestihl odeslat spis),
                                            ale Krajský soud v Ostravě dne 27. 5. 2024 odvolání vyhověl a věc vrátil k novému projednání.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="blog" className="pp-section pp-scrollable section">
                <div className="container">
                    <div className="title">
                        <h3>Blog</h3>
                    </div>
                    <div className="row">
                        {(await data()).slice(0, 4).map((blog) => (
                            <div className="col-md-6 m-15px-tb" key={blog.id}>
                                <div className="blog-grid">
                                    <div className="blog-img">
                                        <Link href={blog.url}>
                                            <img src={blog.img} title="" alt="" loading="lazy" />
                                        </Link>
                                    </div>
                                    <div className="blog-info">
                                        <div className="meta">{new Date(blog.date).toLocaleDateString("cs")}</div>
                                        <h6>
                                            <Link href={blog.url}>
                                                {blog.name}
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-12 read-more-blog text-center">
                            <Link href="/blog" className="px-btn px-btn-theme">
                                Zobrazit vše
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="pp-section pp-scrollable">
                <div className="container">
                    <div className="title">
                        <h3>Co zvládám?</h3>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 m-15px-tb">
                            <div className="feature-box-01 media">
                                <i className="icon theme-bg icon-mobile" />
                                <div className="feature-content media-body">
                                    <h5>Responzivní design</h5>
                                    <p>
                                        Webové stránky, které vytvořím, budou vypadat
                                        dobře na všech zařízeních. Od mobilu až po
                                        počítač. Nad to nenadužívám JavaScript,
                                        protože nemusím.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 m-15px-tb">
                            <div className="feature-box-01 media">
                                <i className="icon theme-bg icon-global" />
                                <div className="feature-content media-body">
                                    <h5>Webový vývoj</h5>
                                    <p>
                                        Vedle webů, tvořím zejména webové aplikace.
                                        Ty často fungují offline a vždy používají
                                        nejmodernější technologie. V tomto ohledu nedoporučuji Firefox.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 m-15px-tb">
                            <div className="feature-box-01 media">
                                <i className="icon theme-bg  icon-genius" />
                                <div className="feature-content media-body">
                                    <h5>React.js</h5>
                                    <p>
                                        Mnoho firem využívá React. Znám ho velmi
                                        ho dobře a tento web je na něm postavený. Zároveň
                                        se však nevyskytuje ve všech projektech, například
                                        není ve <Link href="/blog/scrap.mdx">Scrapu</Link>,
                                        i když Scratch ho používá. Jde to i bez Reactu.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 m-15px-tb">
                            <div className="feature-box-01 media">
                                <i className="icon theme-bg icon-shield" />
                                <div className="feature-content media-body">
                                    <h5>Bráním se</h5>
                                    <p>
                                        Sem tam, čas od času, jsem nucen podat
                                        stížnost proti úřadům, odvolat se na
                                        krajský soud, nebo podat trestní oznámení.
                                        V mém životě zastává právo klíčovou roli,
                                        protože jsem odjakživa v náhradní rodinné péči.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="contactus"
                className="pp-section pp-scrollable section dark-bg"
            >
                <div className="container">
                    <div className="title">
                        <h3>Kontaktujte mě</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-xl-4 m-15px-tb">
                            <div className="contact-info">
                                <h4>Copak máte na srdíčku?</h4>
                                <p>
                                    Pokud máte nějaký dotaz, nebo byste chtěli
                                    něco říct, neváhejte mě kontaktovat. Jsem
                                    k dispozici na e-mailu nebo využijte formulář.
                                </p>
                                <ul>
                                    <li className="media">
                                        <i className="fas fa-map" />
                                        <span className="media-body">
                                            Ostrava / Havířov, Moravskoslezský kraj
                                        </span>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-envelope" />
                                        <span className="media-body">
                                            tomas.wrobel@email.cz
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 col-xl-8 m-15px-tb">
                            <div className="contact-form">
                                <h4>Něco...</h4>
                                <form
                                    id="contact-form"
                                    action="https://api.web3forms.com/submit"
                                    method="POST"
                                >
                                    <input
                                        type="hidden"
                                        name="access_key"
                                        value="2da01f10-3b5a-4781-8a5c-30bed0d194b8"
                                    />
                                    <input
                                        type="hidden"
                                        name="redirect"
                                        value="https://web3forms.com/success"
                                    />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    name="name"
                                                    id="name"
                                                    placeholder="Jméno *"
                                                    className="form-control"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    name="email"
                                                    id="email"
                                                    placeholder="E-mail *"
                                                    className="form-control"
                                                    type="email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Předmět *"
                                                    className="form-control"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    placeholder="Zpráva *"
                                                    rows={5}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="send">
                                                <input
                                                    className="px-btn px-btn-theme"
                                                    type="submit"
                                                    value="Odeslat zprávu"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Page>
    );
}
