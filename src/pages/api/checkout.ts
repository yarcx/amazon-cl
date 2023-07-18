import { StoreProduct } from "./../../../types";
import { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { items, email } = req.body;
  const modifiedItems = items.map((item: StoreProduct) => {
    return {
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.ceil(item.price * 100),
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
    };
  });
  try {
    const session = await stripe.checkout?.sessions?.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["BD", "US", "OM", "CA"],
      },
      line_items: modifiedItems,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
      metadata: {
        email,
        image: JSON.stringify(items.map((item: any) => items.image)),
      },
    });

    return res.status(200).json({
      id: session.id,
    });
  } catch (error) {
    return res.status(404).json({
      id: "an error occurred",
    });
  }
}
