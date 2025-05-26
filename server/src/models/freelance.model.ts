import mongoose, { Document } from "mongoose";
import { IUser } from "./user.model.js";

export interface IFreelance extends Document {
	title: string;
	description: string;
	about: string;
	type: "Frontend" | "Backend" | "DevOps";
	deadline: Date;
	registeredNumber: number;
	registerUser: IUser;
	keywords: string[];
	images: string[];
}

const freelanceSchema = new mongoose.Schema<IFreelance>(
	{
		title: {
			type: String,
			required: [true, "title of freelance is required "],
			trim: true,
		},
		description: {
			type: String,
			required: [true, "description of freelance is required "],
			trim: true,
		},
		about: {
			type: String,
			required: [true, "about of freelance is required "],
			trim: true,
		},
		type: {
			type: String,
			enum: ["Frontend", "Backend", "DevOps"],
			required: [true, "type of freelance is required "],
		},
		deadline: {
			type: Date,
			required: [true, "Deadline date is required"],
			validate: {
				validator: (value: Date) =>
					value instanceof Date && !isNaN(value.getTime()),
				message: "Invalid date format for scheduledAt",
			},
			min: [Date.now(), "Date must be after current date"],
			max: [new Date("2100-01-01"), "Date must be before Jan 1, 2100"],
		},
		registeredNumber: {
			type: Number,
			default: 0,
		},
		registerUser: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		keywords: {
			type: [String],
			required: [true, "Keyword are required"],
		},

		images: {
			type: [String],
			default: [],
		},
	},
	{ timestamps: true }
);

const FreelanceModel = mongoose.model<IFreelance>("freelance", freelanceSchema);

export default FreelanceModel;
