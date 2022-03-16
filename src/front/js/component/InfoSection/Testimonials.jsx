import React from 'react'
import styled from "styled-components";
import { Container } from 'react-bootstrap';

export default function Testimonials() {
    return (
    <Container>
      <Section id="testimonials">
        <div className="title">
          <h2>Nuestros Testimonios</h2>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              "Desde que empece con Raj mi vida cambio"
            </p>
            <div className="info">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" />
              <div className="details">
                <h4>Pedro Luis</h4>
                <span>reseña de google</span>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              "No tenia fe en ella me sorprendio gratamente"
            </p>
            <div className="info">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" />
              <div className="details">
                <h4>teresa perez</h4>
                <span>reseña de google</span>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              "Asusta el cambio, pero es necesario"
            </p>
            <div className="info">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" />
              <div className="details">
              <h4>Miguel Luis</h4>
                <span>reseña de google</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
    );
  }
  
  const Section = styled.section`
    margin: 5rem 0;
    .title {
      text-align: center;
      margin-bottom: 2rem;
    }
    .testimonials {
      display: flex;
      justify-content: center;
      margin: 0 2rem;
      gap: 2rem;
      .testimonial {
        background-color: aliceblue;
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transition: 0.3s ease-in-out;
        &:hover {
          transform: translateX(0.4rem) translateY(-1rem);
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        .info {
          display: flex;
          justify-content: center;
          gap: 1rem;
          align-items: center;
          margin-top: 1rem;
          img {
            border-radius: 3rem;
            height: 3rem;
          }
          .details {
            span {
              font-size: 0.9rem;
            }
          }
        }
      }
    }
    @media screen and (min-width: 280px) and (max-width: 768px) {
      .testimonials {
        flex-direction: column;
        margin: 0;
        .testimonial {
          justify-content: center;
          .info {
            flex-direction: column;
            justify-content: center;
          }
        }
      }
    }
  `;
