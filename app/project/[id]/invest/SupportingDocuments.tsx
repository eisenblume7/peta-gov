import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function SupportingDocuments({
  form,
}: {
  form: UseFormReturn<{
    supportingDocuments: { identityDocument: File; paymentProof: File };
  }>;
}) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="supportingDocuments.identityDocument"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Identity Document (KTP/Passport)</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => field.onChange(e.target.files?.[0])}
              />
            </FormControl>
            <FormDescription>
              Upload a scanned copy or clear photo of your identity document
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="supportingDocuments.paymentProof"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Proof</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => field.onChange(e.target.files?.[0])}
              />
            </FormControl>
            <FormDescription>
              Upload proof of payment (if available)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
