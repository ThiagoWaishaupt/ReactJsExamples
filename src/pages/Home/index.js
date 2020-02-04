import React from "react";
import logo from "../../assets/images/logo.png";
import wild from "../../assets/images/wild.png";
import GreenButton from "../../components/GreenButton";
import NextPage from "../../components/NextPage";

import { Container, Header, Body } from "./styles";

export default function Home() {
    return (
        <>
            <NextPage next="/layout_2" back="/layout_5" />
            <Container>
                <Header>
                    <img src={logo} alt="Logo" height="80" width="80" />

                    <div>
                        <p>Resources</p>
                        <p>About</p>
                        <p>Features</p>
                        <p>Products</p>
                    </div>

                    <GreenButton textButton={"START NOW"} />
                </Header>
                <Body>
                    <div>
                        <h1>Green Energy Sustainability</h1>
                        <p>
                            Patented, high quality production propass and the
                            most modern manufacturing facility in the world we
                            are a qualified supplier of Green Energy.
                        </p>
                        <GreenButton textButton={"LEARN MORE"} />
                    </div>
                    <div>
                        <img src={wild} alt="Wild" height="550" width="550" />
                    </div>
                </Body>
            </Container>
        </>
    );
}
