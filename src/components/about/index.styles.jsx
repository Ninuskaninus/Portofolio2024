import styled from "styled-components";

export const AboutContainer = styled.section`
margin-top; 80px;
padding: 20px;
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 80px;
`;

export const AboutContent = styled.div`
width: 100%;
max-width: 1200px;
`;

export const AboutHead = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

h1{
  font-size: 2.5rem;
  font-weight: 600;

  span{
    color: var(--green);
  }
}

img{
  height: 160px;
  margin-right: 20px;

  @media (max-width: 543px){
    display: none;
  }
}
`;

export const AboutBody = styled.div`
background-color: var(--hardBlack);
padding: 20px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const AboutIcons = styled.div`
padding: 20px 0;

div{
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  img{
    height: 20px;
  }
}
`;

export const AboutContact = styled.div`
padding: 20px 0;
display: flex;
flex-direction: column;
gap: 20px;
div{
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  img{
    height: 20px;
    margin-right: 10px;
  }
}
`;