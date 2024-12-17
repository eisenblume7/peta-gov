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

interface InvestorInfoFormValues {
  investorInfo: {
    fullName: string;
    identityNumber: string;
    address: string;
    contactInfo: string;
    bankAccount: string;
  };
}

export function InvestorInfo({
  form,
}: {
  form: UseFormReturn<InvestorInfoFormValues>;
}) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="investorInfo.fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormDescription>Enter your full legal name</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="investorInfo.identityNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Identity Number (KTP/Passport/NPWP)</FormLabel>
            <FormControl>
              <Input placeholder="1234567890" {...field} />
            </FormControl>
            <FormDescription>
              Enter your official identification number
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="investorInfo.address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address</FormLabel>
            <FormControl>
              <Input placeholder="123 Main St, City, Country" {...field} />
            </FormControl>
            <FormDescription>
              Enter your current residential address
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="investorInfo.contactInfo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number/Email</FormLabel>
            <FormControl>
              <Input
                placeholder="+62 123-456-7890 or email@example.com"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Enter your preferred contact information
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="investorInfo.bankAccount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bank Account</FormLabel>
            <FormControl>
              <Input placeholder="Bank Name - Account Number" {...field} />
            </FormControl>
            <FormDescription>
              Enter your bank account details for payments and refunds
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
