import React from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function NextPage({ next, back }) {
    return (
        <Container>
            <Link to={back}>
                <FaArrowAltCircleLeft size={35} />
            </Link>
            <Link to={next}>
                <FaArrowAltCircleRight size={35} />
            </Link>
        </Container>
    );
}
