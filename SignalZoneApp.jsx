
// SignalZone Basic Web App
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignalZoneApp() {
  const [phone, setPhone] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [connected, setConnected] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { id: 1, label: "KES 10 - 30 mins", time: 30 },
    { id: 2, label: "KES 20 - 1 hour", time: 60 },
    { id: 3, label: "KES 50 - 3 hours", time: 180 },
  ];

  const handleLogin = () => {
    if (phone.length >= 10) setIsLoggedIn(true);
  };

  const handleConnect = () => {
    if (selectedPlan) setConnected(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">SignalZone</h1>
      {!isLoggedIn ? (
        <Card className="w-full max-w-sm">
          <CardContent className="p-4">
            <h2 className="text-lg mb-2">Login with Phone Number</h2>
            <Input
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mb-2"
            />
            <Button className="w-full" onClick={handleLogin}>
              Login
            </Button>
          </CardContent>
        </Card>
      ) : !connected ? (
        <Card className="w-full max-w-sm">
          <CardContent className="p-4">
            <h2 className="text-lg mb-2">Select a Wi-Fi Plan</h2>
            <div className="space-y-2">
              {plans.map((plan) => (
                <Button
                  key={plan.id}
                  variant={selectedPlan?.id === plan.id ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setSelectedPlan(plan)}
                >
                  {plan.label}
                </Button>
              ))}
            </div>
            <Button className="w-full mt-4" onClick={handleConnect} disabled={!selectedPlan}>
              Connect to Wi-Fi
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold">You're connected! 🎉</h2>
          <p>Enjoy your internet time.</p>
        </div>
      )}
    </div>
  );
}
