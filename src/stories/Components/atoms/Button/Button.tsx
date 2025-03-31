import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  img: string;
  color: string;
  logoWidth: string;
  logoHeight: string;
}

const Button: React.FC<ButtonProps> = ({
  img,
  logoHeight,
  logoWidth,
  onClick,
  color,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 16px",
        width: "366px",
        height: "40px",
        borderRadius: "32px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: color,
        gap: "4px",
        border: "none",
      }}
    >
      <div>
        {img && (
          <img
            src={img}
            style={{ width: logoWidth, height: logoHeight }}
            alt="button icon"
          />
        )}
      </div>
      <div
        style={{
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "-2%",
          fontWeight: "400",
        }}
      >
        check out
      </div>
    </button>
  );
};

export default Button;
