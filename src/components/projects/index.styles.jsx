import styled from "styled-components";

export const ProjectsContainer = styled.section`
min-height: 100vh;
padding: 1rem;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

span{
    color: var(--green);
}

h1{
    font-size: 2.5rem;
    margin-bottom: 20px;
    width: 100%;
    text-align: left;
}
`;

export const ProjectsContent = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;
max-width: 1200px;
`;

