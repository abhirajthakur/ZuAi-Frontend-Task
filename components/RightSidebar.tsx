import Image from "next/image";

export default function RightSidebar() {
  return (
    <section className="sticky right-0 top-0 mr-3 h-screen w-28 p-3 max-sm:hidden">
      <div className="flex flex-col">
        <div className="flex flex-col items-end gap-1.5">
          <div className="-mr-3 flex items-center rounded-full border border-[#EAF0F2] bg-[#FFFFFF] p-1 pr-2.5">
            <Image
              src="/images/zucoin.svg"
              alt="Dashboard"
              height={24}
              width={24}
            />
            <span className="text-sm">123</span>
          </div>

          <div className="-mr-3 flex items-center rounded-full border border-[#EAF0F2] bg-[#FFFFFF] p-1 pr-2.5">
            <Image
              src="/images/fire.svg"
              alt="Dashboard"
              height={24}
              width={24}
            />
            <span className="text-sm">123</span>
          </div>
        </div>

        <div className="-mr-3 flex flex-col items-end justify-end gap-2 pt-3">
          <Image src="/images/event.svg" alt="Events" height={36} width={36} />
          <Image src="/images/notes.svg" alt="Notes" height={36} width={36} />
        </div>
      </div>
    </section>
  );
}
