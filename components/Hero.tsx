"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  courseworkType: z.string(),
  courseworkSubject: z.string(),
  courseTitle: z.string(),
});

export default function Hero() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
    router.push("/evaluate");
  };

  return (
    <section className="flex flex-col items-end gap-2 md:flex-row md:space-x-8">
      <div className="flex flex-1 flex-col justify-between space-y-4">
        <h1 className="text-2xl font-bold lg:text-3xl">
          Hey IB Folks! Unsure about the quality of your answers?{" "}
          <span className="text-[#6947BF]">We get you.</span>
        </h1>
        <div className="h-max rounded-xl bg-white p-5">
          <div className="rounded-lg border-2 border-dashed border-[#CEC4EB] p-8 text-center">
            <div className="mx-auto w-44">
              <Image
                src="/images/upload-file.svg"
                alt="Upload File"
                width={30}
                height={38}
                className="mx-auto"
              />

              <div className="flex flex-col justify-center text-[#7A8196]">
                <p className="font-bold">Drag and drop a PDF</p>
                <p className="text-xs">*Limit 25 MB per file.</p>
              </div>

              <div className="flex cursor-pointer items-center justify-center">
                <Button
                  variant="outline"
                  className="mt-4 w-full rounded-full border-[#CEC4EB] font-bold text-[#6947BF]"
                >
                  Upload your file
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-4 gap-4 space-y-7">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="space-y-2.5">
                  <div className="space-y-0.5">
                    <FormLabel className="text-[#7A8196]">
                      Select your course & subjects*
                    </FormLabel>
                    <div className="flex gap-5">
                      <FormField
                        control={form.control}
                        name="courseworkType"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl className="rounded-full py-2 pl-4 pr-3 text-[#5B6170]">
                                <SelectTrigger aria-label="Coursework Type">
                                  <SelectValue placeholder="Coursework Type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="type1">Type 1</SelectItem>
                                <SelectItem value="type2">Type 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="courseworkSubject"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl className="rounded-full py-2 pl-4 pr-3 text-[#5B6170]">
                                <SelectTrigger aria-label="Subject">
                                  <SelectValue placeholder="Subject" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="subject1">
                                  Subject 1
                                </SelectItem>
                                <SelectItem value="subject2">
                                  Subject 2
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="courseTitle"
                    render={({ field }) => (
                      <FormItem className="space-y-0.5">
                        <FormLabel className="border-none text-[#7A8196]">
                          Enter your essay title*(Required)
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-full placeholder-[#C1CCD6] focus-visible:ring-[#FF4800] sm:w-[60%] lg:w-[50%]"
                            placeholder="how nation works....."
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex max-sm:justify-center">
                  <Button
                    type="submit"
                    className="flex gap-2 rounded-full bg-[#ADB8C9] p-2 pr-6 hover:bg-[#6947BF] hover:text-white"
                  >
                    <Image
                      src="/images/evaluate-text.svg"
                      alt="Evaluate"
                      width={24}
                      height={24}
                    />
                    <span className="font-semibold text-white">
                      Evaluate your Score
                    </span>
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <div className="max-lg:hidden md:w-72">
        <Image
          src="/images/frame.png"
          alt="Evaluate your coursework with a single click"
          width={290}
          height={528}
          className="mx-auto"
        />
      </div>
    </section>
  );
}
