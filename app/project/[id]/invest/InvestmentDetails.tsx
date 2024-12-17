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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface InvestmentFormData {
  investmentDetails: {
    amount: number;
    tenor: string;
    interestRate: number;
    paymentMethod: string;
  };
}

export function InvestmentDetails({
  form,
}: {
  form: UseFormReturn<InvestmentFormData>;
}) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="investmentDetails.amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Investment Amount</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="1000000"
                min={0}
                step={1000}
                value={field.value || ""} // Prevent NaN
                onChange={(e) => {
                  const value =
                    e.target.value === "" ? "" : parseFloat(e.target.value);
                  field.onChange(value);
                }}
              />
            </FormControl>
            <FormDescription>
              Enter the amount you wish to invest (in IDR)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="investmentDetails.tenor"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Investment Tenor</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select investment duration" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="1year">1 Year</SelectItem>
                <SelectItem value="3years">3 Years</SelectItem>
                <SelectItem value="5years">5 Years</SelectItem>
              </SelectContent>
            </Select>
            <FormDescription>
              Choose the duration of your investment
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="investmentDetails.interestRate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Interest Rate</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="number"
                min={0}
                max={100}
                step={0.1}
                placeholder="5.5"
                value={field.value ?? ""}
                onChange={(e) => {
                  const value =
                    e.target.value === ""
                      ? ""
                      : Math.min(100, Math.max(0, parseFloat(e.target.value)));
                  field.onChange(value);
                }}
              />
            </FormControl>
            <FormDescription>
              Enter the annual interest rate (%)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="investmentDetails.paymentMethod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Method</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="bankTransfer">Bank Transfer</SelectItem>
                <SelectItem value="eWallet">E-Wallet</SelectItem>
                <SelectItem value="creditCard">Credit Card</SelectItem>
              </SelectContent>
            </Select>
            <FormDescription>
              Choose your preferred payment method
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
