"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  User,
  DollarSign,
  CreditCard,
  FileUp,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InvestorInfo } from "./InvestorInfo";
import { InvestmentDetails } from "./InvestmentDetails";
import { TaxInfo } from "./TaxInfo";
import { SupportingDocuments } from "./SupportingDocuments";
import { Confirmation } from "./Confirmation";
import { Summary } from "./Summary";

const formSchema = z.object({
  investorInfo: z.object({
    fullName: z.string().min(2, "Name is required"),
    identityNumber: z.string().min(5, "Identity number is required"),
    address: z.string().min(5, "Address is required"),
    contactInfo: z
      .string()
      .email("Invalid email")
      .or(z.string().regex(/^\d{10,}$/, "Invalid phone number")),
    bankAccount: z.string().min(5, "Bank account is required"),
  }),
  projectInfo: z.object({
    projectId: z.string(),
    projectName: z.string(),
    projectDescription: z.string(),
  }),
  investmentDetails: z.object({
    amount: z.number().min(1, "Amount is required"),
    tenor: z.string(),
    interestRate: z.number(),
    paymentMethod: z.string(),
  }),
  taxInfo: z.object({
    taxStatus: z.enum(["registered", "unregistered"]),
    taxId: z.string().optional(),
  }),
  supportingDocuments: z.object({
    identityDocument: z.instanceof(File),
    paymentProof: z.instanceof(File).optional(),
  }),
  confirmation: z.object({
    agreement: z
      .boolean()
      .refine((val) => val === true, "You must agree to the terms"),
    signature: z.string().optional(),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const steps = [
  { label: "Investor Info", icon: User },
  { label: "Investment Details", icon: DollarSign },
  { label: "Tax Info", icon: CreditCard },
  { label: "Documents", icon: FileUp },
  { label: "Confirmation", icon: ShieldCheck },
  { label: "Summary", icon: CheckCircle2 },
];

export default function InvestPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      investorInfo: {
        fullName: "",
        identityNumber: "",
        address: "",
        contactInfo: "",
        bankAccount: "",
      },
      investmentDetails: {
        amount: 0,
        tenor: "",
        interestRate: 0,
        paymentMethod: "",
      },
      taxInfo: {
        taxStatus: "unregistered",
        taxId: "",
      },
      supportingDocuments: {
        identityDocument: null as unknown as File,
        paymentProof: null as unknown as File,
      },
      confirmation: {
        agreement: false,
        signature: "",
      },
    },
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-5xl shadow-2xl border-none">
        <CardHeader className="bg-primary text-white rounded-t-lg p-6 space-y-2">
          <CardTitle className="text-3xl font-bold">
            Investment Application
          </CardTitle>
          <CardDescription className="text-white/80 text-lg">
            Complete your investment details step by step
          </CardDescription>
        </CardHeader>

        <div className="px-6 pt-4">
          <Progress
            value={((currentStep + 1) / steps.length) * 100}
            className="w-full h-2 bg-gray-200"
          />
        </div>

        <div className="flex justify-between px-6 py-4 bg-gray-100">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.label}
                className={`flex flex-col items-center space-y-1 ${
                  index <= currentStep ? "text-primary" : "text-gray-400"
                }`}
              >
                <StepIcon
                  className={`w-6 h-6 ${
                    index === currentStep ? "animate-pulse" : ""
                  }`}
                />
                <span className="text-xs font-medium text-center hidden md:block">
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        <CardContent className="p-6">
          <Tabs value={steps[currentStep].label} className="w-full">
            <TabsList className="hidden">
              {steps.map((step) => (
                <TabsTrigger key={step.label} value={step.label}>
                  {step.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => {
                  setIsSubmitting(true);
                  onSubmit(data).then(() => {
                    setIsSubmitting(false);
                    setSubmitSuccess(true);
                  });
                })}
                className="space-y-8"
              >
                <TabsContent value="Investor Info">
                  <InvestorInfo
                    form={form}
                    inputIds={{
                      name: "investor-name",
                      email: "investor-email",
                      phone: "investor-phone",
                    }}
                  />
                </TabsContent>
                <TabsContent value="Investment Details">
                  <InvestmentDetails
                    form={form}
                    inputIds={{
                      amount: "investment-amount",
                      tenor: "investment-tenor",
                      interestRate: "interest-rate",
                    }}
                  />
                </TabsContent>
                <TabsContent value="Tax Info">
                  <TaxInfo form={form} />
                </TabsContent>
                <TabsContent value="Documents">
                  <SupportingDocuments form={form} />
                </TabsContent>
                <TabsContent value="Confirmation">
                  <Confirmation form={form} />
                </TabsContent>
                <TabsContent value="Summary">
                  <Summary form={form} />
                </TabsContent>
              </form>
            </Form>
          </Tabs>
        </CardContent>

        <CardFooter className="flex justify-between bg-gray-100 rounded-b-lg p-6">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0 || isSubmitting}
            className="hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          {currentStep < steps.length - 1 ? (
            <Button
              onClick={nextStep}
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary-700 transition-colors"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700 transition-colors"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
              {!isSubmitting && <CheckCircle2 className="w-4 h-4 ml-2" />}
            </Button>
          )}
        </CardFooter>

        {submitSuccess && (
          <Alert className="mt-4 mx-6 mb-6">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your investment application has been submitted successfully.
            </AlertDescription>
          </Alert>
        )}
      </Card>
    </div>
  );
}
