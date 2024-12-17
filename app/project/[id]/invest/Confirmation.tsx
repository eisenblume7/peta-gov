import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

interface ConfirmationFormData {
  confirmation: {
    agreement: boolean;
    signature: string;
  };
}

export function Confirmation({
  form,
}: {
  form: UseFormReturn<ConfirmationFormData>;
}) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="confirmation.agreement"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                I agree to the terms and conditions of this investment
              </FormLabel>
              <FormDescription>
                By checking this box, you confirm that you have read and agree
                to our terms of service and privacy policy.
              </FormDescription>
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="confirmation.signature"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Digital Signature</FormLabel>
            <FormControl>
              <Input
                placeholder="Type your full name as signature"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Type your full name as a digital signature
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
