import React, {useState} from "react";
import styled from 'styled-components';

const ElementData = ({icon, title, description, time, alert="false", showText=true}) => {
    const Block = styled.li`
        border: none;
        background: none;
        padding: 0px;
        list-style: none;
        margin: 0.5rem;
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
            { showText &&
            <>
            <p className="elemenTtitle">{title}</p>
            <p className="elemenTdata">
                {time} - <span>{description}</span>
            </p>
            </>
            }
        </Block>
    );
};

export default ElementData;
