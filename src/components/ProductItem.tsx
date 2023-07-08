import Image from "next/image";

type ProductItemProps = {
  img: {
    url: string;
    description: string;
    width: number;
    height: number;
  };
  title: string;
};

export default function ProductItem({ img, title }: ProductItemProps) {
  return (
    <div className="relative grid justify-center">
      <div className="h-96 grid items-center">
        <Image
          src={img.url}
          alt={img.description}
          width={img.width}
          height={img.height}
        />
      </div>
      <p className="text-center">{title}</p>
    </div>
  );
}
