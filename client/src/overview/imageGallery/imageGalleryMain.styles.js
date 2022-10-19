/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MainImage = styled.section`

position: relative;

@media only screen and (max-width: 601px) {
  height: 300px;
  width: 300px;
  margin: auto;
  transition: all .7s;
}

 height: 700px;
 width: 700px;

  .mag {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 40px;
    z-index: 20;
    color: white;
  }

 .mainPhoto {
    object-fit: cover;
    height: 100%;
    width: 100%;
    object-position: 100% 0px;
    border-radius: 6px;
  }
  .mainPhoto:hover {
    height: 150%;
    width: 150%;
    position: relative;
    z-index: 10;
    .mag {

    }
  }
`;
