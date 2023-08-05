import React from "react";
import TodayHeader from "../component/Today/TodayHeader";
import TodayNav from "../component/Today/TodayNav";
import CalendarNav from "../component/CalendarNav";
import CalendarComponent from "../component/CalendarComponent";
import styled from 'styled-components';
import { Container } from "postcss";
function Dosomething() {
    const Container = styled.div`
        width: 360px;
        margin: 0 auto;
        position: relative;
        `;
    return (
        <>
        <Container>
            <TodayHeader />
            <TodayNav />
            <CalendarNav />
            <CalendarComponent />
        </Container>
        </>
    )
}

export default Dosomething;