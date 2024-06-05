import styled from "styled-components";

export const Card = styled.div`
background-color: var(--hardBlack);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
display: flex;

@media (max-width: 768px){
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;

}

`;

export const CardImage = styled.div`
margin-right: 1rem;
img{
    width: 390px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;

    @media (max-width: 768px){
        width: 100%;
        border-radius: 5px 5px 0 0;
    }
}

`;

export const CardContent = styled.div`
padding: 2rem;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const CardTitle = styled.div`
margin-bottom: 1rem;
`;

export const CardBottom = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;

export const CardIcons = styled.div`
display: flex;
align-items: center;
img{
    height: 20px;
    margin-right: 10px;
}
`;

export const CardLink = styled.div`
display: flex;
align-items: center;
a{
    margin-right: 0.5rem;
    img{
        height: 20px;
    }
}
`;