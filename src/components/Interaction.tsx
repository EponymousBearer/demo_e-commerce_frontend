"use client"
import { useState } from 'react'

export const Interaction = ({ product_id, user_id }: { product_id: string, user_id: string }) => {
    // console.log("PIDp",product_id,"uid", user_id)
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [hearted, setHearted] = useState(false);

    const handleLike = async () => {
        try {
            const response = await fetch('/api/interact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: user_id, // Replace with actual user ID
                    product_id: product_id,
                    interaction_type: "like",
                })
            });
            // console.log(response.data);
            setLiked(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDislike = async () => {
        try {
            const response = await fetch('/api/interact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: user_id, // Replace with actual user ID
                    product_id: product_id,
                    interaction_type: "dislike",
                })
            });
            // console.log(response.data);
            setDisliked(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleHeart = async () => {
        try {
            const response = await fetch('/api/interact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: user_id, // Replace with actual user ID
                    product_id: product_id,
                    interaction_type: "heart",
                })
            });
            // console.log(response.status);
            setHearted(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex gap-x-4">
            <button className="border p-4" onClick={handleLike} disabled={liked}>Like</button>
            <button className="border p-4" onClick={handleDislike} disabled={disliked}>Dislike</button>
            <button className="border p-4" onClick={handleHeart} disabled={hearted}>Heart</button>
        </div>
    )
}
