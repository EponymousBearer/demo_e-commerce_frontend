import connect from "@/utils/db";
import { NextResponse } from "next/server";
import InteractModel from "@/lib/models/InteractModel";

export const POST = async (request: any) => {
  const { user_id, product_id, interaction_type } = await request.json();
  console.log("User id", user_id, "PID", product_id, "IT", interaction_type);
  await connect();

  try {
    // Save interaction to MongoDB
    const interaction = new InteractModel({
      user_id,
      product_id,
      interaction_type,
    });
    await interaction.save();

    return new NextResponse("Interaction saved successfully", { status: 200 });
  } catch (error) {
    console.error("Error saving interaction:", error);
    return new NextResponse("Failed to save interaction", { status: 500 });
  }
};
