
import { z } from "zod";

export const complaintFormSchema = z.object({
  complain_no: z.string().optional(),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  mob_no: z.string().min(5, { message: "Mobile number is required" }),
  complain_type: z.string().optional(),
  complain_details: z.string().min(10, { message: "Provide at least 10 characters for complaint details" }),
  u_id: z.string({ required_error: "User ID is required" }),
});

export type ComplaintFormValues = z.infer<typeof complaintFormSchema>;
