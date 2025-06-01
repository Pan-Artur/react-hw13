import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  & > div {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    & > div:first-child {
      display: flex;
      position: relative;
      align-items: center;
      margin-bottom: 20px;

      svg {
        font-size: 24px;
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
        color: #666;
        
        &:hover {
          color: #333;
        }
      }

      h2 {
        margin-left: auto;
        margin-right: auto;
        font-size: 1.5rem;
      }
    }

    form {
      & > div {
        margin-bottom: 15px;

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
        }

        input, textarea {
          width: 90%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }

        textarea {
          min-height: 100px;
          resize: none;
        }
      }

      button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        width: 100%;
        
        &:hover {
          background-color: #45a049;
        }
      }
    }
  }
`;
