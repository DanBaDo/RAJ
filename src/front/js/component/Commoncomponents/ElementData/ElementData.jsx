import React from "react";
import styled from 'styled-components';

const ElementData = ({icon, title, description, time, alert="false"}) => {
    const Block = styled.li`
        border: none;
        background: none;
        padding: 0.5rem;
        list-style: none;
        margin: 0.5rem;
        width: 25rem;
        & > img {
            height: 4rem;
            float: left;
            margin: 0.5rem;
        }
        & > p {
            text-align: left;
            margin-left: 5.5rem;
            margin-bottom: 0rem;
        }
        & > p.elemenTtitle {
            font-size: 2rem;
        }
        & > p.elemenTdata {
            font-size: 1rem;
        }
        & > p.elemenTdata > span {
            color: var(${alert === "true" ? "--warning-color" : "--info-color"});
        }
    `
    return (
        <Block>
            <img src={icon} alt="Icon" />
            <p className="elemenTtitle">{title}</p>
            <p className="elemenTdata">
                <span>{description}</span> - {time}
            </p>
        </Block>
    );
};

export default ElementData;
