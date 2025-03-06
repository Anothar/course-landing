type Props = {
  isActive: boolean;
  text: string;
};

export const ButtonMenu: React.FC<Props> = ({isActive, text}) => {
  return (
    <button className={"menu-text button__menu " + (isActive ? 'button__menu-active' : '')}>
      {text}
      <div className={"button__menu_circle " + (isActive ? 'button__menu_circle-active' : '')}>
        <div className={"button__menu_circle2 " + (isActive ? 'button__menu_circle2-active' : '')}></div>
      </div>
    </button>
  )
};
