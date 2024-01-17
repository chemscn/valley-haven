import Link from "next/link";
import { ICard } from "../models";
import { Button } from ".";

export const Card = ({title, content, linkSrc, imageSrc}: ICard)=>{
return (
    <div className="card w-96 glass transition ease-in-out hover:shadow-lg hover:shadow-gray-200 hover:-translate-y-5">
    <figure><img style={{width: 400, height: 300}} alt='volunteer image' src={imageSrc} /></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{content}</p>
      <div className="card-actions justify-left py-2">
        <Link href={linkSrc}>
          <Button buttonText="Learn More" buttonType="outline" />
        </Link>
      </div>
    </div>
  </div>
)
}