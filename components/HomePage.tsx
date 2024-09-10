import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import Coursework from "./Coursework";
import Hero from "./Hero";
import ExploreCoursework from "./ExploreCoursework";

export default function HomePage() {
  return (
    <div className="flex min-h-screen justify-between bg-[#E5ECF3]">
      <Sidebar />

      <main className="mx-auto flex w-full flex-col space-y-8 overflow-x-auto md:p-12 2xl:p-48">
        <Hero />
        <Coursework />
        <ExploreCoursework />
      </main>

      <RightSidebar />
    </div>
  );
}
