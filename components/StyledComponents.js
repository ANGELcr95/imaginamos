import styled from "styled-components"

export const ProductStyle = styled.div`
    box-shadow: 10px 10px 10px rgba(192, 192, 192, 0.2);
    background-color:white;
    border-radius:1.5rem;
    margin: 2.5rem auto;
    height: 6.3rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover,
    &:focus {
        background-color: rgb(252, 246, 160);
     
    }
    &:active {
    color: rgb(252, 246, 160);
  }
`
export const DivProduct = styled.div`
    background-color:white ;
    border:1px solid rgba(192, 192, 192, 0.4);
    border-radius:50%;
    margin: 0.2rem;
    &:hover,
    &:focus {
        border:none;
    }
`
export const ImgProduct = styled.img`
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
`
export const PProduct = styled.p`
    font-size:0.7rem;
`

export const DivImgFood = styled.div`
    border-radius:1rem;
    width: 30%;
    height:7rem;
    margin: 0.2rem;
    margin-bottom: 1rem;
    overflow: hidden;
    position: relative;
`

export const DivTimeFood = styled.div`
    border-radius:1rem;
    border-radius: 0 1rem 0 1rem;
    width: 4.5rem;
    height:1.8rem;
    background-color: rgb(224, 224, 224);
    position: absolute;
    bottom:0;
    text-align: center;
`
export const DivFoodName = styled.div`
    width: 30%;
    height:6rem;
    font-size: 1.1rem;
`

export const AmountFood = styled.div`
    width: 80%;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    margin: auto;
`

