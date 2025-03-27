interface iconProps {
  logoIcon: string;
  iconWidth: string;
  iconHeight: string;
}

const Icon = ({ logoIcon, iconWidth, iconHeight }: iconProps) => {
  return (
    <img style={{ width: iconWidth, height: iconHeight }} src={logoIcon}></img>
  );
};

export default Icon;
