import { Card } from "@/components/ui/card";
import Image from "next/image";

type CourseworkProps = {
  content: string;
  subject: string;
  readingTime: string;
  wordCount: string;
  rating: string;
  language: string;
  gradientColor: string;
};

export default function CourseworkCard({
  content,
  subject,
  readingTime,
  wordCount,
  rating,
  language,
  gradientColor,
}: CourseworkProps) {
  return (
    <Card
      className={`flex space-x-4 bg-gradient-to-r from-[#FFFFFF] to-[${gradientColor}]/40 items-start p-2`}
    >
      <Image
        src="/images/a4.svg"
        alt="Coursework"
        width={120}
        height={160}
        className="max-lg:hidden"
      />
      <div className="flex-1 overflow-hidden">
        <div className="w-auto">
          <h3 className="font-semibold">{content.slice(0, 30) + "..."}</h3>
          <p className="text-sm">{content.slice(0, 75) + "..."}</p>
        </div>
        <div className="mt-2 flex flex-wrap space-x-2 space-y-1 text-sm text-gray-500">
          <div className="flex w-max items-center gap-1.5 rounded-full bg-[#FFFFFF] p-0.5 pr-1">
            <Image
              src="/images/coursework-subject.svg"
              alt="Coursework Subject"
              width={16}
              height={16}
            />
            <span className="text-xs">{subject}</span>
          </div>

          <div className="flex w-max items-center gap-1.5 rounded-full bg-[#FFFFFF] p-0.5 pr-1">
            <Image
              src="/images/coursework-clock.svg"
              alt="Coursework Reading time"
              width={16}
              height={16}
            />
            <span className="text-xs">{readingTime} min read</span>
          </div>

          <div className="flex w-max items-center gap-1.5 rounded-full bg-[#FFFFFF] p-0.5 pr-1">
            <Image
              src="/images/coursework-file.svg"
              alt="Coursework Word count"
              width={16}
              height={16}
            />
            <span className="text-xs">{wordCount} words</span>
          </div>

          <div className="flex w-max items-center gap-1.5 rounded-full bg-[#FFFFFF] p-0.5 pr-1">
            <Image
              src="/images/coursework-rating.svg"
              alt="Coursework Rating"
              width={16}
              height={16}
            />
            <span className="text-xs">{rating}/7</span>
          </div>

          <div className="flex w-max items-center gap-1.5 rounded-full bg-[#FFFFFF] p-0.5 pr-1">
            <Image
              src="/images/coursework-language.svg"
              alt="Coursework Language"
              width={16}
              height={16}
            />
            <span className="text-xs">
              {language.charAt(0).toUpperCase() + language.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
