import React from "react";
import perfil1 from "../../assets/images/perfil1.jpg";
import perfil2 from "../../assets/images/perfil2.jpg";
import OrangeButton from "../../components/OrangeButton";
import { Container, Course1, Course2, Teacher } from "./styles";

export default function Courses() {
    return (
        <>
            <Container>
                <Course1>
                    <Teacher>
                        <img src={perfil1} alt="Teacher1" />
                        <div>
                            <strong>Dianne Edwards</strong>
                            <span>@dianned</span>
                        </div>
                        <OrangeButton text={"82 min"} />
                    </Teacher>
                    <span>
                        Learning how to create simple Swift applications in 8
                        leassons
                    </span>
                </Course1>
                <Course2>
                    <Teacher>
                        <img src={perfil2} alt="Teacher1" />
                        <div>
                            <strong>James Morrison</strong>
                            <span>@jamMori</span>
                        </div>
                        <OrangeButton text={"90 min"} />
                    </Teacher>
                    <span>
                        Best tips drawing some good thematic illustration
                    </span>
                </Course2>
            </Container>
        </>
    );
}
