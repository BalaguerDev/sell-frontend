import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #F4F6FF;
    --primary-color: #225282;
    --secondary-color: #9197B3;
    --terciary-color: #333;
    --hover-color: #a1b7cb;
    --icon-size: 24px;
  }
    
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: var(--background-color);    
    color: var(--terciary-color);
  }

  .page {
    padding: 20px;
    margin-left: ${(props) => (props.isSidebarOpen ? '240px' : '80px')}; 
    transition: margin-left 0.3s ease;
  }
`;

export default GlobalStyle;