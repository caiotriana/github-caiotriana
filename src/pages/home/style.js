import styled, {keyframes} from 'styled-components';

import theme from '../../theme'


const inHorizontal = keyframes`
  from {
    opacity : 0;
    transform : translateX(30px);
  }

  to {
    opacity : 1;
    transform : translateX(0px);
  }
`;

const outHorizontal = keyframes`
  from {
    opacity : 1;
    transform : translateX(0px);
  }

  to {
    opacity : 0;
    transform : translateX(30px);
  }
`;


const Header = styled.header`
  padding : 0px 24px;
  height : 80px;
  border-bottom : .2px solid #EAEAEA; 
  z-index : 99;
  position : relative;
  display : flex;
  justify-content : center;

  .Header { 
    &-content { 
      display : flex;
      justify-content : space-between;
      align-items : center;
      height : 100%;
      width : 100%;
      max-width : 978px;

      &-left { 
        p { 
          font-family : ${theme.fontFamily};
          font-weight: 300;
          font-size : 32px;
        }
      }
      &-right {
          display : flex;

          &-button { 
            color : ${theme.neutralDarkestColor};
            text-decoration : none;
            cursor : pointer;
            user-select: none;
          }

        &-menu { 
          display : flex;
          opacity : 0;
          &-isOpen { 
            animation : ${inHorizontal} 400ms;
            opacity : 1;
          }
          &-isClose { 
            animation : ${outHorizontal} 400ms;
            opacity : 0;
          }

          li { 
            margin : 0 8px;
            a { 
              font-family : ${theme.fontFamily};
              font-weight : 300;
              font-size : 20px;
              color : ${theme.neutralDarkestColor};
              text-decoration : none;
            }
          }
        }
      }
    }
  }
`

const Homepage = styled.section`
  height : calc(100vh - 80px);
  background-image : url(${ props => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y : center;
  display : flex;
  align-items : center;
  justify-content : center;

  &::after { 
    position : absolute;
    content : '';
    width : 100%;
    height : 100%;
    top : 0;
    right: 0;
  }
  .Homepage { 
    &-content {
      
      
    }
  }
`

export { 
    Homepage,
    Header
}