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
import { Textarea } from "@/components/ui/textarea";

interface ProjectInfoFormValues {
  projectInfo: {
    projectId: string;
    projectName: string;
    projectDescription: string;
  };
}

export function ProjectInfo({
  form,
}: {
  form: UseFormReturn<ProjectInfoFormValues>;
}) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="projectInfo.projectId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project ID</FormLabel>
            <FormControl>
              <Input placeholder="PRJ-001" {...field} />
            </FormControl>
            <FormDescription>
              Enter the unique identifier for the project
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="projectInfo.projectName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Name</FormLabel>
            <FormControl>
              <Input placeholder="Sustainable Energy Initiative" {...field} />
            </FormControl>
            <FormDescription>Enter the name of the project</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="projectInfo.projectDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Brief description of the project..."
                {...field}
              />
            </FormControl>
            <FormDescription>
              Provide a short description of the project
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
