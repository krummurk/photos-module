import styled from 'styled-components';


export const PhotoContainer = styled.div`
  overflow: hidden;
  margin-left: 0;
  margin-right: 0;
  border: 2px black solid;
  height: 288px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1fr 142px 2fr 288px 1fr 142px 2fr 288px 1fr 142px 2fr 288px 1fr 142px 2fr 288px 1fr 142px 2fr 288px);
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "one three three four six six seven nine nine ten twelve twelve" "two three three five six six eight nine nine eleven twelve twelve";
`;

export const One = styled.img`
  grid-area: one; 
  border: 2px black solid;
  height: 142px;
  width: 142px;
  object-fit: cover;
`;

export const Two = styled.img`
  grid-area: two; 
  border: 2px black solid;
  height: 142px;
  width: 142px;
  object-fit: cover;
`;

export const Three = styled.img`
  grid-area: three; 
  border: 2px black solid;
  height: 288px;
  width: 288px;
  object-fit: cover;
`;

export const Four = styled.img`
grid-area: four; 
border: 2px black solid;
height: 142px;
width: 142px;
object-fit: cover;
`;

export const Five = styled.img`
  object-fit: cover; 
  grid-area: five; 
  border: 2px black solid;
  height: 142px;
  width: 142px;
`;

export const Six = styled.img`
  object-fit: cover; 
  grid-area: six; 
  border: 2px black solid;
  height: 288px;
  width: 288px;
`;

export const Seven = styled.img`
  object-fit: cover; 
  grid-area: seven; 
  border: 2px black solid;
  height: 142px;
  width: 142px;
`;

export const Eight = styled.img`
  object-fit: cover; 
  grid-area: eight; 
  border: 2px black solid;
  height: 142px;
  width: 142px;
`;

export const Nine = styled.img`
  object-fit: cover; 
  grid-area: nine; 
  height: 288px;
  width: 288px;
  border: 2px black solid;
`;

export const Ten = styled.img`
  object-fit: cover; 
  grid-area: ten; 
  border: 2px black solid;
  height: 142px;
  width: 142px;
`;

export const Eleven = styled.img`
  object-fit: cover; 
  grid-area: eleven; 
  border: 2px black solid;
  height: 142px;
  width: 142px;
`;

export const Twelve = styled.img`
  object-fit: cover; 
  grid-area: twelve; 
  height: 288px;
  width: 288px;
  border: 2px black solid;
`;
