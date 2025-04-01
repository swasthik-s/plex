import Image from "next/image";
import Link from "next/link";

interface ShowCardProps {
  id: number;
  name: string;
  image?: string;
  summary?: string;
}

export default function ShowCard({ id, name, image, summary }: ShowCardProps) {
  return (
    <Link href={`/show/${id}`} className="group">
      <div className="overflow-hidden rounded-lg border bg-white shadow transition-all hover:shadow-lg">
        <div className="relative h-64 w-full">
          <Image
            src={image || "/placeholder.png"}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
            {name}
          </h3>
          {summary && (
            <div
              className="mt-2 text-gray-600 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          )}
        </div>
      </div>
    </Link>
  );
}
