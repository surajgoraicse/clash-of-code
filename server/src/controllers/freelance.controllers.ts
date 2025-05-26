import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { freelancePostSchema } from "../schemas/freelance.zod.js";
import ApiResponse from "../utils/ApiResponse.util.js";
import FreelanceModel from "../models/freelance.model.js";
import mongoose from "mongoose";

export const createPost = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		// take data
		// validate it
		// insert it in db
		// send response

		const { title, description, about, type, deadline, keywords, images } =
			req.body;

		const verify = freelancePostSchema.safeParse({
			title,
			description,
			about,
			type,
			deadline,
			keywords,
			images,
		});

		if (!verify.success) {
			return res
				.status(400)
				.json(
					new ApiResponse(
						400,
						false,
						"validation failed",
						verify.error.format()
					)
				);
		}
		console.log(verify.data);

		const post = await FreelanceModel.create(verify.data);
		console.log(post);
		return res
			.status(201)
			.json(new ApiResponse(201, true, "Post created successfully", post));
	}
);

export const getOnePost = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		// take id from params
		// validate it
		// check in db
		// return response

		const id = req.params.id;

		// Validate ObjectId
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res
				.status(400)
				.json(new ApiResponse(400, false, "Invalid post id format"));
		}

		const post = await FreelanceModel.findById(id).select("-registerUser");

		if (!post) {
			return res
				.status(400)
				.json(new ApiResponse(400, false, "Post not found"));
		}

		return res
			.status(200)
			.json(new ApiResponse(200, true, "data fetched successfully", post));
	}
);

export const allPost = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const allPost = await FreelanceModel.find().select("-registerUser");
		if (!allPost) {
			return res.status(200).json(new ApiResponse(200, true, "No Post found"));
		}
		return res
			.status(200)
			.json(new ApiResponse(200, true, "data fetched successfully", allPost));
	}
);

export const deletePost = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		// take id from params
		// validate it
		// check in db
		// return response

		const id = req.params.id;

		// Validate ObjectId
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res
				.status(400)
				.json(new ApiResponse(400, false, "Invalid post id format"));
		}

		const deletePost = await FreelanceModel.findByIdAndDelete(id);
		if (!deletePost) {
			return res.status(404).json({
				success: false,
				message: "Freelance post not found",
			});
		}
		res.status(200).json({
			success: true,
			message: "Freelance post deleted successfully",
			data: deletePost, // or omit this if you don't want to return it
		});
	}
);
