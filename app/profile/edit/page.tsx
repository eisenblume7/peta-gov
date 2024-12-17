"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Edit2,
  UserCircle2,
  Mail,
  Save,
  X,
  ImagePlus,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

const profileFormSchema = z.object({
  fullName: z.string().min(2, "Nama harus minimal 2 karakter."),
  email: z.string().email("Email tidak valid."),
  bio: z
    .string()
    .max(160, "Bio tidak boleh lebih dari 160 karakter.")
    .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  fullName: "John Doe",
  email: "john.doe@example.com",
  bio: "Seorang investor pemula yang tertarik pada proyek-proyek berkelanjutan dan teknologi inovatif.",
};

export default function EditProfilePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit() {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Profil diperbarui",
        description: "Informasi profil Anda telah berhasil diperbarui.",
        variant: "default",
      });
      router.push("/profile");
    }, 1000);
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <Card className="w-full max-w-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-none">
        <CardHeader className="bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 text-white p-8 flex flex-row items-center justify-between rounded-t-xl shadow-lg transition-all duration-300 hover:shadow-xl group">
          <div className="flex items-center space-x-5">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-colors">
              <Edit2
                size={32}
                className="text-teal-50 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="space-y-1">
              <CardTitle className="text-3xl font-bold tracking-tight">
                Edit Profil
              </CardTitle>
              <p className="text-teal-100 text-sm">
                Perbarui informasi profil Anda
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          {/* Profile Image Upload */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="border-[6px] border-white shadow-xl rounded-full p-1 bg-white relative">
                <Image
                  src={profileImage || "/placeholder.svg?height=180&width=180"}
                  alt="Foto Profil"
                  width={180}
                  height={180}
                  className="rounded-full object-cover shadow-inner"
                />
                <label
                  htmlFor="profileImageUpload"
                  className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer hover:bg-blue-600 transition-colors"
                >
                  <ImagePlus size={20} />
                  <input
                    type="file"
                    id="profileImageUpload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <UserCircle2 className="text-blue-500" /> Nama Lengkap
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />
                    </FormControl>
                    <FormDescription>
                      Nama Anda yang akan ditampilkan di profil.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="text-green-500" /> Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john.doe@example.com"
                        {...field}
                        className="focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      />
                    </FormControl>
                    <FormDescription>
                      Alamat email Anda untuk komunikasi dan notifikasi.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Edit2 className="text-purple-500" /> Bio
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ceritakan sedikit tentang diri Anda"
                        className="resize-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Anda dapat menambahkan bio singkat tentang diri Anda.
                      Maksimal 160 karakter.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-4 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/profile")}
                  className="flex items-center gap-2 px-6 py-2.5 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 rounded-lg group"
                >
                  <X
                    size={18}
                    className="text-gray-500 group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium">Batal</span>
                </Button>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium",
                    "bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600",
                    "text-white shadow-md hover:shadow-lg transition-all duration-300",
                    "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-md",
                    "group relative overflow-hidden"
                  )}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <Loader2 size={18} className="animate-spin" />
                      <span>Menyimpan...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Save
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span>Simpan Perubahan</span>
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
