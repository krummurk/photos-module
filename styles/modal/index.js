import styled from 'styled-components';


export const ModalDiv = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1001;
`;

export const ModalContent = styled.img`
  display: block;
  margin: 0px auto 0px auto;
  width: 590px;  
  height: 590px;
  object-fit: cover;
`;

export const ModalContentHolder = styled.div`
  display: block;
  margin: 30px auto 0px auto;
  width: 590px;  
  height: 590px;
`;

export const ModalFooter = styled.div`
  margin: 8px 0px;
`;

export const CloseBtn = styled.span`
  font-family: icons;
  display: inline;
  font-style: normal;
  font-weight: 200;
  font-variant: normal;
  color: #6f737b;
  float: right;
  padding: 25px;
  font-size: 50px;
`;

export const CircleHolder = styled.div`
  margin: 8px 6px 0px 0px;
  float: left;
`;

export const TextHolder = styled.div`
  float: left;
  padding: 8px 0px 0px 0px;
`;

export const Text = styled.div`
  display: block;
  padding: 4px 0px 0px 0px;
  margin: 8px 0px 0px 0px;
  color: white;
  font-size: 16px;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-weight: 500;
`;

export const DinedOn = styled.div`
  display: block;
  padding: 4px 0px 0px 0px;
  color: white;
  font-size: 16px;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-weight: 100;
`;

export const Circle = styled.p`
  margin: auto;
  width: 50px;
  height: 50px; 
  border-radius: 50%;
  border: 1px solid black;
  background: #56D7D9;
  color: white;
  font-family: arial;
  font-size: 15px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
`;

export const LeftArrow = styled.a`
  color: #91949a;
  font-size: 25px;
  position: relative;
  top: 50%;
  font-family: icons;
`;

export const RightArrow = styled.a`
  color: #91949a;
  font-size: 25px;
  position: relative;
  display: block;
  margin-right: auto;
  top: 50%;
  font-family: icons;
`;

export const RightArrowDiv = styled.div`
  margin: 30px 0px 30px 0px;
  width: 20px;
`;

export const FlagIcon = styled.svg`
  margin: 8px;
  color: white;
  font-family: BrandonText;
  float: right;
`;

export const OuterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 660px;
  height: 660px;
`;
