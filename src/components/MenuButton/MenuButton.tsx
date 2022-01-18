import styled from '@emotion/styled';

type MenuButtonProps = {
  open: boolean;
  onClick: () => void;
};

const MenuButton = ({ open, onClick }: MenuButtonProps) => {
  return (
    <Button
      onClick={onClick}
      style={{
        animation: open
          ? '1s rotate-button forwards'
          : '1s reverse-rotate-button forwards',
      }}
    >
      <TopLine
        style={{
          animation: open
            ? '.5s rotate-line-2 .7s forwards'
            : '1s reverse-rotate-line-2 forwards',
        }}
      />
      <BottomLine
        style={{
          animation: open
            ? '.5s rotate-line-1 .7s forwards'
            : '1s reverse-rotate-line-1 forwards',
        }}
      />
      <CenterLine
        style={{
          animation: open
            ? '.5s narrow-line-3 .7s forwards'
            : '1s wide-line-3 forwards',
        }}
      />
    </Button>
  );
};

const Button = styled.button`
  position: relative;
  border: 0;
  background: transparent;
  width: 30px;
  height: 30px;
  cursor: pointer;
  padding: 0;

  @keyframes rotate-button {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes reverse-rotate-button {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(-360deg);
    }
  }
`;

const TopLine = styled.div`
  height: 2px;
  background-color: #000;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(calc(-50% - 10px)) rotate(0);

  @keyframes rotate-line-2 {
    from {
      transform: translateY(calc(-50% - 10px)) rotate(0);
    }

    to {
      transform: translateY(-50%) rotate(-45deg);
    }
  }

  @keyframes reverse-rotate-line-2 {
    from {
      transform: translateY(-50%) rotate(-45deg);
    }

    to {
      transform: translateY(calc(-50% - 10px)) rotate(0);
    }
  }
`;

const BottomLine = styled.div`
  height: 2px;
  background-color: #000;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(calc(-50% + 10px)) rotate(0);

  @keyframes rotate-line-1 {
    from {
      transform: translateY(calc(-50% + 10px)) rotate(0);
    }

    to {
      transform: translateY(-50%) rotate(45deg);
    }
  }

  @keyframes reverse-rotate-line-1 {
    from {
      transform: translateY(-50%) rotate(45deg);
    }

    to {
      transform: translateY(calc(-50% + 10px)) rotate(0);
    }
  }
`;

const CenterLine = styled.div`
  height: 2px;
  background-color: #000;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scaleX(1);

  @keyframes narrow-line-3 {
    from {
      transform: translateY(-50%) scaleX(1);
    }

    to {
      transform: translateY(-50%) scaleX(0);
    }
  }

  @keyframes wide-line-3 {
    from {
      transform: translateY(-50%) scaleX(0);
    }

    to {
      transform: translateY(-50%) scaleX(1);
    }
  }
`;

export default MenuButton;
