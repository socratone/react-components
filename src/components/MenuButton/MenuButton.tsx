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
        animation: open ? '1s rotate-button forwards' : undefined,
      }}
    >
      <TopLine
        style={{
          animation: open ? '.5s rotate-line-2 .8s forwards' : undefined,
        }}
      />
      <BottomLine
        style={{
          animation: open ? '.5s rotate-line-1 .8s forwards' : undefined,
        }}
      />
      <CenterLine
        style={{
          animation: open ? '.5s wide-line-3 .8s forwards' : undefined,
        }}
      />
    </Button>
  );
};

const Button = styled.button`
  position: relative;
  border: 0;
  background: transparent;
  background-color: plum;
  width: 100px;
  height: 100px;
  cursor: pointer;
  padding: 0;

  @keyframes rotate-button {
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
  background-color: #0300b6;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);

  @keyframes rotate-line-2 {
    from {
      transform: translateY(-50%) rotate(-45deg);
    }

    to {
      transform: translateY(calc(-50% - 35px)) rotate(0);
    }
  }
`;

const BottomLine = styled.div`
  height: 2px;
  background-color: #e01515;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);

  @keyframes rotate-line-1 {
    from {
      transform: translateY(-50%) rotate(45deg);
    }

    to {
      transform: translateY(calc(-50% + 35px)) rotate(0);
    }
  }
`;

const CenterLine = styled.div`
  height: 2px;
  background-color: #3c9448;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scaleX(0);

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
