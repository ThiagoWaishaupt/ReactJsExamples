import React from "react";
import perfil1 from "../../assets/images/perfil1.jpg";
import perfil2 from "../../assets/images/perfil2.jpg";

import { Container, Live1, Live2 } from "./styles";

export default function Lives() {
    return (
        <>
            <Container>
                <Live1>
                    <span>LIVE</span>
                    <img src={perfil1} alt="Teacher1" />
                </Live1>
                <Live2>
                    <span>LIVE</span>
                    <img src={perfil2} alt="Teacher2" />
                </Live2>
                <Live1>
                    <span>LIVE</span>
                    <img src={perfil1} alt="Teacher1" />
                </Live1>
                <Live2>
                    <span>LIVE</span>
                    <img src={perfil2} alt="Teacher2" />
                </Live2>
                <Live1>
                    <span>LIVE</span>
                    <img src={perfil1} alt="Teacher1" />
                </Live1>
                <Live2>
                    <span>LIVE</span>
                    <img src={perfil2} alt="Teacher2" />
                </Live2>
            </Container>
        </>
    );
}
