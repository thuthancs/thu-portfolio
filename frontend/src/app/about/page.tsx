import Image from "next/image";
import face1 from "../../../public/about/face1.jpg";
import face2 from "../../../public/about/face2.jpg";
import face3 from "../../../public/about/face3.jpg";
import face4 from "../../../public/about/face4.jpg";
import face5 from "../../../public/about/face5.jpg";
import face6 from "../../../public/about/face6.jpg";
import face7 from "../../../public/about/face7.jpg";
import face8 from "../../../public/about/face8.jpg";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";

export default function AboutPage() {
    return (
        <>
            <Header />
            <section className="about">

                {/* --- LEFT COLUMN --- */}
                <div className="about__left">
                    <div className="about__sticker about__sticker--tl">
                        <div className="polaroid polaroid--tilt-left polaroid--caption-hover">
                            <div className="face-hover">
                                <Image src={face1} alt="Face 1" className="face face--default" />
                                <Image src={face5} alt="Face 1 Hover" className="face face--hover" />
                            </div>

                            <p className="polaroid__caption">
                                my fav cafes in sf are coffeeshop, saint frank.<br />
                                hot latte &gt;&gt;&gt;&gt;&gt;&gt; iced latte
                            </p>
                        </div>
                    </div>

                    <div className="about__sticker about__sticker--bl">
                        <div className="polaroid polaroid--tilt-right polaroid--caption-hover">
                            <div className="face-hover">
                                <Image src={face2} alt="Face 2" className="face face--default" />
                                <Image src={face6} alt="Face 2 Hover" className="face face--hover" />
                            </div>

                            <p className="polaroid__caption">
                                i can speak 3 accents in vietnamese :) <br />
                                and i love ocean vuong!
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- CENTER COLUMN --- */}
                <div className="about__center">
                    <div className="about__text">
                        <h1 className="about__headline">
                            about me
                        </h1>
                        <div>
                            <p>
                                i grew up in a <a href="https://www.google.com/search?q=dak+nong&oq=&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgoIARAuGLEDGIAEMgYIAhBFGDkyCggDEAAYsQMYgAQyCggEEAAYsQMYgAQyCggFEAAYsQMYgAQyBggGEEUYPDIGCAcQRRg80gEIMTA2M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8">small town</a> in the central highlands of vietnam.
                                currently, i’m based in san francisco, wrapping up my last semester of college and exploring the intersection of <span>data, <a href="https://thuinanutshell.notion.site/Late-Night-Design-With-Figma-2ec27ab8c7b880cb924ce30d88a74009">design</a> and software</span>.
                            </p>
                            <br></br>
                            <p>
                                i’m contributing to <a href="https://github.com/khoj-ai/openpaper">open paper</a> (⭐ 178) - a workbench for managing your research library. i like building <a href="https://github.com/thuthancs/github-pets">playful</a> <a href="https://github.com/thuthancs/github-colors">tools</a>, analyzing (fun) <span>data</span>, and <a href="https://github.com/thuinanutshell/benchmark-sorting-algorithms">benchmarking</a> stuff. i’m also building a series of technical deep dives on <span>reinforcement learning</span> algorithms in games.
                            </p>
                            <br></br>
                            <p>
                                i enjoy origami, <a href="https://www.instagram.com/divachefs/">cooking</a>, and coding algorithms from scratch :) in the next 3 years, i want to build tools and infrastructure for scientific discovery and for people to achieve their full creative potential!
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN --- */}
                <div className="about__right">
                    <div className="about__sticker about__sticker--tr">
                        <div className="polaroid polaroid--tilt-right polaroid--caption-hover">
                            <div className="face-hover">
                                <Image src={face3} alt="Face 3" className="face face--default" />
                                <Image src={face7} alt="Face 3 Hover" className="face face--hover" />
                            </div>
                            <p className="polaroid__caption">
                                i listen to olivia dean, adele, and viet indie bands
                            </p>
                        </div>
                    </div>

                    <div className="about__sticker about__sticker--br">
                        <div className="polaroid polaroid--tilt-left polaroid--caption-hover">
                            <div className="face-hover">
                                <Image src={face4} alt="Face 4" className="face face--default" />
                                <Image src={face8} alt="Face 4 Hover" className="face face--hover" />
                            </div>
                            <p className="polaroid__caption">
                                reading functional programming in scala. don’t ask me why :)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <MenuBar />
        </>
    );
}