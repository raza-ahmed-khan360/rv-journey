import Link from "next/link";
import Image from "next/image";
import "./Card.css";

export default function Card({
  title,
  excerpt,
  image,
  date,
  href,
  className = "",
}) {
  const CardContent = (
    <div className={`card ${className}`}>
      {image && (
        <div className="card__image-wrapper">
          <Image
            src={image}
            alt={title}
            fill
            className="card__image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="card__content">
        {date && <span className="card__date">{date}</span>}
        <h3 className="card__title">{title}</h3>
        {excerpt && <p className="card__excerpt">{excerpt}</p>}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{CardContent}</Link>;
  }

  return CardContent;
}
