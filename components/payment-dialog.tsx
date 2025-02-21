/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profileId: string;
}

export function PaymentDialog({
  open,
  onOpenChange,
  profileId,
}: PaymentDialogProps) {
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        order_id: data.orderId,
        image: "/Group.png",
        handler: async function (response: any) {
          try {
            const verificationResponse = await fetch("/api/payment", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: data.orderId,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            });

            const verificationData = await verificationResponse.json();

            if (verificationResponse.ok) {
              toast.success("Payment successful!");
              router.refresh();
              onOpenChange(false);
            } else {
              throw new Error(verificationData.error);
            }
          } catch (error) {
            toast.error("Payment verification failed");
          }
        },
        theme: {
          color: "#7C3AED",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      toast.error("Failed to initialize payment");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="text-center p-6">
        <DialogTitle className="text-xl font-semibold mb-4">
          Subscribe to Connect
        </DialogTitle>
        <p className="text-gray-600 mb-6">
          Get unlimited access to connect with people around you
        </p>
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">₹99</p>
            <p className="text-sm text-purple-600">One-time payment</p>
          </div>
          <Button
            onClick={handlePayment}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            Pay Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
