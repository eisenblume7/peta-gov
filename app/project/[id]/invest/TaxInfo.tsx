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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface TaxInfoFormData {
  taxInfo: {
    taxStatus: string;
    taxId: string;
  };
}

export function TaxInfo({ form }: { form: UseFormReturn<TaxInfoFormData> }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="taxInfo.taxStatus"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Tax Status</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="registered" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Registered Taxpayer
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="unregistered" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Unregistered Taxpayer
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormDescription>
              Select your tax registration status
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="taxInfo.taxId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tax ID (NPWP)</FormLabel>
            <FormControl>
              <Input placeholder="00.000.000.0-000.000" {...field} />
            </FormControl>
            <FormDescription>
              Enter your Tax Identification Number (if applicable)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
