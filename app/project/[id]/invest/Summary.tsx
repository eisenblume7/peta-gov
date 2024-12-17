import { UseFormReturn } from "react-hook-form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface FormValues {
  investorInfo: {
    fullName: string;
    identityNumber: string;
    contactInfo: string;
    address: string;
    bankAccount: string;
  };
  investmentDetails: {
    amount: number;
    tenor: string;
    interestRate: number;
    paymentMethod: string;
  };
  taxInfo: {
    taxStatus: string;
    taxId?: string;
  };
  supportingDocuments: {
    identityDocument?: { name: string };
    paymentProof?: { name: string };
  };
  confirmation: {
    agreement: boolean;
    signature?: string;
  };
}

export function Summary({ form }: { form: UseFormReturn<FormValues> }) {
  const { getValues } = form;
  const values = getValues();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Investment Summary</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Category</TableHead>
            <TableHead className="w-2/3">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Investor Information</TableCell>
            <TableCell>
              <p>Name: {values.investorInfo.fullName}</p>
              <p>ID: {values.investorInfo.identityNumber}</p>
              <p>Contact: {values.investorInfo.contactInfo}</p>
              <p>Address: {values.investorInfo.address}</p>
              <p>Bank Account: {values.investorInfo.bankAccount}</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Investment Details</TableCell>
            <TableCell>
              <p>Amount: {formatCurrency(values.investmentDetails.amount)}</p>
              <p>Tenor: {values.investmentDetails.tenor}</p>
              <p>Interest Rate: {values.investmentDetails.interestRate}%</p>
              <p>Payment Method: {values.investmentDetails.paymentMethod}</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Tax Information</TableCell>
            <TableCell>
              <p>Status: {values.taxInfo.taxStatus}</p>
              <p>Tax ID: {values.taxInfo.taxId || "N/A"}</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Supporting Documents</TableCell>
            <TableCell>
              <p>
                Identity Document:{" "}
                {values.supportingDocuments.identityDocument?.name || "N/A"}
              </p>
              <p>
                Payment Proof:{" "}
                {values.supportingDocuments.paymentProof?.name || "N/A"}
              </p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Confirmation</TableCell>
            <TableCell>
              <p>Agreement: {values.confirmation.agreement ? "Yes" : "No"}</p>
              <p>Signature: {values.confirmation.signature || "N/A"}</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p className="text-sm text-gray-500">
        Please review all information carefully before submitting your
        investment application.
      </p>
    </div>
  );
}
