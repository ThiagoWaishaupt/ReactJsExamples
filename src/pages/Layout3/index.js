import React from "react";
import NextPage from "../../components/NextPage";
import { Container, Body, Header } from "./styles";
import logoConfitec from "../../assets/images/logoConfitec.png";
import bear from "../../assets/images/bear2.png";

export default function Layout3() {
    return (
        <>
            <NextPage next="/layout_4" back="/layout_2" />
            <Container>
                <Header>
                    <div>
                        <img src={logoConfitec} alt="LogoConfitec" width={90} />
                        <p>Products</p>
                        <p>Developers</p>
                        <p>Company</p>
                        <p>Pricing</p>
                    </div>
                    <div>
                        <span>Support</span>
                        <button>Sign In</button>
                    </div>
                </Header>
                <Body>
                    <div>
                        <h1>The New Standard In Online Payments</h1>
                        <p>
                            Confitec Montain is the best software platform for
                            running an internet business.
                        </p>
                        <button>Start Now</button>
                        <button>Contact Sales</button>
                    </div>

                    <div>
                        <img src={bear} alt="Urso" width={500} />
                    </div>
                </Body>
            </Container>
        </>
    );
}
