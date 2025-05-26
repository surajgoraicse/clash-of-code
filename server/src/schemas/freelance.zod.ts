import { z } from "zod";

// Define valid freelance types as an enum
const FreelanceTypeEnum = z.enum(["Frontend", "Backend", "DevOps"]);

// Utility: Limit date range
const MIN_DATE = new Date();
const MAX_DATE = new Date("2100-01-01");

export const freelancePostSchema = z.object({
	title: z
		.string({
			required_error: "Title of freelance is required",
			invalid_type_error: "Title must be a string",
		})
		.trim()
        .min(1, "Title cannot be empty")
        .max(100, "Title must be less than 100 words"),

	description: z
		.string({
			required_error: "Description of freelance is required",
			invalid_type_error: "Description must be a string",
		})
		.trim()
		.min(1, "Description cannot be empty"),

	about: z
		.string({
			required_error: "About of freelance is required",
			invalid_type_error: "About must be a string",
		})
		.trim()
		.min(1, "About cannot be empty"),

	type: FreelanceTypeEnum,

	deadline: z
		.coerce.date({
			required_error: "Deadline date is required",
			invalid_type_error: "Deadline must be a valid date",
		})
		.refine((date) => date >= MIN_DATE, {
			message: "Deadline must be after the current date",
		})
		.refine((date) => date <= MAX_DATE, {
			message: "Deadline must be before Jan 1, 2100",
		}),

	keywords: z
		.array(
			z
				.string({
					required_error: "Each keyword must be a string",
					invalid_type_error: "Invalid keyword type",
				})
				.min(1, "Keyword cannot be empty"),
			{
				required_error: "Keywords are required",
				invalid_type_error: "Keywords must be an array of strings",
			}
		)
		.min(1, "At least one keyword is required"),

	images: z
		.array(
			z
				.string({
					invalid_type_error: "Image must be a string",
				})
				.url("Each image must be a valid URL")
		)
		.default([]),
});