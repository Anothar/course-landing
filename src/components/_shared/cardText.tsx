type Props = {
  items: {
    title: string;
    subTitle: string;
  }[];
  numberItem: number;
}

export const CardText: React.FC<Props> = ({ items, numberItem }) => {
  return (
    <div className="cardText">
      <div className="cardText__info">
        {items.map((item) => (
          <div className="cardText__info_content" key={item.title} style={{ transform: `translateX(-${numberItem * 100}%)` }}>
            <h4>{item.title}</h4>
            <p className="headline-4">{item.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}